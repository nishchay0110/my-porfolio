import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NeuroBlink",
    subtitle: "Deepfake Detection via Eye-Blink Analysis",
    tech: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV"],
    desc: "AI pipeline detecting deepfakes via eye-blinking patterns with 92% accuracy. Research accepted at IEEE International Conference 2025.",
  },
  {
    number: "02",
    title: "Order Management System",
    subtitle: "Enterprise Backend Architecture",
    tech: ["Java", "REST APIs", "MySQL", "JDBC"],
    desc: "Enterprise backend managing orders, users, and inventory. Normalized relational DB schema with optimized queries for bulk operations.",
  },
  {
    number: "03",
    title: "Hotel Menu Manager",
    subtitle: "Full-Stack CRUD Application",
    tech: ["Node.js", "MySQL", "JavaScript", "JWT"],
    desc: "Role-based web app for menu and pricing management with JWT auth. Reduced manual update effort by 60% with streamlined CRUD operations.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="accent-line mb-4" />
        <h2 className="text-3xl md:text-4xl font-display font-bold">Selected Projects</h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card p-6 md:p-8 group cursor-pointer hover:border-primary/30 hover:shadow-[0_0_40px_hsl(175_85%_50%/0.06)] transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <span className="text-3xl font-display font-bold gradient-text">{p.number}</span>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-xl">{p.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
