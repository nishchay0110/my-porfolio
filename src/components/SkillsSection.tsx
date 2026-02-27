import { motion } from "framer-motion";
import { Server, Database, Brain, Code2 } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Building and maintaining 15+ RESTful APIs using Node.js and Express.js, optimizing response times by 40%.",
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Designing MongoDB schemas handling 10,000+ records with normalized relational design and optimized indexing.",
    tags: ["MySQL", "MongoDB", "Schema Design"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Built deepfake detection pipeline with 92% accuracy using CNN + LSTM. Research published at IEEE 2025.",
    tags: ["TensorFlow", "CNN / LSTM", "OpenCV"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Developing reusable UI components with React.js, improving user engagement by 35% across projects.",
    tags: ["React.js", "JavaScript", "Java"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">What I bring to the table</p>
        <h2 className="text-3xl md:text-4xl font-bold">Why work with Anand</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {skills.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors group"
          >
            <s.icon className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-3 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
