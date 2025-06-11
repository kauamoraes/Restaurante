
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente Regular",
    content: "Simplesmente excepcional! O risotto de cogumelos é o melhor que já provei. O delivery sempre chega no tempo certo e com a temperatura perfeita.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Food Blogger",
    content: "O Sabor & Arte elevou minha experiência gastronômica. Cada prato é uma obra de arte, tanto visualmente quanto no sabor. Recomendo demais!",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Chef Amadora",
    content: "Frequento o restaurante há anos e nunca me decepcionei. A qualidade dos ingredientes e o cuidado no preparo são incomparáveis. É meu lugar favorito!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nosso maior orgulho. 
              Veja o que eles têm a dizer sobre nossa experiência gastronômica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
