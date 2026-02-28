import { motion } from "framer-motion";

const skillGroups = [
  { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Java", "JDBC"] },
  { category: "Databases", skills: ["MongoDB", "MySQL", "Schema Design", "Query Optimization"] },
  { category: "AI / ML", skills: ["TensorFlow", "CNN", "LSTM", "OpenCV", "Python"] },
  { category: "Frontend", skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { category: "Tools", skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-display font-bold">Tech Stack</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${
              i === skillGroups.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary/15 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
