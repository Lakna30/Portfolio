import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const skills = ["Full-Stack Development", "Android Development", "UI/UX Design", "Cloud Platforms"];
  return <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-secondary glow-box-secondary">
                <img src={profileImage} alt="Lakna Vidanapathirana" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Software Engineering Undergraduate
              <br />
              at SLIIT
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">I'm a passionate Software Engineering student at SLIIT, currently pursuing my degree with an expected graduation in 2027.</p>
            
            <p className="text-muted-foreground leading-relaxed">Over the past few years, I've turned my passion for technology into hands-on expertise in full-stack web development, mobile apps, and cloud computing.</p>
            
            <p className="text-muted-foreground leading-relaxed">I love blending code with creativity—from building scalable MERN, Java, and PHP web apps, to crafting smooth Android apps with Kotlin & XML, and designing intuitive UI/UX experiences that are as functional as they are delightful.</p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map(skill => <div key={skill} className="flex items-center gap-3 p-4 bg-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all glow-border">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;