import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { MoveLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030303] text-white/90 selection:bg-primary/30 font-sans">
      <Navbar />
      
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Background elements to match brand identity */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/2 blur-[100px] rounded-full" />
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
              <Shield className="w-3.5 h-3.5 text-primary/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Segurança e Dados</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
              Política de <span className="font-normal not-italic">Privacidade</span>
            </h1>
            
            <p className="text-xl text-white/40 font-light max-w-2xl mb-20 leading-relaxed">
              Transparência e proteção técnica são as bases da nossa operação. Entenda como cuidamos da sua integridade digital.
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
                      <Lock className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">1. Governança</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    A <span className="text-white/80">Lidtek</span> opera sob os mais rigorosos padrões de engenharia de dados. Esta política detalha o tratamento de informações em conformidade com as melhores práticas de governança tecnológica.
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
                      <Eye className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">2. Coleta Técnica</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    Coletamos apenas dados essenciais para a performance dos nossos sistemas. Informações de contato corporativo e logs técnicos são processados exclusivamente para garantir a estabilidade e segurança das soluções entregues.
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
                      <FileText className="w-4 h-4 text-white/60" />
                    </div>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-white font-medium">3. Segurança Ativa</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 text-white/50 font-light leading-relaxed text-lg">
                  <p>
                    Implementamos criptografia de ponta e protocolos de acesso restrito. Seus dados não são apenas armazenados, são blindados por nossa arquitetura de segurança invisível, permitindo que sua operação flua sem riscos.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-16 border-t border-white/5 mt-8">
              <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 rounded-full group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-2xl font-light mb-4 relative z-10">Dúvidas sobre Proteção?</h3>
                <p className="text-white/40 font-light mb-8 relative z-10 max-w-md">
                  Nossa equipe de engenharia está à disposição para detalhar nossos protocolos de segurança.
                </p>
                <a 
                  href="mailto:contato@lidtek.com.br" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors tracking-[0.2em] text-[10px] uppercase font-bold relative z-10"
                >
                  contato@lidtek.com.br
                </a>
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

