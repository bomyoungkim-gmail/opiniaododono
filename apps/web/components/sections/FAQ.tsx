import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Isso é um banco?",
    a: "Não. É uma plataforma para organizar etapas, evidências e aprovações de pagamento na sua reforma.",
  },
  {
    q: "Como o pagamento por etapas funciona?",
    a: "Você define etapas e valores. O profissional solicita a liberação quando concluir a etapa e envia evidências. Você aprova e segue para a próxima.",
  },
  {
    q: "Vocês seguram o dinheiro (escrow)?",
    a: "No MVP, estamos validando demanda e fluxo. A etapa de custódia/conta vinculada pode entrar na próxima fase conforme o piloto.",
  },
  {
    q: "O profissional precisa usar também?",
    a: "Idealmente sim, para enviar evidências e solicitar liberações. Mas você pode começar sozinho organizando etapas e registro.",
  },
  {
    q: "Precisa de nota fiscal?",
    a: "Depende do acordo e do tipo de serviço. A plataforma permite anexar nota/comprovantes quando fizer sentido.",
  },
  {
    q: "Serve para qualquer tipo de reforma?",
    a: "Sim — pintura, elétrica, hidráulica, gesso, marcenaria, obra completa. Você monta as etapas do seu jeito.",
  },
  {
    q: "Quanto custa?",
    a: "Estamos abrindo um piloto com vagas limitadas. Quem entrar na lista recebe condições especiais e participa definindo o produto.",
  },
  {
    q: "Quando vocês começam?",
    a: "Assim que fecharmos o grupo inicial na sua região. Entrando na lista, você recebe o convite primeiro.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
          FAQ
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
