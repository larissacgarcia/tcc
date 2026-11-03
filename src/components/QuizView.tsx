import React, { useState } from 'react';
import { getQuizQuestions } from '../data/quizQuestions';
import { evaluateContraceptionEligibility } from '../utils/eligibilityAlgorithm';
import type { QuizAnswers, QuizAnalysisResult } from '../utils/eligibilityAlgorithm';
import { Sparkles, ArrowRight, ArrowLeft, RotateCcw, Printer, CheckCircle, AlertTriangle, XCircle, Info, Stethoscope, FileText, MapPin, Share2, Check } from 'lucide-react';

interface QuizViewProps {
  onGoToUbs: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onGoToUbs }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizAnalysisResult | null>(null);
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.origin + window.location.pathname + '#quiz';
    const shareTitle = 'Acolhe Mulher | Métodos Contraceptivos no SUS';
    const shareText = 'Descubra o método contraceptivo ideal para sua rotina com acolhimento, respeito e respaldo oficial do SUS no Acolhe Mulher:';

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if (err && typeof err === 'object' && 'name' in err && (err as { name: string }).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareText + ' ' + shareUrl);
      setCopiedShareLink(true);
      setTimeout(() => setCopiedShareLink(false), 3000);
    } catch {
      setCopiedShareLink(true);
      setTimeout(() => setCopiedShareLink(false), 3000);
    }
  };

  const questions = getQuizQuestions();
  const currentQuestion = questions[currentStepIndex] || questions[0];
  const isLastQuestion = currentStepIndex === questions.length - 1;

  const currentAnswer = answers[currentQuestion.id as keyof QuizAnswers];

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!currentAnswer) return;

    if (isLastQuestion) {
      const calculatedResult = evaluateContraceptionEligibility(answers);
      setResult(calculatedResult);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  // --- RESULT VIEW ---
  if (result) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-in fade-in">
        {/* Academic Print Header for PDF */}
        <div className="hidden print:block border-b-2 border-slate-900 pb-3 mb-4">
          <div className="text-[10pt] uppercase tracking-wider text-slate-500 font-bold">
            Trabalho de Conclusão de Curso (TCC) em Enfermagem • Atenção Primária à Saúde
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Acolhe Mulher: Relatório Clínico de Apoio ao Planejamento Reprodutivo
          </h1>
          <div className="text-xs text-slate-600 mt-1">
            Emitido para apoio à decisão compartilhada na Consulta de Enfermagem na UBS.
          </div>
        </div>

        {/* Top Header Card */}
        <div className="pdf-card avoid-break bg-gradient-to-r from-rose-800 via-pink-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resultado Clínico do SUS</span>
            </span>

            <div className="flex items-center gap-2 no-print shrink-0">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-white/20 transition-colors whitespace-nowrap shrink-0"
                title="Compartilhar com uma amiga"
              >
                {copiedShareLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedShareLink ? 'Copiado!' : 'Compartilhar'}</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-white/20 transition-colors whitespace-nowrap shrink-0"
                title="Imprimir ou Salvar PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Salvar </span>
                <span>PDF</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-white/20 transition-colors whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer</span>
              </button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Seu Perfil & Recomendações do Ministério da Saúde
          </h2>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl">
            Com base nas suas respostas, cruzamos seus dados com os Critérios Médicos de Elegibilidade da OMS e do Ministério da Saúde para identificar as melhores alternativas para sua vida.
          </p>

          {/* Quick Profile Summary Pills */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              Idade: <strong>{result.summaryProfile.ageGroup}</strong>
            </span>
            <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              Rotina: <strong>{result.summaryProfile.routineProfile}</strong>
            </span>
            <span className="bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              Situação: <strong>{result.summaryProfile.postpartumStatus}</strong>
            </span>
          </div>

          {result.summaryProfile.clinicalAlerts.length > 0 && (
            <div className="mt-4 bg-amber-500/20 border border-amber-300/30 rounded-2xl p-3 text-xs text-amber-100 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong>Atenção aos fatores clínicos informados:</strong>{' '}
                {result.summaryProfile.clinicalAlerts.join('; ')}. O algoritmo filtrou automaticamente métodos que possam oferecer riscos ao seu perfil.
              </div>
            </div>
          )}
        </div>

        {/* Top Recommended Methods */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Métodos Mais Indicados Para Você (Disponíveis no SUS)</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">Classificados por compatibilidade clínica</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {result.topRecommendations.map((item, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={item.method.id}
                  className={`pdf-card avoid-break bg-white rounded-3xl p-5 sm:p-6 border transition-all ${
                    isFirst
                      ? 'border-emerald-300 shadow-sm ring-1 ring-emerald-500/10'
                      : 'border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          item.badgeColor === 'emerald'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.eligibilityLabel}
                        </span>
                        {isFirst && (
                          <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            ★ Principal Recomendação
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                        {item.method.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.method.categoryLabel} • {item.method.hormoneType} • Duração: {item.method.durationText}
                      </p>
                    </div>

                    <div className="text-right bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-100">
                      <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Eficácia Real no SUS</span>
                      <span className="text-base font-extrabold text-emerald-700">{item.method.effectivenessTypical}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {item.method.howItWorks}
                  </p>

                  {/* Why it matches */}
                  <div className="space-y-2 mb-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4">
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Por que este método combina com a sua realidade:</span>
                    </span>
                    <ul className="text-xs sm:text-sm text-emerald-950 space-y-1.5 pl-1">
                      {item.reasons.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Precautions */}
                  {item.precautions.length > 0 && (
                    <div className="space-y-2 mb-4 bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4">
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Orientações importantes da equipe de saúde:</span>
                      </span>
                      <ul className="text-xs sm:text-sm text-amber-950 space-y-1 pl-1">
                        {item.precautions.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* How to get it in SUS */}
                  <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                      <span><strong>Onde conseguir:</strong> {item.method.howToGetInSUS.where}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-teal-800 font-semibold">
                      <Stethoscope className="w-4 h-4" />
                      <span>{item.method.howToGetInSUS.whoExecutes}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contraindicated or Caution section (if any) */}
        {(result.contraindicatedMethods.length > 0 || result.cautionMethods.length > 0) && (
          <div className="bg-rose-50/80 border border-rose-200 rounded-3xl p-6 space-y-3">
            <h4 className="text-base font-bold text-rose-900 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>Métodos que exigem Cautela ou são Contraindicados para você</span>
            </h4>
            <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
              De acordo com os Critérios do Ministério da Saúde, certas características de saúde desaconselham determinados hormônios para prevenir complicações como trombose ou hipertensão grave:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {result.contraindicatedMethods.map((cm) => (
                <div key={cm.method.id} className="bg-white rounded-2xl p-3.5 border border-rose-200 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-rose-800">
                    <span>{cm.method.name}</span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-[10px]">Cat. 4 - Contraindicado</span>
                  </div>
                  <p className="text-slate-600">{cm.precautions[0] || 'Risco clínico superior ao benefício.'}</p>
                </div>
              ))}
              {result.cautionMethods.map((cm) => (
                <div key={cm.method.id} className="bg-white rounded-2xl p-3.5 border border-amber-200 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-800">
                    <span>{cm.method.name}</span>
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px]">Cat. 3 - Cautela</span>
                  </div>
                  <p className="text-slate-600">{cm.precautions[0] || 'Requer avaliação médica especializada na UBS.'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nursing Consultation Card & Printable Pack */}
        <div className="pdf-card avoid-break bg-gradient-to-br from-rose-50/80 via-pink-50/40 to-white border border-rose-200 rounded-3xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Resumo para a Consulta de Enfermagem na UBS
              </h4>
              <p className="text-xs sm:text-sm text-rose-900 font-medium">
                {result.nursingConsultationTip}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white/90 rounded-2xl p-4 border border-rose-100 space-y-2">
              <strong className="text-slate-900 flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-rose-900">
                <FileText className="w-4 h-4 text-rose-600" />
                Documentos para levar na bolsa:
              </strong>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Documento oficial com foto (RG ou CNH)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Cartão SUS (físico ou app Meu SUS Digital)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Comprovante de residência (para cadastrar sua ESF)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 border border-rose-100 space-y-2">
              <strong className="text-slate-900 flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-rose-900">
                <Info className="w-4 h-4 text-rose-600" />
                Dúvidas bacanas para tirar com a Enfermeira:
              </strong>
              <ul className="space-y-1.5 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>"Posso colocar o DIU de Cobre aqui na própria unidade?"</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>"Podemos fazer os testes rápidos de HIV e Sífilis hoje?"</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>"Como funciona a retirada das camisinhas e lubrificante?"</span>
                </li>
              </ul>
            </div>
          </div>

        {/* Dual protection banner */}
          <div className="bg-white rounded-2xl p-4 border border-indigo-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-slate-700">
              <strong className="text-indigo-900 block font-bold mb-0.5">Lembrete de Ouro: Dupla Proteção</strong>
              {result.dualProtectionMessage}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
            <button
              type="button"
              onClick={onGoToUbs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold px-5 py-3 rounded-2xl shadow-sm text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver Guia Passo a Passo da UBS</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 font-bold px-4 py-3 rounded-2xl shadow-2xs text-sm transition-colors"
            >
              {copiedShareLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-rose-600" />}
              <span>{copiedShareLink ? 'Link Copiado! 🎉' : 'Compartilhar com uma Amiga'}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900 font-semibold px-4 py-3 rounded-2xl hover:bg-white text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer o Quiz com outras opções</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- QUESTION STEP VIEW ---
  const progressPercent = Math.round(((currentStepIndex + 1) / questions.length) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Step Indicator Header */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span className="text-rose-600 uppercase tracking-wider font-extrabold">
            Pergunta {currentStepIndex + 1} de {questions.length}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span>Privacidade Ativa (LGPD)</span>
            <span>•</span>
            <span className="text-rose-600 font-bold">{progressPercent}%</span>
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-600 to-pink-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100/90">
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <fieldset className="space-y-5">
            <legend className="sr-only">{currentQuestion.title}</legend>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {currentQuestion.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {currentQuestion.subtitle}
              </p>
            </div>

            {currentQuestion.tip && (
              <div className="bg-rose-50/80 border border-rose-200/80 rounded-2xl p-3.5 text-xs text-rose-950 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Diretrizes MS & OMS:</strong> {currentQuestion.tip}</span>
              </div>
            )}

            {/* Radio Options List per modern web guidance */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer === option.id;
                const inputId = `opt-${currentQuestion.id}-${option.id}`;

                return (
                  <label
                    key={option.id}
                    htmlFor={inputId}
                    className={`block relative cursor-pointer p-4 rounded-2xl border-2 transition-all duration-150 ${
                      isSelected
                        ? 'border-rose-600 bg-rose-50/60 shadow-2xs ring-1 ring-rose-500/20'
                        : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50/70'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <input
                        type="radio"
                        id={inputId}
                        name={currentQuestion.id}
                        value={option.id}
                        checked={isSelected}
                        onChange={() => handleSelectOption(option.id)}
                        className="mt-1 w-4 h-4 text-rose-600 border-slate-300 focus:ring-rose-500 shrink-0 accent-rose-600"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-slate-800 text-sm sm:text-base block">
                          {option.label}
                        </span>
                        {option.description && (
                          <span className="text-xs sm:text-sm text-slate-500 block mt-0.5">
                            {option.description}
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Form Action Buttons */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors shrink-0 ${
                currentStepIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>

            <button
              type="submit"
              disabled={!currentAnswer}
              className={`inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-2xl shadow-sm transition-all whitespace-nowrap text-sm sm:text-base shrink-0 ${
                currentAnswer
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-rose-200/60 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{isLastQuestion ? 'Ver Recomendação' : 'Próxima'}</span>
              {isLastQuestion ? <Sparkles className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>

      {/* Safety & LGPD Notice */}
      <div className="mt-4 text-center text-xs text-slate-400">
        <span>Garantia LGPD (Lei 13.709/18): Suas respostas são processadas exclusivamente na memória temporária do seu navegador. Nenhum dado é gravado.</span>
      </div>
    </div>
  );
};
