import sculptureBust from "@/assets/sculpture_bust_1.jpg";
import fullSetCombined from "@/assets/full-set-combined_1.jpg";
import diyKit from "@/assets/diy-kit_1.jpg";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

const ProductCard = ({ title, image, description }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
      
      <div className="relative card-glow rounded-xl overflow-hidden transition-all duration-300">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Скульптура под заказ",
      image: sculptureBust,
      description: "Персональная скульптура с вашим лицом и фигурой в динамичной позе"
    },
    {
      title: "Полный комплект",
      image: fullSetCombined,
      description: "Персональная 3Д-фигурка + музей достижений с вашими кубками, джерси и фото"
    },
    {
      title: "Коллекционный набор",
      image: diyKit,
      description: "Набор для самостоятельной сборки и раскраски — отличный подарок"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32">
      {/* Section divider */}
      <div className="section-divider mb-20" />
      
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase">
            Наши <span className="text-gradient">продукты</span>
          </h2>
        </div>
        
        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
