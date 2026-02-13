import LogoSimbolo from "@/assets/logo-simbolo.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-4">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
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
              Clínica de Desenvolvimento Infantil.<br />
              Cuidado especializado para crianças de 0 a 15 anos.
            </p>
            </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-2 text-sm text-background/80">
              <ul className="space-y-2 pl-0">
                <li>Psicomotricidade</li>
                <li>Fisioterapia Infantil</li>
                <li>Fisioterapia Aquática</li>
              </ul>
              <ul className="space-y-2 pl-0">
                <li>Reabilitação Neurofuncional</li>
                <li>Visitas Escolares</li>
                <li>Avaliações</li>
              </ul>
              <ul className="space-y-2 pl-0">
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
              <li>
                <span className="font-semibold">Horário:</span> Segunda a Sexta, 8h às 18h
              </li>
            </ul>
          </div>

            <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
              <span className="font-semibold">Telefone:</span>
              <a
                href="https://wa.me/5583996945909?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary flex items-center gap-1"
              >
                (83) 99694-5909
                <FaWhatsapp className="inline-block text-green-500 w-4 h-4" />
              </a>
              </li>
              <li>
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:clinicamovikids@gmail.com"
                className="underline hover:text-primary"
              >
                clinicamovikids@gmail.com
              </a>
              </li>
              <li>
              <span className="font-semibold">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/clinicamovikids"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                @clinicamovikids
              </a>
              </li>
            </ul>
            </div>
          </div>
        <hr className="my-4 border-background/20" />
        
        <div className="text-center text-sm text-background/60">
          © 2025 Movikids - Clínica de Desenvolvimento Infantil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;