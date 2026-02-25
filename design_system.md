Para que o **ui-ux-pro-max** (ou qualquer modelo de design generativo/Codex) crie algo que não pareça um "template genérico de SaaS" e sim uma ferramenta de **confiança e gestão de obras**, o segredo está em definir o **Mood** e o **Design System** com referências de setores que lidam com dinheiro e progresso físico (Fintech + Proptech).

Aqui está o prompt estruturado para você copiar e adaptar:

---

## Prompt de Design System & Estética (Contexto Brasileiro)

> **Contexto:** Você é um Lead Product Designer sênior focado em Fintechs e Proptechs no mercado brasileiro.
> **Diretriz Estética (The Mood):**
> O design deve transmitir **Transparência, Robustez e Ordem**. Não é um app de lazer; é um app de controle financeiro e físico. Fuja do "ultra-colorido". Use uma estética "Clean Professional" (inspirada em apps como Nubank, Loft ou QuintoAndar).
> **1. Design System Consistente:**
>
> - **Paleta de Cores:**
> - **Primária (Ação/Confiança):** Azul Marinho profundo (#0F172A) ou Azul Cobalto (#2563EB).
> - **Sucesso (Aprovação de Etapa):** Verde Esmeralda (#10B981) — deve ser a cor de maior destaque visual ao concluir uma tarefa.
> - **Atenção (Pendente/Pausa):** Âmbar (#F59E0B).
> - **Fundo:** Cinza ultra-claro (#F8FAFC) para as seções de conteúdo e Branco (#FFFFFF) para os cards de destaque.
> - **Tipografia:**
> - **Sans-Serif Moderna (Inter ou Geist Sans):** Focada em legibilidade extrema em telas pequenas de celular (público pode estar na obra sob sol/claridade).
> - **Pesos:** Use `font-semibold` para títulos e valores monetários.
> - **Bordas e Raio:** `rounded-xl` (12px) para cards, passando uma sensação moderna mas amigável.
>
> **2. Componentes de Interface (shadcn customizado):**
>
> - **Cards de Etapa:** Devem parecer "recibos" ou "pastas". Borda fina `border-slate-200` com sombra leve `shadow-sm`.
> - **Inputs:** Focus ring na cor primária. Labels claros e microcopy de ajuda (ex: "Ex: (11) 99999-9999").
> - **Progress Bar:** Use uma linha de progresso visual para as etapas da obra (Steppers), mostrando o que já foi pago (verde), o que está em execução (azul) e o que está futuro (cinza).
>
> **3. Elementos de Visual Identity:**
>
> - **Ícones:** Use a biblioteca `Lucide-React`. Ícones de traço fino (thin/light). Use ícones de: `Camera` (evidências), `ShieldCheck` (segurança), `Clock` (prazos) e `DollarSign` (pagamento).
> - **Espaçamento:** `Gap-8` entre seções. Muita "respiração" (whitespace) para não sobrecarregar o usuário que já está estressado com a reforma.
>
> **4. Mobile-First UX:**
>
> - Botões de CTA (Quero meu convite) devem ter altura mínima de `h-14` (touch target amigável).
> - Formulário com `space-y-6` para evitar cliques errados.

---

## Dica de "Ouro" para o Mercado Brasileiro:

Ao pedir o design, peça para ele incluir **"Social Proof de Processo"**:

- Em vez de depoimentos falsos, peça para criar um pequeno bloco de **"Garantias do Piloto"**:

1. Dados criptografados (LGPD).
2. Suporte humanizado via WhatsApp.
3. Registro histórico com validade de evidência.
