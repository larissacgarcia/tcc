import React from 'react';
import { OFFICIAL_SOURCES } from '../data/officialSources';
import { FileCheck, ExternalLink, ShieldCheck } from 'lucide-react';

export const OfficialSourcesView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Evidência Científica & Transparência Pública</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Base de Dados & Fontes Oficiais do Ministério da Saúde
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Todas as informações, taxas de eficácia (Índice de Pearl), critérios clínicos de contraindicação e fluxogramas da Atenção Primária deste portal foram rigorosamente extraídos de documentos oficiais da administração pública federal, da OMS e dos conselhos reguladores de saúde.
          </p>
        </div>
      </div>

      {/* Official Sources Cards */}
      <div className="space-y-4">
        {OFFICIAL_SOURCES.map((source) => (
          <div
            key={source.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-sky-100 text-sky-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {source.documentType}
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                  {source.organization}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {source.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {source.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {source.description}
              </p>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700">
                <strong className="text-slate-900">Aplicação neste site:</strong> {source.relevance}
              </div>
            </div>

            <div className="shrink-0 pt-2 md:pt-0">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors w-full md:w-auto"
              >
                <span>Acessar Documento</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Legal & Clinical Disclaimer Box */}
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 text-xs text-rose-950 space-y-2">
        <strong className="text-sm font-bold text-rose-900 block flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-rose-700" />
          Aviso de Responsabilidade Clínica e Educativa
        </strong>
        <p className="leading-relaxed">
          Este aplicativo é uma ferramenta de <strong>educação em saúde e apoio à decisão informada</strong>. As recomendações geradas não substituem a avaliação clínica individualizada realizada na Consulta de Enfermagem ou Consulta Médica na Unidade Básica de Saúde (UBS). Cada organismo possui particularidades anatômicas e clínicas que devem ser avaliadas presencialmente por uma(um) profissional de saúde habilitada(o).
        </p>
      </div>
    </div>
  );
};
