import { Download, Github, Linkedin, Instagram, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { GraduationCap } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Software Engineer",
    "Front-End Developer",
    "Mobile App Developer",
    "UI/UX Designer",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-20 right-4 sm:top-24 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-primary/10 glow-border"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-primary transition-all" />
        ) : (
          <Moon className="h-6 w-6 text-primary transition-all" />
        )}
      </Button>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Shows first on mobile, right on desktop */}
          <motion.div 
            className="flex justify-center md:order-last mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary glow-box"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage} 
                  alt="Lakna Vidanapathirana" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content - Shows second on mobile, left on desktop */}
          <motion.div 
            className="space-y-6 md:order-first"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Lakna Vidanapathirana</span>
            </motion.h1>
            
            {/* Animated Roles */}
            <div className="h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-semibold gradient-text"
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Engineering undergraduate at SLIIT with a strong focus on Front-End development and creative UI/UX design that blends functionality with aesthetics.
            </motion.p>

            <motion.div 
              className="flex items-center gap-3 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Software Engineering Undergraduate</p>
                <p className="text-sm text-muted-foreground">SLIIT • Expected Graduation: 2027</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-box font-semibold"
                  asChild
                >
                  <a href="/Lakna_Vidanapathirana_Resume.pdf" download="Lakna_Vidanapathirana_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/Lakna30", Icon: Github },
                  { href: "https://www.linkedin.com/in/lakna-vidanapathirana", Icon: Linkedin },
                  { href: "https://www.instagram.com/_._lakna_._?igsh=ODZmOXhyMHp2dHA2", Icon: Instagram },
                  { href: "mailto:lsvidanapathirana30@gmail.com", Icon: Mail },
                ].map(({ href, Icon }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? "_blank" : undefined}
                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          </div>
      </div>
    </section>
  );
};

export default Hero;
