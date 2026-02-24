import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between bg-transparent">
      <Link href="/" className="z-50 cursor-pointer">
        <img src={logoWhite} alt="Lidtek Logo" className="h-6 md:h-8 w-auto mix-blend-difference" />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm z-50">
        <a href="#manifesto" className="text-white mix-blend-difference hover:text-primary transition-colors uppercase tracking-widest">{t("nav.manifesto")}</a>
        <a href="#approach" className="text-white mix-blend-difference hover:text-primary transition-colors uppercase tracking-widest">{t("nav.approach")}</a>
        <a href="#model" className="text-white mix-blend-difference hover:text-primary transition-colors uppercase tracking-widest">{t("nav.model")}</a>
        
        <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 ml-4 mix-blend-difference">
          <button 
            onClick={() => setLanguage("pt")}
            className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-opacity text-white ${language === "pt" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
          >
            PT
          </button>
          <div className="w-[1px] h-2 bg-white/20" />
          <button 
            onClick={() => setLanguage("en")}
            className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-opacity text-white ${language === "en" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
          >
            EN
          </button>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all rounded-full uppercase tracking-widest text-white mix-blend-difference"
        >
          {t("nav.engage")}
        </a>
      </div>
    </nav>
  );
}
