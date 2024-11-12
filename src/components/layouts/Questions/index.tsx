import Title from "@/components/common/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questionsData } from "@/constants/data";

const Questions = () => {
  return (
    <section className="py-5 lg:py-10">
      <div className="container space-y-5 sm:space-y-8">
        <Title
          title="Pertanyaan yang sering diajukan"
          className="text-primary"
        />

        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible>
            {questionsData.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="sm:text-lg text-start">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Questions;
