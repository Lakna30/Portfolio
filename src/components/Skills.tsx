import { Code2, Server, Smartphone, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "CSS", level: 90 },
        { name: "HTML", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PHP", level: 75 },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Kotlin", level: 80 },
        { name: "XML", level: 85 },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 75 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Github", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 85 },
        { name: "Figma", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Skills
        </h2>
        
        <div className="grid gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.category}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 glow-box">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-fade-in group"
                      style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full transition-all duration-1000 ease-out glow-box group-hover:shadow-lg"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `fade-in 1s ease-out ${(categoryIndex * 0.15) + (skillIndex * 0.05)}s both`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
