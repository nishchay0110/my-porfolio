import { motion } from "framer-motion";
import { Briefcase, Users, Award } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "SDE Intern",
    org: "HashedBit Innovations (Remote)",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Built 15+ RESTful APIs with Node.js & Express.js",
      "Reduced API response time by 40%",
      "Designed MongoDB schemas for 10K+ records",
      "Improved engagement by 35% with React components",
    ],
  },
  {
    icon: Users,
    title: "President",
    org: "Sipna Coders Club",
    period: "2023 – Present",
    points: [
      "Led 50+ members in technical workshops",
      "Organized 10+ coding events",
      "Managed Devthon 2025 for 150+ participants",
    ],
  },
  {
    icon: Award,
    title: "Research & Publications",
    org: "IEEE & ANTIC",
    period: "2025",
    points: [
      "IEEE International Conference 2025",
      "ANTIC 2025 Conference",
      "Campus Ambassador – E-Cell IIT Bombay",
      "Campus Ambassador – Techfest IIT Bombay",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">My Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <t.icon className="text-primary" size={18} />
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                  <h3 className="text-lg font-semibold font-display">{t.title}</h3>
                  <span className="text-xs text-primary font-mono">{t.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{t.org}</p>
                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
