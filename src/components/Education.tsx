import { GraduationCap, School } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "BSc(Hons) in Information Technology Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      year: "2023 - Present",
      description: "Specializing in Software Engineering with hands-on experience in full-stack development, Mobile application development and project management.",
    },
    {
      icon: School,
      title: "Secondary Education",
      institution: "Sujatha Vidyalaya Matara",
      year: "2014 - 2023",
      description: "G.C.E. Advanced Level (Physical Science Stream), GCE Ordinary Level",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Education
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          My academic journey and qualifications that shaped my expertise in software engineering.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={edu.title}
              className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-box group-hover:animate-glow-pulse">
                <edu.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {edu.title}
              </h3>
              
              <div className="mb-2">
                <p className="text-secondary font-semibold">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
