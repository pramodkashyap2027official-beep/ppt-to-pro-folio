import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech — Computer Science & Engineering",
    period: "August 2023 — Present",
    score: "CGPA: 5.0",
    highlight: true,
  },
  {
    institution: "Langat Singh College",
    degree: "Intermediate (12th)",
    period: "Completed",
    score: "76.2%",
    highlight: false,
  },
  {
    institution: "High School Sondho",
    degree: "Matriculation (10th)",
    period: "Completed",
    score: "86.8%",
    highlight: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6 pl-2"
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 shrink-0 p-2 rounded-full ${
                    edu.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                </div>

                <div className="glass-card glass-card-hover rounded-xl p-5 flex-1 transition-all duration-300">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
