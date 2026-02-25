# Landing Page MVP — Opinião de Dono (Reforma Residencial)

## Objetivo do MVP

Validar demanda com uma landing page focada em **dono de obra residencial** (Brasil), capturando leads para um **piloto**.

---

# 1) Copy completa (PT-BR)

## Headline (H1) — opção 1 (recomendada)

**Pague sua reforma por etapas — com mais segurança e menos dor de cabeça.**

### Subheadline

Acompanhe entregas, guarde evidências (nota e fotos) e aprove cada etapa antes de liberar o pagamento. Tudo simples, no seu celular.

### CTAs

- **CTA primário:** Entrar na lista de espera
- **CTA secundário:** Quero entender como funciona

---

## Headline (H1) — opção 2 (mais direta)

**Reforma sem susto: pagamento por etapas com comprovação.**

### Subheadline

Você define as etapas, o profissional envia evidências e você libera o valor quando estiver ok.

---

## Headline (H1) — opção 3 (mais emocional)

**Controle a reforma sem brigar: etapas claras, evidências e aprovação.**

---

## Seção: Como funciona (3 passos)

### 1) Você define as etapas

Combine marcos simples (ex.: demolição, hidráulica, pintura) e valores por etapa.

### 2) O profissional envia evidências

Fotos do antes/depois e nota/comprovantes quando necessário.

### 3) Você aprova e libera

A reforma avança com previsibilidade e registro do que foi entregue.

---

## Seção: Benefícios (bullets)

- **Pagamento por etapas** para reduzir risco e evitar “sumiço” no meio da obra
- **Evidências organizadas** (fotos e documentos) por etapa
- **Histórico claro** do que foi combinado, enviado e aprovado
- **Menos conflito**: tudo registrado, sem “disse me disse”
- **Mais previsibilidade** de prazo e custo (com etapas visíveis)

> Nota de transparência (pequena): “Estamos lançando o MVP e convidando os primeiros usuários.”

---

## Seção: Para quem é

**Para você que está reformando apartamento ou casa** e quer:

- contratar com mais confiança
- ter controle do que está sendo pago
- reduzir estresse e retrabalho

---

## Seção: Confiança (sem inventar números)

**Feito para a realidade de reforma residencial no Brasil**  
Registro por etapas, evidências e aprovação — simples, objetivo e útil.

---

## CTA de meio de página

**Quero participar do piloto**  
_Receba convite assim que abrirmos vagas na sua cidade._

---

## FAQ (8 perguntas)

**1) Isso é um banco?**  
Não. É uma plataforma para organizar etapas, evidências e aprovações de pagamento na sua reforma.

**2) Como o pagamento por etapas funciona?**  
Você define etapas e valores. O profissional solicita a liberação quando concluir a etapa e envia evidências. Você aprova e segue para a próxima.

**3) Vocês seguram o dinheiro (escrow)?**  
No MVP, estamos validando demanda e fluxo. A etapa de custódia/conta vinculada pode entrar na próxima fase conforme o piloto.

**4) O profissional precisa usar também?**  
Idealmente sim, para enviar evidências e solicitar liberações. Mas você pode começar sozinho organizando etapas e registro.

**5) Precisa de nota fiscal?**  
Depende do acordo e do tipo de serviço. A plataforma permite anexar nota/comprovantes quando fizer sentido.

**6) Serve para qualquer tipo de reforma?**  
Sim — pintura, elétrica, hidráulica, gesso, marcenaria, obra completa. Você monta as etapas do seu jeito.

**7) Quanto custa?**  
Estamos abrindo um piloto com vagas limitadas. Quem entrar na lista recebe condições especiais e participa definindo o produto.

**8) Quando vocês começam?**  
Assim que fecharmos o grupo inicial na sua região. Entrando na lista, você recebe o convite primeiro.

---

## Microcopy do formulário

### Título do bloco

**Entre na lista de espera**

### Texto curto

Leva menos de 1 minuto. A gente só usa seus dados para falar sobre o piloto.

### Campos sugeridos

- Nome
- WhatsApp (obrigatório)
- Cidade/UF
- Tipo de imóvel (Apto/Casa)
- Etapa atual (Planejando / Já começou / Começa em até 30 dias / 60–90 dias)
- Faixa de orçamento (até 10k / 10–30k / 30–80k / 80k+)
- Principal dor (Prazo / Qualidade / Confiança no profissional / Orçamento estourando / Organização)

### Botão

**Quero meu convite**

### Confirmação após envio

**Pronto!** Vamos te chamar quando abrirmos o piloto na sua região.

---

# 2) Wireframe da landing (seções)

1. **Header fixo (minimal)**
   - Logo (texto)
   - Âncoras: Como funciona | Benefícios | FAQ
   - Botão CTA: “Entrar na lista”

2. **Hero**
   - H1 + Subheadline
   - CTAs (primário e secundário)
   - “chips” de confiança: “por etapas”, “com evidências”, “aprovação”
   - imagem/ilustração simples (placeholder)

3. **Como funciona (3 cards)**
   - 1. etapas 2) evidências 3) aprovação

4. **Benefícios**
   - bullets
   - mini-exemplo de etapas: Demolição → Hidráulica → Revestimento → Pintura

5. **Para quem é**
   - título + 3 bullets de dores

6. **CTA + Formulário**
   - formulário em card destacado
   - microcopy LGPD

7. **FAQ (accordion)**
   - 8 itens

8. **Footer**
   - contato (email)
   - termos/privacidade (links placeholder)
   - copyright

**Extras (opcionais)**

- Seção “O que vem depois do piloto” (roadmap curto)
- “Pergunte no WhatsApp” (link)

