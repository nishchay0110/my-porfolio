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
        className="mb-16"
      >
        <div className="accent-line mb-4" />
        <h2 className="text-3xl md:text-4xl font-display font-bold">Skills & Technologies</h2>
      </motion.div>

      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12"
          >
            <h3 className="text-sm uppercase tracking-widest text-primary font-semibold md:w-28 md:text-right shrink-0">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass-card text-sm text-foreground hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_hsl(175_85%_50%/0.1)] transition-all duration-300 cursor-default"
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
