import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { MoveLeft } from "lucide-react";

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#030303] text-white/90 selection:bg-primary/30">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group" data-testid="link-back-home">
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans">{t("common.back")}</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-12 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          Termos de Serviço
        </h1>

        <div className="space-y-8 text-white/60 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar os serviços da Lidtek, você concorda com estes termos. Nossas soluções de software e hardware são fornecidas sob medida para otimizar processos industriais e corporativos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">2. Propriedade Intelectual</h2>
            <p>
              Todo o software, design e metodologias desenvolvidas pela Lidtek são de propriedade exclusiva da empresa, exceto quando especificado em contrato de transferência de tecnologia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">3. Responsabilidades</h2>
            <p>
              A Lidtek se compromete a entregar soluções que sigam os mais altos padrões de qualidade técnica. O cliente é responsável pelo uso adequado das ferramentas fornecidas dentro de sua infraestrutura.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">4. Modificações</h2>
            <p>
              Reservamo-nos o direito de atualizar estes termos para refletir melhorias em nossos processos e mudanças regulatórias no setor de tecnologia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
