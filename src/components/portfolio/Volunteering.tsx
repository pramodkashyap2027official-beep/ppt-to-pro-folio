import { motion } from "framer-motion";
import { Globe, Megaphone, Shield, Heart } from "lucide-react";

const activities = [
  {
    icon: Globe,
    title: "International Seminar",
    description: "Participated in an international seminar on Agriculture 2024, engaging with global perspectives on sustainable farming.",
  },
  {
    icon: Megaphone,
    title: "Social Media & Webinar Management",
    description: "Managed social media campaigns and organized webinars, developing strong communication and organizational skills.",
  },
  {
    icon: Shield,
    title: "Cyber Crime Awareness",
    description: "Organized cyber crime awareness sessions to educate students and community members about online safety and digital hygiene.",
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Visited schools and public places to spread awareness about social issues and promote community development.",
  },
];

const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Volunteering & <span className="text-gradient">Activities</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-5 transition-all duration-300 text-center group"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <activity.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">
                {activity.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
