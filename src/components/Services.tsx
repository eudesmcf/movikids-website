import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, School, Waves, Activity, ClipboardList } from "lucide-react"; // Adicione ClipboardList

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicomotricidade",
      description: "Atividades para o desenvolvimento motor, cognitivo e emocional.",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Fisioterapia Infantil",
      description: "Tratamentos especializados para fortalecimento muscular, reabilitação e desenvolvimento motor.",
      color: "bg-accent"
    },
    {
      icon: Waves,
      title: "Fisioterapia Aquática",
      description: "Terapias realizadas na água para potencializar o desenvolvimento e a reabilitação neurofuncional.",
      color: "bg-info"
    },
    {
      icon: Activity,
      title: "Reabilitação Neuropediátrica",
      description: "Intervenções para crianças com necessidades neurológicas visando autonomia e qualidade de vida.",
      color: "bg-success"
    },
    {
      icon: School,
      title: "Visitas Escolares",
      description: "Acompanhamento no ambiente escolar para promover adaptação e desenvolvimento da criança.",
      color: "bg-secondary"
    },
    {
      icon: ClipboardList, // Alterado aqui
      title: "Avaliações",
      description: "Avaliações detalhadas para identificar necessidades e traçar planos de intervenção personalizados.",
      color: "bg-warning"
    },
    {
      icon: Users,
      title: "Mentorias, Orientações e Supervisões",
      description: "Apoio e capacitação para profissionais, pais e familiares sobre desenvolvimento infantil.",
      color: "bg-brand-purple"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Conheça nossos serviços especializados para o desenvolvimento infantil e profissional.
            </p>
        </div>
        
        {/* Primeira linha com 4 cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Segunda linha com 3 cards centralizados */}
        <div className="grid md:grid-cols-3 gap-6 justify-center mx-auto" style={{maxWidth: '900px'}}>
          {services.slice(4).map((service, index) => (
            <Card key={index + 4} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;