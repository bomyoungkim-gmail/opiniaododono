import { Camera, CheckCircle2, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const steps = [
  {
    icon: ClipboardList,
    title: "Você define as etapas",
    description:
      "Combine marcos simples do projeto ou serviço e defina os valores por etapa.",
  },
  {
    icon: Camera,
    title: "O profissional envia evidências",
    description:
      "Fotos do antes/depois, relatórios e notas/comprovantes quando necessário.",
  },
  {
    icon: CheckCircle2,
    title: "Você aprova e libera",
    description:
      "O projeto avança com previsibilidade e registro claro do que foi entregue.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
          Como funciona
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-brand-cobalt">
                      {index + 1}
                    </span>
                    <Icon
                      className="h-5 w-5 text-brand-cobalt"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {step.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
