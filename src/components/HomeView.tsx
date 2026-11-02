import React from 'react';
import {
  Sparkles,
  FileText,
  ArrowRight,
  CheckCircle2,
  Lock,
  Heart,
  Clock,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onOpenPrivacyModal: () => void;
  brandName?: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenPrivacyModal,
}) => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Soft Rose Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-rose-200/50 via-pink-100/40 to-amber-100/30 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-[500px] -right-[150px] w-[450px] h-[450px] bg-gradient-to-br from-pink-200/40 to-rose-100/30 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-16 space-y-12">
        
        {/* Main Hero Card */}
        <section className="text-center max-w-2xl mx-auto space-y-6">
          {/* Shimmer Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs shimmer-badge">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Prevenção da Gravidez na Adolescência • TCC Enfermagem</span>
          </div>

          {/* Clean Main Title without rejected slogans */}
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Acolhe Mulher:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500">
              Escolha do Método Contraceptivo
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Ferramenta interativa desenvolvida para apoiar adolescentes na identificação do método contraceptivo mais seguro e compatível com a sua realidade, com base nos <strong>Critérios Médicos de Elegibilidade do Ministério da Saúde e da OMS</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-rose-200/60 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm group"
            >
              <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
              <span>Iniciar Questionário de Escolha</span>
              <ArrowRight className="w-4 h-4 text-pink-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('referencias')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-slate-700 font-semibold px-6 py-4 rounded-2xl border border-rose-200/80 shadow-2xs hover:border-rose-300 transition-all text-sm backdrop-blur-xs"
            >
              <FileText className="w-4 h-4 text-rose-600" />
              <span>Consultar Referências em ABNT</span>
            </button>
          </div>

          {/* Clinical Assurance Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-xl border border-rose-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Protocolos Oficiais do Ministério da Saúde
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-xl border border-rose-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Critérios Médicos da OMS & BVS
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-xl border border-rose-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Sigilo e Privacidade (ECA & LGPD)
            </span>
          </div>
        </section>

        {/* Focused 3-Pillar Cards explaining what the Quiz evaluates */}
        <section className="space-y-4">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-lg font-bold text-slate-900">
              Como o Questionário Avalia a Realidade da Adolescente
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Perguntas simples, empáticas e diretas para prevenir a gravidez na adolescência com eficácia científica:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pillar 1: Rotina Real */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-rose-100 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                1. Sua Rotina Real
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Avalia se você tem facilidade para lembrar comprimidos todo dia no mesmo horário ou se prefere a segurança contínua de métodos de longa ação (como o DIU de cobre).
              </p>
            </div>

            {/* Pillar 2: Critérios de Segurança */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-rose-100 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                2. Segurança Médica
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cruza seus dados com os Critérios do Ministério da Saúde para descartar hormônios de risco (por exemplo, estrogênio em caso de enxaqueca com aura ou fumo).
              </p>
            </div>

            {/* Pillar 3: Acolhimento da Enfermagem */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-rose-100 shadow-2xs space-y-2.5">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                3. Resumo para a Consulta
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gera um relatório objetivo com os métodos mais indicados para você levar no celular ou impresso para a consulta de enfermagem na Unidade Básica de Saúde.
              </p>
            </div>
          </div>
        </section>

        {/* Discreet Privacy & LGPD Section */}
        <section className="bg-white/80 border border-rose-100 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-800 block text-xs">Privacidade Total & Armazenamento Zero (LGPD)</strong>
              <span>Suas respostas existem apenas na memória temporária do seu navegador e não são salvas.</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenPrivacyModal}
            className="text-rose-700 hover:text-rose-800 font-bold hover:underline shrink-0 text-left sm:text-right"
          >
            Termos Éticos e Jurídicos →
          </button>
        </section>

      </div>
    </div>
  );
};
