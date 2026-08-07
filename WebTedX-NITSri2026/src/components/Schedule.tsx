import { motion } from "framer-motion";
import { Clock, Coffee, Mic, Sparkles, Award } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  badge: "Keynote" | "Panel" | "Performance" | "Break";
  description: string;
}

const SCHEDULE: ScheduleItem[] = [
  {
    time: "09:00 AM",
    title: "Registrations & Welcome Networking",
    speaker: "TEDx Team NIT Srinagar",
    badge: "Break",
    description: "Check-in at Convocation Complex, badge allocation, and morning coffee lounge networking.",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony & Theme Address",
    speaker: "Patron & Organizing Chair",
    badge: "Keynote",
    description: "Official inaugural lamp lighting and unveiling of 'Innovation Thrives Under Constraints'.",
  },
  {
    time: "10:30 AM",
    title: "Building Intelligence When Computing Is Scarce",
    speaker: "Dr. Alok Verma",
    badge: "Keynote",
    description: "How minimalist AI models are revolutionizing resource-starved medical & field applications.",
  },
  {
    time: "11:30 AM",
    title: "Architecture Born From Mountain Limits",
    speaker: "Zainab Shah",
    badge: "Keynote",
    description: "Designing zero-emissions habitats that endure harsh Himalayan winters with indigenous wisdom.",
  },
  {
    time: "12:30 PM",
    title: "Cultural Fusion & Musical Prelude",
    speaker: "Regional Artists Collective",
    badge: "Performance",
    description: "Soulful acoustic fusion combining traditional Kashmiri instruments with modern ambient soundscapes.",
  },
  {
    time: "01:15 PM",
    title: "Networking Lunch & Exhibition Lounge",
    speaker: "All Attendees & Sponsors",
    badge: "Break",
    description: "Gourmet lunch spread & hands-on interaction at the student innovation showcase booths.",
  },
  {
    time: "02:30 PM",
    title: "Scarcity as a Catalyst for Global Scale",
    speaker: "Meera Deshmukh",
    badge: "Panel",
    description: "Frugal engineering lessons from grass-roots startups outperforming multi-billion-dollar labs.",
  },
  {
    time: "04:00 PM",
    title: "Closing Remarks & Felicitation",
    speaker: "Organizing Committee",
    badge: "Keynote",
    description: "Memento presentation to speakers, volunteer recognition, and closing vote of thanks.",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            EVENT FLOW & TIMELINE
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            EVENT <span className="text-[#EB0028]">SCHEDULE</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base font-light mt-3">
            A full-day curated journey of inspiring talks, performances, and high-impact networking.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Red Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-gradient-to-b from-[#EB0028] via-[#EB0028]/60 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {SCHEDULE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#EB0028] text-[#EB0028] flex items-center justify-center z-10 shadow-[0_0_15px_#EB0028]">
                    {item.badge === "Keynote" && <Mic className="w-4 h-4" />}
                    {item.badge === "Break" && <Coffee className="w-4 h-4" />}
                    {item.badge === "Performance" && <Sparkles className="w-4 h-4" />}
                    {item.badge === "Panel" && <Award className="w-4 h-4" />}
                  </div>

                  {/* Schedule Card Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-card p-6 border-white/10 hover:border-[#EB0028]/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#EB0028] font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono font-bold ${
                            item.badge === "Keynote"
                              ? "bg-[#EB0028]/20 text-[#EB0028] border border-[#EB0028]/40"
                              : item.badge === "Performance"
                              ? "bg-amber-400/20 text-amber-400 border border-amber-400/40"
                              : "bg-white/10 text-neutral-300"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-bebas text-2xl text-white tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="font-inter text-xs text-neutral-400 font-semibold mb-3">
                        By {item.speaker}
                      </p>
                      <p className="font-inter text-xs text-neutral-300 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
