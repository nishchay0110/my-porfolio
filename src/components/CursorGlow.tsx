import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${target.current.x - 200}px, ${target.current.y - 200}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary glow - follows cursor tightly */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(175 85% 50% / 0.4) 0%, hsl(265 70% 60% / 0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />
      {/* Trail glow - follows with delay */}
      <div
        ref={trailRef}
        className="absolute w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(265 70% 60% / 0.3) 0%, hsl(175 85% 50% / 0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Static ambient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(175 85% 50% / 0.05) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(265 70% 60% / 0.05) 0%, transparent 60%)",
          filter: "blur(100px)",
          animationDelay: "2s",
        }}
      />
    </div>
  );
};

export default CursorGlow;
