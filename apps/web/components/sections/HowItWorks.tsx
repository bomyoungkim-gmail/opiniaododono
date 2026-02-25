import { Camera, CheckCircle2, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Você aporta na conta protegida",
    description:
      "Defina milestones e valores por etapa. O capital fica segregado para o seu projeto.",
    accentBorder: "border-t-brand-cobalt",
    badgeClass: "bg-blue-50 text-brand-cobalt",
  },
  {
    icon: Camera,
    step: "02",
    title: "Fornecedor envia provas de entrega",
    description:
      "Fotos da etapa concluída, documentos e NF-e para validação da execução.",
    accentBorder: "border-t-amber-400",
    badgeClass: "bg-amber-50 text-amber-700",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Você aprova e libera o pagamento",
    description:
      "A cada aprovação, o desembolso é executado com trilha de auditoria completa.",
    accentBorder: "border-t-brand-emerald",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-cobalt">
          Simples assim
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-navy md:text-3xl">
          Como funciona
        </h2>

        {/* Step cards */}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className={`group flex min-h-[220px] flex-col gap-4 border-t-4 bg-white p-6 transition-shadow duration-200 hover:shadow-lg ${step.accentBorder}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step.badgeClass}`}
                  >
                    {step.step}
                  </span>
                  <Icon
                    className="h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-brand-cobalt"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="min-h-[3.5rem] [text-wrap:balance] text-lg font-semibold leading-snug text-brand-navy">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
