import { motion } from "framer-motion";
import { Code, Cpu, Database, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Cpu,
    skills: [
      { name: "Node.js", level: 70 },
      { name: "TensorFlow", level: 65 },
      { name: "Scikit-learn", level: 75 },
      { name: "Git", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: [
      { name: "MySQL", level: 70 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Power BI", level: 65 },
      { name: "Excel", level: 75 },
    ],
  },
  {
    title: "Core Competencies",
    icon: BarChart3,
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Data Analysis", level: 70 },
      { name: "Web Development", level: 70 },
      { name: "NLP", level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
