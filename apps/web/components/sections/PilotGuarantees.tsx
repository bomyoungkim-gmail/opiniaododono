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
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
          Garantias do Piloto
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Feito para a realidade de prestação de serviços no Brasil: simples,
          objetivo e útil.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-card border border-slate-200 bg-brand-card p-6 shadow-card"
              >
                <Icon
                  className="h-5 w-5 text-brand-cobalt"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
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
