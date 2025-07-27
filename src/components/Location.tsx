import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import Map from "./Map";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em um ambiente acessível e acolhedor, 
            pensado especialmente para o conforto das crianças e famílias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mapa em destaque */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Encontre-nos no Mapa
              </h3>
              <Map />
            </div>
          </div>
          
          {/* Informações organizadas */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Endereço */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123<br />
                      Bairro Jardim Primavera<br />
                      São Paulo, SP - CEP: 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Horário */}
            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary rounded-lg">
                    <Clock className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horários</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Seg - Sex:</span>
                        <span className="font-medium">8h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="font-medium">8h às 12h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="font-medium text-accent">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Facilidades */}
            <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Facilidades</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Estacionamento gratuito</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>Ambiente climatizado</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Transporte público</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                        <span>Brinquedoteca infantil</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;