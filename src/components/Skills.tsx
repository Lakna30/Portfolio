const Skills = () => {
  const skillCategories = [
    {
      name: "HTML",
      level: 90,
      icon: "🌐",
    },
    {
      name: "CSS",
      level: 80,
      icon: "🎨",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: "⚡",
    },
    {
      name: "React",
      level: 80,
      icon: "⚛️",
    },
    {
      name: "Node.js",
      level: 80,
      icon: "🟢",
    },
    {
      name: "MongoDB",
      level: 70,
      icon: "🍃",
    },
    {
      name: "PHP",
      level: 70,
      icon: "🐘",
    },
    {
      name: "MySQL",
      level: 80,
      icon: "🗄️",
    },
    {
      name: "Kotlin",
      level: 80,
      icon: "📱",
    },
    {
      name: "Android Studio",
      level: 80,
      icon: "🤖",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-foreground">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out glow-box"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
