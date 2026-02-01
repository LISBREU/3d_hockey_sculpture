import sculptureBust from "@/assets/sculpture_bust_1.jpg";
import museumProduct from "@/assets/museum-product.jpg";
import { Button } from "@/components/ui/button";

const Museum = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-20" />
      
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">
            <span className="text-gradient">3D-Музей</span> ваших
            <br />
            <span className="text-foreground">достижений</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Sculpture bust */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-2xl" />
              
              {/* Circular frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden glow-border">
                <img 
                  src={sculptureBust}
                  alt="Портретная скульптура хоккеиста"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-primary/20 rounded-full" />
              <div className="absolute -inset-8 border border-primary/10 rounded-full" />
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">
                Создай свой образ
              </h3>
              <h4 className="text-xl md:text-2xl font-bold uppercase text-gradient">
                в скульптуре
              </h4>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Современные технологии 3D-сканирования позволяют создать точную копию 
                вашего лица и фигуры в скульптурном исполнении.
              </p>
            </div>
          </div>
          
          {/* Right column - Museum interior */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold uppercase">
              Посмотрите вашу биографию
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Персональная выставка ваших спортивных достижений
            </p>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <div className="relative overflow-hidden rounded-xl card-glow">
                <img 
                  src={museumProduct}
                  alt="Персональный мини-музей хоккейных достижений"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <a href="https://t.me/Hockey_Sculpture?text=Здравствуйте,%20хочу%20заказать%203Д%20скульптуру!" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Заказать сейчас
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Museum;
