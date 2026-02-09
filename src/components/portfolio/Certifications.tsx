import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy — Dr. Angela Yu",
    duration: "62 hours",
    grade: null,
    pdfUrl: "/certificates/udemy-webdev.pdf",
  },
  {
    title: "Mastering Data Structures and Algorithms",
    issuer: "Lovely Professional University",
    duration: null,
    grade: "Grade A",
    pdfUrl: "/certificates/lpu-dsa.pdf",
  },
  {
    title: "C Programming",
    issuer: "CSE Pathshala",
    duration: null,
    grade: null,
    pdfUrl: null,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300 flex flex-col group"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                {cert.duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {cert.duration}
                  </span>
                )}
                {cert.grade && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {cert.grade}
                  </span>
                )}
              </div>

              <div className="mt-auto">
                {cert.pdfUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 rounded-full border-primary/20 hover:border-primary/40"
                  >
                    <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="w-full gap-2 rounded-full opacity-50"
                  >
                    Certificate Unavailable
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
