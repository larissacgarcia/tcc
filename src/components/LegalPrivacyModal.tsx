import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Lock, AlertTriangle, Scale } from 'lucide-react';

interface LegalPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalPrivacyModal: React.FC<LegalPrivacyModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in no-print"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">
                Termo de Transparência & Ética (TCC)
              </span>
              <h2 id="privacy-modal-title" className="text-xl font-extrabold text-slate-900">
                Privacidade, LGPD & Segurança Jurídica
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar janela de termos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* LGPD Highlight */}
          <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span>Conformidade com a LGPD (Lei Federal nº 13.709/2018)</span>
            </div>
            <p className="text-slate-700 text-xs leading-relaxed">
              <strong>Processamento 100% Local (Armazenamento Zero):</strong> Este aplicativo não coleta, não grava e não transmite nenhuma informação pessoal ou de saúde para servidores remotos, nuvem ou terceiros.
            </p>
            <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
              <li>Respostas do questionário são processadas apenas na memória volátil do seu próprio navegador.</li>
              <li>Não utilizamos cookies de rastreamento, nem coletamos IP, nome, CPF ou geolocalização.</li>
              <li>Ao fechar ou recarregar a página, todas as respostas são imediatamente apagadas.</li>
            </ul>
          </div>

          {/* Legal Clinical Disclaimer */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Scale className="w-4 h-4 text-rose-600" />
              <span>Isenção de Responsabilidade Clínica e Proposta do TCC</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esta ferramenta digital é uma tecnologia cuidativo-educacional concebida como produto acadêmico de <strong>Trabalho de Conclusão de Curso (TCC) em Enfermagem</strong>. Sua finalidade é subsidiar a educação em saúde e apoiar o processo de decisão compartilhada durante a <strong>Consulta de Enfermagem em Saúde Reprodutiva</strong> na Atenção Primária.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              As recomendações baseiam-se rigorosamente nos Critérios Médicos de Elegibilidade do Ministério da Saúde e da OMS, mas <strong>não substituem o exame físico presencial, a anamnese detalhada e o julgamento clínico individualizado de enfermeiras(os) ou médicas(os) na sua Unidade Básica de Saúde (UBS)</strong>.
            </p>
          </div>

          {/* Sensitive Content Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Aviso de Conteúdo em Saúde Sexual</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              O aplicativo contém informações técnicas e educativas relativas ao sistema reprodutor humano, sexualidade, anatomia, métodos anticoncepcionais e prevenção de Infecções Sexualmente Transmissíveis (ISTs), tratadas de forma laica, científica e fundamentada nos direitos humanos e reprodutivos.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            Resoluções COFEN 690/2022, 714/2023 • Lei 14.443/2022
          </div>
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
