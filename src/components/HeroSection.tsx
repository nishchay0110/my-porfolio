import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center section-padding pt-24">
    <div className="max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-8">
          Backend Engineer · CS Student · Researcher
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display leading-[1.05] mb-8">
          Hi, I'm{" "}
          <span className="text-primary">Nishchay</span>
          <br />
          <span className="text-muted-foreground">Sahu</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
          I design robust backends, optimize databases, and research AI-powered systems. 
          Currently building scalable APIs and exploring deepfake detection.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-border text-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:border-foreground transition-colors"
          >
            About Me
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-24 flex items-center gap-3 text-muted-foreground"
      >
        <ArrowDown size={16} className="animate-bounce" />
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
