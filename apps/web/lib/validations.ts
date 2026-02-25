import { z } from "zod";

const WHATSAPP_REGEX = /^(?:\(?\d{2}\)?\s?)?(?:9\d{4}|\d{4})-?\d{4}$/;

export const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome."),
  whatsapp: z
    .string()
    .min(8, "Informe um WhatsApp válido.")
    .regex(WHATSAPP_REGEX, "Ex: (11) 99999-9999"),
  cidadeUF: z.string().min(3, "Informe cidade e UF. Ex: São Paulo/SP"),
  tipoProjeto: z.enum([
    "Reforma residencial",
    "Projeto arquitetônico",
    "Interiores",
    "Mobiliário sob medida",
    "Obra completa",
  ]),
  etapaAtual: z.enum([
    "Planejando",
    "Já começou",
    "Começa em até 30 dias",
    "60-90 dias",
  ]),
  faixaOrcamento: z.enum(["até 100k", "100-300k", "300-800k", "800k+"]),
  principalDor: z.enum([
    "Falta de transparência",
    "Risco financeiro",
    "Prazo",
    "Qualidade",
    "Custos imprevistos",
  ]),
});

export type LeadFormData = z.infer<typeof leadSchema>;
