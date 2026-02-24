import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const manifestoSection = document.getElementById('manifesto');
      const modelSection = document.getElementById('model');
      const contactSection = document.getElementById('contact');
      
      const manifestoTop = manifestoSection?.offsetTop || 0;
      const modelTop = modelSection?.offsetTop || 0;
      const contactTop = contactSection?.offsetTop || 0;
      
      const threshold = 80; // offset for the navbar height

      // manifesto (white), approach (dark), model (white), contact (white)
      // hero (dark), problem (dark), manifesto (white), approach (dark), model (white), contact (white)
      
      const problemSection = document.getElementById('problem');
      const approachSection = document.getElementById('approach');
      
      const problemTop = problemSection?.offsetTop || 0;
      const approachTop = approachSection?.offsetTop || 0;

      if (scrollY < manifestoTop - threshold) {
        setIsDark(true); // Hero and Problem are dark
      } else if (scrollY < approachTop - threshold) {
        setIsDark(false); // Manifesto is white
      } else if (scrollY < modelTop - threshold) {
        setIsDark(true); // Approach is dark
      } else {
        setIsDark(false); // Model and Contact are white
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isDark ? "text-white" : "text-black";
  const borderClass = isDark ? "border-white/20" : "border-black/20";
  const logoClass = isDark ? "" : "invert";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between transition-colors duration-300 ${navClass}`}>
      <Link href="/" className="z-50 cursor-pointer">
        <img src={logoWhite} alt="Lidtek Logo" className={`h-6 md:h-8 w-auto transition-all duration-300 ${logoClass}`} />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm z-50">
        <a href="#manifesto" className="hover:text-[#6580E1] transition-colors uppercase tracking-widest">{t("nav.manifesto")}</a>
        <a href="#approach" className="hover:text-[#6580E1] transition-colors uppercase tracking-widest">{t("nav.approach")}</a>
        <a href="#model" className="hover:text-[#6580E1] transition-colors uppercase tracking-widest">{t("nav.model")}</a>
        
        <div className={`flex items-center gap-2 border ${borderClass} rounded-full px-3 py-1 ml-4 transition-colors duration-300`}>
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
    </nav>
  );
}
