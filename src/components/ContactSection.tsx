import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="accent-line mb-4" />
          <h2 className="text-3xl md:text-5xl font-display mb-6">
            Let's work<br />together
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
          className="space-y-8"
        >
          <a
            href="mailto:nishchaysahu@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
              <p className="text-foreground group-hover:text-primary transition-colors">nishchaysahu@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center">
              <MapPin size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
              <p className="text-foreground">India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center">
              <Phone size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
              <p className="text-foreground">Available on request</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-border text-sm hover:border-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-border text-sm hover:border-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
