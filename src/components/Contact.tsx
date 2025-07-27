import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Instagram, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Resposta rápida e atendimento personalizado",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/5583996945909?text=Olá! Gostaria de agendar uma consulta.",
      color: "bg-primary hover:bg-primary/90" // verde principal da marca
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Acompanhe nossas dicas e novidades",
      action: "Seguir no Instagram",
      link: "https://www.instagram.com/clinicamovikids/",
      color: "bg-brand-purple hover:bg-brand-purple/90" // roxo da marca
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Para dúvidas detalhadas e informações",
      action: "Enviar E-mail",
      link: "mailto:clinicamovikids@gmail.com",
      color: "bg-secondary hover:bg-secondary/90" // azul secundário da marca
    }
  ];

  const phoneMethod = {
    icon: Phone,
    title: "Telefone",
    description: "Atendimento de segunda a sexta, das 8h às 18h",
    action: "Ligar",
    link: "tel:+5583996945909",
    color: "bg-accent hover:bg-accent/90" // amarelo/accent da marca
  };

  return (
    <section id="contato" className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e sua família. 
            Entre em contato conosco através do canal de sua preferência.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[...contactMethods, phoneMethod].map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-end min-h-[120px]">
                {method.title === "Telefone" ? (
                  <p className="text-lg font-semibold text-foreground mb-2">(83) 99694-5909</p>
                ) : null}
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground shadow-lg"
                  onClick={() => window.open(method.link, '_blank')}
                  asChild={method.title === "Telefone"}
                >
                  {method.title === "Telefone" ? (
                    <a href={method.link}>Ligar</a>
                  ) : (
                    method.action
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export function ContactPhone() {
  return (
    <div className="flex flex-col items-center space-y-2 p-6">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-primary">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="text-lg font-semibold text-foreground">Telefone</span>
      </div>
      <span className="text-muted-foreground">+55 99 99999-9999</span>
      <Button asChild>
        <a href="tel:+559999999999">Ligar</a>
      </Button>
    </div>
  );
}

export default Contact;