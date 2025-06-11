
import { Heart, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sabor & Arte</h3>
              <p className="text-primary-foreground/80 mb-4">
                Criando experiências gastronômicas memoráveis há mais de 15 anos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Entradas</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Pratos Principais</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobremesas</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Bebidas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Delivery</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Reservas</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Eventos</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Catering</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Rua das Delícias, 123</li>
                <li>Centro, São Paulo - SP</li>
                <li>(11) 9999-8888</li>
                <li>contato@saborarte.com.br</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 flex items-center justify-center">
              Feito por Kauã Moraes para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
