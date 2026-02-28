import { motion } from "framer-motion";
import { Briefcase, Users, BookOpen } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "SDE Intern",
    org: "HashedBit Innovations",
    period: "Jan – Apr 2025",
    points: [
      "Built 15+ RESTful APIs with Node.js & Express.js",
      "Reduced API response time by 40%",
      "Designed MongoDB schemas for 10K+ records",
      "Improved engagement by 35% with React components",
    ],
  },
  {
    icon: Users,
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
    icon: BookOpen,
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
  <section id="experience" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-display font-bold">Experience</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-6 z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}>
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <exp.icon size={16} className="text-primary" />
                    </div>
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.org}</p>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
