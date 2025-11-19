import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import python from "@/assets/Python.jpg";
import java from "@/assets/Java.jpg";
import node from "@/assets/Node.js.jpg";
import cHash from "@/assets/C_Hash.jpg";
import atlas from "@/assets/Atlas Administrator.jpg";
import modeling from "@/assets/Data Modeling.jpg";
import admin from "@/assets/Database Admin.jpg";
import skills from "@/assets/Skills.jpg";

const certificates = [
  {
    title: "Python Developer Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/WlhbPGTLT1GsnOG7Y2V6ow",
    image: python,
  },
  {
    title: "Java Developer Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/4C2FiCBQTj6o5tUg5GEqZA",
    image: java,
  },
  {
    title: "Node.js Developer Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/B59G9K05Rhm154-S4YcciQ",
    image: node,
  },
  {
    title: "C# Developer Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/pk44JfBaQVad6ra4esP0GQ",
    image: cHash,
  },
  {
    title: "Atlas Administrator Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/-TIxHqbcSFiAFukysFqFWw",
    image: atlas,
  },
  {
    title: "Data Modeling Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/J_AePjteTdC_RJ42p7am6w",
    image: modeling,
  },
  {
    title: "Database Admin Path",
    issuer: "MongoDB",
    date: "2025",
    link: "https://learn.mongodb.com/c/YVtZjtKWSD2CHAFH6kj-wA",
    image: admin,
  },
  {
    title: "Core Concepts & Architecture",
    issuer: "MongoDB",
    date: "2025",
    link: "https://www.credly.com/badges/eea82e8c-4daf-428a-bbc2-ae6fd7a1029a/linked_in_profile",
    image: skills,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-[#C0C0C0] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Professional certifications and achievements that validate my expertise
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors flex-1">
                      {cert.title}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <CardDescription className="font-medium text-foreground/70 mb-4">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
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
