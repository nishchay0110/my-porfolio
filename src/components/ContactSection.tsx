import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="accent-line mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-12">
          Open to backend roles, research collaborations, and exciting projects. Let's build something meaningful together.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid sm:grid-cols-3 gap-4 mb-10"
      >
        {[
          { icon: Mail, label: "Email", value: "nishchaysahu@gmail.com", href: "mailto:nishchaysahu@gmail.com" },
          { icon: MapPin, label: "Location", value: "India" },
          { icon: Phone, label: "Phone", value: "On request" },
        ].map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="glass-card p-5 text-center hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Icon size={18} className="text-primary" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
            {href ? (
              <a href={href} className="text-sm text-foreground hover:text-primary transition-colors font-medium">{value}</a>
            ) : (
              <p className="text-sm text-foreground font-medium">{value}</p>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-3"
      >
        <a
          href="mailto:nishchaysahu@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-[0_0_25px_hsl(175_85%_50%/0.3)] transition-all duration-300"
        >
          <Send size={14} />
          Send Email
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-xl text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-xl text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
