import { useState } from "react";
import { Send, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        "service_bcz4qgn",
        "template_j683nnb",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "oRS2nVJI1PUWNknHw"
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-primary/30 focus:border-primary glow-border h-12"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-primary/30 focus:border-primary glow-border h-12"
                required
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-primary/30 focus:border-primary glow-border min-h-[150px]"
                required
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-box font-semibold"
            >
              <Send className="mr-2 h-5 w-5" />
              Send a Message
            </Button>
          </form>
          
          <div className="mt-12 pt-12">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/Lakna30" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lakna-vidanapathirana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/_._lakna_._?igsh=ODZmOXhyMHp2dHA2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:lsvidanapathirana30@gmail.com"
                  className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all glow-border"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground pt-4">
                📧 lsvidanapathirana30@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
