import { motion } from "framer-motion";
import { Code2, Database, Brain, Layout, Wrench } from "lucide-react";

const aboutItems = [
  {
    icon: Code2,
    title: "Backend Engineering",
    text: "Building production-ready REST APIs with Node.js & Express at HashedBit Innovations. Reduced response times by 40%.",
  },
  {
    icon: Brain,
    title: "AI Research",
    text: "Developed NeuroBlink — a CNN+LSTM deepfake detection pipeline with 92% accuracy. Published at IEEE 2025.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Designing optimized MongoDB & MySQL schemas for 10K+ record workloads with efficient query patterns.",
  },
  {
    icon: Layout,
    title: "Community Leadership",
    text: "President of Sipna Coders Club, mentoring 50+ students and organizing events for 150+ participants.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What I Do</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          B.E. Computer Science student graduating 2026 — passionate about systems, scale, and solving hard problems.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {aboutItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 group hover:border-primary/30 transition-all duration-400"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
