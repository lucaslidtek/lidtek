import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { MoveLeft, Scale, FileCode, CheckCircle, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const { t } = useLanguage();

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
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group" data-testid="link-back-home">
              <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Voltar para o Início</span>
            </Link>

            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-6">
              <Scale className="w-3.5 h-3.5 text-primary/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Acordo de Serviço</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
              Termos de <span className="font-normal not-italic">Serviço</span>
            </h1>
            
            <p className="text-xl text-white/40 font-light max-w-2xl mb-20 leading-relaxed">
              Regras e responsabilidades que sustentam nossa parceria técnica e o compromisso com a excelência operacional.
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
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">1. Atuação</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    Ao utilizar as soluções da <span className="text-white/80">Lidtek</span>, você estabelece um acordo de conformidade com nossos padrões técnicos. Nossos serviços são desenhados para otimização e maturidade tecnológica, exigindo uso responsável da infraestrutura fornecida.
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
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">2. Propriedade</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    Toda arquitetura de software, metodologias de engenharia e ativos digitais desenvolvidos pela Lidtek são protegidos por direitos de propriedade intelectual. A licença de uso é concedida especificamente para a operação do cliente, conforme definido em contrato.
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
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">3. Performance</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    Nos comprometemos com a alta disponibilidade e integridade das soluções. A responsabilidade da Lidtek limita-se ao escopo técnico da engenharia contratada, garantindo que o software funcione como uma fundação sólida para o crescimento do seu negócio.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-16 border-t border-white/5 mt-8">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-light mb-4 relative z-10">Parceria Estruturada</h3>
                <p className="text-white/40 font-light mb-8 relative z-10 max-w-md text-lg">
                  Nossos termos refletem nossa postura de departamento de tecnologia premium: clareza, rigor e foco no resultado.
                </p>
                <Link 
                  href="/#cta" 
                  className="inline-flex items-center px-6 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-white/90 transition-colors relative z-10"
                >
                  Falar com a Lidtek
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">© {new Date().getFullYear()} Lidtek Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

