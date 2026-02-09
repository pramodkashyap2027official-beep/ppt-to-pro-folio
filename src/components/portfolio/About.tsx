import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Users } from "lucide-react";

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Bihar, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE, LPU" },
  { icon: Briefcase, label: "Focus", value: "ML & AI" },
  { icon: Users, label: "Availability", value: "Open to Opportunities" },
];

const softSkills = ["Problem-Solving", "Team Player", "Communication", "Adaptability", "Quick Learner"];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm <span className="text-foreground font-medium">Pramod Kashyap</span>, a passionate Computer Science student at Lovely Professional University, driven by curiosity in Machine Learning, Artificial Intelligence, and Full Stack Development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I love building intelligent solutions that solve real-world problems. From developing a career counselor chatbot using NLP to creating interactive DSA visualization platforms, I enjoy turning complex ideas into elegant, functional software.
            </p>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full text-sm glass-card text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {quickFacts.map((fact, index) => (
              <div
                key={fact.label}
                className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300"
              >
                <fact.icon className="h-6 w-6 text-primary mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-foreground font-medium text-sm">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
