import { CheckCircle2 } from "lucide-react";
import { StageProgress } from "@/components/shared/StageProgress";

const benefits = [
  "Pagamento por etapas para reduzir risco e evitar ‘sumiço’ no meio do projeto",
  "Evidências organizadas (fotos, relatórios e documentos) por etapa",
  "Histórico claro do que foi combinado, enviado e aprovado",
  "Menos conflito: tudo registrado, sem ‘disse me disse’",
  "Mais previsibilidade de prazo e custo (com etapas visíveis)",
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-16 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
            Benefícios para o seu projeto
          </h2>
          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-emerald"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Estamos lançando o MVP e convidando os primeiros usuários.
          </p>
        </div>
        <StageProgress />
      </div>
    </section>
  );
}
