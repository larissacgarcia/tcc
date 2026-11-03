import React, { useState } from 'react';
import { Clock, ShieldCheck, HeartHandshake, CheckCircle2, ChevronDown, ChevronUp, Stethoscope, AlertTriangle, Pill } from 'lucide-react';

interface EmergencyContraceptionCardProps {
  onGoToUbs?: () => void;
  compact?: boolean;
}

export const EmergencyContraceptionCard: React.FC<EmergencyContraceptionCardProps> = ({
  onGoToUbs,
  compact = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(!compact);

  return (
    <section
      aria-labelledby="ae-card-heading"
      className="bg-gradient-to-br from-amber-50/90 via-rose-50/40 to-white border border-amber-200/90 rounded-3xl p-5 sm:p-7 shadow-2xs space-y-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs shadow-amber-200">
            <Pill className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] sm:text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                Protocolo do Ministério da Saúde & COFEN
              </span>
              <span className="bg-rose-100 text-rose-800 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
                Dispensação Imediata na UBS
              </span>
            </div>
            <h3 id="ae-card-heading" className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              Anticoncepção de Emergência (Pílula do Dia Seguinte) no SUS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
              A camisinha estourou ou teve relação desprotegida recente? Aja com rapidez, acolhimento e respaldo das leis de saúde.
            </p>
          </div>
        </div>

        {compact && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-500 hover:text-slate-800 p-1.5 rounded-xl hover:bg-white/80 transition-colors shrink-0"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Recolher detalhes da Anticoncepção de Emergência' : 'Expandir detalhes da Anticoncepção de Emergência'}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-1 animate-in fade-in duration-200">
          {/* Time Window Indicator */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 text-xs">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Primeiras 24 horas</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-tight">
                <strong>Eficácia máxima (~95%)</strong>. Quanto mais cedo tomar, maior a proteção contra a ovulação.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-800 text-xs">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Até 72 horas (3 dias)</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-tight">
                Janela formal recomendada pelo Ministério da Saúde (Levonorgestrel 1,5 mg dose única).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-amber-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Até 120 horas (5 dias)</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-tight">
                Efeito residual ou indicação para inserção de <strong>DIU de Cobre de emergência</strong> na UBS.
              </p>
            </div>
          </div>

          {/* Core Guidance Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Direct Access & ECA */}
            <div className="bg-white/95 rounded-2xl p-3.5 border border-amber-100 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-rose-600" />
                <span>Acesso Livre e Sigiloso para Adolescentes</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Pelo Estatuto da Criança e do Adolescente (ECA) e normas do Ministério da Saúde, você tem direito ao 
                atendimento confidencial. <strong>Não é obrigatório levar pais ou responsáveis</strong> para retirar a pílula do dia seguinte na UBS.
              </p>
            </div>

            {/* Nursing Competence */}
            <div className="bg-white/95 rounded-2xl p-3.5 border border-amber-100 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-teal-700" />
                <span>Atuação da Enfermagem na APS</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                As Resoluções COFEN nº 690/2022 e 714/2023 respaldam o(a) enfermeiro(a) na Consulta de Enfermagem para acolher, 
                orientar, prescrever e dispensar a medicação de imediato, além de ofertar testes rápidos para ISTs.
              </p>
            </div>
          </div>

          {/* Important Clinical Warnings */}
          <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-3 sm:p-4 text-xs text-amber-950 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-xs">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Orientações Essenciais de Saúde:</span>
            </div>
            <ul className="space-y-1 pl-1 text-[11px] sm:text-xs leading-relaxed text-amber-900/90">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Não é abortiva:</strong> A pílula atua bloqueando ou atrasando a liberação do óvulo. Se a gravidez já estiver implantada no útero, ela não interrompe a gestação.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Não use como método de rotina:</strong> A pílula de emergência tem menor eficácia acumulada que os métodos regulares (como DIU, injetável ou pílula contínua) e causa irregularidade no ciclo menstrual.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Não protege contra ISTs:</strong> Apenas o preservativo protege contra HIV, Sífilis e Hepatites. Na UBS, solicite também a Profilaxia Pós-Exposição (PEP) se houve risco de IST em até 72 horas.</span>
              </li>
            </ul>
          </div>

          {/* Action button if handler provided */}
          {onGoToUbs && (
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5 no-print">
              <span className="text-[11px] text-slate-500 font-medium">
                Procure a Unidade Básica de Saúde (UBS) mais próxima da sua casa ou escola.
              </span>
              <button
                type="button"
                onClick={onGoToUbs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Como Solicitar na Recepção da UBS</span>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
