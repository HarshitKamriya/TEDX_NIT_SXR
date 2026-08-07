import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, UserCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PastSpeaker {
  id: string;
  name: string;
  role: string;
  category: string;
  edition: string;
  image: string;
  fallbackImage?: string;
  bio: string;
  talkTitle: string;
  videoUrl?: string;
}

const PAST_SPEAKERS_DATA: PastSpeaker[] = [
  {
    id: "past-1",
    name: "Ankur Warikoo",
    role: "Entrepreneur, Author & Content Creator",
    category: "Entrepreneurship",
    edition: "TEDx NIT Srinagar",
    image: "https://savedaughters.com/public/ckimages/ck_1648103000.jpg",
    bio: "Renowned Indian entrepreneur, keynote speaker, and content creator who inspires millions of youth on self-awareness, financial literacy, and personal growth.",
    talkTitle: "Do What You Love, Love What You Do",
    videoUrl: "https://www.youtube.com/results?search_query=Ankur+Warikoo+TEDx",
  },
  {
    id: "past-2",
    name: "Faheem Abdullah",
    role: "Singer, Songwriter & Composer",
    category: "Music & Culture",
    edition: "TEDx NIT Srinagar",
    image: "/past/fah.jpg",
    bio: "Soulful Kashmiri singer-songwriter whose evocative melodies and poetry bridge traditional soul with modern soundscapes, inspiring millions globally.",
    talkTitle: "Echoes of the Valley: Expressing Emotion Through Sound",
    videoUrl: "https://www.youtube.com/results?search_query=Faheem+Abdullah+TEDx",
  },
  {
    id: "past-3",
    name: "Dr. Syed Sehrish Asgar",
    role: "IAS Officer & Former DC Baramulla",
    category: "Governance",
    edition: "TEDx NIT Srinagar",
    image: "/past/sehrish.jpeg",
    bio: "Distinguished Indian Administrative Service officer celebrated for her groundbreaking public initiatives in healthcare, education, and district administration.",
    talkTitle: "Public Governance in the Face of Adversity",
    videoUrl: "https://www.youtube.com/results?search_query=Syed+Sehrish+Asgar+TEDx",
  },
  {
    id: "past-4",
    name: "Sonam Lotus",
    role: "Director, Meteorological Dept. J&K",
    category: "Science & Climate",
    edition: "TEDx NIT Srinagar",
    image: "/speaker/Son.jpeg",
    fallbackImage: "https://kashmirobserver.net/wp-content/uploads/2023/10/Sonam-Lotus.jpg",
    bio: "Iconic meteorologist renowned across Jammu & Kashmir for bringing precision science, weather forecasting, and life-saving disaster warnings to mountain communities.",
    talkTitle: "Predicting the Unpredictable: Climate Resilience in Mountains",
    videoUrl: "https://www.youtube.com/results?search_query=Sonam+Lotus+TEDx",
  },
  {
    id: "past-5",
    name: "Mubeen Masudi",
    role: "Educator & Founder of Rise App",
    category: "EdTech & Innovation",
    edition: "TEDx NIT Srinagar",
    image: "https://risewithrise.com/wp-content/uploads/2025/02/mubeen.jpg",
    bio: "IIT Bombay alumnus and pioneering educator transforming rural education and digital learning access across Jammu & Kashmir.",
    talkTitle: "Democratizing Quality Education in Remote Regions",
    videoUrl: "https://www.youtube.com/results?search_query=Mubeen+Masudi+TEDx",
  },
  {
    id: "past-6",
    name: "Rizza Alee",
    role: "Mountaineer & Filmmaker",
    category: "Adventure & Media",
    edition: "TEDx NIT Srinagar",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9vJOVH8EE3U%2Fmaxresdefault.jpg&f=1&nofb=1",
    bio: "One of Kashmir's youngest Everest climbers and mountain storytellers, capturing extreme alpine landscapes and human resilience.",
    talkTitle: "Conquering Peaks Within: Beyond Everest",
    videoUrl: "https://www.youtube.com/results?search_query=Rizza+Alee+TEDx",
  },
  {
    id: "past-7",
    name: "Khalid Wani",
    role: "Senior Director, Western Digital",
    category: "Tech Leadership",
    edition: "TEDx NIT Srinagar",
    image: "/speaker/Kw.jpg",
    fallbackImage: "https://contentstatic.timesjobs.com/img/61576474/Master.jpg",
    bio: "Tech leader with decades of experience driving digital storage innovation and corporate strategy across global markets.",
    talkTitle: "The Future of Data: Powering the Next Technological Renaissance",
    videoUrl: "https://www.youtube.com/results?search_query=Khalid+Wani+TEDx",
  },
  {
    id: "past-8",
    name: "Auqib Wani",
    role: "Designer, Forbes 30 Under 30",
    category: "Arts & Design",
    edition: "TEDx NIT Srinagar",
    image: "/past/sp2.jpg",
    bio: "Self-taught designer renowned for creating India's cricket team jerseys, music festival stages, and immersive spatial designs.",
    talkTitle: "Designing Without Rules: From Passion to Cultural Impact",
    videoUrl: "https://www.youtube.com/results?search_query=Auqib+Wani+TEDx",
  },
];

function SpeakerCardImage({ speaker }: { speaker: PastSpeaker }) {
  const [imgSrc, setImgSrc] = useState(speaker.image);

  return (
    <img
      src={imgSrc}
      alt={speaker.name}
      onError={() => {
        if (speaker.fallbackImage && imgSrc !== speaker.fallbackImage) {
          setImgSrc(speaker.fallbackImage);
        }
      }}
      className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
    />
  );
}

export default function PastSpeakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<PastSpeaker | null>(null);

  return (
    <section id="pastspeakers" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#EB0028]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EB0028]/15 border border-[#EB0028]/30 text-[#EB0028] text-xs font-mono tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            PAST EDITIONS & ALUMNI
          </div>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            TRAILBLAZERS OF THE <span className="text-[#EB0028]">PAST</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base md:text-lg font-light mt-3">
            Honoring the visionaries and change-makers who illuminated previous TEDx NIT Srinagar stages with extraordinary ideas.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_SPEAKERS_DATA.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="glass-card glass-card-hover speaker-card group overflow-hidden cursor-pointer flex flex-col justify-between border-white/10 hover:border-[#EB0028]/50"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <SpeakerCardImage speaker={speaker} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/75 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-neutral-300">
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
              <SpeakerCardImage speaker={selectedSpeaker} />
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
                  onClick={() => window.open(selectedSpeaker.videoUrl || "https://youtube.com", "_blank")}
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

