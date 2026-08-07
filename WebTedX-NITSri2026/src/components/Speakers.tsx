import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Speaker {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  bio: string;
  talkTitle: string;
  videoUrl?: string;
}

const SPEAKERS_DATA: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Alok Verma",
    role: "AI Ethics Researcher & Roboticist",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneering research in autonomous decision systems under harsh environmental constraints. Dr. Verma has published over 40 landmark papers on ethical AI.",
    talkTitle: "Building Intelligence When Computing Is Scarce",
    videoUrl: "https://www.youtube.com",
  },
  {
    id: "speaker-2",
    name: "Meera Deshmukh",
    role: "Frugal Innovation Strategist",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Advocate for grass-root innovations in developing regions. Meera helps startups engineer breakthrough solutions with limited capital.",
    talkTitle: "Scarcity as a Catalyst for Global Scale",
    videoUrl: "https://www.youtube.com",
  },
  {
    id: "speaker-3",
    name: "Zainab Shah",
    role: "Climate Resilience Architect",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Designing zero-carbon mountain infrastructure that survives extreme Himalayan winters. Winner of international sustainable engineering awards.",
    talkTitle: "Architecture Born From Mountain Limits",
    videoUrl: "https://www.youtube.com",
  },
  {
    id: "speaker-4",
    name: "Kabir Mehta",
    role: "Filmmaker & Sound Artist",
    category: "Art & Media",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Creating cinematic masterpieces with zero-budget guerilla techniques. Kabir's films have screened at Cannes and Sundance.",
    talkTitle: "The Power of Single-Camera Storytelling",
    videoUrl: "https://www.youtube.com",
  },
];

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#EB0028]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            VISIONARIES & THOUGHT LEADERS
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            FEATURED <span className="text-[#EB0028]">SPEAKERS</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base md:text-lg font-light mt-3">
            Meet the pioneers proving that limitations are simply stepping stones to breakthrough innovation.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS_DATA.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="glass-card glass-card-hover speaker-card group overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/70 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-neutral-300">
                    {speaker.category}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6">
                <h4 className="font-bebas text-3xl text-white tracking-wider group-hover:text-[#EB0028] transition-colors">
                  {speaker.name}
                </h4>
                <p className="font-inter text-xs text-neutral-400 font-medium mb-3">
                  {speaker.role}
                </p>
                <p className="font-inter text-xs text-neutral-300 font-light line-clamp-2 mb-4">
                  "{speaker.talkTitle}"
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-poppins text-[#EB0028] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Bio & Talk</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Bio Dialog Modal */}
      <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
        {selectedSpeaker && (
          <DialogContent className="bg-[#0A0A0A] border-white/15 text-white max-w-2xl rounded-[24px] overflow-hidden p-0">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#EB0028]/80 text-white text-xs font-mono tracking-wider uppercase mb-2 inline-block">
                  {selectedSpeaker.category}
                </span>
                <DialogTitle className="font-bebas text-4xl text-white tracking-wider">
                  {selectedSpeaker.name}
                </DialogTitle>
                <DialogDescription className="font-inter text-sm text-neutral-300">
                  {selectedSpeaker.role}
                </DialogDescription>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h5 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-1">TED TALK TOPIC</h5>
                <p className="font-bebas text-2xl text-white tracking-wide">
                  "{selectedSpeaker.talkTitle}"
                </p>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-1">BIOGRAPHY</h5>
                <p className="font-inter text-sm text-neutral-300 font-light leading-relaxed">
                  {selectedSpeaker.bio}
                </p>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <Button
                  onClick={() => window.open("https://youtube.com", "_blank")}
                  className="bg-[#EB0028] hover:bg-[#FF1A40] text-white font-poppins text-xs uppercase tracking-wider gap-2 rounded-full px-6"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Watch TED Talk
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