---

# 3) Prompt para o Codex (Next.js + shadcn + tracking + form)

> Copie e cole tudo abaixo no Codex:

```text
Você é Codex e vai gerar uma landing page MVP em Next.js (App Router) com shadcn/ui, TypeScript e Tailwind.
Objetivo: testar demanda de “Opinião de Dono” para dono de obra residencial (Brasil).

Requisitos:
1) Projeto Next.js App Router:
   - / (landing)
   - /obrigado (thank-you page)
2) UI:
   - Header fixo com âncoras (Como funciona, Benefícios, FAQ) e botão “Entrar na lista”
   - Hero com H1/subheadline e 2 CTAs (primário: scroll até formulário; secundário: scroll até como-funciona)
   - Seções na ordem: Hero -> Como funciona (3 cards) -> Benefícios (bullets + exemplo de etapas) -> Para quem é -> CTA + Form -> FAQ (Accordion) -> Footer
   - Estilo clean/minimal “trustworthy”, espaçamento generoso, responsivo mobile-first
3) Copy (usar exatamente):
   H1: “Pague sua reforma por etapas — com mais segurança e menos dor de cabeça.”
   Sub: “Acompanhe entregas, guarde evidências (nota e fotos) e aprove cada etapa antes de liberar o pagamento. Tudo simples, no seu celular.”
   CTA primário: “Entrar na lista de espera”
   CTA secundário: “Quero entender como funciona”
   Como funciona:
     1) “Você define as etapas” + “Combine marcos simples (ex.: demolição, hidráulica, pintura) e valores por etapa.”
     2) “O profissional envia evidências” + “Fotos do antes/depois e nota/comprovantes quando necessário.”
     3) “Você aprova e libera” + “A reforma avança com previsibilidade e registro do que foi entregue.”
   Benefícios bullets:
     - “Pagamento por etapas para reduzir risco e evitar ‘sumiço’ no meio da obra”
     - “Evidências organizadas (fotos e documentos) por etapa”
     - “Histórico claro do que foi combinado, enviado e aprovado”
     - “Menos conflito: tudo registrado, sem ‘disse me disse’”
     - “Mais previsibilidade de prazo e custo (com etapas visíveis)”
   Para quem é:
     Título: “Para quem está reformando e quer controle”
     Bullets:
       - “Contratar com mais confiança”
       - “Saber exatamente o que está sendo pago”
       - “Reduzir estresse e retrabalho”
   FAQ (Accordion):
     1) “Isso é um banco?” -> “Não. É uma plataforma para organizar etapas, evidências e aprovações de pagamento na sua reforma.”
     2) “Como o pagamento por etapas funciona?” -> “Você define etapas e valores. O profissional solicita a liberação quando concluir a etapa e envia evidências. Você aprova e segue para a próxima.”
     3) “Vocês seguram o dinheiro (escrow)?” -> “No MVP, estamos validando demanda e fluxo. A etapa de custódia/conta vinculada pode entrar na próxima fase conforme o piloto.”
     4) “O profissional precisa usar também?” -> “Idealmente sim, para enviar evidências e solicitar liberações. Mas você pode começar sozinho organizando etapas e registro.”
     5) “Precisa de nota fiscal?” -> “Depende do acordo e do tipo de serviço. A plataforma permite anexar nota/comprovantes quando fizer sentido.”
     6) “Serve para qualquer tipo de reforma?” -> “Sim — pintura, elétrica, hidráulica, gesso, marcenaria, obra completa. Você monta as etapas do seu jeito.”
     7) “Quanto custa?” -> “Estamos abrindo um piloto com vagas limitadas. Quem entrar na lista recebe condições especiais e participa definindo o produto.”
     8) “Quando vocês começam?” -> “Assim que fecharmos o grupo inicial na sua região. Entrando na lista, você recebe o convite primeiro.”
4) Formulário:
   - Campos: nome (text), whatsapp (tel), cidadeUF (text), tipoImovel (select: Apto/Casa),
             etapaAtual (select: Planejando / Já começou / Começa em até 30 dias / 60-90 dias),
             faixaOrcamento (select: até 10k / 10-30k / 30-80k / 80k+),
             principalDor (select: Prazo / Qualidade / Confiança no profissional / Orçamento estourando / Organização)
   - Validação client-side (Zod + react-hook-form)
   - Submit: POST /api/lead
   - Ao sucesso: redirecionar para /obrigado
5) Backend mínimo:
   - Rota /api/lead (Next.js Route Handler) que:
     - valida payload (Zod)
     - salva em arquivo local JSONL em /tmp/leads.jsonl em dev (para MVP)
     - e também loga no console em JSON estruturado
     - retorna 200 com {ok:true}
   - Preparar para integração futura (ex.: webhook) sem implementar agora
6) Tracking:
   - GA4 (placeholder) via env NEXT_PUBLIC_GA_ID
   - Implementar função track(eventName, props) que:
     - se GA ID existir, dispara gtag event
     - sempre faz console.log em dev
   - Eventos:
     - page_view (home)
     - cta_click (primary/secondary, com section)
     - form_start (ao focar primeiro campo)
     - lead_submit
     - lead_success
     - lead_error
7) Acessibilidade e SEO:
   - metadata (title/description)
   - headings sem pular níveis
   - aria para accordion e inputs
8) Entregáveis:
   - Código completo com instruções de rodar (pnpm install, pnpm dev)
   - Lista de arquivos criados/modificados
   - Comentários curtos onde houver decisão importante

Agora gere o projeto (assuma pnpm) e escreva o código.
```
