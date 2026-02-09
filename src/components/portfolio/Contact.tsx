import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>

            <div className="space-y-5 mb-8">
              <a
                href="mailto:pramodkashyap2004@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 rounded-xl glass-card group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Email</p>
                  <p className="text-sm text-foreground">pramodkashyap2004@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-xl glass-card">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Phone</p>
                  <p className="text-sm text-foreground">+91-9142688498</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-xl glass-card">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">Location</p>
                  <p className="text-sm text-foreground">Bihar, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/pramodkashyap"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card glass-card-hover text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/pramodkashyap"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card glass-card-hover text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pramodkashyap2004@gmail.com"
                className="p-3 rounded-xl glass-card glass-card-hover text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form (visual only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              className="glass-card rounded-xl p-6 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="What's this about?"
                  className="bg-secondary/50 border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>
              <Button className="w-full gap-2 rounded-full" size="lg">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
