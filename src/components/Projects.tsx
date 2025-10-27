import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import financeProject from "@/assets/project-finance.jpg";
import fashionProject from "@/assets/project-fashion.jpg";
import supplementProject from "@/assets/project-supplement.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Financial Tracking App",
      description: "A personal finance management Android app featuring income/expense tracking, budgeting, and spending insights with smart notifications and backup functionality.",
      image: financeProject,
      technologies: ["Kotlin", "XML", "SQLite"],
      repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
      demo: "#",
    },
    {
      title: "NOURA Fashion Store",
      description: "A full-featured online fashion store offering user accounts, product catalogs, shopping cart, reviews, and secure authentication.",
      image: fashionProject,
      technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
      repo: "https://github.com/Lakna30",
      demo: "#",
    },
    {
      title: "Gym Supplement Store",
      description: "A full-featured online fashion store offering user accounts, product catalogs, shopping cart, reviews, and secure authentication.",
      image: supplementProject,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      repo: "https://github.com/Lakna30/Online-supplement-store",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-heading-primary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border h-full flex flex-col"
            >
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 dark:block hidden"></div>
              </motion.div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <motion.h3 
                  className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="flex gap-3 pt-2">
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Repository
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
