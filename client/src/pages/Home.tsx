import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { Model } from "@/components/sections/Model";
import { Operations } from "@/components/sections/Operations";
import { IdealClient } from "@/components/sections/IdealClient";
import { CTA } from "@/components/sections/CTA";
import { SmoothScroll } from "@/components/ui/magic/smooth-scroll";
import logoWhite from "@assets/lidtek-primary-logo_white_1771959392591.png";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <Problem />
        <Manifesto />
        <Approach />
        <Model />
        <Operations />
        <IdealClient />
        
        <div id="footer-container" className="bg-[#050505] relative overflow-hidden">
          <CTA />
          
          <footer className="py-20 px-6 md:px-12 border-t border-white/5 relative bg-[#050505]">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                  <img src={logoWhite} alt="Lidtek" className="h-8 w-auto mb-6 opacity-90" />
                  <p className="text-white/50 text-sm max-w-sm leading-relaxed font-sans">
                    {language === "pt" 
                      ? "Transformamos a complexidade tecnológica em vantagem competitiva. Sua consultoria de elite para operações digitais e desenvolvimento de produto."
                      : "We transform technological complexity into competitive advantage. Your elite consultancy for digital operations and product development."}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6">{t("nav.manifesto") !== "Manifesto" ? "Menu" : "Menu"}</h4>
                  <ul className="space-y-4">
                    <li><a href="#manifesto" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">{t("nav.manifesto")}</a></li>
                    <li><a href="#approach" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">{t("nav.approach")}</a></li>
                    <li><a href="#model" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">{t("nav.model")}</a></li>
                    <li><a href="#operations" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">{t("nav.operations")}</a></li>
                    <li><a href="#ideal-client" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">{t("nav.ideal")}</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-6">Social</h4>
                  <ul className="space-y-4">
                    <li><a href="https://linkedin.com/company/lidtek" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">LinkedIn</a></li>
                    <li><a href="https://instagram.com/lidtek" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">Instagram</a></li>
                    <li><a href="https://wa.me/553496840966" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors text-sm uppercase tracking-wider">WhatsApp</a></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-sans">
                  © {new Date().getFullYear()} Lidtek. {t("footer.rights")}
                </div>
                <div className="flex gap-8">
                  <a href="#" className="text-white/20 hover:text-white/40 transition-colors text-[10px] uppercase tracking-[0.2em]">{t("footer.privacy")}</a>
                  <a href="#" className="text-white/20 hover:text-white/40 transition-colors text-[10px] uppercase tracking-[0.2em]">{t("footer.terms")}</a>
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}
