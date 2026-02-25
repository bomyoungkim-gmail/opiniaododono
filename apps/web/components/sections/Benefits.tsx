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
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-cobalt">
            Por quê usar
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-brand-navy md:text-3xl">
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

        <div className="flex flex-col gap-6">
          <StageProgress />
          {/* Before/After contrast card — visual trust signal */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-red-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                Sem essa plataforma
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Pagamento único adiantado, sem garantia de entrega, sem
                registro e sem como cobrar evidências.
              </p>
            </div>
            <div className="bg-emerald-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Com a Opinião do Dono
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Cada etapa aprovada antes do pagamento. Histórico completo.
                Risco distribuído e transparência total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
