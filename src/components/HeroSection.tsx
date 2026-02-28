import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center section-padding pt-20 relative z-10">
    <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6"
        >
          Backend Engineer · Researcher · Builder
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 tracking-tight">
          Nishchay
          <br />
          <span className="gradient-text glow-text">Sahu</span>
          <span className="text-primary">.</span>
        </h1>

        <p className="text-base text-muted-foreground max-w-md leading-relaxed mb-8">
          Crafting scalable backends, optimizing databases, and pushing AI research boundaries.
          Currently exploring deepfake detection & building production-grade APIs.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-[0_0_30px_hsl(175_85%_50%/0.3)] transition-all duration-300"
          >
            Explore Work
            <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/" },
            { icon: Linkedin, href: "https://linkedin.com/" },
            { icon: Mail, href: "mailto:nishchaysahu@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right - stats grid */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { num: "15+", label: "APIs Built", desc: "Production-ready RESTful APIs" },
          { num: "92%", label: "AI Accuracy", desc: "NeuroBlink deepfake detection" },
          { num: "2", label: "IEEE Papers", desc: "Published research papers" },
          { num: "150+", label: "Event Attendees", desc: "Devthon 2025 participants" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="glass-card p-5 hover:border-primary/30 transition-all duration-300"
          >
            <p className="text-3xl font-display font-bold gradient-text">{s.num}</p>
            <p className="text-sm text-foreground font-medium mt-2">{s.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
