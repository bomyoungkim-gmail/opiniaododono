# Milestone App — Plano de Implementação Técnica

> Versão 1.1 · Fev 2026  
> Base: `implementation_plan.md` (copy + wireframe) + `design_system.md` (design tokens)  
> **Ambiente:** Docker Desktop — nenhuma instalação local de Node/Python necessária

---

## 0. Visão de Produto e Evolução

```
MVP (agora)          Fase 2 (pós-validação)      Fase 3 (produto)
──────────────       ──────────────────────       ──────────────────
Landing page    →    App autenticado         →    Plataforma completa
Formulário lead      Dashboard de obra            Escrow / custódia
JSONL local          PostgreSQL + API             Integração bancária
GA4 básico           Notificações WA              Mobile app (Expo)
```

A estrutura de pastas e convenções adotadas agora suportam essa evolução **sem reescrever** o projeto.

---

## 1. Stack Técnica Definitiva

| Camada         | Tecnologia            | Versão alvo | Justificativa                                      |
| -------------- | --------------------- | ----------- | -------------------------------------------------- |
| Framework      | Next.js App Router    | 15.x        | RSC + Route Handlers nativos                       |
| Linguagem      | TypeScript            | 5.x         | strict mode obrigatório                            |
| Estilo         | Tailwind CSS          | 3.x         | utility-first, design tokens via `tailwind.config` |
| Componentes    | shadcn/ui             | latest      | headless + acessível + customizável                |
| Formulário     | react-hook-form + Zod | 7.x + 3.x   | schema compartilhável (client/server)              |
| Ícones         | Lucide React          | latest      | traço fino, tree-shakeable                         |
| Analytics      | GA4 via gtag.js       | —           | env-gated, abstrato via wrapper                    |
| Storage (dev)  | JSONL em `/data`      | —           | volume Docker persistente, zero infra              |
| Storage (prod) | Webhook / Supabase    | —           | preparado, não implementado                        |
| Packagemanager | pnpm workspaces       | 9.x         | mono-repo ready desde o dia 1                      |

---

## 2. Estrutura de Diretórios

```
milestone-app/                      ← raiz do workspace
├── apps/
│   └── web/                        ← Next.js app (única app por ora)
│       ├── app/
│       │   ├── (marketing)/        ← Route Group — não altera URL
│       │   │   ├── layout.tsx      ← Layout compartilhado das páginas públicas
│       │   │   ├── page.tsx        ← / (landing page)
│       │   │   └── obrigado/
│       │   │       └── page.tsx    ← /obrigado (thank-you)
│       │   ├── api/
│       │   │   └── lead/
│       │   │       └── route.ts    ← POST /api/lead
│       │   ├── layout.tsx          ← Root layout (html, body, GA script)
│       │   └── globals.css
│       ├── components/
│       │   ├── ui/                 ← shadcn gerados (Button, Input, etc.)
│       │   ├── layout/
│       │   │   ├── Header.tsx
│       │   │   └── Footer.tsx
│       │   ├── sections/           ← Uma section = um arquivo
│       │   │   ├── Hero.tsx
│       │   │   ├── HowItWorks.tsx
│       │   │   ├── Benefits.tsx
│       │   │   ├── ForWhom.tsx
│       │   │   ├── LeadForm.tsx    ← Form + validação + submit
│       │   │   └── FAQ.tsx
│       │   └── shared/
│       │       ├── TrackableButton.tsx   ← Wrapper de Button com track()
│       │       ├── TrustBadges.tsx       ← Chips: "por etapas", "evidências"...
│       │       └── StageProgress.tsx     ← Barra de progresso de etapas (decorativa)
│       ├── lib/
│       │   ├── analytics.ts        ← track(event, props) — GA4 + console.log
│       │   ├── validations.ts      ← Zod schemas (compartilhado client/server)
│       │   └── utils.ts            ← cn(), formatters
│       ├── hooks/
│       │   └── useFormTracking.ts  ← form_start, lead_submit, lead_success
│       ├── types/
│       │   └── lead.ts             ← interface Lead, LeadPayload
│       ├── public/
│       │   └── og-image.png        ← Open Graph (1200x630)
│       ├── Dockerfile              ← Multi-stage: dev / builder / runner
│       ├── .dockerignore           ← Exclui node_modules, .next, .env do contexto
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       ├── components.json         ← shadcn config
│       ├── tsconfig.json
│       └── .env.local.example
├── packages/
│   └── schemas/                    ← (Fase 2) Zod schemas compartilhados
│       └── package.json
├── design-system/
│   ├── MASTER.md                   ← Gerado por ui-ux-pro-max (Fase 0)
│   └── pages/
│       └── landing.md              ← Overrides específicos da landing
├── docs/
│   └── adr/                        ← Architecture Decision Records
│       └── 001-storage-jsonl.md
├── data/                           ← Volume Docker montado — leads.jsonl aqui
│   └── .gitkeep
├── docker-compose.yml              ← Orquestra serviços (web + futuramente db)
├── docker-compose.override.yml     ← Overrides de dev (volumes hot-reload)
├── .gitignore                      ← Exclui node_modules, .next, data/, .env
├── pnpm-workspace.yaml
├── package.json                    ← Root (private: true, scripts globais)
├── PLAN.md                         ← Este arquivo
├── design_system.md                ← Briefing de design (input)
└── implementation_plan.md          ← Copy + wireframe (input)
```

