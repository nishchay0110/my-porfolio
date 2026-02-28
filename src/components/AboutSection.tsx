import { motion } from "framer-motion";

const highlights = [
  { label: "Degree", value: "B.E. CS" },
  { label: "Graduation", value: "2026" },
  { label: "APIs Built", value: "15+" },
  { label: "Papers", value: "2" },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="accent-line mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">About Me</h2>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 hover:border-primary/30 transition-colors"
              >
                <p className="text-2xl font-display font-bold gradient-text">{h.value}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm a backend-focused Computer Science student driven by the challenge of building
            systems that are both powerful and elegant. I believe great software starts with
            solid architecture.
          </p>
          <p>
            My work spans from building production-ready REST APIs at{" "}
            <span className="text-primary font-medium">HashedBit Innovations</span> to publishing
            AI research on deepfake detection at IEEE conferences. I developed{" "}
            <span className="text-primary font-medium">NeuroBlink</span>, a CNN+LSTM pipeline
            achieving 92% accuracy in detecting manipulated media.
          </p>
          <p>
            Beyond code, I lead the <span className="text-primary font-medium">Sipna Coders Club</span>,
            mentoring 50+ students and organizing technical events for 150+ participants.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:shadow-[0_0_25px_hsl(175_85%_50%/0.3)] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-border text-foreground px-6 py-3 rounded-full font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              See Projects
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
