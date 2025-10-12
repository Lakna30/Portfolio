import { Code2, Server, Smartphone, Database, Wrench } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaAndroid, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiKotlin, SiMongodb, SiMysql, SiSqlite, SiFirebase } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", level: 90, Icon: FaReact, color: "text-[#61DAFB]" },
        { name: "Next.js", level: 85, Icon: SiNextdotjs, color: "text-white dark:text-white" },
        { name: "Tailwind CSS", level: 90, Icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "CSS", level: 90, Icon: FaCss3Alt, color: "text-[#1572B6]" },
        { name: "HTML", level: 95, Icon: FaHtml5, color: "text-[#E34F26]" },
        { name: "JavaScript", level: 90, Icon: SiJavascript, color: "text-[#F7DF1E]" },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, Icon: FaNodeJs, color: "text-[#339933]" },
        { name: "Express", level: 80, Icon: SiExpress, color: "text-white dark:text-white" },
        { name: "PHP", level: 75, Icon: FaPhp, color: "text-[#777BB4]" },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Kotlin", level: 80, Icon: SiKotlin, color: "text-[#7F52FF]" },
        { name: "Android", level: 85, Icon: FaAndroid, color: "text-[#3DDC84]" },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80, Icon: SiMongodb, color: "text-[#47A248]" },
        { name: "MySQL", level: 85, Icon: SiMysql, color: "text-[#4479A1]" },
        { name: "SQLite", level: 75, Icon: SiSqlite, color: "text-[#003B57]" },
        { name: "Firebase", level: 80, Icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Github", level: 90, Icon: FaGithub, color: "text-white dark:text-white" },
        { name: "VS Code", level: 95, Icon: VscCode, color: "text-[#007ACC]" },
        { name: "Android Studio", level: 85, Icon: FaAndroid, color: "text-[#3DDC84]" },
        { name: "Figma", level: 80, Icon: FaFigma, color: "text-[#F24E1E]" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Here are the technologies and tools I work with to bring ideas to life
        </motion.p>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-card border border-primary/50 text-foreground glow-border scale-105"
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
              const SkillIcon = skill.Icon;
              return (
                <div
                  key={skill.name}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-transparent border border-primary/20 flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/40">
                      <SkillIcon className={`w-8 h-8 ${skill.color}`} />
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
