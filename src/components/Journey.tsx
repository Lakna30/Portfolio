import { GraduationCap, School, UserCheck, Users, Medal, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
      description: "CGPA : 3.39/4.0",
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
      icon: UserCheck,
      title: "Assistant Taekwondo Coach",
      organization: "Sri Lanka School Taekwondo Federation",
      year: "2023 - Present",
      description: "Registered assistant coach supporting school-level athlete training and development",
    },
    {
      icon: Users,
      title: "Assistant Taekwondo Coach",
      organization: "District Taekwondo Association - Matara",
      year: "2023 - Present",
      description: "Coaching at Sujatha College and Anura College, guiding students in technique and discipline",
    },
    {
      icon: Medal,
      title: "National Level Taekwondo Athlete",
      organization: "Matara Taekwondo Club",
      year: "2017 - Present",
      description: "Represented Sri Lanka at international tournaments and national championships",
    },
    {
      icon: Trophy,
      title: "Member of Taekwondo Team",
      organization: "SLIIT University Taekwondo Team",
      year: "2023 - Present",
      description: "Active participant in university sports programs and activities",
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
    <section id="journey" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Journey
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic journey and extracurricular activities that shaped my expertise and leadership.
        </motion.p>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center gradient-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group h-full">
                  <motion.div 
                    className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-box"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <edu.icon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                  
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center gradient-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Extracurricular Activities
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {extracurricular.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
              >
                <Card className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border group relative overflow-hidden h-full">
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-box"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <activity.icon className="h-8 w-8 text-primary-foreground" />
                    </motion.div>
                    
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Memories Section */}
        <div className="max-w-5xl mx-auto">
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Journey Memories
          </motion.h3>
          <motion.p 
            className="text-center text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A glimpse into my journey, memories, and moments that define who I am.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                    <motion.div 
                      className="group relative overflow-hidden rounded-lg aspect-square"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.img
                        src={memory.image}
                        alt={memory.caption}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-6"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2 glow-text">
                            {memory.category}
                          </span>
                          <h4 className="text-lg font-bold text-foreground">{memory.caption}</h4>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
