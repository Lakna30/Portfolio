import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary" />
            <span className="gradient-text">Lakna</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lakna Vidanapathirana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
