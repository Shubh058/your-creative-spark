import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/6" />
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[120px] animate-pulse-glow"
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/[0.06] blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] hidden lg:block glass-card px-4 py-3 opacity-40"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-text-secondary font-mono">3 tasks completed</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -12, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[8%] hidden lg:block glass-card px-4 py-3 opacity-40"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-text-secondary font-mono">100+ problems solved</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text glow-text">Jyotika</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary font-medium mb-4"
        >
          Full Stack Developer crafting scalable web experiences
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          I build modern web applications and intelligent systems using full-stack
          technologies, focusing on performance, usability, and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsla(217,91%,60%,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
