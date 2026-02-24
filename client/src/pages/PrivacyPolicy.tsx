import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { MoveLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#030303] text-white/90 selection:bg-primary/30">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group" data-testid="link-back-home">
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans">{t("common.back")}</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-12 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-white/60 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">1. Introdução</h2>
            <p>
              A Lidtek está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações ao utilizar nossos serviços de tecnologia e automação.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">2. Coleta de Dados</h2>
            <p>
              Coletamos apenas as informações necessárias para fornecer nossos serviços de excelência, incluindo dados de contato profissional e informações técnicas para integração de sistemas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">3. Uso das Informações</h2>
            <p>
              Seus dados são utilizados exclusivamente para a prestação dos serviços contratados, suporte técnico e comunicações sobre atualizações importantes em nossas soluções de software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">4. Segurança</h2>
            <p>
              Implementamos medidas de segurança de nível empresarial para garantir que seus dados permaneçam protegidos contra acesso não autorizado ou divulgação.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-white tracking-wide">5. Contato</h2>
            <p>
              Para questões sobre seus dados, entre em contato através do e-mail: contato@lidtek.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
