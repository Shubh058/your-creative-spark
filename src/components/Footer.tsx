import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/[0.04] py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © 2025 <span className="text-foreground font-medium">Jyotika</span>. Built with passion.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/JYOTIKA04" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/jyotika-sinha-/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="mailto:jyotikasinha34@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
