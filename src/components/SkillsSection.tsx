import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Wrench, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "JavaScript", "Python", "PHP"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["MySQL", "Git", "GitHub", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Core CS",
    icon: BookOpen,
    skills: ["DBMS", "Operating Systems", "Computer Networks", "OOPs"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold tracking-tight">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/[0.04] text-text-secondary border border-white/[0.06] hover:border-primary/20 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
