import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "story", label: "Theme Story" },
      { id: "timeline", label: "Timeline" },
      { id: "speakers", label: "Speakers" },
      { id: "pastspeakers", label: "Past Speakers" },
      { id: "stats", label: "Stats" },
      { id: "sponsors", label: "Sponsors" },
      { id: "gallery", label: "Gallery" },
      { id: "schedule", label: "Schedule" },
      { id: "faq", label: "FAQ" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 40);

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);

    const scrollPos = currentScrollY + window.innerHeight / 3;
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const { offsetTop, offsetHeight } = el;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    }
  }, [lastScrollY, navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-1 select-none group"
        >
          <span className="font-bebas text-3xl font-bold text-[#EB0028] tracking-wider transition-transform group-hover:scale-105">
            TED<span className="text-white">x</span>
          </span>
          <span className="font-inter text-xs tracking-widest uppercase font-semibold text-neutral-300 ml-1">
            NIT Srinagar
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 ${
                activeSection === item.id
                  ? "text-[#EB0028] font-bold"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EB0028] shadow-[0_0_10px_#EB0028] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Register Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("register")}
            className="bg-[#EB0028] hover:bg-[#FF1A40] text-white font-poppins font-medium text-xs tracking-wider uppercase px-6 py-2 rounded-full ted-border-glow transition-all duration-300 hover:scale-105"
          >
            Register Now
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#0A0A0A]/95 backdrop-blur-xl border-white/10 text-white w-[80vw] max-w-sm"
            >
              <div className="mt-8 flex flex-col gap-4">
                <div className="font-bebas text-2xl text-[#EB0028] tracking-widest mb-4">
                  NAVIGATION
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? "bg-[#EB0028]/20 text-[#EB0028] border border-[#EB0028]/40"
                        : "text-neutral-300 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
