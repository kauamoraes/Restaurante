
import { Truck, Utensils, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Delivery Premium",
    description: "Entrega rápida e segura em até 45 minutos, mantendo a qualidade e temperatura dos pratos.",
    features: ["Embalagens térmicas", "Rastreamento em tempo real", "Entrega gratuita acima de R$ 80"]
  },
  {
    icon: Utensils,
    title: "Experiência no Restaurante",
    description: "Ambiente aconchegante e sofisticado para momentos especiais com atendimento personalizado.",
    features: ["Reservas online", "Menu degustação", "Sommelier especializado"]
  },
  {
    icon: Clock,
    title: "Encomendas Especiais",
    description: "Planejamos eventos e ocasiões especiais com cardápios personalizados para sua celebração.",
    features: ["Cardápio personalizado", "Agendamento flexível", "Consultoria gastronômica"]
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Rigorosos padrões de qualidade e higiene, com ingredientes selecionados e preparação cuidadosa.",
    features: ["Certificação sanitária", "Ingredientes premium", "Equipe especializada"]
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos múltiplas formas de você desfrutar de nossa culinária, 
              seja no conforto da sua casa ou em nosso restaurante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
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
