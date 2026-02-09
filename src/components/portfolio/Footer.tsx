import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Built with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> by Pramod Kashyap
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
