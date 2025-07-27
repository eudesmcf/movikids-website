import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamMember from "@/assets/team-member.jpg";

const Team = () => {
  return (
    <section id="equipe" className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a profissional dedicada ao cuidado e desenvolvimento infantil, 
            comprometida com o bem-estar de cada criança e família.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Foto e informações básicas */}
                <div className="text-center md:text-left">
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img 
                      src={teamMember} 
                      alt="Dra. Jéssica Priscila Neres Carvalho - Fisioterapeuta e Psicomotricista" 
                      className="relative z-10 w-32 h-32 object-cover rounded-full border-4 border-card shadow-lg"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Dra. Jéssica Priscila Neres Carvalho
                  </h3>
                  
                  <p className="text-lg text-primary font-semibold mb-4">
                    Fisioterapeuta e Psicomotricista
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="bg-primary text-primary-foreground">
                      CrefitO 12345-F
                    </Badge>
                    <Badge className="bg-secondary text-secondary-foreground">
                      10+ anos
                    </Badge>
                  </div>
                </div>
                
                {/* Formação e experiência */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Formação Acadêmica
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• <strong>Graduação:</strong> Fisioterapia - Universidade São Paulo (USP)</p>
                      <p>• <strong>Especialização:</strong> Psicomotricidade Clínica - UNIFESP</p>
                      <p>• <strong>Pós-graduação:</strong> Fisioterapia Pediátrica e Neonatal</p>
                      <p>• <strong>Formação complementar:</strong> Integração Sensorial</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Experiência Profissional
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• <strong>Hospital Infantil (2014-2019):</strong> Fisioterapia neonatal e pediátrica</p>
                      <p>• <strong>Centro de Reabilitação (2019-2021):</strong> Coordenadora do setor infantil</p>
                      <p>• <strong>Clínica própria (2021-atual):</strong> Atendimento especializado em desenvolvimento</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Especialidades
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>Desenvolvimento motor</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span>Integração sensorial</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span>Atrasos no desenvolvimento</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-brand-purple rounded-full"></div>
                        <span>Suporte escolar</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                    <p className="text-foreground italic">
                      "Acredito que cada criança tem seu próprio ritmo de desenvolvimento. Meu papel é oferecer o suporte necessário 
                      para que ela alcance seu potencial máximo, sempre respeitando suas individualidades e necessidades."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;