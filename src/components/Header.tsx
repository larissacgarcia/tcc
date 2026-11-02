import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Sparkles, BookOpen, MapPin, ShieldCheck, Stethoscope, HelpCircle, FileText, Home, ChevronDown, Lock } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPrivacyModal: () => void;
  brandName: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenPrivacyModal, brandName }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setGuidesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setGuidesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setGuidesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isGuideActive = ['metodos', 'onde-aplicar', 'dupla-protecao', 'enfermagem', 'mitos'].includes(activeTab);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs no-print">
      {/* Top Discreet Academic Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 font-medium border-b border-slate-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase border border-rose-500/30">
              TCC Enfermagem
            </span>
            <span className="hidden sm:inline text-slate-300">Prevenção da Gravidez na Adolescência • Ministério da Saúde & COFEN</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="inline-flex items-center gap-1 text-[11px] text-rose-300 hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Privacidade & LGPD</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">Disque 136</span>
          </div>
        </div>
      </div>

      {/* Main Minimalist Header */}
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleSelectTab('home')}
          className="flex items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-rose-600 rounded-lg py-1 px-1 -mx-1"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white shadow-2xs font-extrabold text-xs tracking-tight">
            AM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                {brandName}
              </span>
              <span className="bg-rose-50 text-rose-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase border border-rose-100">
                TCC
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium leading-none hidden sm:block">
              Prevenção da Gravidez na Adolescência
            </p>
          </div>
        </button>

        {/* Clean Desktop Navigation (Only 3 main links + Dropdown) */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-2">
          {/* 1. Início */}
          <button
            type="button"
            onClick={() => handleSelectTab('home')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'home'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50/60'
            }`}
          >
            Início
          </button>

          {/* 2. Questionário */}
          <button
            type="button"
            onClick={() => handleSelectTab('quiz')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'text-rose-800 bg-rose-50 hover:bg-rose-100/70 border border-rose-200/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Questionário</span>
          </button>

          {/* 3. Submenu Dropdown: Guias */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={guidesDropdownOpen}
              onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isGuideActive
                  ? 'bg-rose-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50/60'
              }`}
            >
              <span>Guias do SUS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${guidesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Popover */}
            {guidesDropdownOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200 border border-slate-100 animate-in fade-in slide-in-from-top-1 z-50 text-xs"
              >
                <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Conteúdos Complementares
                </div>

                <button
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelectTab('metodos')}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-medium text-left transition-colors ${
                    activeTab === 'metodos' ? 'bg-rose-50 text-rose-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Métodos no SUS</span>
                </button>

                <button
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelectTab('onde-aplicar')}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-medium text-left transition-colors ${
                    activeTab === 'onde-aplicar' ? 'bg-rose-50 text-rose-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Onde Aplicar na UBS</span>
                </button>

                <button
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelectTab('dupla-protecao')}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-medium text-left transition-colors ${
                    activeTab === 'dupla-protecao' ? 'bg-rose-50 text-rose-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                  <span>ISTs & Dupla Proteção</span>
                </button>

                <button
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelectTab('enfermagem')}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-medium text-left transition-colors ${
                    activeTab === 'enfermagem' ? 'bg-rose-50 text-rose-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Stethoscope className="w-4 h-4 text-slate-400" />
                  <span>Enfermagem & Legislação</span>
                </button>

                <button
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelectTab('mitos')}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl font-medium text-left transition-colors ${
                    activeTab === 'mitos' ? 'bg-rose-50 text-rose-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>Jogo Mitos e Fatos</span>
                </button>
              </div>
            )}
          </div>

          {/* 4. Referências ABNT */}
          <button
            type="button"
            onClick={() => handleSelectTab('referencias')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'referencias'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Referências ABNT</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-teal-600"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Clean & organized) */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-200/80 bg-white px-4 py-3 space-y-1 shadow-md">
          <button
            type="button"
            onClick={() => handleSelectTab('home')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-left ${
              activeTab === 'home' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('quiz')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-left ${
              activeTab === 'quiz' ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Questionário Clínico</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('referencias')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-left ${
              activeTab === 'referencias' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Referências ABNT</span>
          </button>

          {/* Submenu for other sections */}
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="px-3 py-1 text-[10px] font-bold uppercase text-slate-400">Outros Guias</div>
            
            <button
              type="button"
              onClick={() => handleSelectTab('metodos')}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs text-left ${
                activeTab === 'metodos' ? 'font-bold text-teal-800 bg-teal-50' : 'text-slate-600'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Métodos no SUS</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('onde-aplicar')}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs text-left ${
                activeTab === 'onde-aplicar' ? 'font-bold text-teal-800 bg-teal-50' : 'text-slate-600'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Onde Aplicar na UBS</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('dupla-protecao')}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs text-left ${
                activeTab === 'dupla-protecao' ? 'font-bold text-teal-800 bg-teal-50' : 'text-slate-600'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISTs & Dupla Proteção</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('enfermagem')}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs text-left ${
                activeTab === 'enfermagem' ? 'font-bold text-teal-800 bg-teal-50' : 'text-slate-600'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Enfermagem & Legislação</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('mitos')}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-xl text-xs text-left ${
                activeTab === 'mitos' ? 'font-bold text-teal-800 bg-teal-50' : 'text-slate-600'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Jogo Mitos e Fatos</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
