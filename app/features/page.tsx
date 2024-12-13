import { Battery, Leaf, Scale, Wallet } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Power",
    description: "Harness gravity for clean, renewable energy generation",
  },
  {
    icon: Battery,
    title: "Reliable Supply",
    description: "Consistent power output with minimal maintenance",
  },
  {
    icon: Scale,
    title: "Scalable Solution",
    description: "Adaptable system for various power requirements",
  },
  {
    icon: Wallet,
    title: "Cost-Effective",
    description: "Lower lifetime costs with efficient energy production",
  },
];

const faqs = [
  {
    question: "How does gravity-powered energy generation work?",
    answer: "Our system utilizes the potential energy of elevated weights, converting it into electrical energy through a controlled descent mechanism coupled with generators.",
  },
  {
    question: "What maintenance is required?",
    answer: "The system requires minimal maintenance, with routine checks every 6 months and occasional component replacements every 3-5 years.",
  },
  {
    question: "Can it power a whole building?",
    answer: "Yes, our scalable solution can be designed to meet various power requirements, from single homes to entire buildings.",
  },
  {
    question: "What's the environmental impact?",
    answer: "Our system has minimal environmental impact as it doesn't rely on fossil fuels or chemical batteries, making it a truly green energy solution.",
  },
];

export default function Features() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="What We Offer"
        description="Discover our innovative gravity-powered energy solutions that are reshaping the future of sustainable power generation."
      />
      
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <section className="mt-24" id="faq">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our gravity-powered energy system."
          className="mb-12"
        />
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}