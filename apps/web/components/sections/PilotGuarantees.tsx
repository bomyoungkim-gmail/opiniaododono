import { LockKeyhole, MessageCircleMore, FileClock } from "lucide-react";

const guarantees = [
  {
    icon: LockKeyhole,
    title: "Dados criptografados (LGPD)",
    description:
      "Seus dados ficam protegidos e são usados somente para o piloto.",
  },
  {
    icon: MessageCircleMore,
    title: "Suporte humanizado via WhatsApp",
    description:
      "Sem robô enrolando: atendimento direto para dúvidas do seu projeto.",
  },
  {
    icon: FileClock,
    title: "Registro histórico com validade de evidência",
    description:
      "Tudo fica registrado por etapa para reduzir conflito e retrabalho.",
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
          Garantias que você pode exigir
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Feito para a realidade de prestação de serviços no Brasil: simples,
          objetivo e útil.
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
