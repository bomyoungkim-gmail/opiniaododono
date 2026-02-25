import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Isso é um banco?",
    a: "Não. Somos uma plataforma de governança de obras e projetos com foco em custódia, evidências e aprovação por milestones.",
  },
  {
    q: "Como o pagamento por etapas funciona?",
    a: "Você define os marcos e os valores. O fornecedor envia provas de execução, você aprova e o valor daquela etapa é liberado.",
  },
  {
    q: "Vocês seguram o dinheiro (escrow)?",
    a: "No MVP validamos o fluxo operacional de custódia. A camada bancária de escrow é ativada por integração conforme o avanço do piloto.",
  },
  {
    q: "O profissional precisa usar também?",
    a: "Sim, para enviar evidências e solicitar liberações. Isso garante que todo desembolso tenha lastro documental.",
  },
  {
    q: "Precisa de nota fiscal?",
    a: "Sempre que disponível, sim. A plataforma prioriza NF-e e comprovantes para reforçar rastreabilidade e transparência.",
  },
  {
    q: "Serve para qual tipo de projeto?",
    a: "Principalmente reformas, arquitetura, interiores, marcenaria e obra completa, com marcos de entrega claramente definidos.",
  },
  {
    q: "Quanto custa?",
    a: "Estamos em piloto com vagas limitadas. Quem entrar agora recebe onboarding prioritário e participa da evolução do produto.",
  },
  {
    q: "Quando vocês começam?",
    a: "Assim que fecharmos os primeiros grupos de projeto por região. Entrando na lista, você recebe convite prioritário.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-cobalt">
          Dúvidas
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-navy md:text-3xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
