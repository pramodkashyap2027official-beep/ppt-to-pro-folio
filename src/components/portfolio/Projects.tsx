import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DSA Visualisation",
    description:
      "An interactive platform for visualizing data structures and algorithms, helping students and developers understand complex concepts through animated, step-by-step visual representations.",
    tech: ["HTML", "CSS", "JavaScript", "D3.js", "React.js"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Career Counselor Chatbot",
    description:
      "An ML-enabled intelligent chatbot using Natural Language Processing and cognitive science principles to provide personalized career guidance and recommendations to students.",
    tech: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    color: "from-accent/20 to-primary/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover rounded-xl overflow-hidden transition-all duration-300 group"
            >
              {/* Gradient accent top */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 hover:border-primary/40">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 hover:border-primary/40">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
