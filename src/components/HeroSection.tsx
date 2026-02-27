import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const stats = [
  { value: "13+", label: "APIs Built" },
  { value: "2+", label: "Years Experience" },
  { value: "44+", label: "Club Members Led" },
  { value: "1", label: "Research Paper" },
];

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-28">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Learn → Build → Repeat
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build{" "}
            <span className="text-gradient">Scalable Systems</span>
            <br />
            <span className="italic font-light text-muted-foreground">step by step</span>{" "}
            With Anand
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            Backend-focused CS Engineer — building robust APIs, optimizing databases, and researching AI-powered deepfake detection. Let's build something meaningful.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity group"
          >
            See my work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
            <img
              src={heroImg}
              alt="Developer illustration"
              className="relative rounded-3xl w-full max-w-md animate-float"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
      >
        {stats.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-6 text-center glow-border">
            <p className="text-3xl font-bold text-primary font-display">{s.value}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
