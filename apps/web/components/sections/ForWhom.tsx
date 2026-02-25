import { Code2, Hammer, Briefcase, Paintbrush } from "lucide-react";

const personas = [
  {
    icon: Code2,
    title: "Desenvolvimento de software",
    description:
      "Pague por sprints aprovados, não por promessas. Cada entrega é validada antes do pagamento.",
    color: "text-brand-cobalt",
    bg: "bg-blue-50",
    large: true,
  },
  {
    icon: Hammer,
    title: "Reformas e obras",
    description: "Controle cada etapa antes de liberar o valor ao empreiteiro.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Paintbrush,
    title: "Design e criação",
    description: "Aproveu cada fase do projeto antes de prosseguir.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Briefcase,
    title: "Consultoria e projetos",
    description: "Marcos mensuráveis com evidências para cada entregue.",
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
          Qualquer pessoa que paga por um serviço
        </h2>

        {/* Bento grid — 2025 trend */}
        <div className="mt-8 grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className={`group flex cursor-default flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  p.large ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.bg}`}
                >
                  <Icon className={`h-5 w-5 ${p.color}`} aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-brand-navy">{p.title}</h3>
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
