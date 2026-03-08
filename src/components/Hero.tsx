import heroSculpture from "@/assets/hero-sculpture.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
              Новый способ<br />
              <span className="text-gradient">сохранить свою историю</span>
            </h1>
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
              <span className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span className="w-1 h-6 bg-primary/30" />
              <span className="w-1 h-8 bg-primary/50" />
              <span className="w-1 h-4 bg-primary/20" />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Увековечьте свои спортивные достижения в уникальных 3Д скульптурах. 
              Создайте персональный музей славы.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="xl"
                asChild
              >
                <a href="https://t.me/ilnur_shabanov" target="_blank" rel="noopener noreferrer">
                  Заказать
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                asChild
              >
                <a href="#contacts">
                  Узнать больше
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column - Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <img 
              src={heroSculpture} 
              alt="3Д скульптура хоккеиста"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
