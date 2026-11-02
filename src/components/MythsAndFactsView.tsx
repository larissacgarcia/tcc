import React, { useState } from 'react';
import { MYTHS_AND_FACTS } from '../data/istEducation';
import { CheckCircle2, XCircle, Sparkles, BookOpen, RotateCcw } from 'lucide-react';

export const MythsAndFactsView: React.FC = () => {
  const [userGuesses, setUserGuesses] = useState<Record<string, boolean>>({});

  const handleGuess = (itemId: string, guessIsTrue: boolean) => {
    setUserGuesses((prev) => ({
      ...prev,
      [itemId]: guessIsTrue,
    }));
  };

  const handleResetGuesses = () => {
    setUserGuesses({});
  };

  const answeredCount = Object.keys(userGuesses).length;
  const correctCount = MYTHS_AND_FACTS.filter(
    (item) => userGuesses[item.id] !== undefined && userGuesses[item.id] === item.isTrue
  ).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Educação em Saúde Interativa</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Jogo dos Mitos & Verdades do SUS
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Você sabe o que é ciência comprovada e o que é boato sobre métodos contraceptivos e saúde da mulher? Escolha se cada afirmação é Mito ou Verdade e confira a explicação oficial.
        </p>

        {answeredCount > 0 && (
          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-bold">
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
              Respondidas: {answeredCount} de {MYTHS_AND_FACTS.length}
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full">
              Acertos: {correctCount} de {answeredCount}
            </span>
            <button
              onClick={handleResetGuesses}
              className="text-rose-600 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Reiniciar
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {MYTHS_AND_FACTS.map((item, index) => {
          const userGuess = userGuesses[item.id];
          const hasAnswered = userGuess !== undefined;
          const isCorrect = hasAnswered && userGuess === item.isTrue;

          return (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all ${
                hasAnswered
                  ? isCorrect
                    ? 'border-emerald-300 ring-2 ring-emerald-500/10'
                    : 'border-amber-300 ring-2 ring-amber-500/10'
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Questão {index + 1} • {item.category}
                </span>

                {hasAnswered && (
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Você acertou!
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> Ops, não é isso!
                      </>
                    )}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                "{item.question}"
              </h3>

              {/* Guess Buttons */}
              {!hasAnswered ? (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleGuess(item.id, true)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-800 font-bold px-5 py-2.5 rounded-2xl border border-slate-200 text-sm transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>É Verdade!</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGuess(item.id, false)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-800 text-slate-800 font-bold px-5 py-2.5 rounded-2xl border border-slate-200 text-sm transition-all"
                  >
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>É Mito!</span>
                  </button>
                </div>
              ) : (
                /* Explanation Revealed */
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        item.isTrue ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {item.isTrue ? '✓ Resposta Correta: VERDADE' : '✕ Resposta Correta: MITO'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.explanation}
                  </p>

                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span><strong>Fonte Oficial:</strong> {item.officialSource}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
