const Skills = () => {
  const skillCategories = [
    {
      name: "HTML",
      color: "from-orange-500 to-orange-600",
      level: 9,
      icon: "🌐",
    },
    {
      name: "CSS",
      color: "from-blue-500 to-blue-600",
      level: 8,
      icon: "🎨",
    },
    {
      name: "JavaScript",
      color: "from-yellow-400 to-yellow-500",
      level: 9,
      icon: "⚡",
    },
    {
      name: "React",
      color: "from-cyan-400 to-cyan-500",
      level: 8,
      icon: "⚛️",
    },
    {
      name: "Node.js",
      color: "from-green-500 to-green-600",
      level: 8,
      icon: "🟢",
    },
    {
      name: "MongoDB",
      color: "from-green-600 to-green-700",
      level: 7,
      icon: "🍃",
    },
    {
      name: "PHP",
      color: "from-purple-500 to-purple-600",
      level: 7,
      icon: "🐘",
    },
    {
      name: "MySQL",
      color: "from-blue-600 to-blue-700",
      level: 8,
      icon: "🗄️",
    },
    {
      name: "Kotlin",
      color: "from-purple-600 to-purple-700",
      level: 8,
      icon: "📱",
    },
    {
      name: "Android Studio",
      color: "from-green-400 to-green-500",
      level: 8,
      icon: "🤖",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
              </div>
              
              <div className="flex gap-2">
                {Array.from({ length: 10 }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      dotIndex < skill.level
                        ? `bg-gradient-to-r ${skill.color} animate-glow-pulse`
                        : "bg-muted"
                    }`}
                    style={{
                      boxShadow: dotIndex < skill.level 
                        ? "0 0 10px currentColor" 
                        : "none",
                      animationDelay: `${dotIndex * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
