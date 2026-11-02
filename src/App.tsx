import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { MethodsCatalog } from './components/MethodsCatalog';
import { UbsGuideView } from './components/UbsGuideView';
import { IstEducationView } from './components/IstEducationView';
import { NursingAndRightsView } from './components/NursingAndRightsView';
import { MythsAndFactsView } from './components/MythsAndFactsView';
import { ReferencesAbntView } from './components/ReferencesAbntView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { LegalPrivacyModal } from './components/LegalPrivacyModal';
import { Footer } from './components/Footer';
import { Home, Sparkles, BookOpen, FileText } from 'lucide-react';

const VALID_TABS = ['home', 'quiz', 'metodos', 'onde-aplicar', 'dupla-protecao', 'enfermagem', 'mitos', 'referencias', 'admin'];

function getInitialTab(): string {
  const hash = window.location.hash.replace('#', '').trim();
  return VALID_TABS.includes(hash) ? hash : 'home';
}

export function App() {
  const [activeTab, setActiveTab] = useState<string>(getInitialTab);
  const [brandName] = useState<string>('Acolhe Mulher');
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  // Sync state when URL hash changes (browser Back/Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] font-sans text-slate-800 pb-16 sm:pb-0">
      {/* Top Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleSelectTab}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        brandName={brandName}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={handleSelectTab}
            onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
            brandName={brandName}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizView onGoToUbs={() => handleSelectTab('onde-aplicar')} />
        )}

        {activeTab === 'metodos' && (
          <MethodsCatalog
            onSelectMethodForUbs={() => handleSelectTab('onde-aplicar')}
          />
        )}

        {activeTab === 'onde-aplicar' && <UbsGuideView />}

        {activeTab === 'dupla-protecao' && <IstEducationView />}

        {activeTab === 'enfermagem' && <NursingAndRightsView />}

        {activeTab === 'mitos' && <MythsAndFactsView />}

        {activeTab === 'referencias' && <ReferencesAbntView />}

        {activeTab === 'admin' && (
          <AdminDashboardView onBackToApp={() => handleSelectTab('quiz')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        brandName={brandName}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />

      {/* Legal & Privacy LGPD Modal */}
      <LegalPrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Minimalist Mobile Bottom Bar */}
      <nav aria-label="Navegação rápida móvel" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1 px-1 flex items-center justify-around shadow-md no-print">
        <button
          type="button"
          onClick={() => handleSelectTab('home')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl text-[10px] font-bold ${
            activeTab === 'home' ? 'text-rose-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Início</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTab('quiz')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl text-[10px] font-bold ${
            activeTab === 'quiz' ? 'text-rose-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Quiz</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTab('metodos')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl text-[10px] font-bold ${
            activeTab === 'metodos' ? 'text-rose-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Métodos</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTab('referencias')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-xl text-[10px] font-bold ${
            activeTab === 'referencias' ? 'text-rose-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>ABNT</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
