import MainWrapper from "@/components/shared/general/MainWrapper";
import SectionTitle from "@/components/shared/general/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

function Faq() {
  return (
    <section id="faq" className="bg-card py-20 border-y">
      <MainWrapper className="max-w-[800px]">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="grid grid-cols-1 bg-neutral-800 px-6 py-4 rounded-xl border">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué es esta plataforma de chat?</AccordionTrigger>
              <AccordionContent>
                Nuestra plataforma SaaS ofrece una solución de chat avanzada para empresas y desarrolladores que buscan integrar capacidades de comunicación en tiempo real en sus aplicaciones y sitios web.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo puedo integrar el widget de chat en mi sitio web?</AccordionTrigger>
              <AccordionContent>
                La integración es sencilla. Después de registrarte, recibirás un código personalizado que puedes insertar en tu sitio web. Nuestro widget es compatible con la mayoría de las plataformas web modernas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué planes de precios ofrecen?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos varios planes adaptados a diferentes necesidades, desde un plan gratuito para proyectos pequeños hasta planes empresariales con características avanzadas. Visita nuestra página de precios para más detalles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Es accesible y compatible con dispositivos móviles?</AccordionTrigger>
              <AccordionContent>
                Sí, nuestra plataforma cumple con los estándares WAI-ARIA de accesibilidad y está completamente optimizada para funcionar en dispositivos móviles, tablets y ordenadores de escritorio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Faq;
