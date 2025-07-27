import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo-simbolo.png"; // ajuste o caminho se necessário

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
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
              onClick={() => scrollToSection('inicio')} 
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
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="bg-primary hover:bg-primary/90"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;