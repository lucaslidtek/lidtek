import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const manifestoSection = document.getElementById('manifesto');
      const modelSection = document.getElementById('model');
      
      const manifestoTop = manifestoSection?.offsetTop || 0;
      const modelTop = modelSection?.offsetTop || 0;
      
      const threshold = 80;

      const problemSection = document.getElementById('problem');
      const approachSection = document.getElementById('approach');
      
      const approachTop = approachSection?.offsetTop || 0;

      if (scrollY < (manifestoTop - threshold)) {
        setIsDark(true); 
      } else if (scrollY < (approachTop - threshold)) {
        setIsDark(false); 
      } else if (scrollY < (modelTop - threshold)) {
        setIsDark(true); 
      } else {
        setIsDark(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isDark ? "text-white" : "text-black";
  const borderClass = isDark ? "border-white/20" : "border-black/20";
  const logoClass = isDark ? "" : "invert";
  const glassClass = isDark 
    ? "liquid-glass-dark" 
    : "liquid-glass";

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] px-6 py-3 md:py-4 md:px-8 flex items-center justify-between transition-all duration-500 rounded-full ${navClass} ${glassClass} ${isMenuOpen ? 'rounded-b-none' : ''}`}>
        <Link href="/" className="z-50 cursor-pointer p-2" onClick={() => setIsMenuOpen(false)}>
          <img src={logoWhite} alt="Lidtek Logo" className={`h-5 md:h-8 w-auto transition-all duration-300 ${logoClass}`} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm z-50">
          <a href="#manifesto" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.manifesto")}</a>
          <a href="#approach" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.approach")}</a>
          <a href="#model" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.model")}</a>
          
          <div className={`flex items-center gap-2 border ${borderClass} rounded-full px-3 py-1 ml-4 transition-colors duration-300 ${isDark ? 'bg-white/10' : 'bg-black/5'} backdrop-blur-md`}>
            <button 
              onClick={() => setLanguage("pt")}
              className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-opacity ${language === "pt" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
            >
              PT
            </button>
            <div className={`w-[1px] h-2 ${isDark ? "bg-white/20" : "bg-black/20"}`} />
            <button 
              onClick={() => setLanguage("en")}
              className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-opacity ${language === "en" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
            >
              EN
            </button>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 border ${borderClass} hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full uppercase tracking-widest`}
          >
            {t("nav.engage")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-[9px] -rotate-45' : 'w-6'}`} />
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-[9px] rotate-45' : 'w-5'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <a href="#manifesto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest">{t("nav.manifesto")}</a>
          <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest">{t("nav.approach")}</a>
          <a href="#model" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest">{t("nav.model")}</a>
          
          <div className="flex items-center gap-6 mt-4">
            <button onClick={() => { setLanguage("pt"); setIsMenuOpen(false); }} className={`text-lg ${language === "pt" ? "text-primary font-bold" : "text-white/40"}`}>PT</button>
            <div className="w-[1px] h-4 bg-white/20" />
            <button onClick={() => { setLanguage("en"); setIsMenuOpen(false); }} className={`text-lg ${language === "en" ? "text-primary font-bold" : "text-white/40"}`}>EN</button>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 bg-primary text-background rounded-full font-bold uppercase tracking-widest"
          >
            {t("nav.engage")}
          </a>
        </div>
      </div>
    </>
  );
}
