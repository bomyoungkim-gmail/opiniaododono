import { Code2, Hammer, Briefcase, Paintbrush } from "lucide-react";

const personas = [
  {
    icon: Code2,
    title: "Donos de obra e proprietários",
    description:
      "Tenha controle do investimento com liberações por etapas validadas e evidências claras da obra.",
    color: "text-brand-cobalt",
    bg: "bg-blue-50",
  },
  {
    icon: Hammer,
    title: "Escritórios de arquitetura",
    description:
      "Coordene clientes e fornecedores com rastreabilidade financeira e aprovações formais em cada fase.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Paintbrush,
    title: "Lojas e marcenarias sob medida",
    description:
      "Receba por entregas comprovadas, com menos atrito comercial e maior previsibilidade de caixa.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Briefcase,
    title: "Construtoras e fornecedores",
    description:
      "Mantenha fluxo financeiro claro, prestação de contas contínua e histórico de performance por projeto.",
    color: "text-brand-emerald",
    bg: "bg-emerald-50",
  },
];

export function ForWhom() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-cobalt">
          Para quem é
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-navy md:text-3xl">
          Para quem busca governança e transparência
        </h2>

        {/* Bento grid — 2025 trend */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group flex min-h-[220px] cursor-default flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.bg}`}
                >
                  <Icon className={`h-5 w-5 ${p.color}`} aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <h3 className="min-h-[3.5rem] [text-wrap:balance] font-semibold leading-snug text-brand-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
