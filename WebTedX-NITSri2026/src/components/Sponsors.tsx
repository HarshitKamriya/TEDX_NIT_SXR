import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  tier: "Title" | "Diamond" | "Gold" | "Silver" | "Partner";
  logoText: string;
}

const SPONSORS: Sponsor[] = [
  { name: "JK Bank", tier: "Title", logoText: "JK BANK" },
  { name: "Tech Mahindra", tier: "Diamond", logoText: "TECH MAHINDRA" },
  { name: "Kashmir Tourism", tier: "Diamond", logoText: "KASHMIR TOURISM" },
  { name: "Intel", tier: "Gold", logoText: "INTEL" },
  { name: "Red Bull", tier: "Gold", logoText: "RED BULL" },
  { name: "Spotify", tier: "Gold", logoText: "SPOTIFY" },
  { name: "GitHub", tier: "Silver", logoText: "GITHUB" },
  { name: "Canva", tier: "Silver", logoText: "CANVA" },
  { name: "Radio Mirchi", tier: "Partner", logoText: "RADIO MIRCHI" },
  { name: "Greater Kashmir", tier: "Partner", logoText: "GREATER KASHMIR" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            OUR ESTEEMED PARTNERS
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            SPONSORS & <span className="text-[#EB0028]">COLLABORATORS</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base font-light mt-3">
            Supported by industry leaders who empower our vision of turning constraints into innovations.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Row 1 */}
      <div className="relative w-full overflow-hidden py-6 bg-white/[0.02] border-y border-white/10">
        <div className="flex w-max gap-8 animate-marquee">
          {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
            <div
              key={idx}
              className="glass-card px-8 py-6 flex flex-col items-center justify-center min-w-[200px] border-white/10 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-[#EB0028]/50 hover:shadow-[0_0_30px_rgba(235,0,40,0.3)] transition-all duration-500 cursor-pointer group"
            >
              <span className="font-bebas text-2xl tracking-widest text-white group-hover:text-[#EB0028] transition-colors">
                {sponsor.logoText}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                {sponsor.tier} Partner
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsor Tier Badges Grid */}
      <div className="container mx-auto px-4 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass-card p-4">
            <span className="text-xs font-mono text-[#EB0028] uppercase block font-bold mb-1">TITLE SPONSOR</span>
            <span className="font-bebas text-xl text-white">JK BANK</span>
          </div>
          <div className="glass-card p-4">
            <span className="text-xs font-mono text-amber-400 uppercase block font-bold mb-1">DIAMOND SPONSORS</span>
            <span className="font-bebas text-xl text-white">TECH MAHINDRA • TOURISM</span>
          </div>
          <div className="glass-card p-4">
            <span className="text-xs font-mono text-neutral-300 uppercase block font-bold mb-1">GOLD PARTNERS</span>
            <span className="font-bebas text-xl text-white">INTEL • RED BULL</span>
          </div>
          <div className="glass-card p-4">
            <span className="text-xs font-mono text-neutral-400 uppercase block font-bold mb-1">COMMUNITY</span>
            <span className="font-bebas text-xl text-white">GITHUB • SPOTIFY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
