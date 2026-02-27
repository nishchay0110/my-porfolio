import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Let's connect</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently open to Backend Engineering roles and exciting collaborations. Whether you have a question or just want to say hi — I'd love to hear from you.
        </p>

        <a
          href="mailto:anandtayade2004@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-opacity group"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 justify-center">
            <MapPin size={16} className="text-primary" /> Amravati, India
          </span>
          <span className="flex items-center gap-2 justify-center">
            <Phone size={16} className="text-primary" /> +91 9021250926
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
