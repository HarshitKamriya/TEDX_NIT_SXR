import { motion } from "framer-motion";
import { ArrowDown, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden bg-[#050505]"
    >
      {/* Radial red glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EB0028]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-[#EB0028]/30 mb-8"
        >
          <Flame className="w-4 h-4 text-[#EB0028] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300">
            TEDx NIT Srinagar • Annual Flagship Edition
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mb-6 text-white uppercase text-balance"
        >
          INNOVATION <span className="text-[#EB0028] ted-glow-text">THRIVES</span>
          <br />
          UNDER CONSTRAINTS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl font-light mb-10 leading-relaxed"
        >
          Where limitations become the birthplace of extraordinary ideas.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            onClick={() => scrollTo("register")}
            className="bg-[#EB0028] hover:bg-[#FF1A40] text-white font-poppins font-medium px-8 py-6 rounded-full text-base tracking-wide ted-border-glow transition-all duration-300 hover:scale-105"
          >
            Register Now
          </Button>

          <Button
            onClick={() => scrollTo("story")}
            variant="outline"
            className="border-white/20 hover:border-[#EB0028]/60 bg-white/5 hover:bg-white/10 text-white font-poppins font-medium px-8 py-6 rounded-full text-base transition-all duration-300 hover:scale-105"
          >
            Explore Theme
          </Button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 cursor-pointer"
        onClick={() => scrollTo("story")}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center bg-white/5"
        >
          <ArrowDown className="w-4 h-4 text-[#EB0028]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
