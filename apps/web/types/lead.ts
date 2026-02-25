export type TipoProjeto =
  | "Software"
  | "Design"
  | "Reforma"
  | "Consultoria"
  | "Outros";

export type EtapaAtual =
  | "Planejando"
  | "Já começou"
  | "Começa em até 30 dias"
  | "60-90 dias";

export type FaixaOrcamento = "até 10k" | "10-30k" | "30-80k" | "80k+";

export type PrincipalDor =
  | "Prazo"
  | "Qualidade"
  | "Confiança no profissional"
  | "Orçamento estourando"
  | "Organização";

export interface LeadPayload {
  nome: string;
  whatsapp: string;
  cidadeUF: string;
  tipoProjeto: TipoProjeto;
  etapaAtual: EtapaAtual;
  faixaOrcamento: FaixaOrcamento;
  principalDor: PrincipalDor;
}

export interface Lead extends LeadPayload {
  createdAt: string;
  source: "landing";
}
