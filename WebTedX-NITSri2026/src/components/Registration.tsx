import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegistrationProps {
  onOpenPayment?: () => void;
}

export default function Registration({ onOpenPayment }: RegistrationProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    profession: "Student",
    passType: "General Pass",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onOpenPayment) {
      onOpenPayment();
    }
  };

  return (
    <section id="register" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glowing glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EB0028]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            SECURE YOUR PASS
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            REGISTER FOR <span className="text-[#EB0028]">TEDx NIT SRINAGAR</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base md:text-lg font-light mt-3">
            Be part of an extraordinary day. Experience groundbreaking ideas, networking, and cinematic storytelling live.
          </p>
        </div>

        {/* Glassmorphic Registration Box */}
        <div className="glass-card p-8 lg:p-12 border-white/15 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#EB0028] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#EB0028] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#EB0028] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-2">
                      College / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="e.g. NIT Srinagar"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#EB0028] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-2">
                      Profession
                    </label>
                    <select
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-white/10 text-white focus:outline-none focus:border-[#EB0028] transition-colors text-sm"
                    >
                      <option value="Student">Student</option>
                      <option value="Researcher">Researcher / Academic</option>
                      <option value="Entrepreneur">Entrepreneur / Founder</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Creative">Creative / Artist</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#EB0028] hover:bg-[#FF1A40] text-white font-poppins font-semibold py-4 rounded-xl text-base tracking-wider uppercase ted-border-glow transition-all duration-300 hover:scale-[1.02] mt-4"
                >
                  Proceed to Complete Registration & Pay ₹399
                </Button>
              </form>
            </div>

            {/* Ticket Info Box */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div>
                <div className="flex items-center gap-2 text-[#EB0028] mb-4">
                  <Ticket className="w-6 h-6" />
                  <span className="font-bebas text-2xl tracking-wider text-white">ALL ACCESS DELEGATE PASS</span>
                </div>

                <div className="border-b border-white/10 pb-4 mb-4">
                  <span className="font-space text-4xl font-bold text-white">₹399</span>
                  <span className="text-neutral-400 text-xs font-inter ml-2">/ per person</span>
                </div>

                <ul className="space-y-3 font-inter text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#EB0028]" />
                    Full access to all keynote sessions & stage talks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#EB0028]" />
                    Official TEDx NIT Srinagar delegate kit & merchandise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#EB0028]" />
                    Networking lunch & tea refreshments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#EB0028]" />
                    Digital Certificate of Participation
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-neutral-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Instant verification & secure UPI payment workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
