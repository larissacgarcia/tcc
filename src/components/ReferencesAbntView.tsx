import React, { useState } from 'react';
import {
  ABNT_REFERENCES,
  QUESTION_SCIENTIFIC_BASES,
  TECHNOLOGIES_USED,
  PROJECT_TREE_STRUCTURE,
  generatePlainTextAbnt,
  generateBibTex
} from '../data/abntReferences';
import {
  Copy,
  Check,
  Download,
  Printer,
  ExternalLink,
  BookOpen,
  Code2,
  FolderTree,
  Sparkles,
  Search,
  BookmarkCheck
} from 'lucide-react';

export const ReferencesAbntView: React.FC = () => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSingleId, setCopiedSingleId] = useState<string | null>(null);
  const [copiedTree, setCopiedTree] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopyAll = () => {
    const text = generatePlainTextAbnt();
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleCopySingle = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSingleId(id);
    setTimeout(() => setCopiedSingleId(null), 2000);
  };

  const handleCopyTree = () => {
    navigator.clipboard.writeText(PROJECT_TREE_STRUCTURE);
    setCopiedTree(true);
    setTimeout(() => setCopiedTree(false), 2000);
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextAbnt();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'referencias_abnt_acolhe_mulher_tcc.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadBibTex = () => {
    const text = generateBibTex();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'referencias_acolhe_mulher_tcc.bib';
    link.click();
    URL.revokeObjectURL(url);
  };

  const filteredReferences = ABNT_REFERENCES.filter((ref) => {
    const matchesFilter = selectedFilter === 'all' || ref.category === selectedFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      ref.title.toLowerCase().includes(query) ||
      ref.authors.toLowerCase().includes(query) ||
      ref.relevanceToTcc.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Top Academic Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm avoid-break">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-slate-800 text-rose-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Documentação Acadêmica • TCC Enfermagem (ABNT NBR 6023)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Referências Bibliográficas & Fundamentação Científica
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Página dedicada com todas as fontes normativas e clínicas do Ministério da Saúde, Biblioteca Virtual em Saúde (BVS), Organização Pan-Americana da Saúde (OPAS/OMS), Conselho Federal de Enfermagem (COFEN) e Legislação Federal recente, com fundamentação científica para cada pergunta do questionário.
          </p>
        </div>

        {/* Action Toolbar for TCC export */}
        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-stretch gap-2.5 no-print">
          <button
            type="button"
            onClick={handleCopyAll}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs whitespace-nowrap"
          >
            {copiedAll ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
            <span>{copiedAll ? 'Copiado para o Clipboard!' : 'Copiar Todas em ABNT'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadTxt}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-700 transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-pink-400" />
            <span>Baixar .TXT (ABNT)</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadBibTex}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-700 transition-colors whitespace-nowrap"
          >
            <Code2 className="w-4 h-4 text-sky-400" />
            <span>Baixar BibTeX (.bib)</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-700 transition-colors whitespace-nowrap"
          >
            <Printer className="w-4 h-4 text-rose-400" />
            <span>Imprimir / Gerar PDF</span>
          </button>
        </div>
      </div>

      {/* Section 1: ABNT Reference List */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-rose-600" />
              <span>Lista de Referências Padronizadas (ABNT)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Publicações oficiais nos últimos 5 anos e diretrizes permanentes de saúde pública.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs no-print">
            {[
              { id: 'all', label: 'Todas' },
              { id: 'ministerio_saude', label: 'Ministério da Saúde' },
              { id: 'cofen', label: 'COFEN' },
              { id: 'legislacao', label: 'Legislação' },
              { id: 'bvs_opas_fiocruz', label: 'BVS / OPAS' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                  selectedFilter === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search input for references */}
        <div className="relative no-print">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar nas referências (ex: COFEN, 2022, DIU, elegibilidade, BVS...)"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* References List Cards */}
        <div className="space-y-3.5">
          {filteredReferences.map((ref, index) => {
            const isCopied = copiedSingleId === ref.id;

            return (
              <article
                key={ref.id}
                className="pdf-card avoid-break bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-400">[{index + 1}]</span>
                    <span className="bg-rose-50 text-rose-800 font-semibold px-2.5 py-0.5 rounded-full border border-rose-100">
                      {ref.categoryLabel}
                    </span>
                    <span className="text-slate-400">• Base: {ref.bvsDatabase}</span>
                  </div>

                  <div className="flex items-center gap-2 no-print">
                    <button
                      type="button"
                      onClick={() => handleCopySingle(ref.id, ref.abntFormatted)}
                      className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 font-semibold text-xs py-1 px-2 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Copiar citação ABNT individual"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copiada!' : 'Copiar ABNT'}</span>
                    </button>

                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 font-semibold text-xs py-1 px-2 rounded-lg hover:bg-rose-50 transition-colors"
                    >
                      <span>Abrir Fonte</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Formatted ABNT citation */}
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 text-xs sm:text-sm font-serif leading-relaxed text-slate-800 select-all">
                  {ref.abntFormatted}
                </div>

                {/* Relevance to Nursing TCC */}
                <div className="text-xs text-slate-600 flex items-start gap-2">
                  <strong className="text-slate-800 shrink-0">Relevância no TCC:</strong>
                  <span>{ref.relevanceToTcc}</span>
                </div>

                {/* Link print fallback visible in PDF */}
                <div className="hidden print:block text-[10pt] text-sky-800">
                  <span>URL Oficial: {ref.url}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Section 2: Question-by-Question Scientific Base */}
      <section className="space-y-4 pt-4 border-t border-slate-200 avoid-break">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Evidência Científica do Questionário Clínico</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Justificativa Clínica de Cada Pergunta Realizada
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Demonstração técnica de que nenhuma pergunta do questionário foi inserida aleatoriamente. Cada item responde a um critério da OMS e do Ministério da Saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {QUESTION_SCIENTIFIC_BASES.map((q) => (
            <article
              key={q.questionId}
              className="pdf-card avoid-break bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {q.questionNumber}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {q.questionTitle}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {q.categoriesInvolved}
                </span>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-800 block text-xs uppercase tracking-wider text-teal-900 font-bold">
                    Objetivo Clínico na Consulta de Enfermagem:
                  </strong>
                  <p className="text-slate-700">{q.clinicalPurpose}</p>
                </div>

                <div className="pt-1">
                  <strong className="text-slate-800 block text-xs uppercase tracking-wider text-teal-900 font-bold">
                    Fundamentação Científica (Racional):
                  </strong>
                  <p className="text-slate-600 leading-relaxed">{q.scientificRationale}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-slate-600">
                  <strong>Referência Bibliográfica:</strong> {q.abntCitation} ({q.referencedSource})
                </div>
                <a
                  href={q.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1"
                >
                  <span>Consultar Documento</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Technologies Used in TCC */}
      <section className="space-y-4 pt-4 border-t border-slate-200 avoid-break">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-teal-700" />
            <span>Tecnologias Utilizadas no Desenvolvimento da Ferramenta</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Recursos e padrões técnicos adotados para assegurar privacidade dos dados, responsividade móvel e rigor acadêmico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {TECHNOLOGIES_USED.map((tech, idx) => (
            <div key={idx} className="pdf-card avoid-break bg-white rounded-2xl p-4 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block">
                {tech.category}
              </span>
              <h3 className="font-bold text-slate-900 text-sm">{tech.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Project Tree Structure */}
      <section className="space-y-3 pt-4 border-t border-slate-200 avoid-break">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FolderTree className="w-5 h-5 text-teal-700" />
              <span>Estrutura do Projeto (Árvore de Diretórios)</span>
            </h2>
            <p className="text-xs text-slate-500">
              Organização dos módulos de código, dados clínicos e componentes.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyTree}
            className="no-print inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl transition-colors"
          >
            {copiedTree ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedTree ? 'Copiado!' : 'Copiar Árvore'}</span>
          </button>
        </div>

        <pre className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
          {PROJECT_TREE_STRUCTURE}
        </pre>
      </section>
    </div>
  );
};
