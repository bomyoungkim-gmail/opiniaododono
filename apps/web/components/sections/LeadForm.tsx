"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFormTracking } from "@/hooks/useFormTracking";
import { leadSchema, type LeadFormData } from "@/lib/validations";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const tipoProjetoOptions = [
  { label: "Reforma residencial", value: "Reforma residencial" },
  {
    label: "Projeto arquitetônico",
    value: "Projeto arquitetônico",
  },
  { label: "Interiores", value: "Interiores" },
  { label: "Mobiliário sob medida", value: "Mobiliário sob medida" },
  { label: "Obra completa", value: "Obra completa" },
];

const etapaAtualOptions = [
  { label: "Planejando", value: "Planejando" },
  { label: "Já começou", value: "Já começou" },
  { label: "Começa em até 30 dias", value: "Começa em até 30 dias" },
  { label: "60-90 dias", value: "60-90 dias" },
];

const faixaOrcamentoOptions = [
  { label: "até 100k", value: "até 100k" },
  { label: "100-300k", value: "100-300k" },
  { label: "300-800k", value: "300-800k" },
  { label: "800k+", value: "800k+" },
];

const principalDorOptions = [
  { label: "Falta de transparência", value: "Falta de transparência" },
  { label: "Risco financeiro", value: "Risco financeiro" },
  { label: "Prazo", value: "Prazo" },
  { label: "Qualidade", value: "Qualidade" },
  { label: "Custos imprevistos", value: "Custos imprevistos" },
];

export function LeadForm() {
  const router = useRouter();
  const isStaticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "true";
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { markFormStart, markLeadSubmit, markLeadSuccess, markLeadError } =
    useFormTracking();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      cidadeUF: "",
      tipoProjeto: "Reforma residencial",
      etapaAtual: "Planejando",
      faixaOrcamento: "até 100k",
      principalDor: "Falta de transparência",
    },
  });

  const onSubmit = async (values: LeadFormData) => {
    if (isStaticPreview) {
      markLeadSubmit();
      markLeadSuccess(values.faixaOrcamento);
      router.push("/obrigado");
      return;
    }

    try {
      setSubmitError(null);
      markLeadSubmit();
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        markLeadError("server", String(response.status));
        setSubmitError(
          "Não conseguimos enviar agora. Tente novamente em instantes.",
        );
        return;
      }

      markLeadSuccess(values.faixaOrcamento);
      router.push("/obrigado");
    } catch {
      markLeadError("client", "network");
      setSubmitError(
        "Sem conexão no momento. Verifique internet e tente novamente.",
      );
    }
  };

  return (
    <section id="formulario" className="bg-blue-50 py-16 md:py-24">
      <div className="container max-w-3xl">
        {/* Urgency badge — 2025 trend */}
        <div className="mb-4 flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-amber-600"
          >
            <path
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Vagas limitadas para o piloto. Garanta a sua antes de fecharmos.
        </div>

        <div className="mb-6 rounded-2xl border border-blue-200 bg-white p-5 text-center shadow-sm">
          <p className="text-sm font-semibold text-brand-cobalt">
            Quero participar do piloto
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Receba convite assim que abrirmos vagas na sua cidade.
          </p>
        </div>

        <div className="rounded-card border border-slate-200 bg-white p-6 shadow-card md:p-8">
          <h2 className="text-2xl font-semibold text-brand-navy">
            Entre na lista de espera
          </h2>
          <p className="mt-2 text-slate-600">
            Leva menos de 1 minuto. Usamos seus dados apenas para contato sobre
            piloto e onboarding de custódia.
          </p>
          {isStaticPreview ? (
            <p className="mt-2 text-sm text-amber-700">
              Modo preview (GitHub Pages): o formulário simula envio e
              redireciona para a tela de obrigado.
            </p>
          ) : null}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                {...register("nome")}
                onFocus={markFormStart}
                aria-invalid={!!errors.nome}
              />
              {errors.nome ? (
                <p className="text-sm text-red-600">{errors.nome.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="Ex: (11) 99999-9999"
                {...register("whatsapp")}
                aria-invalid={!!errors.whatsapp}
              />
              {errors.whatsapp ? (
                <p className="text-sm text-red-600">
                  {errors.whatsapp.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidadeUF">Cidade/UF</Label>
              <Input
                id="cidadeUF"
                placeholder="Ex: São Paulo/SP"
                {...register("cidadeUF")}
                aria-invalid={!!errors.cidadeUF}
              />
              {errors.cidadeUF ? (
                <p className="text-sm text-red-600">
                  {errors.cidadeUF.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoProjeto">Tipo de projeto</Label>
              <Select
                id="tipoProjeto"
                options={tipoProjetoOptions}
                {...register("tipoProjeto")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="etapaAtual">Etapa atual</Label>
              <Select
                id="etapaAtual"
                options={etapaAtualOptions}
                {...register("etapaAtual")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="faixaOrcamento">Faixa de orçamento</Label>
              <Select
                id="faixaOrcamento"
                options={faixaOrcamentoOptions}
                {...register("faixaOrcamento")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="principalDor">Principal dor</Label>
              <Select
                id="principalDor"
                options={principalDorOptions}
                {...register("principalDor")}
              />
            </div>

            {submitError ? (
              <Alert>
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="h-14 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Enviando...
                </>
              ) : (
                "Quero meu convite"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
