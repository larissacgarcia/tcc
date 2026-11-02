import React, { useState, useId } from 'react';
import { CONTRACEPTIVE_METHODS } from '../data/contraceptiveMethods';
import { Search, Filter, Check, AlertCircle, HelpCircle, MapPin, ChevronDown, ChevronUp, Sparkles, Stethoscope } from 'lucide-react';

interface MethodsCatalogProps {
  onSelectMethodForUbs?: (methodId: string) => void;
}

export const MethodsCatalog: React.FC<MethodsCatalogProps> = ({ onSelectMethodForUbs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedMethodId, setExpandedMethodId] = useState<string | null>('diu-cobre');
  const searchInputId = useId();

  const categories = [
    { id: 'all', label: 'Todos os Métodos' },
    { id: 'larc', label: 'Longa Duração (LARC)' },
    { id: 'hormonal_short', label: 'Hormonais (Injeções & Pílulas)' },
    { id: 'barrier', label: 'Barreira & ISTs' },
    { id: 'emergency', label: 'Emergência (PDS)' },
    { id: 'permanent', label: 'Cirúrgicos Definitivos' },
  ];

  const filteredMethods = CONTRACEPTIVE_METHODS.filter((method) => {
    const matchesCategory =
      selectedCategory === 'all' ? true : method.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      method.name.toLowerCase().includes(query) ||
      method.shortName.toLowerCase().includes(query) ||
      method.hormoneType.toLowerCase().includes(query) ||
      method.tags.some((t) => t.toLowerCase().includes(query)) ||
      method.pros.some((p) => p.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedMethodId(expandedMethodId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Farmácia Básica & Procedimentos da Atenção Primária</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Catálogo Oficial de Métodos Contraceptivos no SUS
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Todos os métodos garantidos por lei na rede pública brasileira, seus índices de eficácia reais, modo de ação, mitos desmistificados e orientações de enfermagem.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-200/80 space-y-3">
        <div className="relative">
          <label htmlFor={searchInputId} className="sr-only">Pesquisar métodos contraceptivos</label>
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id={searchInputId}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquise por nome (ex: DIU, Injeção, Camisinha, Sem Hormônio...)"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Methods Cards List */}
      <div className="space-y-4">
        {filteredMethods.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-700">Nenhum método encontrado para sua busca</h3>
            <p className="text-xs text-slate-500 mt-1">Tente buscar por termos como "DIU", "injeção", "pílula" ou limpe os filtros.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-xs font-bold text-rose-600 hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          filteredMethods.map((method) => {
            const isExpanded = expandedMethodId === method.id;

            return (
              <article
                key={method.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all overflow-hidden"
              >
                {/* Card Header & Preview */}
                <div
                  className="p-5 sm:p-6 cursor-pointer select-none"
                  onClick={() => toggleExpand(method.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-rose-100 text-rose-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                          {method.categoryLabel}
                        </span>
                        <span className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                          {method.hormoneType}
                        </span>
                        {method.tags.map((t) => (
                          <span key={t} className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-100">
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        {method.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                        {method.howItWorks}
                      </p>
                    </div>

                    {/* Stats & Chevron */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <div className="text-left sm:text-right">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                          Eficácia Típica
                        </span>
                        <span className="text-base sm:text-lg font-black text-emerald-700">
                          {method.effectivenessTypical}
                        </span>
                        <span className="block text-[11px] text-slate-500 font-medium">
                          {method.durationText}
                        </span>
                      </div>

                      <button
                        type="button"
                        aria-label={isExpanded ? 'Recolher detalhes' : 'Expandir detalhes'}
                        className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/70 p-5 sm:p-7 space-y-6 animate-in slide-in-from-top-1">
                    {/* Pros & Cons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Vantagens */}
                      <div className="bg-white rounded-2xl p-4 border border-emerald-100 space-y-2">
                        <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Principais Vantagens no SUS</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {method.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold shrink-0">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Efeitos e Contraindicações */}
                      <div className="bg-white rounded-2xl p-4 border border-amber-100 space-y-2">
                        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          <span>Efeitos Comuns & Contraindicações (OMS/MS)</span>
                        </h4>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <div>
                            <strong className="text-slate-800 block text-xs">Efeitos / Adaptação:</strong>
                            <ul className="list-disc pl-4 text-slate-600 space-y-1 mt-0.5">
                              {method.consOrSideEffects.map((c, idx) => (
                                <li key={idx}>{c}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-slate-800 block text-xs">Contraindicações principais:</strong>
                            <ul className="list-disc pl-4 text-slate-600 space-y-1 mt-0.5">
                              {method.contraindications.map((contra, idx) => (
                                <li key={idx}>{contra}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* How to Get in SUS (The core user request) */}
                    <div className="bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl p-5 border border-teal-200/80 space-y-3">
                      <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                        <MapPin className="w-4 h-4 text-teal-700" />
                        <span>Como Conseguir e Onde Fazer na sua UBS</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="space-y-1">
                          <strong className="text-slate-800 block text-xs uppercase tracking-wider text-teal-950 font-bold">
                            Local & Quem Realiza:
                          </strong>
                          <p className="text-slate-700"><strong>Local:</strong> {method.howToGetInSUS.where}</p>
                          <p className="text-teal-900 font-semibold flex items-center gap-1.5 mt-1">
                            <Stethoscope className="w-4 h-4" />
                            <span>{method.howToGetInSUS.whoExecutes}</span>
                          </p>
                        </div>

                        <div className="space-y-1">
                          <strong className="text-slate-800 block text-xs uppercase tracking-wider text-teal-950 font-bold">
                            Documentos Necessários:
                          </strong>
                          <ul className="list-disc pl-4 text-slate-700 space-y-0.5">
                            {method.howToGetInSUS.documentsNeeded.map((doc, idx) => (
                              <li key={idx}>{doc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Step by step */}
                      <div className="pt-2 border-t border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <strong className="text-xs uppercase tracking-wider text-teal-950 font-bold block mb-1.5">
                            Passo a Passo do Acolhimento na Atenção Primária:
                          </strong>
                          <ol className="space-y-1.5 text-xs text-slate-700 list-decimal pl-4">
                            {method.howToGetInSUS.steps.map((st, idx) => (
                              <li key={idx}>{st}</li>
                            ))}
                          </ol>
                        </div>
                        {onSelectMethodForUbs && (
                          <button
                            type="button"
                            onClick={() => onSelectMethodForUbs(method.id)}
                            className="shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Ver Salas e UBS</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Myths debunked */}
                    {method.myths && method.myths.length > 0 && (
                      <div className="bg-white rounded-2xl p-4 border border-rose-100 space-y-2.5">
                        <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-rose-600" />
                          <span>Mitos Desmistificados pelo Ministério da Saúde</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          {method.myths.map((m, idx) => (
                            <div key={idx} className="bg-rose-50/50 rounded-xl p-3 border border-rose-100">
                              <span className="text-rose-700 font-bold block mb-1">✕ Mito: "{m.myth}"</span>
                              <span className="text-slate-700 block">✓ <strong>Fato:</strong> {m.fact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
