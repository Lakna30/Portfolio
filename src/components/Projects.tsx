import { ExternalLink, Github, Smartphone, Monitor, Palette, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import finexa from "@/assets/Finexa.png";
import supplement from "@/assets/Supplement.png";
import portfolio from "@/assets/Portfolio.png";
import noura from "@/assets/NOURA.png";
import glowy from "@/assets/Glowy.png";
import gym from "@/assets/RealFitness.png";
import tkd from "@/assets/HighKick.png";
import yoga from "@/assets/Yoga.png";
import cupcake from "@/assets/Cupcake.png";
import event from "@/assets/Event.png";
import popsicle from "@/assets/Popsicle.png";
import worksense from "@/assets/WorkSense.png";

const Projects = () => {
  const projectCategories = [
    {
      id: "all",
      title: "All Projects",
      icon: <LayoutGrid className="w-5 h-5" />,
      projects: [
        {
          title: "Glowy Skincare Store",
          description: "Web application featuring skincare products, secure login & admin product control",
          image: glowy,
          technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
          repo: "https://github.com/Lakna30/Glowy_Mini-E-Commerce-Store",
          demo: "https://www.figma.com/proto/mLfljH3JbV7VD3KjxCSm2M/Untitled?page-id=0%3A1&node-id=75-58&p=f&viewport=-878%2C-361%2C0.5&t=oJWxWgVMcBMfg1fP-1&scaling=scale-down&content-scaling=fixed",
        },
        {
          title: "Real Fitness - Client Project",
          description: "A platform with user authentication, subscription plans, online payments, QR-based attendance tracking, and training session scheduling",
          image: gym,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JavaScript"],
          repo: "https://github.com/Lakna30/Real-Fitness-Gym-Management-System",
          demo: "https://www.figma.com/proto/HMVnk2HQzC7giHhgqqd2XJ/Real-Fitness?page-id=0%3A1&node-id=4-1045&p=f&viewport=94%2C163%2C0.5&t=yMT4qrCtx7N1ZzuB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A1045",
        },
        {
          title: "WorkSense Smart Industry - Client Project",
          description: "Smart industry platform with real-time hazard monitoring, workflow management, asset tracking, scheduling, and employee operations.",
          image: worksense,
          technologies: ["React", "Tailwind CSS", "JavaScript", "PostgreSQL", "ESP32", "MQTT"],
          repo: "https://github.com/Lakna30/WorkSense-Smart-Industry-Management-System",
          demo: "#",
        },
        {
          title: "NOURA Fashion Store",
          description: "E-commerce platform with user account management , product catalog , shopping cart , Review system and secure checkout",
          image: noura,
          technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
          repo: "https://github.com/Lakna30/NOURA-Online-Fashion-Store",
          demo: "#",
        },
        {
          title: "Virtual Coaching App",
          description: "An interactive training app with class booking, tutorial flows, and integrated video playback to support structured Taekwondo learning",
          image: tkd,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/HighKick-Virtual-Coaching-App",
          demo: "#",
        },
        {
          title: "Gym Supplement Store",
          description: "A full-stack e-commerce app featuring product catalog browsing, cart and checkout flows, order processing, and an admin dashboard",
          image: supplement,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JavaScript"],
          repo: "https://github.com/Lakna30/Online-supplement-store",
          demo: "#",
        },
        {
          title: "Financial Tracking App",
          description: "A personal finance management Android app with income/expense tracking , budgeting , and spending insights",
          image: finexa,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
          demo: "https://www.figma.com/proto/niipim4JvlypNunk8toyS7/Finexa---Personal-Finance-Tracker-App?page-id=0%3A1&node-id=2-2&p=f&viewport=319%2C164%2C0.5&t=FUakBKeVgzZBlKhT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        },
        {
          title: "HuddleUp Event Management System",
          description: "A platform with admin management tools, package/product handling, and a streamlined booking and cart experience",
          image: event,
          technologies: ["Java", "CSS", "JavaScript"],
          repo: "https://github.com/Lakna30/HuddleUp-Event-Management-System",
          demo: "#",
        },
        {
          title: "Portfolio",
          description: "A clean, responsive site that highlights my skills, projects, education, and journey, with an easy-to-use contact section",
          image: portfolio,
          technologies: ["React", "Tailwind CSS", "Vercel"],
          repo: "https://github.com/Lakna30/Portfolio",
          demo: "#",
        },
        {
          title: "Popsicle Motion UI Concept",
          description: "A playful Figma concept using custom blob shapes, gradient styling, and Smart Animate for smooth, engaging brand interactions",
          image: popsicle,
          technologies: ["Figma", "Prototyping", "Smart Animate", "Motion UI", "Custom Blob Shapes"],
          figma: "https://www.figma.com/proto/0IOTu948C17EjUEXUHbpYX/Melting?page-id=0%3A1&node-id=20-9&p=f&viewport=-1845%2C2751%2C0.5&t=vNGFE9h2nU21Cj8s-1&scaling=scale-down&content-scaling=fixed",
          demo: "#",
        },
        {
          title: "Cupcake Animation",
          description: "A playful cupcake animation featuring a smooth upward rise, bounce motion, and frosting reveal to add a delightful micro-interaction effect",
          image: cupcake,
          technologies: ["Figma", "Prototyping", "Smart Animate", "Motion UI"],
          figma: "https://www.figma.com/proto/INyHGMjx5lK7JwvgR5DCze/Cupcake-Animation?page-id=0%3A1&node-id=3-190&p=f&viewport=310%2C101%2C0.25&t=VcDbeAk7rios50z2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A190",
          demo: "#",
        },
        {
          title: "Yoga App",
          description: "A clean, soothing design emphasizing intuitive workouts, scheduling, BMI tracking, and music/workout controls",
          image: yoga,
          technologies: ["Figma", "Prototyping", "Gradient Styling"],
          figma: "https://www.figma.com/proto/TmWGFJdBlubbz9moXNjnLL/Aura-Yoga?page-id=0%3A1&node-id=1-156&p=f&viewport=197%2C51%2C0.5&t=sn3YOTx4GivnP10M-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A156",
          demo: "#",
        },
      ],
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Monitor className="w-5 h-5" />,
      projects: [
        {
          title: "Glowy Skincare Store",
          description: "Web application featuring skincare products, secure login & admin product control",
          image: glowy,
          technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
          repo: "https://github.com/Lakna30/Glowy_Mini-E-Commerce-Store",
          demo: "https://www.figma.com/proto/mLfljH3JbV7VD3KjxCSm2M/Untitled?page-id=0%3A1&node-id=75-58&p=f&viewport=-878%2C-361%2C0.5&t=oJWxWgVMcBMfg1fP-1&scaling=scale-down&content-scaling=fixed",
        },
        {
          title: "Real Fitness - Client Project",
          description: "A platform with user authentication, subscription plans, online payments, QR-based attendance tracking, and training session scheduling",
          image: gym,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JavaScript"],
          repo: "https://github.com/Lakna30/Real-Fitness-Gym-Management-System",
          demo: "https://www.figma.com/proto/HMVnk2HQzC7giHhgqqd2XJ/Real-Fitness?page-id=0%3A1&node-id=4-1045&p=f&viewport=94%2C163%2C0.5&t=yMT4qrCtx7N1ZzuB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A1045",
        },
        {
          title: "WorkSense Smart Industry - Client Project",
          description: "Smart industry platform with real-time hazard monitoring, workflow management, asset tracking, scheduling, and employee operations.",
          image: worksense,
          technologies: ["React", "Tailwind CSS", "JavaScript", "PostgreSQL", "ESP32", "MQTT"],
          repo: "https://github.com/Lakna30/WorkSense-Smart-Industry-Management-System",
          demo: "#",
        },
        {
          title: "NOURA Fashion Store",
          description: "E-commerce platform with user account management , product catalog , shopping cart , Review system and secure checkout",
          image: noura,
          technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
          repo: "https://github.com/Lakna30/NOURA-Online-Fashion-Store",
          demo: "#",
        },
        {
          title: "Gym Supplement Store",
          description: "A full-stack e-commerce app featuring product catalog browsing, cart and checkout flows, order processing, and an admin dashboard",
          image: supplement,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
          repo: "https://github.com/Lakna30/Online-supplement-store",
          demo: "#",
        },
        {
          title: "HuddleUp Event Management System",
          description: "A platform with admin management tools, package/product handling, and a streamlined booking and cart experience",
          image: event,
          technologies: ["Java", "CSS", "JavaScript"],
          repo: "https://github.com/Lakna30/HuddleUp-Event-Management-System",
          demo: "#",
        },
        {
          title: "Portfolio",
          description: "A clean, responsive site that highlights my skills, projects, education, and journey, with an easy-to-use contact section",
          image: portfolio,
          technologies: ["React", "Tailwind CSS", "Vercel"],
          repo: "https://github.com/Lakna30/Portfolio",
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
          description: "A personal finance management Android app with income/expense tracking , budgeting , and spending insights",
          image: finexa,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
          demo: "https://www.figma.com/proto/niipim4JvlypNunk8toyS7/Finexa---Personal-Finance-Tracker-App?page-id=0%3A1&node-id=2-2&p=f&viewport=319%2C164%2C0.5&t=FUakBKeVgzZBlKhT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        },
        {
          title: "Virtual Coaching App",
          description: "An interactive training app with class booking, tutorial flows, and integrated video playback to support structured Taekwondo learning",
          image: tkd,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/HighKick-Virtual-Coaching-App",
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
          title: "Cupcake Animation",
          description: "A playful cupcake animation featuring a smooth upward rise, bounce motion, and frosting reveal to add a delightful micro-interaction effect",
          image: cupcake,
          technologies: ["Figma", "Prototyping", "Smart Animate", "Motion UI"],
          figma: "https://www.figma.com/proto/INyHGMjx5lK7JwvgR5DCze/Cupcake-Animation?page-id=0%3A1&node-id=3-190&p=f&viewport=310%2C101%2C0.25&t=VcDbeAk7rios50z2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A190",
          demo: "#",
        },
        {
          title: "Popsicle Motion UI Concept",
          description: "A playful Figma concept using custom blob shapes, gradient styling, and Smart Animate for smooth, engaging brand interactions",
          image: popsicle,
          technologies: ["Figma", "Prototyping", "Smart Animate", "Motion UI", "Custom Blob Shapes"],
          figma: "https://www.figma.com/proto/0IOTu948C17EjUEXUHbpYX/Melting?page-id=0%3A1&node-id=20-9&p=f&viewport=-1845%2C2751%2C0.5&t=vNGFE9h2nU21Cj8s-1&scaling=scale-down&content-scaling=fixed",
          demo: "#",
        },
        {
          title: "Yoga App",
          description: "A clean, soothing design emphasizing intuitive workouts, scheduling, BMI tracking, and music/workout controls",
          image: yoga,
          technologies: ["Figma", "Prototyping", "Gradient Styling"],
          figma: "https://www.figma.com/proto/TmWGFJdBlubbz9moXNjnLL/Aura-Yoga?page-id=0%3A1&node-id=1-156&p=f&viewport=197%2C51%2C0.5&t=sn3YOTx4GivnP10M-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A156",
          demo: "#",
        },
        {
          title: "Financial Tracking App",
          description: "A personal finance management Android app with income/expense tracking , budgeting , and spending insights",
          image: finexa,
          technologies: ["Kotlin", "XML", "SQLite"],
          repo: "https://github.com/Lakna30/Personal-Finance-Tracker",
          demo: "https://www.figma.com/proto/niipim4JvlypNunk8toyS7/Finexa---Personal-Finance-Tracker-App?page-id=0%3A1&node-id=2-2&p=f&viewport=319%2C164%2C0.5&t=FUakBKeVgzZBlKhT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        },
        {
          title: "Real Fitness - Client Project",
          description: "A platform with user authentication, subscription plans, online payments, QR-based attendance tracking, and training session scheduling",
          image: gym,
          technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JavaScript"],
          repo: "https://github.com/Lakna30/Real-Fitness-Gym-Management-System",
          demo: "https://www.figma.com/proto/HMVnk2HQzC7giHhgqqd2XJ/Real-Fitness?page-id=0%3A1&node-id=4-1045&p=f&viewport=94%2C163%2C0.5&t=yMT4qrCtx7N1ZzuB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A1045",
        },
        {
          title: "Glowy Skincare Store",
          description: "Web application featuring skincare products, secure login & admin product control",
          image: glowy,
          technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
          repo: "https://github.com/Lakna30/Glowy_Mini-E-Commerce-Store",
          demo: "https://www.figma.com/proto/mLfljH3JbV7VD3KjxCSm2M/Untitled?page-id=0%3A1&node-id=75-58&p=f&viewport=-878%2C-361%2C0.5&t=oJWxWgVMcBMfg1fP-1&scaling=scale-down&content-scaling=fixed",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Get all projects for the active category
  const getActiveProjects = () => {
    if (activeCategory === "all") {
      // Get all projects from non-'all' categories first
      const allProjects = projectCategories
        .filter(cat => cat.id !== "all")
        .flatMap(cat => cat.projects);
      
      // Remove duplicates by creating a Map with project titles as keys
      const uniqueProjects = new Map();
      allProjects.forEach(project => {
        if (!uniqueProjects.has(project.title)) {
          uniqueProjects.set(project.title, project);
        }
      });
      
      return Array.from(uniqueProjects.values());
    }
    return projectCategories.find(cat => cat.id === activeCategory)?.projects || [];
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-[#C0C0C0] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Showcasing my recent projects that combine design thinking with development
        </motion.p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12 w-full max-w-6xl mx-auto px-4 sm:px-6">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-14 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-40 hidden dark:block" />
                </div>
                
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-[#A3A3A3] text-sm leading-tight h-10 flex items-center">
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
                      <a href={project.figma || project.repo} target="_blank" rel="noopener noreferrer">
                        {project.figma ? (
                          <>
                            <Palette className="mr-2 h-3.5 w-3.5" />
                            Figma
                          </>
                        ) : (
                          <>
                            <Github className="mr-2 h-3.5 w-3.5" />
                            GitHub
                          </>
                        )}
                      </a>
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-xs"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        {['Glowy Skincare Store', 'Real Fitness - Client Project', 'Financial Tracking App'].includes(project.title) ? (
                          <>
                            <Palette className="mr-2 h-3.5 w-3.5" />
                            Figma
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            Live Demo
                          </>
                        )}
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