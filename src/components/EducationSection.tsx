import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    period: "2023 – Present",
    detail: "CGPA: 7.05",
  },
  {
    institution: "Kendriya Vidyalaya, Pinjore",
    degree: "Intermediate (XII)",
    period: "Completed",
    detail: "74.8%",
  },
  {
    institution: "Kendriya Vidyalaya, Pinjore",
    degree: "Matriculation (X)",
    period: "Completed",
    detail: "91%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <GraduationCap size={16} className="text-primary" />
                  </div>
                </div>

                <div className="glass-card-hover p-5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-display font-semibold tracking-tight">{edu.institution}</h3>
                    <span className="text-xs text-primary font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{edu.degree}</p>
                  <p className="text-sm font-semibold text-primary mt-1">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
