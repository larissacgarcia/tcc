import questionsData from './questionsData.json';

export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  iconName?: string;
}

export interface QuizQuestion {
  id: string;
  stepNumber: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  tip?: string;
  options: QuizOption[];
}

export const DEFAULT_QUIZ_QUESTIONS: QuizQuestion[] = questionsData as QuizQuestion[];

export const STORAGE_CUSTOM_QUESTIONS_KEY = 'acolhe_mulher_custom_questions';

/**
 * Retorna as perguntas ativas do questionário.
 * Se houver rascunho salvo no localStorage durante edição no Admin, prioriza-o.
 * Caso contrário, utiliza o arquivo padrão questionsData.json (sincronizado com o GitHub).
 */
export function getQuizQuestions(): QuizQuestion[] {
  if (typeof window !== 'undefined') {
    try {
      const local = localStorage.getItem(STORAGE_CUSTOM_QUESTIONS_KEY);
      if (local) {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignora erro de parse e usa o padrão
    }
  }
  return DEFAULT_QUIZ_QUESTIONS;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = getQuizQuestions();
