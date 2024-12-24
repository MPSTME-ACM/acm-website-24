"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bebas_Neue } from "next/font/google";
const bn = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Faq() {
  const faqs = [
    {
      question: "What are the benefits of joining ACM?",
      answer:
        "Joining ACM offers opportunities to enhance technical skills, network, collaborate on projects with like-minded peers, enjoy a blend of learning and fun, and engage with other ACM committees.",
    },
    {
      question: "I have no prior experience in coding, can I still join?",
      answer:
        "Yes of course. We will help you in your learning journey, you just need to take the first step by joining our committee!",
    },
    {
      question: "What all departments are there?",
      answer:
        "Our ACM chapter has several departments, including Technical (for development and web development), Research & Development, Social Media and Editorials, Digital Creatives, Public Relations, Marketing, and Logistics. Each department offers unique opportunities to contribute and grow while driving our initiatives forward.",
    },
    {
      question: "What does ACM stand for?",
      answer:
        "ACM stands for Association for Computing Machinery, and we are a student chapter of this prestigious organization!",
    },
    {
      question: "How can I connect with someone from ACM?",
      answer:
        "There is a contact form bellow or you can reach out to us on our social media platforms. We are always happy to connect with you and answer any questions you may have!",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full container mx-auto px-4 gap-10">
      <h1
        className={`${bn.className} text-6xl md:text-[8rem] tracking-tight font-semibold uppercase text-center `}
      >
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-xl px-8">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="flex justify-between items-center py-4 text-left text-xl font-medium hover:underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 text-brand-surface2 break-words text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
