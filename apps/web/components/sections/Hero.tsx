"use client";

import { TrackableButton } from "@/components/shared/TrackableButton";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { HeroIllustration } from "@/components/shared/HeroIllustration";

const stats = [
  { value: "R$ 2,5MM+", label: "em capital monitorado" },
  { value: "100%", label: "pagamentos por milestones" },
  { value: "RT-Free", label: "foco em transparência", highlight: true },
];

export function Hero() {
  return (
    <section className="bg-brand-surface py-14 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          {/* Pill badge — 2025 trend */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cobalt/25 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-brand-cobalt">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cobalt" />
            Piloto premium — arquitetura e construção de alto padrão
          </div>

          <h1 className="text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
            Seu capital protegido em escrow, liberado só com entrega comprovada.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Substitua acordos informais por trilha de auditoria digital: etapas,
            evidências, nota fiscal e aprovação em um clique antes de cada
            desembolso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackableButton
              variantName="primary"
              section="hero"
              size="lg"
              asChild
            >
              <a href="#formulario">Quero entrar no piloto</a>
            </TrackableButton>
            <TrackableButton
              variantName="secondary"
              section="hero"
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#como-funciona">Ver fluxo de custódia</a>
            </TrackableButton>
          </div>

          <TrustBadges />

          {/* Stats strip — social proof / trust signal */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-3 py-3 text-center sm:px-4 sm:py-4"
              >
                <p
                  className={`text-lg font-bold sm:text-xl ${
                    s.highlight ? "text-brand-emerald" : "text-brand-navy"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration — hidden on small phones, visible md+ */}
        <div className="hidden sm:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
