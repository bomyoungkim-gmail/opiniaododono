import { LockKeyhole, MessageCircleMore, FileClock } from "lucide-react";

const guarantees = [
  {
    icon: LockKeyhole,
    title: "Custódia e dados protegidos",
    description:
      "Capital segregado por projeto e dados sob padrão de segurança compatível com LGPD.",
  },
  {
    icon: MessageCircleMore,
    title: "Suporte consultivo de operação",
    description:
      "Atendimento direto para aprovações, divergências e liberação de milestones.",
  },
  {
    icon: FileClock,
    title: "Trilha de auditoria completa",
    description:
      "Cada evidência, validação e pagamento fica registrado para governança do contrato.",
  },
];

export function PilotGuarantees() {
  return (
    <section className="bg-brand-navy py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-emerald">
          Piloto
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
          Garantias que protegem seu investimento
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Feito para a realidade de obras e projetos de arquitetura no Brasil:
          simples, objetivo e auditável.
        </p>

        {/* Glassmorphism cards on dark — 2025 trend */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon
                    className="h-5 w-5 text-brand-emerald"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
