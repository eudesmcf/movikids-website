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
                    <div className="relative z-10 w-32 h-32 rounded-full border-4 border-card shadow-lg overflow-hidden">
                      <img 
                      src={teamMember} 
                      alt="Dra. Jéssica Priscila Neres Carvalho - Fisioterapeuta e Psicomotricista" 
                      className="w-full h-full object-cover"
                      />
                    </div>
                    </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                  Dra. Jéssica Priscila Neres Carvalho
                  </h3>
                  
                  <p className="text-lg text-primary font-semibold mb-4">
                  Fisioterapeuta e Psicomotricista
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-primary text-primary-foreground">
                    Crefito 266408-F
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    +7 anos em Desenvolvimento Infantil
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground">
                    Especialista em Autismo
                  </Badge>
                  <Badge className="bg-brand-purple text-brand-purple-foreground">
                    Esp. em Reabilitação em Neuropediatria 
                  </Badge>
                  </div>
                </div>
                
                {/* Formação e experiência */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Formação
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Desenvolvimento Neuropsicomotor</p>
                      <p>• Psicomotricidade Clínica e Institucional</p>
                      <p>• Intervenção Precoce</p>
                      <p>• Fisioterapia no Autismo</p>
                      <p>• Fisioterapia no TDAH</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Formação Acadêmica
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Graduação em Fisioterapia – Uninassau (2018.1)</p>
                      <p>• Psicomotricista Clínica e Institucional – Unifip (2020)</p>
                      <p>• Especialista em Fisioterapia no Autismo – CBI of Miami (2022)</p>
                      <p>• Fisioterapeuta Aquática – ENAFA (2023)</p>
                      <p>• Pós-graduanda em Reabilitação em Neuropediatria – Inclusão Eficiente (conclusão em 2026)</p>
                      <p>• Formação complementar em Desenvolvimento Infantil, Intervenção Precoce, Transtornos do Neurodesenvolvimento, ABA, Modelo Denver e Terapias Baseadas em Evidências</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Experiência Profissional
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Atendimento clínico em desenvolvimento infantil</p>
                      <p>• Atuação em clínica multidisciplinar</p>
                      <p>• Supervisão de profissionais na atuação com crianças com TEA, TOD e TDAH</p>
                      <p>• Elaboração de relatórios cinético-funcionais e planos terapêuticos individualizados</p>
                      <p>• Acompanhamento de crianças com atraso no desenvolvimento, hipotonia, alterações posturais e dificuldades motoras globais</p>
                      <p>• Orientação institucional: ajuste de mobiliário, adaptação curricular e organização escolar para inclusão da pessoa com deficiência</p>
                      <p>• Realização de palestras sobre inclusão, desenvolvimento infantil e práticas baseadas em evidências</p>
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
                        <span>Desenvolvimento Neuropsicomotor</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span>Psicomotricidade Clínica e Institucional</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span>Intervenção Precoce</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-brand-purple rounded-full"></div>
                        <span>Fisioterapia no Autismo</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>Fisioterapia no TDAH</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                    <p className="text-foreground italic">
                      "Cada criança possui um potencial único. Meu compromisso é oferecer cuidado técnico, acolhedimento e intervenções personalizadas para que ela desenvolva suas habilidades com segurança, autonomia e confiança."
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