import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { FolderKanban, Users } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "6+", label1: "Completed", label2: "Projects", Icon: FolderKanban },
    { number: "4+", label1: "Team", label2: "Collaborations", Icon: Users }
  ];
  return <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl opacity-20"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-secondary glow-box-secondary"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={profileImage} alt="Lakna Vidanapathirana" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Software Engineering Undergraduate
              <br />
              at SLIIT
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate Software Engineering student at SLIIT, currently pursuing my degree with an expected graduation in 2027.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Over the past few years, I've turned my passion for technology into hands-on expertise in full-stack web development, mobile apps, and cloud computing.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I love blending code with creativity—from building scalable MERN, Java, and PHP web apps, to crafting smooth Android apps with Kotlin & XML, and designing intuitive UI/UX experiences that are as functional as they are delightful.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={achievement.number} 
                  className="flex flex-col items-center justify-center gap-1 py-6 px-8 bg-card border border-primary/20 rounded-xl hover:border-primary/50 transition-all glow-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <achievement.Icon className="w-8 h-8 text-primary mb-1" />
                  <h4 className="text-2xl font-bold text-foreground">{achievement.number}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.label2}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;