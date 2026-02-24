import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="z-50 cursor-pointer">
        <img src={logoWhite} alt="Lidtek Logo" className="h-6 md:h-8 w-auto" />
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-white font-medium text-sm z-50">
        <a href="#manifesto" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.manifesto")}</a>
        <a href="#approach" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.approach")}</a>
        <a href="#model" className="hover:text-primary transition-colors uppercase tracking-widest">{t("nav.model")}</a>
        
        <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 ml-4">
          <button 
            onClick={() => setLanguage("pt")}
            className={`text-[10px] uppercase tracking-tighter transition-opacity ${language === "pt" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
          >
            PT
          </button>
          <div className="w-[1px] h-2 bg-white/20" />
          <button 
            onClick={() => setLanguage("en")}
            className={`text-[10px] uppercase tracking-tighter transition-opacity ${language === "en" ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100"}`}
          >
            EN
          </button>
        </div>

        <a href="#contact" className="px-5 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all rounded-full uppercase tracking-widest">
          {t("nav.engage")}
        </a>
      </div>
    </nav>
  );
}
