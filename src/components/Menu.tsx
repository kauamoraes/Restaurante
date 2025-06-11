
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "Risotto de Cogumelos",
    description: "Arroz arbório cremoso com mix de cogumelos selvagens e trufa branca",
    price: "R$ 68,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  },
  {
    name: "Salmão Grelhado",
    description: "Salmão fresco grelhado com ervas mediterrâneas e legumes da estação",
    price: "R$ 78,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  },
  {
    name: "Ravioli de Ricota",
    description: "Massa fresca recheada com ricota e espinafre ao molho de manteiga e sálvia",
    price: "R$ 58,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  },
  {
    name: "Cordeiro Confitado",
    description: "Pernil de cordeiro confitado por 8h com ervas provençais e batatas",
    price: "R$ 95,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  },
  {
    name: "Tiramisu Artesanal",
    description: "Sobremesa italiana tradicional com café expresso e mascarpone",
    price: "R$ 28,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  },
  {
    name: "Bruschetta Especial",
    description: "Entrada com pão artesanal, tomate confit e burrata cremosa",
    price: "R$ 32,00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400"
  }
];

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Menu Especial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra nossa seleção de pratos cuidadosamente elaborados, 
              que combinam sabores autênticos com apresentação sofisticada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Ver Menu Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
