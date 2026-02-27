import { motion } from "framer-motion";

const highlights = [
  { label: "Degree", value: "B.E. Computer Science" },
  { label: "Graduation", value: "2026" },
  { label: "APIs Built", value: "15+" },
  { label: "Research Papers", value: "2 Published" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-16">
        {/* Left - narrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="accent-line mb-4" />
          <h2 className="text-3xl md:text-4xl font-display mb-6">
            About Me
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((h) => (
              <div key={h.label} className="border border-border rounded-xl p-4">
                <p className="text-2xl font-display text-primary">{h.value}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{h.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - content */}
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
            <span className="text-foreground font-medium">HashedBit Innovations</span> to publishing 
            AI research on deepfake detection at IEEE conferences. I developed{" "}
            <span className="text-foreground font-medium">NeuroBlink</span>, a CNN+LSTM pipeline 
            achieving 92% accuracy in detecting manipulated media.
          </p>
          <p>
            Beyond code, I lead the <span className="text-foreground font-medium">Sipna Coders Club</span>, 
            mentoring 50+ students and organizing technical events for 150+ participants. I'm passionate 
            about creating impact through technology and community.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-border text-foreground px-6 py-3 rounded-full font-medium text-sm hover:border-foreground transition-colors"
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
