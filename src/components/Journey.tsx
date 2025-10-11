import { GraduationCap, School, Award, Users, Dumbbell, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";

const Journey = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);
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

  const memories = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      caption: "Team Spirit",
      category: "Sports",
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      caption: "Leadership Workshop",
      category: "Leadership",
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      caption: "Community Service",
      category: "Volunteer",
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      caption: "Tech Events",
      category: "Technology",
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      caption: "Athletic Meet",
      category: "Sports",
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      caption: "Team Achievement",
      category: "Awards",
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

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Education
          </h3>
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

        {/* Extracurricular Activities Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Extracurricular Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {extracurricular.map((activity, index) => (
              <Card 
                key={activity.title}
                className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group relative overflow-hidden animate-fade-in"
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
        </div>

        {/* Journey Memories Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Journey Memories
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            A glimpse into my journey, memories, and moments that define who I am.
          </p>
          
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {memories.map((memory, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-lg aspect-square animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2 glow-text">
                          {memory.category}
                        </span>
                        <h4 className="text-lg font-bold text-foreground">{memory.caption}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Journey;
