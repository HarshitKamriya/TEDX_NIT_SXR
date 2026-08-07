import { useState } from "react";
import { Send, Instagram, Twitter, Linkedin, Youtube, Facebook, Heart } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed! You will receive TEDx NIT Srinagar updates.");
    setEmail("");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030303] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1 select-none">
              <span className="font-bebas text-4xl font-bold text-[#EB0028] tracking-wider">
                TED<span className="text-white">x</span>
              </span>
              <span className="font-inter text-xs tracking-widest uppercase font-semibold text-neutral-300 ml-1">
                NIT Srinagar
              </span>
            </div>

            <p className="font-inter text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              An independently organized TED event bringing together visionary thinkers, creators, and innovators to spark transformation under constraints.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#EB0028] hover:border-[#EB0028] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#EB0028] hover:border-[#EB0028] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#EB0028] hover:border-[#EB0028] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#EB0028] hover:border-[#EB0028] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bebas text-2xl text-white tracking-wider mb-4">QUICK NAVIGATION</h4>
            <ul className="space-y-2 font-inter text-xs text-neutral-400 font-medium uppercase tracking-wider">
              <li>
                <button onClick={() => scrollTo("home")} className="hover:text-[#EB0028] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("story")} className="hover:text-[#EB0028] transition-colors">
                  Theme Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("speakers")} className="hover:text-[#EB0028] transition-colors">
                  Speakers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("timeline")} className="hover:text-[#EB0028] transition-colors">
                  Editions Timeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("register")} className="hover:text-[#EB0028] transition-colors">
                  Register
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("faq")} className="hover:text-[#EB0028] transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bebas text-2xl text-white tracking-wider mb-2">STAY INFORMED</h4>
            <p className="font-inter text-xs text-neutral-400 font-light leading-relaxed">
              Subscribe to receive exclusive speaker announcements, ticket drops, and event schedules directly.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#EB0028] text-xs font-inter"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-[#EB0028] hover:bg-[#FF1A40] text-white flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 font-inter gap-4">
          <p>© {new Date().getFullYear()} TEDx NIT Srinagar. This independent TEDx event is operated under license from TED.</p>
          <p className="flex items-center gap-1">
            Crafted with passion by <span className="text-white font-medium">TEDx Team NIT Srinagar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
