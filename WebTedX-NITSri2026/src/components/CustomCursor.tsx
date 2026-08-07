import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports pointer hover (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isButton =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".clickable");
      const isCard = target.closest(".glass-card") || target.closest(".speaker-card");

      if (isButton) {
        setCursorVariant("hoverButton");
      } else if (isCard) {
        setCursorVariant("hoverCard");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(235, 0, 40, 0.3)",
      border: "1.5px solid rgba(235, 0, 40, 0.8)",
      boxShadow: "0 0 20px rgba(235, 0, 40, 0.6)",
      transition: { type: "spring", mass: 0.15, stiffness: 800, damping: 35 },
    },
    hoverButton: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(235, 0, 40, 0.2)",
      border: "2px solid #EB0028",
      boxShadow: "0 0 35px rgba(235, 0, 40, 0.9)",
      transition: { type: "spring", mass: 0.1, stiffness: 900, damping: 30 },
    },
    hoverCard: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1.5px solid rgba(255, 255, 255, 0.6)",
      boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
      transition: { type: "spring", mass: 0.12, stiffness: 850, damping: 32 },
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen hidden md:block"
      variants={variants}
      animate={cursorVariant}
    />
  );
}