---

## 2b. Infraestrutura Docker

### `apps/web/Dockerfile` (multi-stage)

```dockerfile
# ── Stage 1: base ─────────────────────────────────────────────
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9 --activate

# ── Stage 2: dev (hot-reload via volume) ─────────────────────
FROM base AS dev
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]

# ── Stage 3: builder (CI/prod build) ─────────────────────────
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# ── Stage 4: runner (imagem mínima de prod) ───────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@9 --activate
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### `docker-compose.yml` (raiz)

```yaml
services:
  web:
    build:
      context: ./apps/web
      target: dev
    ports:
      - "3000:3000"
    volumes:
      - ./apps/web:/app # hot-reload
      - /app/node_modules # isola node_modules do host
      - /app/.next # isola cache de build
      - ./data:/data # storage persistente para leads.jsonl
    environment:
      - NEXT_TELEMETRY_DISABLED=1
      - LEADS_FILE=/data/leads.jsonl
    env_file:
      - path: ./apps/web/.env.local
        required: false
    restart: unless-stopped
```

### Comandos de operação

```bash
# Primeira vez — scaffold do projeto dentro do container
docker run --rm -it \
  -v "${PWD}/apps":/apps \
  node:20-alpine sh -c "
    corepack enable && corepack prepare pnpm@9 --activate &&
    cd /apps &&
    pnpm create next-app@latest web \
      --typescript --tailwind --app \
      --eslint --no-src-dir --import-alias '@/*' &&
    cd web &&
    pnpm dlx shadcn@latest init --defaults &&
    pnpm dlx shadcn@latest add button input label select accordion alert sheet &&
    pnpm add react-hook-form @hookform/resolvers zod lucide-react
  "

# Dev (hot-reload em localhost:3000)
docker compose up

# Rebuild após mudança de dependências
docker compose up --build

# Acessar shell do container em execução
docker compose exec web sh

# Rodar script da skill ui-ux-pro-max
docker compose exec web \
  python3 /workspace/.claude/skills/ui-ux-pro-max/scripts/search.py \
  "proptech fintech renovation milestone tracking brazil" \
  --design-system --persist -p "Milestone App" --page "landing"
```

---

## 3. Design Tokens (Tailwind Config)

Derivados diretamente do `design_system.md`. Extensão do `tailwind.config.ts`:

```ts
// apps/web/tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        navy:    '#0F172A',  // primária / fundo header
        cobalt:  '#2563EB',  // ação / CTA
        emerald: '#10B981',  // sucesso / etapa aprovada
        amber:   '#F59E0B',  // atenção / pendente
        surface: '#F8FAFC',  // fundo seções
        card:    '#FFFFFF',  // cards em destaque
      },
    },
    fontFamily: {
      sans: ['Inter', 'var(--font-inter)', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      card: '12px',   // rounded-xl
    },
    boxShadow: {
      card: '0 1px 3px 0 rgb(0 0 0 / 0.06)',
    },
  },
},
```

---

## 4. Contratos de API

### `POST /api/lead`

**Request body (validado por Zod):**

```ts
{
  nome: string; // min 2
  whatsapp: string; // regex BR: (XX) 9XXXX-XXXX
  cidadeUF: string; // min 3
  tipoImovel: "Apto" | "Casa";
  etapaAtual: "Planejando" |
    "Já começou" |
    "Começa em até 30 dias" |
    "60-90 dias";
  faixaOrcamento: "até 10k" | "10-30k" | "30-80k" | "80k+";
  principalDor: "Prazo" |
    "Qualidade" |
    "Confiança no profissional" |
    "Orçamento estourando" |
    "Organização";
}
```

**Response:**

```ts
200: { ok: true }
422: { ok: false, errors: ZodIssue[] }
500: { ok: false, message: string }
```

**Storage strategy (via env flag):**

```ts
// lib/storage.ts — preparado para swap
const adapters = {
  jsonl: () => import("./storage/jsonl"),
  webhook: () => import("./storage/webhook"),
  supabase: () => import("./storage/supabase"),
};
const adapter = adapters[process.env.STORAGE_ADAPTER ?? "jsonl"];
```

---

## 5. Estratégia de Analytics

```ts
// lib/analytics.ts
export type TrackEvent =
  | { name: "page_view"; props: { page: string } }
  | {
      name: "cta_click";
      props: { variant: "primary" | "secondary"; section: string };
    }
  | { name: "form_start"; props: Record<string, never> }
  | { name: "lead_submit"; props: Record<string, never> }
  | { name: "lead_success"; props: { faixaOrcamento: string } }
  | {
      name: "lead_error";
      props: { stage: "client" | "server"; code?: string };
    };

