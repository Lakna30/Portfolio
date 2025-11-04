import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
