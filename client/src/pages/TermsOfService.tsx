import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { Scale, FileCode, CheckCircle, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function TermsOfService() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white/90 selection:bg-primary/30 font-sans">
      <Navbar />
      
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Background elements to match brand identity */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-[-5%] w-[30%] h-[30%] bg-primary/2 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex mb-12">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                <Scale className="w-3.5 h-3.5 text-primary/60" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">{t("terms.tag")}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
              {t("terms.title1")}<span className="font-normal not-italic">{t("terms.title2")}</span>
            </h1>
            
            <p className="text-xl text-white/40 font-light max-w-2xl mb-20 leading-relaxed">
              {t("terms.desc")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-16"
          >
            <section className="group relative">
              <div className="absolute -left-8 top-1 w-px h-full bg-gradient-to-b from-primary/40 to-transparent group-hover:from-primary transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <Zap className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">{t("terms.s1.title")}</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    {t("terms.s1.desc").split("Lidtek").map((part, i, arr) => 
                      i === arr.length - 1 ? part : <span key={i}>{part}<span className="text-white/80">Lidtek</span></span>
                    )}
                  </p>
                </div>
              </div>
            </section>

            <section className="group relative">
              <div className="absolute -left-8 top-1 w-px h-full bg-gradient-to-b from-primary/40 to-transparent group-hover:from-primary transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <FileCode className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">{t("terms.s2.title")}</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    {t("terms.s2.desc")}
                  </p>
                </div>
              </div>
            </section>

            <section className="group relative">
              <div className="absolute -left-8 top-1 w-px h-full bg-gradient-to-b from-primary/40 to-transparent group-hover:from-primary transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                      <CheckCircle className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">{t("terms.s3.title")}</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    {t("terms.s3.desc")}
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-16 border-t border-white/5 mt-8">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-light mb-4 relative z-10">{t("terms.cta.title")}</h3>
                <p className="text-white/40 font-light mb-8 relative z-10 max-w-md text-lg">
                  {t("terms.cta.desc")}
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-6 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-white/90 transition-colors relative z-10"
                >
                  {t("cta.btn")}
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">© {new Date().getFullYear()} {t("footer.rights")}</p>
      </footer>
    </div>
  );
}

