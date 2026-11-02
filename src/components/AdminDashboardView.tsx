import React, { useState, useEffect } from 'react';
import { 
  DEFAULT_QUIZ_QUESTIONS, 
  getQuizQuestions, 
  STORAGE_CUSTOM_QUESTIONS_KEY,
  type QuizQuestion 
} from '../data/quizQuestions';
import { 
  Lock, KeyRound, CheckCircle2, AlertTriangle, RefreshCw, Save, 
  UploadCloud, ArrowLeft, ShieldCheck, Download, Trash2, 
  ExternalLink, ChevronDown, ChevronUp, Sparkles, HelpCircle 
} from 'lucide-react';

interface AdminDashboardViewProps {
  onBackToApp: () => void;
}

const STORAGE_PAT_KEY = 'acolhe_mulher_pat';
const STORAGE_PASS_KEY = 'acolhe_mulher_admin_pass';
const DEFAULT_PASS = 'acolhemulher2026';
const REPO_OWNER = 'larissacgarcia';
const REPO_NAME = 'tcc';
const FILE_PATH = 'src/data/questionsData.json';

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onBackToApp }) => {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [inputPass, setInputPass] = useState<string>('');
  const [passError, setPassError] = useState<string | null>(null);

  // GitHub PAT states
  const [pat, setPat] = useState<string>('');
  const [isVerifyingPat, setIsVerifyingPat] = useState<boolean>(false);
  const [patVerified, setPatVerified] = useState<boolean>(false);
  const [githubUser, setGithubUser] = useState<string | null>(null);
  const [patError, setPatError] = useState<string | null>(null);

  // Editor states
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [publishStatus, setPublishStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [publishMessage, setPublishMessage] = useState<string>('');
  const [latestCommitUrl, setLatestCommitUrl] = useState<string | null>(null);

  // Load existing credentials and questions on mount
  useEffect(() => {
    setQuestions(getQuizQuestions());

    const savedPat = localStorage.getItem(STORAGE_PAT_KEY);
    if (savedPat) {
      setPat(savedPat);
      verifyGithubToken(savedPat, false);
    }
  }, []);

  // --- PASSWORD AUTHENTICATION ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem(STORAGE_PASS_KEY) || DEFAULT_PASS;
    if (inputPass.trim() === storedPass) {
      setIsAuthenticated(true);
      setPassError(null);
    } else {
      setPassError('Senha incorreta. Verifique e tente novamente.');
    }
  };

  // --- GITHUB TOKEN VERIFICATION ---
  const verifyGithubToken = async (tokenToVerify: string, showNotification = true) => {
    const cleanToken = tokenToVerify.trim();
    if (!cleanToken) {
      setPatError('Por favor, informe o token do GitHub.');
      return;
    }

    setIsVerifyingPat(true);
    setPatError(null);

    try {
      // 1. Check user & repository access
      const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`, {
        headers: {
          'Authorization': `Bearer ${cleanToken}`,
          'Accept': 'application/vnd.github+json',
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Token inválido ou expirado. Verifique o código gerado no GitHub.');
        } else if (res.status === 404) {
          throw new Error(`Repositório ${REPO_OWNER}/${REPO_NAME} não encontrado ou sem permissão de acesso.`);
        } else {
          throw new Error(`Erro na API do GitHub (Status: ${res.status}).`);
        }
      }

      const repoData = await res.json();
      
      // Check permissions
      if (repoData.permissions && !repoData.permissions.push) {
        throw new Error('O token informado não possui permissão de escrita (write/push) no repositório.');
      }

      setPatVerified(true);
      setGithubUser(repoData.owner?.login || REPO_OWNER);
      localStorage.setItem(STORAGE_PAT_KEY, cleanToken);
      if (showNotification) {
        alert('Conexão com o GitHub estabelecida com sucesso! Permissão de escrita ativa.');
      }
    } catch (err: unknown) {
      setPatVerified(false);
      setGithubUser(null);
      const msg = err instanceof Error ? err.message : 'Falha ao conectar com o GitHub.';
      setPatError(msg);
    } finally {
      setIsVerifyingPat(false);
    }
  };

  const handleDisconnectPat = () => {
    if (confirm('Deseja realmente desconectar o Token do GitHub deste navegador?')) {
      localStorage.removeItem(STORAGE_PAT_KEY);
      setPat('');
      setPatVerified(false);
      setGithubUser(null);
      setPatError(null);
    }
  };

  // --- EDITOR HANDLERS ---
  const handleUpdateQuestion = (index: number, field: 'title' | 'subtitle' | 'tip', value: string) => {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setHasUnsavedChanges(true);
  };

  const handleUpdateOption = (qIndex: number, optIndex: number, field: 'label' | 'description', value: string) => {
    setQuestions((prev) => {
      const updated = [...prev];
      const currentOpts = [...updated[qIndex].options];
      currentOpts[optIndex] = { ...currentOpts[optIndex], [field]: value };
      updated[qIndex] = { ...updated[qIndex], options: currentOpts };
      return updated;
    });
    setHasUnsavedChanges(true);
  };

  const handleSaveDraftLocal = () => {
    localStorage.setItem(STORAGE_CUSTOM_QUESTIONS_KEY, JSON.stringify(questions, null, 2));
    setHasUnsavedChanges(false);
    alert('Rascunho salvo na memória local deste computador! Você já pode testar o Quiz para ver como ficou.');
  };

  const handleResetToMinistryOfHealth = () => {
    if (confirm('Deseja restaurar as perguntas para o padrão oficial original do Ministério da Saúde? Suas alterações não salvas serão descartadas.')) {
      setQuestions(DEFAULT_QUIZ_QUESTIONS);
      localStorage.removeItem(STORAGE_CUSTOM_QUESTIONS_KEY);
      setHasUnsavedChanges(true);
    }
  };

  const handleDownloadBackupJson = () => {
    const jsonStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'questionsData_backup.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  // --- PUBLISH TO GITHUB VIA REST API ---
  const handlePublishToGitHub = async () => {
    if (!patVerified || !pat) {
      alert('Por favor, conecte um Token válido do GitHub antes de publicar as alterações.');
      return;
    }

    if (!confirm('Deseja publicar as novas perguntas no repositório oficial? Isso vai gerar um novo commit no GitHub e o site será atualizado automaticamente pelo GitHub Actions em cerca de 1 minuto.')) {
      return;
    }

    setIsPublishing(true);
    setPublishStatus('idle');
    setPublishMessage('Conectando ao GitHub para ler a versão atual do arquivo...');

    try {
      // 1. Get current file SHA from GitHub
      const fileRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: {
          'Authorization': `Bearer ${pat.trim()}`,
          'Accept': 'application/vnd.github+json',
        },
      });

      let fileSha: string | undefined = undefined;
      if (fileRes.ok) {
        const fileData = await fileRes.json();
        fileSha = fileData.sha;
      }

      setPublishMessage('Gravando commit com as novas perguntas no branch main...');

      // 2. Prepare UTF-8 Base64 payload
      const jsonContent = JSON.stringify(questions, null, 2);
      const utf8Bytes = new TextEncoder().encode(jsonContent);
      let binaryStr = '';
      for (let i = 0; i < utf8Bytes.length; i++) {
        binaryStr += String.fromCharCode(utf8Bytes[i]);
      }
      const base64Content = btoa(binaryStr);

      // 3. Send PUT request to create commit
      const putBody: {
        message: string;
        content: string;
        branch: string;
        sha?: string;
      } = {
        message: 'docs(quiz): atualizacao de textos e orientacoes do questionario clinico via painel admin',
        content: base64Content,
        branch: 'main',
      };

      if (fileSha) {
        putBody.sha = fileSha;
      }

      const putRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${pat.trim()}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(putBody),
      });

      if (!putRes.ok) {
        const errorData = await putRes.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro ao salvar no GitHub (Status ${putRes.status})`);
      }

      const commitResData = await putRes.json();
      const commitHtmlUrl = commitResData.commit?.html_url || `https://github.com/${REPO_OWNER}/${REPO_NAME}/commits/main`;

      // Save to localStorage as synced
      localStorage.setItem(STORAGE_CUSTOM_QUESTIONS_KEY, JSON.stringify(questions, null, 2));
      setHasUnsavedChanges(false);
      setPublishStatus('success');
      setLatestCommitUrl(commitHtmlUrl);
      setPublishMessage('Perguntas publicadas no GitHub com sucesso! O GitHub Actions já iniciou a compilação e o site oficial estará no ar com os novos textos em cerca de 60 segundos.');
    } catch (err: unknown) {
      setPublishStatus('error');
      const msg = err instanceof Error ? err.message : 'Falha ao publicar alterações.';
      setPublishMessage(`Erro: ${msg}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // ==========================================
  // VIEW 1: PASSCODE LOCK SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Acolhe Mulher • Painel Admin
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Área de edição restrita das perguntas e diretrizes clínicas do questionário.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-pass" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Senha de Acesso
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="admin-pass"
                  value={inputPass}
                  onChange={(e) => setInputPass(e.target.value)}
                  placeholder="Digite a senha mestra..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {passError && (
                <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{passError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-md shadow-rose-200/60 transition-all text-sm"
            >
              Destravar Painel de Edição
            </button>
          </form>

          <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-3.5 text-xs text-rose-900 space-y-1">
            <span className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Acesso da Autora (Larissa)</span>
            </span>
            <p className="text-[11px] text-rose-800">
              A senha padrão inicial é <strong>acolhemulher2026</strong>. Você poderá alterá-la dentro do painel a qualquer momento.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onBackToApp}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para o site Acolhe Mulher</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: MAIN DASHBOARD EDITOR
  // ==========================================
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-rose-200">
              Painel Administrativo
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium">Repositório: {REPO_OWNER}/{REPO_NAME}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Editor das Perguntas Clínicas do SUS
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Edite textos, títulos, dicas e opções. Suas alterações são enviadas diretamente para o GitHub sem necessidade de banco de dados externo.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onBackToApp}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-2xs hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Quiz</span>
          </button>
        </div>
      </div>

      {/* GitHub Token Connection Box */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              patVerified ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Conexão Segura com o GitHub</span>
                {patVerified ? (
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Conectado como @{githubUser}
                  </span>
                ) : (
                  <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Token Necessário
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-500">
                O token fica gravado apenas no seu navegador pessoal (localStorage) para permitir commits diretos.
              </p>
            </div>
          </div>

          {patVerified && (
            <button
              type="button"
              onClick={handleDisconnectPat}
              className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-colors self-start sm:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Desconectar Token</span>
            </button>
          )}
        </div>

        {!patVerified && (
          <div className="pt-2 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="password"
                value={pat}
                onChange={(e) => setPat(e.target.value)}
                placeholder="Cole aqui seu token do GitHub (github_pat_... ou ghp_...)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
              />
              <button
                type="button"
                onClick={() => verifyGithubToken(pat, true)}
                disabled={isVerifyingPat || !pat.trim()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
              >
                {isVerifyingPat ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <KeyRound className="w-3.5 h-3.5" />}
                <span>{isVerifyingPat ? 'Verificando...' : 'Conectar ao GitHub'}</span>
              </button>
            </div>

            {patError && (
              <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{patError}</span>
              </p>
            )}

            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-start gap-2 text-xs text-slate-600">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Como gerar o token:</strong> No GitHub da Larissa, acesse <em>Settings &gt; Developer Settings &gt; Personal access tokens</em> e crie um token com permissão de <strong>Contents: Read and write</strong> no repositório <strong>tcc</strong>.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-rose-50/60 border border-rose-100 p-4 rounded-2xl">
        <div className="flex items-center gap-2">
          {hasUnsavedChanges ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Você possui alterações não salvas</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Perguntas sincronizadas</span>
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleSaveDraftLocal}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl shadow-2xs transition-colors"
            title="Salva apenas no navegador local para testar no Quiz"
          >
            <Save className="w-3.5 h-3.5 text-slate-500" />
            <span>Salvar Rascunho Local</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadBackupJson}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl shadow-2xs transition-colors"
            title="Baixar arquivo JSON das perguntas"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Baixar JSON</span>
          </button>

          <button
            type="button"
            onClick={handleResetToMinistryOfHealth}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-xl shadow-2xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-rose-600" />
            <span>Restaurar Padrão do MS</span>
          </button>

          <button
            type="button"
            onClick={handlePublishToGitHub}
            disabled={isPublishing || !patVerified}
            className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl text-white shadow-sm transition-all ${
              !patVerified
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-rose-200/60 active:scale-95'
            }`}
          >
            {isPublishing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
            <span>{isPublishing ? 'Publicando no GitHub...' : 'Publicar Alterações no Site'}</span>
          </button>
        </div>
      </div>

      {/* Publish Notification Feedback */}
      {publishStatus !== 'idle' && (
        <div className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
          publishStatus === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
            : 'bg-rose-50 border-rose-200 text-rose-950'
        }`}>
          <div className="flex items-start gap-2.5">
            {publishStatus === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <span className="font-bold block">
                {publishStatus === 'success' ? 'Sucesso!' : 'Atenção ao Publicar'}
              </span>
              <p className="leading-relaxed">{publishMessage}</p>
              {latestCommitUrl && (
                <a
                  href={latestCommitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-900 underline mt-1"
                >
                  <span>Ver Commit no GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Questions Accordion Editor */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-800">
            Perguntas Oficiais ({questions.length})
          </h2>
          <span className="text-xs text-slate-400">
            Clique na pergunta para expandir e editar
          </span>
        </div>

        {questions.map((q, qIndex) => {
          const isExpanded = expandedIndex === qIndex;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
                isExpanded ? 'border-rose-300 shadow-sm ring-1 ring-rose-200/50' : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Question Header Accordion Trigger */}
              <button
                type="button"
                onClick={() => setExpandedIndex(isExpanded ? -1 : qIndex)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-rose-50 text-rose-700 font-extrabold text-xs flex items-center justify-center border border-rose-100 shrink-0">
                    {q.stepNumber}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider block">
                      Pergunta {q.stepNumber} de {q.totalSteps} • ID: <code className="font-mono text-slate-500">{q.id}</code>
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">
                      {q.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {q.options.length} alternativas
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Accordion Content Body */}
              {isExpanded && (
                <div className="p-4 sm:p-6 border-t border-slate-100 space-y-6 bg-[#fafbfc]">
                  {/* Title & Subtitle Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Título da Pergunta
                      </label>
                      <input
                        type="text"
                        value={q.title}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'title', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Subtítulo / Contextualização Clínica
                      </label>
                      <textarea
                        rows={2}
                        value={q.subtitle}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'subtitle', e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Dica do Ministério da Saúde & OMS (Opcional)
                      </label>
                      <input
                        type="text"
                        value={q.tip || ''}
                        onChange={(e) => handleUpdateQuestion(qIndex, 'tip', e.target.value)}
                        placeholder="Ex: No SUS, adolescentes têm direito a atendimento sigiloso..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Alternativas de Resposta da Usuária ({q.options.length})
                    </span>

                    <div className="space-y-3">
                      {q.options.map((opt, optIndex) => (
                        <div
                          key={opt.id}
                          className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              Opção {optIndex + 1} • chave médica: {opt.id}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              🔒 ID protegido pelo algoritmo
                            </span>
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Rótulo Principal da Opção
                            </label>
                            <input
                              type="text"
                              value={opt.label}
                              onChange={(e) => handleUpdateOption(qIndex, optIndex, 'label', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                              Descrição Explicativa da Opção
                            </label>
                            <input
                              type="text"
                              value={opt.description || ''}
                              onChange={(e) => handleUpdateOption(qIndex, optIndex, 'description', e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
