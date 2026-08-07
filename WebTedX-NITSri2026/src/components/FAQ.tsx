import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "When and where is TEDx NIT Srinagar taking place?",
    a: "TEDx NIT Srinagar takes place at the Sher-i-Kashmir International Conference Centre (SKICC), Srinagar, Kashmir. The event kicks off at 09:00 AM.",
  },
  {
    q: "What does this year's theme 'Innovation Thrives Under Constraints' mean?",
    a: "The theme explores how limitations, resource bottlenecks, and extreme environments serve not as barriers, but as the primary catalyst for human creativity, resilience, and groundbreaking innovation.",
  },
  {
    q: "Who can attend the event?",
    a: "The event is open to students, researchers, entrepreneurs, creators, professionals, and anyone passionate about ideas worth spreading.",
  },
  {
    q: "What is included with the ₹399 All Access Pass?",
    a: "Your ticket includes full access to all talks, performances, official TEDx delegate kit, networking lunch, refreshments, and a digital participation certificate.",
  },
  {
    q: "Will certificates be provided to attendees?",
    a: "Yes! All verified delegates who attend the event will receive an official TEDx NIT Srinagar Certificate of Participation.",
  },
  {
    q: "How do I confirm my registration after paying via UPI?",
    a: "Once you complete the payment via QR code scan, take a screenshot of the payment receipt and note down the Transaction/UTR ID. Fill out the confirmation link provided to receive your official entry pass.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            GOT QUESTIONS?
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            FREQUENTLY ASKED <span className="text-[#EB0028]">QUESTIONS</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base font-light mt-3">
            Find everything you need to know about attending TEDx NIT Srinagar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="glass-card p-6 md:p-8 border-white/15 rounded-[24px]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-white/10 last:border-none pb-2"
              >
                <AccordionTrigger className="text-left font-bebas text-2xl text-white hover:text-[#EB0028] hover:no-underline transition-colors py-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#EB0028] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-inter text-neutral-300 text-sm font-light leading-relaxed pl-8 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
