export type TipoProjeto =
  | "Reforma residencial"
  | "Projeto arquitetônico"
  | "Interiores"
  | "Mobiliário sob medida"
  | "Obra completa";

export type EtapaAtual =
  | "Planejando"
  | "Já começou"
  | "Começa em até 30 dias"
  | "60-90 dias";

export type FaixaOrcamento = "até 100k" | "100-300k" | "300-800k" | "800k+";

export type PrincipalDor =
  | "Falta de transparência"
  | "Risco financeiro"
  | "Prazo"
  | "Qualidade"
  | "Custos imprevistos";

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
