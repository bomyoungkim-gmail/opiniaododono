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
  { label: "Software", value: "Software" },
  { label: "Design", value: "Design" },
  { label: "Reforma", value: "Reforma" },
  { label: "Consultoria", value: "Consultoria" },
  { label: "Outros", value: "Outros" },
];

const etapaAtualOptions = [
  { label: "Planejando", value: "Planejando" },
  { label: "Já começou", value: "Já começou" },
  { label: "Começa em até 30 dias", value: "Começa em até 30 dias" },
  { label: "60-90 dias", value: "60-90 dias" },
];

const faixaOrcamentoOptions = [
  { label: "até 10k", value: "até 10k" },
  { label: "10-30k", value: "10-30k" },
  { label: "30-80k", value: "30-80k" },
  { label: "80k+", value: "80k+" },
];

const principalDorOptions = [
  { label: "Prazo", value: "Prazo" },
  { label: "Qualidade", value: "Qualidade" },
  { label: "Confiança no profissional", value: "Confiança no profissional" },
  { label: "Orçamento estourando", value: "Orçamento estourando" },
  { label: "Organização", value: "Organização" },
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
      tipoProjeto: "Software",
      etapaAtual: "Planejando",
      faixaOrcamento: "até 10k",
      principalDor: "Prazo",
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
        <div className="mb-6 rounded-card border border-blue-200 bg-white p-5 text-center shadow-sm">
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
            Leva menos de 1 minuto. A gente só usa seus dados para falar sobre o
            piloto.
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
