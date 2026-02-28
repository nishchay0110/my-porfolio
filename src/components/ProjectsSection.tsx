import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NeuroBlink",
    subtitle: "Deepfake Detection via Eye-Blink Analysis",
    tech: ["Python", "TensorFlow", "CNN", "LSTM", "OpenCV"],
    desc: "AI pipeline detecting deepfakes via eye-blinking patterns with 92% accuracy. Research accepted at IEEE International Conference 2025.",
    highlight: "92% accuracy",
  },
  {
    title: "Order Management System",
    subtitle: "Enterprise Backend Architecture",
    tech: ["Java", "REST APIs", "MySQL", "JDBC"],
    desc: "Enterprise backend managing orders, users, and inventory. Normalized relational DB schema with optimized queries for bulk operations.",
    highlight: "10K+ records",
  },
  {
    title: "Hotel Menu Manager",
    subtitle: "Full-Stack CRUD Application",
    tech: ["Node.js", "MySQL", "JavaScript", "JWT"],
    desc: "Role-based web app for menu and pricing management with JWT auth. Reduced manual update effort by 60%.",
    highlight: "60% faster",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-card p-6 group cursor-pointer hover:border-primary/30 hover:shadow-[0_0_40px_hsl(175_85%_50%/0.06)] transition-all duration-500 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold">
                {p.highlight}
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors mb-1">
              {p.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">{p.subtitle}</p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map((t) => (
                <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
