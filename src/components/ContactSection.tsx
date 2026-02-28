import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="accent-line mb-4" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Let's build<br />
            <span className="gradient-text">something great</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            I'm open to backend engineering roles, research collaborations, and exciting projects.
            Drop me a line — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "nishchaysahu@gmail.com", href: "mailto:nishchaysahu@gmail.com" },
            { icon: MapPin, label: "Location", value: "India" },
            { icon: Phone, label: "Phone", value: "Available on request" },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} className="text-foreground hover:text-primary transition-colors text-sm">{value}</a>
                ) : (
                  <p className="text-foreground text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
