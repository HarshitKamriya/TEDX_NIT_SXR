import { useEffect, useRef } from "react";

export default function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      fadeSpeed: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = [
      "rgba(235, 0, 40, ",   // TED Red
      "rgba(255, 69, 0, ",   // Red-Orange
      "rgba(255, 140, 0, ",  // Dark Orange
      "rgba(255, 215, 0, ",  // Gold Spark
    ];

    const createParticle = (): Particle => {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 50,
        size: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8,
        alpha: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize initial pool of particles
    const particleCount = Math.min(Math.floor(width / 15), 90);
    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // Distribute across canvas height initially
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.alpha -= p.fadeSpeed;

        if (p.alpha <= 0 || p.y < -10) {
          particles[i] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = "#EB0028";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
