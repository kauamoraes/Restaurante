
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de fazer um pedido. Poderiam me ajudar?";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2000')] bg-cover bg-center opacity-5"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sabores que
            <span className="text-primary block">Conquistam</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
            Descubra uma experiência gastronômica única com ingredientes frescos 
            e receitas artesanais, agora também no conforto da sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg" 
              onClick={scrollToMenu}
            >
              Ver Menu
            </Button>
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="text-lg px-8 py-3 bg-green-600 hover:bg-green-700 text-white shadow-lg"
            >
              Pedir no WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
