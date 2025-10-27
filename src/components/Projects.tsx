import { ExternalLink, Github, Smartphone, Monitor, Palette, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import financeProject from "@/assets/project-finance.jpg";
import fashionProject from "@/assets/project-fashion.jpg";
import supplementProject from "@/assets/project-supplement.jpg";
import uxProject from "@/assets/ux-project.png";

const Projects = () => {
  const projectCategories = [
    {
      id: "all",
      title: "All Projects",
      icon: <LayoutGrid className="w-5 h-5" />,
      projects: [
        {
          title: "NOURA Fashion Store",
          description: "E-commerce platform with user auth, product catalog & secure checkout",
          image: fashionProject,
          technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
          repo: "https://github.com/Lakna30",
          demo: "#",
        },
        {
          title: "Gym Supplement Store",
          description: "Full-stack e-commerce with React, Node.js & MongoDB",
          image: supplementProject,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
          repo: "https://github.com/Lakna30/Online-supplement-store",
          demo: "#",
        },
        {
          title: "Financial Tracking App",
          description: "Android app for personal finance management & budgeting",
          image: financeProject,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
          demo: "#",
        },
        {
          title: "Portfolio Redesign",
          description: "Modern UI/UX design for a professional portfolio website",
          image: uxProject,
          technologies: ["Figma", "Adobe XD", "User Research", "Wireframing"],
          repo: "#",
          demo: "#",
        }
      ],
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Monitor className="w-5 h-5" />,
      projects: [
        {
          title: "NOURA Fashion Store",
          description: "E-commerce platform with user auth, product catalog & secure checkout",
          image: fashionProject,
          technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
          repo: "https://github.com/Lakna30",
          demo: "#",
        },
        {
          title: "Gym Supplement Store",
          description: "Full-stack e-commerce with React, Node.js & MongoDB",
          image: supplementProject,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
          repo: "https://github.com/Lakna30/Online-supplement-store",
          demo: "#",
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
      projects: [
        {
          title: "Financial Tracking App",
          description: "Android app for personal finance management & budgeting",
          image: financeProject,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
          demo: "#",
        },
      ],
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Palette className="w-5 h-5" />,
      projects: [
        {
          title: "Portfolio Redesign",
          description: "Modern UI/UX design for a professional portfolio website",
          image: uxProject,
          technologies: ["Figma", "Adobe XD", "User Research", "Wireframing"],
          repo: "#",
          demo: "#",
        }
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Get all projects for the active category
  const getActiveProjects = () => {
    if (activeCategory === "all") {
      return projectCategories.flatMap(cat => cat.projects);
    }
    return projectCategories.find(cat => cat.id === activeCategory)?.projects || [];
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Here are some of my recent projects. Click on each project to learn more.
        </motion.p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 w-full max-w-6xl mx-auto px-6">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-14 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {getActiveProjects().map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 dark:opacity-40" />
                </div>
                
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-tight h-10 flex items-center">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all text-xs"
                      asChild
                    >
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-xs"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
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