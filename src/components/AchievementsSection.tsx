import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Award, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top 20 – Zinnovatio 3.0 Hackathon",
    description: "Among 600+ participants nationwide",
  },
  {
    icon: Code2,
    title: "100+ DSA Problems Solved",
    description: "Across LeetCode and CodeChef",
    link: "https://leetcode.com/u/Jyotika04/",
  },
];

const certificates = [
  { title: "Generative AI", issuer: "Infosys" },
  { title: "C++ OOPS & DSA", issuer: "CSE Pathshala" },
  { title: "MongoDB Certification", issuer: "MongoDB" },
  { title: "Cloud Computing", issuer: "NPTEL" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Achievements & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {achievements.map((item, i) => {
            const cardContent = (
            <motion.div
              key={item.link ? undefined : i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card-hover p-6 flex items-start gap-4 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold tracking-tight mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
          return item.link ? (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
        </div>

        {/* Certificates */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + 0.08 * i }}
              className="glass-card-hover p-5 text-center"
            >
              <Award size={24} className="text-primary/60 mx-auto mb-3" />
              <h4 className="font-display text-sm font-semibold mb-1">{cert.title}</h4>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
