import { Download, Github, Linkedin, Instagram, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import { GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full hover:bg-primary/10 glow-border"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-primary transition-all" />
        ) : (
          <Moon className="h-6 w-6 text-primary transition-all" />
        )}
      </Button>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Lakna Vidanapathirana</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Software Engineering undergraduate at SLIIT with a strong focus on web and mobile development and creative UI/UX design that blends functionality with aesthetics.
            </p>

            <div className="flex items-center gap-3 py-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Software Engineering Undergraduate</p>
                <p className="text-sm text-muted-foreground">SLIIT • Expected Graduation: 2027</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-box font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Lakna30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lakna-vidanapathirana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/_._lakna_._?igsh=ODZmOXhyMHp2dHA2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:lsvidanapathirana30@gmail.com"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary glow-box">
                <img 
                  src={profileImage} 
                  alt="Lakna Vidanapathirana" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