export function track({ name, props }: TrackEvent) {
  if (process.env.NODE_ENV === "development") {
    console.log("[track]", name, props);
  }
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    process.env.NEXT_PUBLIC_GA_ID
  ) {
    window.gtag("event", name, props);
  }
}
```

---

## 6. Componentes — Especificações

### `Header.tsx`

- Fixo, `backdrop-blur-sm bg-white/80`
- Logo: texto "Milestone" em `font-semibold` + ícone `ShieldCheck`
- Links de âncora: `#como-funciona`, `#beneficios`, `#faq`
- Botão CTA → scroll para `#formulario` + `track({ name: 'cta_click', ... })`
- Mobile: menu colapsado com `Sheet` do shadcn

### `Hero.tsx`

- H1: `text-3xl md:text-5xl font-semibold text-brand-navy leading-tight`
- Subheadline: `text-lg text-slate-600 max-w-xl`
- CTA primário: `h-14 bg-brand-cobalt text-white rounded-xl`
- CTA secundário: link âncora `text-brand-cobalt underline-offset-4`
- Trust chips: `<TrustBadges />` — "por etapas · com evidências · aprovação"
- Ilustração: placeholder SVG abstrato de "progresso" (substituível)

### `HowItWorks.tsx`

- `id="como-funciona"`
- 3 cards lado a lado (`grid-cols-1 md:grid-cols-3`)
- Card: número passo em badge, ícone Lucide, título, descrição
- Ícones: `ClipboardList`, `Camera`, `CheckCircle2`

### `Benefits.tsx`

- `id="beneficios"`
- Lista com `CheckCircle2` verde na frente de cada bullet
- `<StageProgress />`: barra decorativa Demolição→Hidráulica→Revestimento→Pintura
  - Verde (pago), Azul (em execução), Cinza (futuro)

### `ForWhom.tsx`

- Bloco simples: título + 3 bullets de dores + nota de transparência do MVP

### `LeadForm.tsx`

- `id="formulario"` — Seção de destaque com fundo `brand-cobalt` suave
- Card branco com sombra `shadow-card rounded-card`
- react-hook-form + zodResolver
- `onFocus` no primeiro campo → `track({ name: 'form_start' })`
- Submit → POST → redirect `/obrigado` (router.push)
- Estado de loading: botão desabilitado + spinner `Loader2`
- Erro de servidor: `Alert` do shadcn com mensagem humanizada

### `FAQ.tsx`

- `id="faq"`
- `Accordion` do shadcn (type="single" collapsible)
- 8 itens conforme copy do `implementation_plan.md`
- aria-controls / aria-expanded nativos do Radix

### `Footer.tsx`

- Copyright + email contato + links placeholder (Termos, Privacidade)
- Mini-bloco LGPD: "Dados criptografados e usados apenas para o piloto"

---

