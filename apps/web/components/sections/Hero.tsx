"use client";

import { TrackableButton } from "@/components/shared/TrackableButton";
import { TrustBadges } from "@/components/shared/TrustBadges";

export function Hero() {
  return (
    <section className="bg-brand-surface py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-brand-navy md:text-5xl">
            Pague por serviços e projetos com segurança — garanta o valor justo.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Acompanhe entregas, guarde evidências (notas e fotos) e aprove cada
            etapa antes de liberar o pagamento. Proteja seu dinheiro e evite
            dores de cabeça.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackableButton
              variantName="primary"
              section="hero"
              size="lg"
              asChild
            >
              <a href="#formulario">Entrar na lista de espera</a>
            </TrackableButton>
            <TrackableButton
              variantName="secondary"
              section="hero"
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#como-funciona">Quero entender como funciona</a>
            </TrackableButton>
          </div>
          <TrustBadges />
        </div>

        <div className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
          <div className="space-y-4">
            <div className="h-4 w-2/3 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-100" />
            <div className="h-4 w-5/6 rounded bg-slate-100" />
            <div className="mt-6 h-24 rounded-xl border border-slate-200 bg-brand-surface" />
            <div className="h-10 w-36 rounded-xl bg-brand-emerald/20" />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Visualização de etapas e comprovação do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
