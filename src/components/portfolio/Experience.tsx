import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const techStack = ["Python", "NumPy", "Pandas", "Scikit-learn", "Jupyter Notebook"];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card glow-border rounded-xl p-8 max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 shrink-0">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Machine Learning & AI Intern
              </h3>
              <p className="text-primary font-medium mb-2">Internshala</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>March 2025 — April 2025</span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Built a Movie Recommendation System using collaborative and content-based filtering techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Applied data preprocessing, feature engineering, and model evaluation using Scikit-learn
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Gained hands-on experience with real-world ML pipelines and dataset handling
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
