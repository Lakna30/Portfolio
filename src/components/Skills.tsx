import { Code2, Server, Smartphone, Database, Wrench } from "lucide-react";
import { useState } from "react";

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

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          My Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground shadow-lg glow-box scale-105"
                      : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {skillCategories[activeTab].skills.map((skill, index) => {
              const initial = skill.name.charAt(0).toUpperCase();
              return (
                <div
                  key={skill.name}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl glow-box group-hover:scale-110 transition-transform duration-300">
                      {initial}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden ml-16">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        animation: `fade-in 1.2s ease-out ${index * 0.1}s both`,
                        boxShadow: "0 0 20px hsl(var(--glow-primary) / 0.4)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning Badge */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl bg-card/50 border border-primary/20 glow-border animate-fade-in">
              <h4 className="font-bold text-foreground mb-2">Always Learning</h4>
              <p className="text-sm text-muted-foreground max-w-2xl">
                I am continuously expanding my technical expertise and staying current with emerging technologies. 
                My current focus includes advanced React patterns, Java development, and cloud-native architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
