import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Главная", href: "#hero" },
    { label: "Музей", href: "#museum" },
    { label: "Продукты", href: "#products" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-black uppercase tracking-wider">
            <span className="text-gradient">Hockey</span>
            <span className="text-foreground">Sculpture</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <a href="https://t.me/Hockey_Sculpture?text=Здравствуйте,%20хочу%20заказать%203Д%20скульптуру!" target="_blank" rel="noopener noreferrer">
                Заказать
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border/50">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full mt-4" asChild>
              <a href="https://t.me/Hockey_Sculpture?text=Здравствуйте,%20хочу%20заказать%203Д%20скульптуру!" target="_blank" rel="noopener noreferrer">
                Заказать
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
