import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Zap, Lightbulb, Rocket, Flame, Globe2 } from "lucide-react";

const STAGES = [
  {
    id: "constraint",
    number: "01",
    title: "Constraint",
    subtitle: "The Boundary",
    icon: Lock,
    quote: "When resources are scarce, the mind ceases to rely on routine.",
    description:
      "Constraints force us to look beyond conventional playbooks. Far from being a wall, a restriction is a mirror that forces deep clarity and sharp focus.",
    metric: "100% Focus",
  },
  {
    id: "challenge",
    number: "02",
    title: "Challenge",
    subtitle: "The Spark",
    icon: Zap,
    quote: "Friction generates light. Obstacles awaken hidden potential.",
    description:
      "Facing an immovable object tests our resolve. In the friction between what is missing and what is required, human ingenuity catches fire.",
    metric: "Zero Excuses",
  },
  {
    id: "creativity",
    number: "03",
    title: "Creativity",
    subtitle: "Unbound Mind",
    icon: Lightbulb,
    quote: "Imagination thrives when parameters are strictly defined.",
    description:
      "Given infinite freedom, paradoxically, we freeze. Given strict boundaries, the human spirit invents radical workarounds and original paradigms.",
    metric: "Infinite Ideas",
  },
  {
    id: "innovation",
    number: "04",
    title: "Innovation",
    subtitle: "The Breakthrough",
    icon: Rocket,
    quote: "Breakthroughs are born where old answers fail completely.",
    description:
      "When standard pathways are blocked, new roads are paved. True innovation is not an incremental iteration, but a fundamental leap born out of necessity.",
    metric: "Quantum Leap",
  },
  {
    id: "transformation",
    number: "05",
    title: "Transformation",
    subtitle: "The Phoenix Rising",
    icon: Flame,
    quote: "Like a phoenix from embers, limitations forge resilience.",
    description:
      "Through trial and refinement, systems transform. What began as a severe restriction evolves into our greatest unfair advantage.",
    metric: "Evolved State",
  },
  {
    id: "impact",
    number: "06",
    title: "Impact",
    subtitle: "Changing the World",
    icon: Globe2,
    quote: "Solutions forged under pressure endure through time.",
    description:
      "Frugal, efficient, and resilient solutions scaled from extreme environments end up redefining global standards and empowering communities everywhere.",
    metric: "Global Reach",
  },
];

export default function ThemeStory() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];
  const IconComponent = current.icon;

  return (
    <section id="story" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#EB0028]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            THE PHILOSOPHY & STORY
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            WHY <span className="text-[#EB0028]">CONSTRAINTS</span> MATTER
          </h3>
          <p className="font-inter text-neutral-400 text-base md:text-lg font-light mt-3">
            Explore how boundaries trigger the arc of transformation from scarcity to groundbreaking impact.
          </p>
        </div>

        {/* Interactive Stages Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-[18px] transition-all duration-300 flex flex-col items-center text-center cursor-pointer border ${
                  isActive
                    ? "bg-[#EB0028]/15 border-[#EB0028] text-white shadow-[0_0_25px_rgba(235,0,40,0.35)] scale-105"
                    : "glass-card hover:bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                }`}
              >
                <div className={`p-2.5 rounded-full mb-2 ${isActive ? "bg-[#EB0028] text-white" : "bg-white/5 text-neutral-400"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-[#EB0028] font-bold">{stage.number}</span>
                <span className="font-bebas text-lg tracking-wider text-white">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 lg:p-12 border-white/15 relative overflow-hidden max-w-4xl mx-auto rounded-[24px]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <IconComponent className="w-64 h-64 text-[#EB0028]" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="p-5 rounded-2xl bg-[#EB0028]/20 border border-[#EB0028]/40 text-[#EB0028] shrink-0">
                <IconComponent className="w-12 h-12" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-[#EB0028] font-bold tracking-widest">{current.number}</span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-neutral-400">
                    STAGE: {current.subtitle}
                  </span>
                </div>

                <h4 className="font-bebas text-4xl lg:text-5xl text-white tracking-wider mb-4">
                  {current.title}
                </h4>

                <blockquote className="font-inter italic text-lg text-neutral-200 border-l-2 border-[#EB0028] pl-4 mb-6 py-1">
                  "{current.quote}"
                </blockquote>

                <p className="font-inter text-neutral-300 text-base leading-relaxed font-light mb-6">
                  {current.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400">
                  <span>OUTCOME:</span>
                  <span className="font-bold text-white">{current.metric}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
