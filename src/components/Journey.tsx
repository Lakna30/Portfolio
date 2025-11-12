import { UserCheck, Users, Medal, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import SliitLogo from "@/assets/sliit-logo.png";
import SujathaLogo from "@/assets/sujatha-logo.jpg";
import GCS from "@/assets/GCS International.jpg";
import NationalPair25 from "@/assets/NationalPair25.jpg";
import NationalInd25 from "@/assets/NationalInd25.jpg";
import NationalFree25 from "@/assets/NationalFree25.jpg";
import Korean23 from "@/assets/Korean23.jpg";
import Korean24 from "@/assets/Korean24.jpg";
import Korean18 from "@/assets/Korean18.jpg";
import Southern from "@/assets/Southern.jpg";
import Coaching25 from "@/assets/Coaching25.jpg";
import Coaching24 from "@/assets/Coaching24.jpg";
import Independance23 from "@/assets/Independance23.png";
import Independance24 from "@/assets/Independance24.jpg";
import Usports from "@/assets/Usports.jpg";
import Colors24 from "@/assets/Colors24.jpg";
import SouthAsian from "@/assets/South Asian.jpg";
import Referee from "@/assets/Referee.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const Journey = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);
  const education = [
    {
      logo: SliitLogo,
      title: "BSc(Hons) in Information Technology Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      year: "2023 - Present",
      description: "CGPA : 3.39/4.0",
    },
    {
      logo: SujathaLogo,
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
      image: GCS,
      caption: "GCS International Championship 2023",
      category: "Sports",
    },
    {
      image: NationalPair25,
      caption: "National Poomsae Championship 2025",
      category: "Sports",
    },
    {
      image: Colors24,
      caption: "SLIIT Colors Awards 2025",
      category: "Awards",
    },
    {
      image: SouthAsian,
      caption: "South Asian Taekwondo Championship 2023",
      category: "Sports",
    },
    {
      image: Korean23,
      caption: "Korean Ambassador's Cup Taekwondo Championship 2023",
      category: "Sports",
    },
    {
      image: Coaching25,
      caption: "School Taekwondo Instructor Program 2025",
      category: "Coaching",
    },
    {
      image: Korean24,
      caption: "Korean Ambassador's Cup Taekwondo Championship 2024",
      category: "Sports",
    },
    {
      image: NationalFree25,
      caption: "National Poomsae Championship 2025",
      category: "Sports",
    },
    {
      image: Korean18,
      caption: "Korean Ambassador's Cup Taekwondo Championship 2018",
      category: "Sports",
    },
    {
      image: Coaching24,
      caption: "School Taekwondo Instructor Program 2024",
      category: "Coaching",
    },
    {
      image: Southern,
      caption: "Southern Province Taekwondo Championship 2022",
      category: "Sports",
    },
    {
      image: Independance23,
      caption: "Independance Cup Taekwondo Championship 2023",
      category: "Sports",
    },
    {
      image: NationalInd25,
      caption: "National Poomsae Championship 2025",
      category: "Sports",
    },
    {
      image: Usports,
      caption: "NSBM USPORTS 2023",
      category: "Sports",
    },
    {
      image: Independance24,
      caption: "Independance Cup Taekwondo Championship 2024",
      category: "Sports",
    },
    {
      image: Referee,
      caption: "Sportsmeet Assistant Taekwondo Referee",
      category: "Refereeing",
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 pb-0 relative">
      <div className="container mx-auto px-6">
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
                    className="w-16 h-16 mb-6 rounded-full bg-white flex items-center justify-center glow-box overflow-hidden"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-2" />
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
            className="relative"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full overflow-visible"
            >
              <CarouselContent className="-ml-0 md:-ml-0">
                {memories.map((memory, index) => {
                  const isCentered = index === current;
                  return (
                    <CarouselItem key={index} className="pl-0 pr-0 md:pl-0 md:pr-0 md:basis-1/2 lg:basis-1/3">
                      <div className="px-1 md:px-2">
                        <motion.div 
                          className="relative overflow-hidden rounded-lg"
                          style={{
                            transformOrigin: 'center',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                          animate={{
                            scale: isCentered ? 1 : 0.95,
                            opacity: isCentered ? 1 : 0.7,
                          }}
                          transition={{ 
                            duration: 0.5,
                            ease: [0.33, 1, 0.68, 1]
                          }}
                        >
                          <div className="aspect-square overflow-hidden rounded-lg relative">
                            <img
                              src={memory.image}
                              alt={memory.caption}
                              className="w-full h-full object-cover select-none"
                              draggable={false}
                            />
                            <motion.div 
                              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 via-background/80 to-transparent border-t-0"
                              animate={{ 
                                y: isCentered ? 0 : 100,
                                opacity: isCentered ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <span className="inline-block px-3 py-1 mb-2 bg-gradient-to-r from-primary/30 to-secondary/30 text-black dark:text-white font-semibold text-xs rounded-full border border-primary/40">
                                {memory.category}
                              </span>
                              <h4 className="text-sm font-bold text-foreground drop-shadow-lg">{memory.caption}</h4>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Modern Navigation Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
