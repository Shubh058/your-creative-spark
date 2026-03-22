import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, Bot } from "lucide-react";

const projects = [
  {
    title: "Fresh Basket",
    subtitle: "E-Commerce Platform",
    icon: ShoppingCart,
    description:
      "A full-featured grocery e-commerce website with product search, advanced filtering, cart system, and high Lighthouse performance scores.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB"],
    gradient: "from-primary/20 to-accent/10",
    githubUrl: "https://github.com/JYOTIKA04/fresh-basket",
  },
  {
    title: "Sleep Apnea Chatbot",
    subtitle: "AI / NLP Application",
    icon: Bot,
    description:
      "An AI-based chatbot for sleep apnea health awareness. Uses NLP-based responses with high performance and accessibility scores.",
    tech: ["HTML", "Tailwind", "JavaScript", "Node.js", "Python", "MongoDB"],
    gradient: "from-secondary/20 to-primary/10",
    githubUrl: "https://github.com/JYOTIKA04/chatbot",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <project.icon
                  size={48}
                  className="text-primary/60 group-hover:text-primary/80 transition-colors relative z-10"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{project.title}</h3>
                </div>
                <p className="text-xs text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[11px] font-medium rounded bg-white/[0.04] text-muted-foreground border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all">
                    <Github size={13} />
                    Code
                  </a>
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md bg-white/[0.03] text-text-secondary border border-white/[0.06] hover:border-primary/20 hover:text-primary transition-all">
                    <ExternalLink size={13} />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
