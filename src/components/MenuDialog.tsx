
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fullMenu = {
  entradas: [
    {
      name: "Bruschetta Especial",
      description: "Pão artesanal, tomate confit e burrata cremosa",
      price: "R$ 32,00",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=400"
    },
    {
      name: "Carpaccio de Salmão",
      description: "Salmão fresco em fatias finas com alcaparras e azeite",
      price: "R$ 38,00",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400"
    },
    {
      name: "Tábua de Frios",
      description: "Seleção de queijos e embutidos artesanais",
      price: "R$ 45,00",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400"
    }
  ],
  pratos: [
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
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400"
    },
    {
      name: "Ravioli de Ricota",
      description: "Massa fresca recheada com ricota e espinafre ao molho de manteiga e sálvia",
      price: "R$ 58,00",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=400"
    },
    {
      name: "Cordeiro Confitado",
      description: "Pernil de cordeiro confitado por 8h com ervas provençais e batatas",
      price: "R$ 95,00",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400"
    }
  ],
  sobremesas: [
    {
      name: "Tiramisu Artesanal",
      description: "Sobremesa italiana tradicional com café expresso e mascarpone",
      price: "R$ 28,00",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400"
    },
    {
      name: "Petit Gateau",
      description: "Bolinho de chocolate quente com sorvete de baunilha",
      price: "R$ 25,00",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400"
    },
    {
      name: "Cheesecake de Frutas",
      description: "Cheesecake cremoso com calda de frutas vermelhas",
      price: "R$ 22,00",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400"
    }
  ]
};

interface MenuDialogProps {
  children: React.ReactNode;
}

export const MenuDialog = ({ children }: MenuDialogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof fullMenu>("entradas");

  const openWhatsApp = (itemName: string, price: string) => {
    const message = `Olá! Gostaria de fazer um pedido do *${itemName}* por ${price}. Poderia me ajudar?`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            Menu Completo - Sabor & Arte
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Categorias */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(fullMenu).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category as keyof typeof fullMenu)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Items da categoria selecionada */}
          <div className="grid md:grid-cols-2 gap-4">
            {fullMenu[selectedCategory].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <Badge variant="secondary" className="text-primary font-bold">{item.price}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <Button 
                    onClick={() => openWhatsApp(item.name, item.price)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Pedir no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
