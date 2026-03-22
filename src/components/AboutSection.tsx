import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, label: "Problems Solved", value: "100+" },
  { icon: Brain, label: "Projects Built", value: "5+" },
  { icon: Trophy, label: "Hackathon Top 20", value: "1" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              I'm a Computer Science student at{" "}
              <span className="text-foreground font-medium">Lovely Professional University</span>{" "}
              with hands-on experience in full-stack development and AI-powered applications.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              I enjoy solving complex problems and have solved{" "}
              <span className="text-primary font-medium">100+ DSA questions</span> across platforms
              like LeetCode and CodeChef. I'm passionate about building scalable web applications
              and exploring cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React.js", "Node.js", "MongoDB", "C++", "Python", "Tailwind CSS"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary/8 text-primary border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card-hover p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold tracking-tight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
