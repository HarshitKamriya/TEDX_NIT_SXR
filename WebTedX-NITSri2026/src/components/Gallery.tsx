import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItem {
  id: string;
  title: string;
  category: "Talks" | "Stage" | "Audience" | "Moments";
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Opening Keynote Address",
    category: "Talks",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    title: "TED Red Stage Setup",
    category: "Stage",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    title: "Engaged Audience at SKICC",
    category: "Audience",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g4",
    title: "Backstage Speaker Briefing",
    category: "Moments",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g5",
    title: "Robotics & Innovation Showcase",
    category: "Talks",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g6",
    title: "Audience Standing Ovation",
    category: "Audience",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  },
];

const CATEGORIES = ["All", "Talks", "Stage", "Audience", "Moments"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            VISUAL HIGHLIGHTS
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            EVENT <span className="text-[#EB0028]">GALLERY</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base font-light mt-3">
            Immerse yourself in moments of passion, wisdom, and transformative ideas captured on stage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#EB0028] text-white shadow-[0_0_20px_#EB0028]"
                  : "glass-card text-neutral-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="glass-card glass-card-hover relative aspect-[4/3] rounded-[20px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono text-[#EB0028] uppercase tracking-widest font-bold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-bebas text-2xl text-white tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white group-hover:bg-[#EB0028] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Dialog Modal */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <DialogContent className="bg-[#050505]/95 border-white/15 text-white max-w-5xl w-[92vw] h-[85vh] p-0 flex flex-col justify-between overflow-hidden rounded-[24px]">
            {/* Header info */}
            <div className="p-6 flex justify-between items-center border-b border-white/10 z-10">
              <div>
                <span className="text-xs font-mono text-[#EB0028] uppercase tracking-widest font-bold block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-bebas text-3xl text-white tracking-wide">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#EB0028] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 flex items-center justify-center p-4 bg-black/50 overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-6 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#EB0028] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#EB0028] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
