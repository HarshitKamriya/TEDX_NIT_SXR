import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  year: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Attending TEDx NIT Srinagar was a transformative experience. The energy, depth of ideas, and production quality rivaled international conferences.",
    name: "Dr. Sameer Ahmad",
    role: "Professor & Tech Policy Analyst",
    year: "2024 Attendee",
  },
  {
    quote:
      "Speaking on the TEDx stage at Srinagar under this powerful theme allowed me to share how constraints catalyzed our entire clean energy venture.",
    name: "Amina Mir",
    role: "Founder, GreenHimalayas",
    year: "2023 Speaker",
  },
  {
    quote:
      "The curation of talks and visual design left me deeply inspired. It proved that Kashmir is a powerhouse of intellect and creative resilience.",
    name: "Sahil Bhat",
    role: "Student Innovator & Designer",
    year: "2024 Delegate",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            COMMUNITY VOICES
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            WHAT PEOPLE <span className="text-[#EB0028]">SAY</span>
          </h3>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 lg:p-12 border-white/15 rounded-[24px] text-center relative"
            >
              <Quote className="w-12 h-12 text-[#EB0028] mx-auto mb-6 opacity-60" />

              <p className="font-inter text-lg lg:text-2xl text-neutral-100 font-light italic leading-relaxed mb-8 max-w-2xl mx-auto">
                "{t.quote}"
              </p>

              <div>
                <h4 className="font-bebas text-3xl text-white tracking-wider mb-1">{t.name}</h4>
                <p className="font-inter text-xs text-[#EB0028] font-semibold">{t.role}</p>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mt-1 block">
                  {t.year}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass-card border-white/10 text-white hover:bg-[#EB0028] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === idx ? "bg-[#EB0028] w-8" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full glass-card border-white/10 text-white hover:bg-[#EB0028] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
