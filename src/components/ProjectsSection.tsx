import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NeuroBlink – Deepfake Detection",
    tech: "Python · TensorFlow · CNN · LSTM · OpenCV",
    desc: "AI pipeline detecting deepfakes via eye-blinking patterns with 92% accuracy. Research accepted at IEEE International Conference 2025.",
    badges: ["🔬 Research", "🏆 IEEE 2025"],
  },
  {
    title: "Order Management System",
    tech: "Java · REST APIs · MySQL · JDBC",
    desc: "Enterprise backend system managing orders, users, and inventory. Implemented normalized relational DB schema and optimized queries for bulk operations.",
    badges: ["⚙️ Backend", "📊 Enterprise"],
  },
  {
    title: "Hotel Menu Management",
    tech: "Node.js · MySQL · JavaScript · JWT",
    desc: "Role-based web app for menu/pricing management with JWT authentication. Reduced manual update effort by 60% with complete CRUD operations.",
    badges: ["🔐 Auth", "🍽️ Full-Stack"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Featured work</p>
        <h2 className="text-3xl md:text-4xl font-bold">Projects I've built</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="glass-card rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="text-primary" size={18} />
              </div>
            </div>
            <h3 className="text-lg font-semibold font-display mb-2">{p.title}</h3>
            <p className="text-xs text-primary/80 mb-3 font-mono">{p.tech}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {p.badges.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
