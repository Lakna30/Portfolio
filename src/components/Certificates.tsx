import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Professional Certificate",
    issuer: "Certification Authority",
    date: "2024",
    description: "Description of the certification and skills acquired",
    link: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Advanced Training",
    issuer: "Training Institute",
    date: "2023",
    description: "Specialized training in advanced techniques",
    link: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Technical Certification",
    issuer: "Tech Organization",
    date: "2023",
    description: "Certified in specific technical skills",
    link: "#",
    image: "/placeholder.svg",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground/70">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
