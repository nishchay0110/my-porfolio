import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">I'm Anand Tayde</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a backend-focused Computer Science student passionate about building scalable systems and solving real-world problems through code.
            </p>
            <p>
              I developed <span className="text-foreground font-medium">ExploreManu</span> and{" "}
              <span className="text-foreground font-medium">NeuroBlink</span> (IEEE-published deepfake detection) and built 15+ REST APIs.
            </p>
            <p>
              I mentor students and actively contribute to technical learning and development culture.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-medium hover:bg-secondary/80 transition-colors text-sm"
            >
              Browse Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { value: "B.E.", label: "Computer Science" },
            { value: "2026", label: "Expected Graduation" },
            { value: "150+", label: "Hackathon Participants" },
            { value: "15+", label: "REST APIs Built" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 text-center glow-border">
              <p className="text-2xl font-bold text-primary font-display">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
