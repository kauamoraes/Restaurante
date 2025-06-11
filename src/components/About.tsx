
import { Chef, Heart, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossa História
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Há mais de 15 anos criando experiências gastronômicas memoráveis, 
              combinando tradição familiar com inovação culinária.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Paixão pela Culinária
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa jornada começou com uma simples paixão: criar pratos que tocam o coração 
                e despertam memórias afetivas. Cada receita é cuidadosamente desenvolvida com 
                ingredientes selecionados e técnicas que honram tanto a tradição quanto a inovação.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, estendemos essa experiência para além das nossas mesas, levando nossos 
                sabores diretamente para sua casa através do nosso serviço de delivery premium.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800" 
                alt="Prato gourmet" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Chef className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Chefs Experientes</h4>
              <p className="text-muted-foreground">
                Nossa equipe de chefs traz décadas de experiência e paixão para cada prato.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Ingredientes Frescos</h4>
              <p className="text-muted-foreground">
                Selecionamos cuidadosamente cada ingrediente, priorizando qualidade e frescor.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Excelência</h4>
              <p className="text-muted-foreground">
                Cada detalhe é pensado para proporcionar uma experiência gastronômica única.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
