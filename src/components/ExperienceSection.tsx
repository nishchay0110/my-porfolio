import { motion } from "framer-motion";

const experiences = [
  {
    role: "SDE Intern",
    org: "HashedBit Innovations",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Built 15+ RESTful APIs with Node.js & Express.js",
      "Reduced API response time by 40%",
      "Designed MongoDB schemas for 10K+ records",
      "Improved engagement by 35% with React components",
    ],
  },
  {
    role: "President",
    org: "Sipna Coders Club",
    period: "2023 – Present",
    points: [
      "Led 50+ members in technical workshops",
      "Organized 10+ coding events",
      "Managed Devthon 2025 for 150+ participants",
    ],
  },
  {
    role: "Research & Publications",
    org: "IEEE & ANTIC 2025",
    period: "2025",
    points: [
      "Published at IEEE International Conference 2025",
      "Published at ANTIC 2025 Conference",
      "Campus Ambassador – E-Cell & Techfest, IIT Bombay",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="accent-line mb-4" />
        <h2 className="text-3xl md:text-4xl font-display">Experience</h2>
      </motion.div>

      <div className="space-y-0 border-t border-border">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-b border-border py-10 md:py-12"
          >
            <div className="grid md:grid-cols-3 gap-4 md:gap-12">
              <div>
                <h3 className="text-xl font-display">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mt-1">{exp.org}</p>
                <p className="text-xs text-primary font-mono mt-2">{exp.period}</p>
              </div>
              <ul className="md:col-span-2 space-y-3">
                {exp.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-0.5 text-lg leading-none">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
