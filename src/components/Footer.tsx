import LogoSimbolo from "@/assets/logo-simbolo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={LogoSimbolo}
                alt="Logo Movikids"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg">Movikids</span>
            </div>
            <p className="text-sm text-background/80">
              Clínica de Desenvolvimento Infantil. Cuidado especializado para crianças de 0 a 15 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-background/80">
              <ul className="space-y-2">
                <li>Psicomotricidade</li>
                <li>Fisioterapia Infantil</li>
                <li>Fisioterapia Aquática</li>
              </ul>
              <ul className="space-y-2">
                <li>Reabilitação Neurofuncional</li>
                <li>Visitas Escolares</li>
                <li>Avaliações</li>
              </ul>
              <ul className="space-y-2">
                <li>Mentorias</li>
                <li>Orientações</li>
                <li>Supervisões</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <span className="font-semibold">Techne Mall Brisamar</span>
              </li>
              <li>
                Endereço: R. Maria Facunda de Oliveira Dias, 56 - Sala 19 - Brisamar, João Pessoa - PB, 58033-100
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-background/20" />
        
        <div className="text-center text-sm text-background/60">
          © 2024 Movikids - Clínica de Desenvolvimento Infantil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;