import { GraduationCap, School, Award, Users, Dumbbell, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Journey = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "BSc(Hons) in Information Technology Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      year: "2023 - Present",
      description: "CGPA : 3.49/4.0",
    },
    {
      icon: School,
      title: "Secondary Education",
      institution: "Sujatha Vidyalaya Matara",
      year: "2014 - 2023",
      description: "G.C.E. Advanced Level (Physical Science Stream), GCE Ordinary Level",
    },
  ];

  const extracurricular = [
    {
      icon: Award,
      title: "Director of Youth Empowerment",
      organization: "Leo Club University",
      year: "2024/2025",
      description: "Leading youth empowerment initiatives and community development programs",
    },
    {
      icon: Users,
      title: "Chief Activity Coordinator",
      organization: "Leo Club University",
      year: "2023 - 2024",
      description: "Coordinating and managing club activities and community service projects",
    },
    {
      icon: Dumbbell,
      title: "Member of Athletic Club",
      organization: "University Sports Club",
      year: "2023 - Present",
      description: "Active participant in university athletic programs and sports activities",
    },
    {
      icon: Trophy,
      title: "Tech Community Volunteer",
      organization: "Developer Students Club",
      year: "2023 - Present",
      description: "Organizing workshops and mentoring junior students in technology",
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Journey
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          My academic journey and extracurricular activities that shaped my expertise and leadership.
        </p>

        <Tabs defaultValue="education" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger 
              value="education" 
              className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground"
            >
              Education
            </TabsTrigger>
            <TabsTrigger 
              value="extracurricular"
              className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground"
            >
              Extracurricular Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card 
                  key={edu.title}
                  className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group"
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
          </TabsContent>

          <TabsContent value="extracurricular" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {extracurricular.map((activity, index) => (
                <Card 
                  key={activity.title}
                  className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-box group-hover:animate-glow-pulse">
                      <activity.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    
                    <div className="mb-2">
                      <p className="text-secondary font-semibold">{activity.organization}</p>
                      <p className="text-sm text-muted-foreground">{activity.year}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Journey;
