import React from 'react';
import { Sparkles, MapPin, ShieldCheck, Heart, Stethoscope, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreUbs: () => void;
  onExploreIst: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onExploreUbs, onExploreIst }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-slate-50 py-10 sm:py-14 border-b border-rose-100/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/80 text-rose-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Saúde Sexual & Reprodutiva Humanizada na Atenção Primária</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Descubra o melhor método para a sua rotina com base nas <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">diretrizes do Ministério da Saúde</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Responda a perguntas simples sobre o seu dia a dia, histórico de saúde e planos de vida. Nosso algoritmo clínico analisa os critérios da OMS e do SUS para indicar os métodos mais seguros, onde aplicar na sua UBS e como ser acolhida pela enfermagem.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={onStartQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-rose-600 text-base"
              >
                <Sparkles className="w-5 h-5" />
                <span>Fazer o Quiz Interativo</span>
              </button>

              <button
                type="button"
                onClick={onExploreUbs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-sm"
              >
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Onde Aplicar na UBS</span>
              </button>

              <button
                type="button"
                onClick={onExploreIst}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Dupla Proteção (ISTs)</span>
              </button>
            </div>

            {/* Quick Guarantees / Badges */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Gratuito no SUS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sem Julgamentos Morais</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respaldo COFEN & MS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Feature Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 shadow-xl shadow-rose-100/50 border border-rose-100">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Atenção Primária à Saúde</span>
              </div>

              <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                O que você encontra aqui:
              </h2>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Recomendador Clínico Personalizado</strong>
                    Baseado nos Critérios Médicos de Elegibilidade da OMS e Caderno de Atenção Básica nº 26.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Guia de Acesso e Salas da UBS</strong>
                    Onde colocar o DIU de cobre, onde tomar a injeção e como retirar pílulas e camisinhas.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Papel da Enfermagem & Direitos</strong>
                    Consulta de enfermagem acolhedora, inserção de DIU por enfermeiras e a Nova Lei 14.443/2022.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Dupla Proteção & Prevenção de ISTs</strong>
                    Testes rápidos em 15 minutos, PEP em até 72 horas, PrEP e vacinação na rede pública.
                  </div>
                </li>
              </ul>

              <div className="mt-5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Dados atualizados com base nas normas mais recentes do SUS e do Ministério da Saúde.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
