import { CONTRACEPTIVE_METHODS } from '../data/contraceptiveMethods';
import type { ContraceptiveMethod } from '../data/contraceptiveMethods';

export interface QuizAnswers {
  age?: string;
  postpartum?: string;
  routine?: string;
  health_conditions?: string;
  menstrual_bleeding?: string;
  reproductive_goals?: string;
  hormone_preference?: string;
}

export interface MethodRecommendation {
  method: ContraceptiveMethod;
  score: number;
  eligibilityCategory: 1 | 2 | 3 | 4;
  eligibilityLabel: string;
  badgeColor: 'emerald' | 'blue' | 'amber' | 'rose';
  reasons: string[];
  precautions: string[];
  pearlRate: string;
}

export interface QuizAnalysisResult {
  topRecommendations: MethodRecommendation[];
  cautionMethods: MethodRecommendation[];
  contraindicatedMethods: MethodRecommendation[];
  dualProtectionMessage: string;
  nursingConsultationTip: string;
  summaryProfile: {
    ageGroup: string;
    postpartumStatus: string;
    routineProfile: string;
    clinicalAlerts: string[];
  };
}

export function evaluateContraceptionEligibility(answers: QuizAnswers): QuizAnalysisResult {
  const recommendations: MethodRecommendation[] = [];

  const isLactatingUnder6w = answers.postpartum === 'breastfeeding_under_6w';
  const isLactating = answers.postpartum === 'breastfeeding_under_6w' || answers.postpartum === 'breastfeeding_over_6w';
  const isSmokerOver35 = answers.health_conditions === 'smoking_over_35';
  const hasHypertension = answers.health_conditions === 'hypertension';
  const hasMigraineAura = answers.health_conditions === 'migraine_aura';
  const hasThrombosis = answers.health_conditions === 'thrombosis_history';
  const isForgetful = answers.routine === 'forgetful';
  const wantsLongTerm = answers.routine === 'long_term_peace';
  const wantsNoHormones = answers.hormone_preference === 'prefer_no_hormones';
  const heavyCramps = answers.menstrual_bleeding === 'heavy_cramps';
  const wantsAmenorrhea = answers.menstrual_bleeding === 'want_amenorrhea';
  const wantsDefinitive = answers.reproductive_goals === 'never_or_done';
  const plansPregnancySoon = answers.reproductive_goals === 'soon';

  const hasEstrogenContraindication = isSmokerOver35 || hasMigraineAura || hasThrombosis || isLactatingUnder6w || hasHypertension;

  for (const method of CONTRACEPTIVE_METHODS) {
    let score = 50;
    let category: 1 | 2 | 3 | 4 = 1;
    const reasons: string[] = [];
    const precautions: string[] = [];

    // --- 1. DIU DE COBRE ---
    if (method.id === 'diu-cobre') {
      category = 1;
      score += 25; // Base high effectiveness
      reasons.push('Livre de qualquer hormônio: seu corpo mantém o ciclo natural sem interferência em peso, humor ou libido.');
      reasons.push('Longa duração (10 a 12 anos) com reversibilidade imediata quando você decidir retirar na UBS.');

      if (wantsNoHormones) {
        score += 30;
        reasons.push('Perfeito para a sua preferência expressa de não utilizar hormônios.');
      }
      if (wantsLongTerm || isForgetful) {
        score += 25;
        reasons.push('Você não precisa se preocupar com horários nem idas frequentes à farmácia.');
      }
      if (hasEstrogenContraindication) {
        score += 25;
        reasons.push('Segurança clínica máxima: o Ministério da Saúde recomenda DIU de Cobre para quem não pode tomar estrogênios.');
      }
      if (isLactating) {
        score += 15;
        reasons.push('Não altera a quantidade nem os nutrientes do leite materno.');
      }
      if (heavyCramps) {
        score -= 10;
        precautions.push('Pode intensificar o fluxo ou as cólicas nos primeiros 3 a 6 meses de adaptação. A enfermeira da UBS pode orientar analgesia adequada.');
      }
    }

    // --- 2. INJETÁVEL TRIMESTRAL ---
    else if (method.id === 'injetavel-trimestral') {
      if (isLactatingUnder6w) {
        category = 2;
        precautions.push('No puerpério imediato (< 6 semanas), o Ministério da Saúde orienta avaliar se outros métodos sem hormônio estão disponíveis antes de iniciar.');
      } else {
        category = 1;
      }

      if (wantsNoHormones) {
        score -= 40;
        precautions.push('Método hormonal (apenas progestagênio). Não atende ao critério de ser livre de hormônios.');
      } else {
        score += 20;
      }

      if (isForgetful) {
        score += 25;
        reasons.push('Aplicação a cada 90 dias na sala de enfermagem da UBS: você fica livre de preocupação diária.');
      }
      if (wantsAmenorrhea || heavyCramps) {
        score += 20;
        reasons.push('Alta taxa de redução do fluxo e das cólicas, com muitas mulheres entrando em amenorreia (parando de menstruar).');
      }
      if (hasMigraineAura || isSmokerOver35) {
        score += 20;
        reasons.push('Por NÃO conter estrogênio, é classificado como seguro (Categoria 1 ou 2) pelo Ministério da Saúde.');
      }
      if (plansPregnancySoon) {
        score -= 25;
        precautions.push('Se você planeja engravidar nos próximos meses, este método pode demorar entre 6 a 10 meses para regularizar a fertilidade após a última injeção.');
      }
    }

    // --- 3. INJETÁVEL MENSAL (Combinado) ---
    else if (method.id === 'injetavel-mensal') {
      if (hasThrombosis || hasMigraineAura || isSmokerOver35) {
        category = 4;
        score = 0;
        precautions.push('CONTRAINDICAÇÃO ABSOLUTA (Categoria 4 do MS): Contém estrogênio, que eleva o risco vascular em mulheres com o seu perfil.');
      } else if (hasHypertension || isLactatingUnder6w) {
        category = 3;
        score = 20;
        precautions.push('Requer avaliação criteriosa da equipe de saúde (Categoria 3 do MS) devido à pressão arterial ou fase de puerpério.');
      } else {
        category = 1;
        score += 20;
        reasons.push('Praticidade de apenas uma aplicação mensal na UBS, mantendo sangramentos regulares previsíveis.');
        if (plansPregnancySoon) {
          score += 15;
          reasons.push('Rápido retorno da fertilidade logo após a interrupção.');
        }
      }

      if (wantsNoHormones) {
        score -= 50;
      }
    }

    // --- 4. PÍLULA COMBINADA ---
    else if (method.id === 'pilula-combinada') {
      if (hasThrombosis || hasMigraineAura || isSmokerOver35) {
        category = 4;
        score = 0;
        precautions.push('CONTRAINDICAÇÃO FORMAL (Categoria 4 OMS/MS): O estrogênio combinado é perigoso em enxaqueca com aura, trombose ou fumantes acima de 35 anos.');
      } else if (hasHypertension || isLactatingUnder6w) {
        category = 3;
        score = 15;
        precautions.push('Categoria 3 do Ministério da Saúde: os riscos superam os benefícios para o seu histórico atual.');
      } else {
        category = 1;
        score += 15;
        if (answers.routine === 'disciplined') {
          score += 20;
          reasons.push('Você possui perfil disciplinado para manter o horário diário e usufruir de ciclos menstruais previsíveis.');
        }
        if (isForgetful) {
          score -= 30;
          precautions.push('Atenção: esquecer comprimidos reduz a eficácia e causa sangramentos irregulares de escape.');
        }
        if (plansPregnancySoon) {
          score += 15;
          reasons.push('Excelente se você deseja engravidar em curto prazo, pois a fertilidade retorna no mês seguinte à parada.');
        }
      }

      if (wantsNoHormones) {
        score -= 50;
      }
    }

    // --- 5. MINIPÍLULA (Lactação / Só Progesterona) ---
    else if (method.id === 'minipilula-lactacao') {
      if (isLactating) {
        category = 1;
        score += 35;
        reasons.push('Primeira escolha para a fase de amamentação no SUS: protege contra gravidez sem reduzir o volume do leite materno.');
      } else {
        category = 1;
        score += 10;
      }

      if (hasEstrogenContraindication && !wantsNoHormones) {
        score += 20;
        reasons.push('Livre de estrogênio: pode ser utilizada mesmo com enxaqueca com aura ou fatores de risco cardiovascular.');
      }

      if (isForgetful) {
        score -= 25;
        precautions.push('Exige rigor extremo de horário (atrasos de mais de 3 horas exigem cuidados adicionais por 48h).');
      }

      if (wantsNoHormones) {
        score -= 40;
      }
    }

    // --- 6. PRESERVATIVOS (Dupla Proteção) ---
    else if (method.id === 'preservativo-externo-interno') {
      category = 1;
      score += 40; // Always recommended
      reasons.push('INDISPENSÁVEL PARA DUPLA PROTEÇÃO: É o único método que protege contra ISTs (HIV, Sífilis, Hepatites, HPV).');
      reasons.push('Disponível de graça, em quantidade ilimitada, em qualquer unidade de saúde do SUS sem consulta prévia.');
      if (wantsNoHormones) {
        score += 20;
        reasons.push('Totalmente sem hormônios e sem efeitos colaterais sistêmicos.');
      }
    }

    // --- 7. ANTICONCEPÇÃO DE EMERGÊNCIA ---
    else if (method.id === 'anticoncepcao-emergencia') {
      category = 1;
      score = 30; // Not a routine method, but highlighted as a safety net
      reasons.push('Disponível na UBS sem burocracia para situações de falha ou relação desprotegida recente (até 72h).');
      precautions.push('Não deve ser utilizado como método de rotina devido à menor eficácia acumulada e alteração do ciclo.');
    }

    // --- 8. MÉTODOS DEFINITIVOS (Laqueadura / Vasectomia) ---
    else if (method.id === 'laqueadura-vasectomia') {
      if (wantsDefinitive) {
        category = 1;
        score += 45;
        reasons.push('Amparado pela Nova Lei Federal nº 14.443/2022: não precisa de consentimento de marido/parceiro!');
        reasons.push('Idade mínima de 21 anos (ou em qualquer idade para quem tem pelo menos 2 filhos vivos).');
        reasons.push('Procedimento definitivo garantido integralmente pelo SUS.');
      } else {
        score -= 40;
        precautions.push('Método definitivo e praticamente irreversível. Se você ainda tem dúvidas sobre gravidez futura, prefira o DIU de Cobre.');
      }
    }

    // Define badge and label based on WHO / MS category
    let eligibilityLabel = 'Categoria 1: Sem restrições (Altamente Indicado)';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'emerald';

    if (category === 4) {
      eligibilityLabel = 'Categoria 4: Contraindicado pelo Ministério da Saúde';
      badgeColor = 'rose';
    } else if (category === 3) {
      eligibilityLabel = 'Categoria 3: Riscos superam benefícios (Uso restrito)';
      badgeColor = 'amber';
    } else if (category === 2) {
      eligibilityLabel = 'Categoria 2: Vantagens superam riscos (Boa opção)';
      badgeColor = 'blue';
    }

    recommendations.push({
      method,
      score,
      eligibilityCategory: category,
      eligibilityLabel,
      badgeColor,
      reasons,
      precautions,
      pearlRate: method.effectivenessTypical
    });
  }

  // Split recommendations
  const validForRanking = recommendations.filter(r => r.eligibilityCategory <= 2 && r.method.id !== 'anticoncepcao-emergencia');
  validForRanking.sort((a, b) => b.score - a.score);

  const topRecommendations = validForRanking.slice(0, 4);
  const cautionMethods = recommendations.filter(r => r.eligibilityCategory === 3);
  const contraindicatedMethods = recommendations.filter(r => r.eligibilityCategory === 4);

  // Clinical alerts list
  const clinicalAlerts: string[] = [];
  if (isSmokerOver35) clinicalAlerts.push('Tabagismo com idade ≥ 35 anos (alerta cardiovascular)');
  if (hasMigraineAura) clinicalAlerts.push('Enxaqueca com aura neurológica (contraindicação a estrogênio)');
  if (hasThrombosis) clinicalAlerts.push('Histórico de evento tromboembólico (contraindicação a estrogênio)');
  if (hasHypertension) clinicalAlerts.push('Pressão arterial elevada');
  if (isLactating) clinicalAlerts.push('Amamentação em andamento (foco em métodos que não afetam a lactação)');

  const ageLabel = answers.age === 'under_20' ? 'Menos de 20 anos' : answers.age === '20_to_34' ? '20 a 34 anos' : '35 anos ou mais';
  const postpartumLabel = answers.postpartum === 'not_postpartum' ? 'Não lactante' : 'Pós-parto / Amamentando';
  const routineLabel = answers.routine === 'forgetful' ? 'Prefere não depender de lembrar diariamente' : answers.routine === 'disciplined' ? 'Consegue tomar remédio diário' : 'Prefere longa duração (LARC)';

  return {
    topRecommendations,
    cautionMethods,
    contraindicatedMethods,
    dualProtectionMessage: 'Lembre-se da Dupla Proteção do Ministério da Saúde: combine o seu método escolhido com a camisinha (preservativo) para se proteger também contra HIV, Sífilis e outras Infecções Sexualmente Transmissíveis.',
    nursingConsultationTip: 'Leve este relatório para a sua Consulta de Enfermagem ou Médica na UBS. Enfermeiras(os) da Atenção Básica são especialistas acolhedoras, capacitadas pelo COFEN e pelo SUS para tirar dúvidas, realizar testes e conduzir a prescrição ou inserção com todo respeito e cuidado.',
    summaryProfile: {
      ageGroup: ageLabel,
      postpartumStatus: postpartumLabel,
      routineProfile: routineLabel,
      clinicalAlerts
    }
  };
}
