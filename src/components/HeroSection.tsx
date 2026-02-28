import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center section-padding pt-24 relative z-10">
    <div className="max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/40 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-body tracking-wider text-muted-foreground uppercase">
            Available for opportunities
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[1.02] mb-6 tracking-tight">
          <span className="gradient-text glow-text">Nishchay</span>
          <br />
          <span className="text-foreground">Sahu</span>
          <span className="text-primary">.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10 font-light">
          Backend engineer crafting scalable APIs, optimizing databases, and
          researching AI-powered systems. Building the future, one commit at a time.
        </p>

        <div className="flex flex-wrap gap-4 items-center mb-16">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:shadow-[0_0_30px_hsl(175_85%_50%/0.3)] transition-all duration-300"
          >
            View Projects
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nishchaysahu@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(175_85%_50%/0.15)] transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-20 flex items-center gap-3 text-muted-foreground"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-primary"
          />
        </div>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
