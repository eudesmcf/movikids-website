import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo-simbolo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSectionWithOffset = (sectionId: string, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-card/60 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Logo Movikids"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Movikids</h1>
              <p className="text-sm text-muted-foreground">
                Clínica de Desenvolvimento Infantil
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSectionWithOffset('inicio', 80)}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('equipe')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;