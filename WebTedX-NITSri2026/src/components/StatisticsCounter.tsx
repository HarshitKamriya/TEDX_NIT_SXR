import { motion } from "framer-motion";
import { Mic, Eye, Users, Trophy } from "lucide-react";

const STATS = [
  {
    icon: Mic,
    number: "45+",
    label: "SPEAKERS",
    subtext: "Global & National Visionaries",
  },
  {
    icon: Eye,
    number: "300K+",
    label: "YOUTUBE VIEWS",
    subtext: "Impact across 50+ countries",
  },
  {
    icon: Users,
    number: "2,000+",
    label: "ATTENDEES",
    subtext: "Vibrant student & creator audience",
  },
  {
    icon: Trophy,
    number: "6TH",
    label: "EDITION",
    subtext: "Pioneering innovation at NIT Srinagar",
  },
];

export default function StatisticsCounter() {
  return (
    <section id="stats" className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/10">
      {/* Background glowing gradient line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EB0028]/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 text-center flex flex-col items-center justify-center border-white/10 hover:border-[#EB0028]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#EB0028]/15 border border-[#EB0028]/30 flex items-center justify-center text-[#EB0028] mb-4 group-hover:scale-110 group-hover:bg-[#EB0028] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-space text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2 group-hover:text-[#EB0028] transition-colors">
                  {stat.number}
                </div>

                <div className="font-bebas text-2xl text-white tracking-widest mb-1">
                  {stat.label}
                </div>

                <div className="font-inter text-xs text-neutral-400 font-light">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
