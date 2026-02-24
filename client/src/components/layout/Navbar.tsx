import { Link } from "wouter";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/553496840966?text=Olá Rafael, gostaria de entender melhor como a Lidtek pode atuar como nosso departamento de tecnologia.";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const manifestoSection = document.getElementById('manifesto');
      const modelSection = document.getElementById('model');
      const approachSection = document.getElementById('approach');
      
      const manifestoTop = manifestoSection?.offsetTop || 0;
      const modelTop = modelSection?.offsetTop || 0;
      const approachTop = approachSection?.offsetTop || 0;
      
      const threshold = 80;

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
    ? "bg-black/40 backdrop-blur-[32px] saturate-[180%] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
    : "bg-white/40 backdrop-blur-[32px] saturate-[180%] border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]";

  return (
    <>
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[100] px-6 py-2.5 md:py-3 md:px-8 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full border backdrop-blur-md ${navClass} ${glassClass}`}
      >
        <Link href="/" className="z-50 cursor-pointer p-2 transition-transform active:scale-95" onClick={() => setIsMenuOpen(false)}>
          <img src={logoWhite} alt="Lidtek Logo" className={`h-5 md:h-7 w-auto transition-all duration-500 ${logoClass}`} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-[13px] z-50">
          <div className="flex items-center gap-8">
            <a href="#manifesto" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">{t("nav.manifesto")}</a>
            <a href="#approach" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">{t("nav.approach")}</a>
            <a href="#model" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">{t("nav.model")}</a>
            <a href="#operations" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">{t("nav.operations")}</a>
            <a href="#ideal-client" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">{t("nav.ideal")}</a>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 border ${borderClass} rounded-full px-3 py-1.5 transition-colors duration-500 ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
              <button 
                onClick={() => setLanguage("pt")}
                className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-all ${language === "pt" ? "text-white font-black" : (isDark ? "text-white/30 hover:text-white" : "text-black/40 hover:text-black")}`}
              >
                PT
              </button>
              <div className={`w-[1px] h-2 ${isDark ? "bg-white/30" : "bg-black/20"}`} />
              <button 
                onClick={() => setLanguage("en")}
                className={`text-[10px] cursor-pointer uppercase tracking-tighter transition-all ${language === "en" ? "text-white font-black" : (isDark ? "text-white/30 hover:text-white" : "text-black/40 hover:text-black")}`}
              >
                EN
              </button>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 bg-primary text-white rounded-full uppercase tracking-widest text-[11px] font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20`}
            >
              {t("nav.engage")}
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 flex items-center justify-center w-10 h-10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-center">
            <span className={`h-[1.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'w-5 translate-y-[7.5px] rotate-45' : 'w-5'}`} />
            <span className={`h-[1.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'opacity-0 scale-0' : 'w-5'}`} />
            <span className={`h-[1.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'w-5 -translate-y-[7.5px] -rotate-45' : 'w-5'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[90] bg-background/98 backdrop-blur-2xl md:hidden flex flex-col pt-32"
          >
            <div className="flex flex-col items-center justify-start h-full gap-10 p-8 text-center overflow-y-auto">
              <div className="flex flex-col gap-6">
                {[
                  { href: "#manifesto", label: t("nav.manifesto") },
                  { href: "#approach", label: t("nav.approach") },
                  { href: "#model", label: t("nav.model") },
                  { href: "#operations", label: t("nav.operations") },
                  { href: "#ideal-client", label: t("nav.ideal") }
                ].map((item, i) => (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-display font-light uppercase tracking-[0.2em] text-white active:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 mt-2"
              >
                <button onClick={() => { setLanguage("pt"); setIsMenuOpen(false); }} className={`text-[11px] tracking-widest uppercase ${language === "pt" ? "text-primary font-bold" : "text-white/40"}`}>Português</button>
                <div className="w-[1px] h-3 bg-white/10" />
                <button onClick={() => { setLanguage("en"); setIsMenuOpen(false); }} className={`text-[11px] tracking-widest uppercase ${language === "en" ? "text-primary font-bold" : "text-white/40"}`}>English</button>
              </motion.div>

              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full max-w-[260px] px-6 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-[0.15em] text-[10px] shadow-xl shadow-primary/20"
              >
                {t("nav.engage")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

