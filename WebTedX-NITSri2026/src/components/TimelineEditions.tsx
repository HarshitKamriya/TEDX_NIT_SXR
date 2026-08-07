import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Eye, Trophy, Sparkles } from "lucide-react";

interface Edition {
  year: string;
  theme: string;
  headline: string;
  speakers: string[];
  attendees: string;
  views: string;
  highlights: string[];
}

const EDITIONS: Edition[] = [
  {
    year: "2022",
    theme: "Unraveling Horizons",
    headline: "Exploring the uncharted frontiers of science, technology, and art.",
    speakers: ["Dr. A. Sharma", "Rohan Verma", "Dr. Sameena Qazi"],
    attendees: "800+",
    views: "50K+",
    highlights: [
      "Inaugural flagship TEDx edition at NIT Srinagar",
      "Interactive tech installation displays",
      "Live music performance by regional artists",
    ],
  },
  {
    year: "2023",
    theme: "Catalysts of Change",
    headline: "Highlighting individuals who sparked social and digital revolutions.",
    speakers: ["Mirwaiz Umar", "Dr. Sonam Wangchuk", "Zaira Wasim"],
    attendees: "1,200+",
    views: "110K+",
    highlights: [
      "Keynote on sustainable Himalayan architecture",
      "Youth entrepreneurship panel discussion",
      "National media coverage & viral talks",
    ],
  },
  {
    year: "2024",
    theme: "Collisions That Create Change",
    headline: "Where diverse ideas, cultures, and disciplines intersect to create spark.",
    speakers: ["Prof. M. F. Wani", "Syed Mohammad", "Amina Mir"],
    attendees: "1,500+",
    views: "180K+",
    highlights: [
      "Record attendee turnout at Convocation Complex",
      "Interactive VR & AI experience zones",
      "Over 6 talks featured on TED official YouTube",
    ],
  },
  {
    year: "2025",
    theme: "Resilience in Action",
    headline: "Uncovering stories of perseverance against environmental & societal odds.",
    speakers: ["Major D. P. Singh", "Insha Bashir", "Tariq Ahmad"],
    attendees: "1,800+",
    views: "250K+",
    highlights: [
      "Para-athlete inspirational address",
      "Student innovator showcase awards",
      "Excellence in regional digital storytelling",
    ],
  },
  {
    year: "2026",
    theme: "Innovation Thrives Under Constraints",
    headline: "Current Edition: Where limitations become the birthplace of extraordinary ideas.",
    speakers: ["To Be Announced", "Thought Leaders", "Global Innovators"],
    attendees: "2,500+ (Expected)",
    views: "300K+ (Goal)",
    highlights: [
      "Immersive fire & ember visual production",
      "High-impact global speaker lineup",
      "Interactive hackathon & innovation lounge",
    ],
  },
];

export default function TimelineEditions() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const activeEdition = EDITIONS.find((e) => e.year === selectedYear) || EDITIONS[4];

  return (
    <section id="timeline" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow background effect */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#EB0028]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            OUR JOURNEY & LEGACY
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            EDITION <span className="text-[#EB0028]">TIMELINE</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base md:text-lg font-light mt-3">
            Select an edition to revisit the themes, visionaries, and milestones of TEDx NIT Srinagar.
          </p>
        </div>

        {/* Timeline Horizontal Year Selector */}
        <div className="relative mb-14 max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />

          <div className="flex justify-between items-center relative z-10">
            {EDITIONS.map((ed) => {
              const isSelected = ed.year === selectedYear;
              return (
                <button
                  key={ed.year}
                  onClick={() => setSelectedYear(ed.year)}
                  className={`flex flex-col items-center group transition-all duration-300 ${
                    isSelected ? "scale-110" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-space text-sm font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-[#EB0028] text-white shadow-[0_0_25px_#EB0028] border-2 border-white"
                        : "bg-[#181818] border border-white/20 text-neutral-300 group-hover:border-[#EB0028]"
                    }`}
                  >
                    {ed.year.slice(2)}
                  </div>
                  <span
                    className={`font-space text-xs mt-2 transition-colors ${
                      isSelected ? "text-[#EB0028] font-bold" : "text-neutral-400 group-hover:text-white"
                    }`}
                  >
                    {ed.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Year Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEdition.year}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 lg:p-12 max-w-4xl mx-auto border-white/15 rounded-[24px]"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB0028]/20 border border-[#EB0028]/40 text-[#EB0028] text-xs font-mono mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  EDITION {activeEdition.year}
                </div>
                <h4 className="font-bebas text-4xl lg:text-5xl text-white tracking-wider">
                  {activeEdition.theme}
                </h4>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center min-w-[90px]">
                  <Users className="w-4 h-4 text-[#EB0028] mx-auto mb-1" />
                  <span className="font-space font-bold text-white text-sm block">{activeEdition.attendees}</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Attendees</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-center min-w-[90px]">
                  <Eye className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="font-space font-bold text-white text-sm block">{activeEdition.views}</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Talk Views</span>
                </div>
              </div>
            </div>

            <p className="font-inter text-neutral-200 text-lg font-light leading-relaxed mb-8">
              {activeEdition.headline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Speakers Column */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h5 className="font-bebas text-2xl text-white tracking-wide mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#EB0028]" />
                  FEATURED SPEAKERS
                </h5>
                <ul className="space-y-3">
                  {activeEdition.speakers.map((speaker, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-300 font-inter text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#EB0028]" />
                      {speaker}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights Column */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h5 className="font-bebas text-2xl text-white tracking-wide mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  EDITION HIGHLIGHTS
                </h5>
                <ul className="space-y-3">
                  {activeEdition.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-300 font-inter text-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
