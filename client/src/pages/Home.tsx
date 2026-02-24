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
  const { t } = useLanguage();

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
          
          <footer className="py-12 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
              <img src={logoWhite} alt="Lidtek" className="h-6 w-auto opacity-50" />
              <div className="text-white/40 text-xs uppercase tracking-widest font-sans">
                © {new Date().getFullYear()} Lidtek. {t("footer.rights")}
              </div>
            </div>
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}
