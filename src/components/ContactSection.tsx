import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:jyotikasinha34@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-text-secondary max-w-lg mx-auto">
            Interested in collaborating or have a question? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            className="md:col-span-2 space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card-hover p-5">
              <Mail size={18} className="text-primary mb-3" />
              <p className="text-sm font-medium mb-1">Email</p>
              <a href="mailto:jyotikasinha34@gmail.com" className="text-xs text-text-secondary hover:text-primary transition-colors">
                jyotikasinha34@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/JYOTIKA04"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 flex-1 flex items-center justify-center hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jyotika-sinha-/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 flex-1 flex items-center justify-center hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-6 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_20px_hsla(217,91%,60%,0.1)] transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_20px_hsla(217,91%,60%,0.1)] transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:shadow-[0_0_20px_hsla(217,91%,60%,0.1)] transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_hsla(217,91%,60%,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
            >
              <Send size={15} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
