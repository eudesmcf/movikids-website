import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-hero-pattern">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Cuidado 
              <span className="text-primary"> Especializado </span>
              para Crianças
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Oferecemos serviços especializados para o desenvolvimento infantil e motor de crianças de 0 a 15 anos. Nossa equipe atua com psicomotricidade, fisioterapia, fisioterapia aquática, reabilitação neurofuncional, visitas escolares, avaliações, além de apoiar outros profissionais com mentorias, orientações e supervisões.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contato')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Ambiente acolhedor da clínica infantil" 
              className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;