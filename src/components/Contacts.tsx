import { Phone, Send } from "lucide-react";
import sculptureBust from "@/assets/sculpture_bust_1.jpg";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 group transition-colors hover:text-primary"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:glow-primary transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
};

const Contacts = () => {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Section divider */}
      <div className="section-divider mb-20" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Contact info */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black lowercase">
              Контакты
            </h2>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Phone className="w-5 h-5" />}
                label="Телефон"
                value="8 919 693 98 92"
                href="tel:+79196939892"
              />
              
              <ContactItem 
                icon={<Send className="w-5 h-5" />}
                label="Telegram"
                value="@Hockey_Sculpture"
                href="https://t.me/Hockey_Sculpture"
              />
            </div>
          </div>
          
          {/* Right column - Decorative sculpture */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <div className="relative w-48 h-48 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden glow-border">
                <img 
                  src={sculptureBust}
                  alt="Скульптура"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Hockey Sculpture. Все права защищены.</p>
          <p>Создаем легенды в 3Д</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
