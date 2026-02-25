import { CheckCircle2 } from "lucide-react";
import { StageProgress } from "@/components/shared/StageProgress";

const benefits = [
  "Capital protegido em conta de custódia até sua aprovação",
  "Evidências organizadas por etapa (fotos, NF-e e comprovantes)",
  "Trilha de auditoria de cada decisão e cada desembolso",
  "Redução de conflitos com registro objetivo de entrega",
  "Mais previsibilidade de prazo, custo e qualidade final",
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
            Benefícios para o dono da obra
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
                Pagamento adiantado, pouca visibilidade, risco de RT oculta e
                baixa rastreabilidade financeira.
              </p>
            </div>
            <div className="bg-emerald-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Com a Opinião do Dono
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Milestones validados, pagamento liberado por etapa e histórico
                completo para governança do projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
