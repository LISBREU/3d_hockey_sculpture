import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Museum from "@/components/Museum";
import Products from "@/components/Products";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="museum">
          <Museum />
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </div>
  );
};

export default Index;