## 7. SEO e Metadata

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: "Milestone — Pague sua reforma por etapas com segurança",
  description:
    "Acompanhe entregas, guarde evidências e aprove cada etapa antes de liberar o pagamento.",
  openGraph: {
    images: ["/og-image.png"],
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};
```

---

## 8. Variáveis de Ambiente

```bash
# apps/web/.env.local.example
NEXT_PUBLIC_GA_ID=          # G-XXXXXXXXXX — GA4 Measurement ID
STORAGE_ADAPTER=jsonl       # jsonl | webhook | supabase
LEADS_WEBHOOK_URL=          # URL para webhook (Fase 2)
SUPABASE_URL=               # (Fase 2)
SUPABASE_SERVICE_ROLE_KEY=  # (Fase 2)
```

---

## 9. ADR — Architecture Decision Records

### ADR-001: Storage JSONL em volume Docker

- **Decisão:** Salvar leads em `/data/leads.jsonl` (volume Docker montado em `./data/`)
- **Motivo:** Zero infra, arquivo acessível no host mesmo sem entrar no container
- **Tradeoff:** Não escala para múltiplos pods; suficiente para MVP
- **Revisão:** Assim que o piloto tiver 50+ leads, migrar para webhook/Supabase

### ADR-002: Route Group `(marketing)`

- **Decisão:** Agrupar páginas públicas em `(marketing)/`
- **Motivo:** Isola layout de marketing do futuro layout autenticado `(app)/`
- **Revisão:** Nunca — padrão Next.js App Router para escalar

### ADR-003: Adapter Pattern para Storage

- **Decisão:** `lib/storage.ts` com interface comum + adapters plugáveis
- **Motivo:** Trocar JSONL por Supabase sem alterar a Route Handler
- **Interface:** `{ save(lead: Lead): Promise<void> }`

### ADR-004: Docker Desktop como único ambiente

- **Decisão:** Todo o tooling (Node, pnpm, Python) roda dentro de containers
- **Motivo:** Paridade de ambiente, zero configuração local, funciona em qualquer SO
- **Tradeoff:** Primeira execução mais lenta (pull de imagens); auto-reload via bind mount resolve latência
- **Revisão:** Fase 3 — avaliar Dev Containers (`.devcontainer/`) para integração com VS Code

---

## 10. Fases de Execução

> **Pré-requisito único:** Docker Desktop instalado e rodando.

### Fase 0 — Design System via ui-ux-pro-max (10 min) ⬅ SEMPRE PRIMEIRO

O skill deve ser executado **antes** de qualquer código. Ele gera o `design-system/MASTER.md` que guia todas as decisões de UI.

```bash
# Dentro do container (após Fase 1) OU via Python local se disponível:
docker compose exec web \
  python3 /workspace/.claude/skills/ui-ux-pro-max/scripts/search.py \
  "proptech fintech renovation milestone tracking brazil" \
  --design-system --persist -p "Milestone App" --page "landing" -f markdown

# Consultas complementares conforme SKILL.md:
docker compose exec web \
  python3 /workspace/.claude/skills/ui-ux-pro-max/scripts/search.py \
  "animation accessibility touch mobile" --domain ux

docker compose exec web \
  python3 /workspace/.claude/skills/ui-ux-pro-max/scripts/search.py \
  "layout responsive form" --stack nextjs
```

Saídas esperadas:

- `design-system/MASTER.md` — tokens, estilos, fontes, anti-patterns
- `design-system/pages/landing.md` — overrides específicos da landing

Usar `design-system/MASTER.md` como **fonte de verdade** ao implementar qualquer componente.

### Fase 1 — Docker + Scaffold (30 min)

```bash
# 1. Criar estrutura inicial de monorepo
mkdir -p apps data

# 2. Scaffold do Next.js dentro de container temporário (sem instalar Node local)
docker run --rm -it \
  -v "${PWD}/apps":/apps \
  node:20-alpine sh -c "
    corepack enable && corepack prepare pnpm@9 --activate &&
    cd /apps &&
    pnpm create next-app@latest web \
      --typescript --tailwind --app \
      --eslint --no-src-dir --import-alias '@/*' &&
    cd web &&
    pnpm dlx shadcn@latest init --defaults &&
    pnpm dlx shadcn@latest add button input label select accordion alert sheet &&
    pnpm add react-hook-form @hookform/resolvers zod lucide-react
  "

# 3. Criar arquivos Docker na raiz
# (docker-compose.yml e Dockerfile em apps/web/ — ver seção 2b)

# 4. Criar package.json raiz de monorepo
echo '{"private":true,"name":"milestone-app"}' > package.json
echo 'packages:\n  - "apps/*"' > pnpm-workspace.yaml

