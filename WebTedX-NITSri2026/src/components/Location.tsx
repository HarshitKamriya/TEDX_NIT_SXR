import { MapPin, Navigation, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#EB0028] font-bold mb-3 font-poppins">
            VENUE & DIRECTION
          </h2>
          <h3 className="font-bebas text-5xl md:text-7xl text-white tracking-wide uppercase">
            EVENT <span className="text-[#EB0028]">LOCATION</span>
          </h3>
          <p className="font-inter text-neutral-400 text-base font-light mt-3">
            Join us on the picturesque banks of Dal Lake at the Sher-i-Kashmir International Conference Centre (SKICC).
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 glass-card p-8 flex flex-col justify-between border-white/15 rounded-[24px]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EB0028]/20 border border-[#EB0028]/40 text-[#EB0028] text-xs font-mono mb-6">
                <MapPin className="w-3.5 h-3.5" />
                VENUE HIGHLIGHT
              </div>

              <h4 className="font-bebas text-3xl text-white tracking-wide mb-3">
                SKICC CONVOCATION CENTER
              </h4>

              <p className="font-inter text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Sher-i-Kashmir International Conference Centre (SKICC), Cheshmashahi, near Centaur Hotel, Srinagar, Jammu and Kashmir 191121
              </p>

              <div className="space-y-4 font-inter text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EB0028]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 font-mono uppercase block text-[10px]">EVENT DATE</span>
                    <span className="font-semibold text-white">November 18, 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EB0028]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 font-mono uppercase block text-[10px]">TIME</span>
                    <span className="font-semibold text-white">09:00 AM - 05:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Sher-i-Kashmir+International+Conference+Centre+Srinagar",
                    "_blank"
                  )
                }
                className="w-full bg-[#EB0028] hover:bg-[#FF1A40] text-white font-poppins text-xs uppercase tracking-wider gap-2 rounded-full py-4"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 glass-card overflow-hidden rounded-[24px] border-white/15 min-h-[380px]">
            <iframe
              title="SKICC Srinagar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.595460595374!2d74.8622960764121!3d34.0800057161833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185c7c25e839f%3A0x6bfae8b15d2a93c7!2sSher-i-Kashmir%20International%20Conference%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
