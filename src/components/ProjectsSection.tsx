import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NeuroBlink",
    subtitle: "Deepfake Detection via Eye-Blink Analysis",
    tech: "Python · TensorFlow · CNN · LSTM · OpenCV",
    desc: "AI pipeline detecting deepfakes via eye-blinking patterns with 92% accuracy. Research accepted at IEEE International Conference 2025.",
  },
  {
    number: "02",
    title: "Order Management System",
    subtitle: "Enterprise Backend Architecture",
    tech: "Java · REST APIs · MySQL · JDBC",
    desc: "Enterprise backend managing orders, users, and inventory. Normalized relational DB schema with optimized queries for bulk operations.",
  },
  {
    number: "03",
    title: "Hotel Menu Manager",
    subtitle: "Full-Stack CRUD Application",
    tech: "Node.js · MySQL · JavaScript · JWT",
    desc: "Role-based web app for menu and pricing management with JWT auth. Reduced manual update effort by 60% with streamlined CRUD operations.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="accent-line mb-4" />
        <h2 className="text-3xl md:text-4xl font-display">Selected Projects</h2>
      </motion.div>

      <div className="space-y-0 border-t border-border">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-b border-border py-10 md:py-12 group cursor-pointer hover:bg-card/50 transition-colors px-4 -mx-4 md:px-8 md:-mx-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="text-sm text-primary font-body tracking-wider md:pt-2">{p.number}</span>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-2"
                  />
                </div>
                <p className="text-xs text-primary/70 font-mono mt-3">{p.tech}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-xl">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