# 5. Subir ambiente de dev
docker compose up
# Acesse: http://localhost:3000
```

### Fase 2 — Design Tokens (15 min)

- Estender `tailwind.config.ts` com as cores `brand.*` do `design-system/MASTER.md`
- Adicionar `Inter` via `next/font/google`
- Configurar `globals.css` com variáveis CSS do shadcn mapeadas para `brand.*`

### Fase 3 — Componentes de Layout (30 min)

- `Header.tsx` + `Footer.tsx`
- `TrackableButton.tsx` + `TrustBadges.tsx`
- `lib/analytics.ts` com todos os eventos tipados

### Fase 4 — Sections da Landing (60 min)

- Implementar as 6 sections na ordem do wireframe
- Consultar `design-system/pages/landing.md` para cada componente
- Aplicar checklist do SKILL.md antes de finalizar cada section:
  - `cursor-pointer` em todos os clicáveis
  - contraste 4.5:1 mínimo para textos
  - `touch-target-size` ≥ 44px
- `StageProgress.tsx` com animação CSS simples (`transition-all duration-300`, sem JS)

### Fase 5 — Formulário e API (45 min)

- `lib/validations.ts` — schema Zod compartilhado
- `types/lead.ts`
- `LeadForm.tsx` — react-hook-form + tracking
- `api/lead/route.ts` — validate + JSONL adapter
- `lib/storage/jsonl.ts` (salva em `/data/leads.jsonl` via env `LEADS_FILE`)
- `lib/storage/webhook.ts` (stub para Fase 2)

### Fase 6 — Páginas e SEO (20 min)

- `app/(marketing)/page.tsx` — montagem das sections
- `app/(marketing)/obrigado/page.tsx`
- Metadata completa em ambas
- `public/og-image.png` (placeholder 1200×630)

### Fase 7 — QA e Acessibilidade (20 min)

```bash
# Lighthouse via container (sem instalar Chrome local)
docker run --rm --cap-add=SYS_ADMIN \
  ghcr.io/nicholasgasior/lighthouse-ci:latest \
  lhci autorun --collect.url=http://host.docker.internal:3000
```

- Score alvo: ≥ 90 Performance, 100 Acessibilidade
- Testar fluxo: submit → `/obrigado` → verificar `data/leads.jsonl` no host
- Validar no mobile (DevTools, 375px)
- Checar contraste com SKILL.md Pre-Delivery Checklist

---

## 11. Checklist de Entrega do MVP

**Docker**

- [ ] `docker compose up` inicia sem erros em máquina limpa
- [ ] `http://localhost:3000` acessível após `up`
- [ ] `data/leads.jsonl` é gravado no host (volume montado)
- [ ] `.gitignore` inclui `data/`, `node_modules/`, `.next/`, `.env`
- [ ] `.dockerignore` inclui `node_modules/`, `.next/`, `*.md`, `.env`

**Design System (ui-ux-pro-max)**

- [ ] `design-system/MASTER.md` gerado antes da implementação
- [ ] `design-system/pages/landing.md` gerado
- [ ] SKILL.md Pre-Delivery Checklist concluído para cada section
- [ ] Nenhum emoji usado como ícone (apenas Lucide React)
- [ ] `cursor-pointer` em todos os elementos clicáveis
- [ ] Contraste texto ≥ 4.5:1 em modo claro

**Funcional**

- [ ] `/` renderiza todas as 8 seções do wireframe
- [ ] Formulário valida client-side (Zod) com mensagens em PT-BR
- [ ] Submit grava em `data/leads.jsonl` e redireciona para `/obrigado`
- [ ] `track()` loga no console em dev para todos os 6 eventos
- [ ] Header fixo com scroll suave para âncoras
- [ ] Design tokens `brand.*` aplicados consistentemente
- [ ] Mobile 375px: nenhum scroll horizontal, CTAs com `h-14`
- [ ] Metadata OG correta
- [ ] `.env.local.example` com todas as variáveis documentadas

---

## 12. Roadmap Pós-MVP

| Milestone | Gatilho                 | Entregável                                    |
| --------- | ----------------------- | --------------------------------------------- |
| **M1**    | 50 leads capturados     | Migrar storage → Supabase + dashboard simples |
| **M2**    | 10 usuários do piloto   | Auth (NextAuth) + rota `(app)/obras`          |
| **M3**    | Feedback: "quero pagar" | Integração Pix via Gerencianet/Efí            |
| **M4**    | Tração mobile evidente  | Expo (React Native) + API REST isolada        |
| **M5**    | Regulatório validado    | Conta escrow (Banco Parceiro)                 |

---

_Gerado em 2026-02-24. Revisar antes de cada nova fase._
