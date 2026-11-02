import React from 'react';
import { Heart, FileText, Lock } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  brandName: string;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, brandName, onOpenPrivacyModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-8 border-t border-slate-800 no-print">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-xs">
                {brandName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {brandName}
              </span>
              <span className="bg-slate-800 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                TCC Enfermagem
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tecnologia cuidativo-educacional em saúde reprodutiva voltada para a prevenção da gravidez na adolescência, orientada pelos protocolos do Ministério da Saúde, Critérios da OMS, BVS e COFEN.
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-400">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Dedicado à autonomia e prevenção da gravidez na adolescência.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Navegação</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-rose-400 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('quiz')} className="hover:text-rose-400 transition-colors">
                  Questionário Clínico
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('metodos')} className="hover:text-rose-400 transition-colors">
                  Catálogo no SUS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('onde-aplicar')} className="hover:text-rose-400 transition-colors">
                  Salas da UBS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('dupla-protecao')} className="hover:text-rose-400 transition-colors">
                  Dupla Proteção & ISTs
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('enfermagem')} className="hover:text-rose-400 transition-colors">
                  Enfermagem & Leis
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('referencias')} className="hover:text-rose-400 transition-colors font-bold text-rose-400 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>Referências ABNT</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Public Health Contacts & Privacy */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Canais & Termos Éticos</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Disque Saúde 136</span>
                  <span className="text-slate-400 text-[11px]">Dúvidas do SUS e localização de UBS</span>
                </div>
                <span className="text-pink-400 font-extrabold text-sm">136</span>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Central da Mulher 180</span>
                  <span className="text-slate-400 text-[11px]">Orientação e direitos da mulher 24h</span>
                </div>
                <span className="text-rose-400 font-extrabold text-sm">180</span>
              </div>

              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="w-full text-left bg-slate-800/50 hover:bg-slate-800 rounded-xl p-2.5 border border-slate-700/40 text-[11px] text-rose-300 flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Aviso de Privacidade & LGPD (Zero Storage)</span>
                </span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright / disclaimer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {brandName}. Trabalho de Conclusão de Curso em Enfermagem.</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Atenção Primária à Saúde • SUS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
