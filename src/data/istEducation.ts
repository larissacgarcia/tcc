export interface IstServiceInfo {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  howToGet: string;
  criticalDetails: string[];
  iconName: string;
}

export const IST_SERVICES: IstServiceInfo[] = [
  {
    id: 'dupla-protecao',
    title: 'O que é a "Dupla Proteção"?',
    subtitle: 'A estratégia de ouro recomendada pelo Ministério da Saúde e OMS',
    badge: 'Conceito Fundamental',
    description: 'Dupla proteção significa associar dois cuidados ao mesmo tempo: um método de alta eficácia contra gravidez (como o DIU de Cobre ou injeção) SOMADO ao preservativo externo ou interno em todas as relações.',
    howToGet: 'Pegue seus preservativos gratuitamente na UBS e escolha seu método de longo prazo com a equipe de enfermagem.',
    criticalDetails: [
      'Nenhum método hormonal ou DIU protege contra o vírus do HIV, a bactéria da sífilis, herpes, gonorreia ou HPV.',
      'A camisinha é a única tecnologia que cria uma barreira física impenetrável contra agentes infecciosos.',
      'Com a Dupla Proteção, você tem 100% de paz mental: proteção máxima contra gravidez não planejada e blindagem contra ISTs.'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'testes-rapidos',
    title: 'Testes Rápidos na Atenção Primária',
    subtitle: 'Exames gratuitos com resultado em 15 a 30 minutos na UBS',
    badge: '100% Gratuito & Sigiloso',
    description: 'Basta uma gotinha de sangue da ponta do dedo. O resultado é sigiloso, acolhedor e realizado na hora por um enfermeiro ou técnico de saúde.',
    howToGet: 'Entre em qualquer UBS e solicite "testes rápidos de triagem" no acolhimento.',
    criticalDetails: [
      'Testes disponíveis: HIV, Sífilis, Hepatite B e Hepatite C.',
      'Não precisa de jejum, encaminhamento prévio ou requisição de exame.',
      'Se o teste for positivo, o tratamento no SUS já começa imediatamente (no caso da sífilis, a penicilina benzatina é aplicada na própria UBS pela enfermagem).',
      'O Ministério da Saúde orienta fazer os testes rápidos periodicamente ou sempre após uma relação desprotegida.'
    ],
    iconName: 'Activity'
  },
  {
    id: 'pep-hiv',
    title: 'PEP (Profilaxia Pós-Exposição ao HIV)',
    subtitle: 'Medicamento de urgência tomado em até 72 horas após risco',
    badge: 'Urgência (até 72 horas)',
    description: 'A Profilaxia Pós-Exposição é uma medida de emergência médica indicada para quem pode ter tido contato com o HIV (por exemplo: a camisinha estourou, saiu durante a relação, relação desprotegida ou situação de violência sexual).',
    howToGet: 'Procure uma UPA 24 horas, Pronto-Socorro ou UBS do SUS imediatamente após o ocorrido.',
    criticalDetails: [
      'TEMPO É FUNDAMENTAL: Deve ser iniciada em até 72 horas (as primeiras 2 horas são as mais eficazes).',
      'Consiste no uso de comprimidos antirretrovirais por 28 dias seguidos sem interrupção.',
      'O atendimento na rede do SUS é humanizado, com sigilo garantido e sem questionamentos morais.'
    ],
    iconName: 'Clock'
  },
  {
    id: 'prep-hiv',
    title: 'PrEP (Profilaxia Pré-Exposição ao HIV)',
    subtitle: 'Prevenção contínua com comprimidos gratuitos pelo SUS',
    badge: 'Prevenção Contínua',
    description: 'A PrEP consiste em tomar antirretrovirais antes do contato com o vírus, permitindo que o organismo esteja preparado para enfrentar um eventual contato com o HIV sem ser infectado.',
    howToGet: 'Disponível nos Serviços de Atenção Especializada (SAE), CTAs e em Clínicas da Família / UBSs com polo PrEP.',
    criticalDetails: [
      'Indicada para qualquer pessoa sexualmente ativa com maior vulnerabilidade ao HIV.',
      'Acompanhamento regular com exames periódicos gratuitos a cada 3 a 4 meses.',
      'Pode ser combinada perfeitamente com qualquer método contraceptivo (inclusive DIU e pílulas).'
    ],
    iconName: 'Pill'
  },
  {
    id: 'vacinas-ist',
    title: 'Vacinas Essenciais da Saúde da Mulher',
    subtitle: 'Imunização preventiva contra HPV e Hepatite B na UBS',
    badge: 'Sala de Vacinas',
    description: 'O SUS oferece na sala de vacinas de todas as UBSs proteção definitiva contra vírus que podem causar câncer de colo do útero e doenças hepáticas crônicas.',
    howToGet: 'Leve sua caderneta de vacinas (ou crie uma nova na hora com seu Cartão SUS) na sala de vacinação da UBS.',
    criticalDetails: [
      'Vacina contra HPV: protege contra os tipos 16 e 18 (responsáveis por 70% dos casos de câncer de colo de útero) e tipos 6 e 11 (verrugas anogenitais).',
      'Disponível para meninas e meninos de 9 a 14 anos, e no SUS até os 45 anos para pessoas vivendo com HIV, transplantadas ou pacientes oncológicos.',
      'Vacina contra Hepatite B: disponível gratuitamente para qualquer pessoa em qualquer idade em 3 doses.'
    ],
    iconName: 'Syringe'
  }
];

export interface MythFactItem {
  id: string;
  category: string;
  question: string;
  isTrue: boolean;
  explanation: string;
  officialSource: string;
}

export const MYTHS_AND_FACTS: MythFactItem[] = [
  {
    id: 'mf-1',
    category: 'DIU no SUS',
    question: 'O DIU de Cobre é abortivo e causa infecção no útero?',
    isTrue: false,
    explanation: 'Mito! O DIU de Cobre atua ANTES da fertilização: os íons de cobre inativam os espermatozoides, impedindo o encontro com o óvulo. Não causa infecções se a mulher não tiver ISTs prévias e a colocação for feita com técnica asséptica pela enfermagem ou médico.',
    officialSource: 'Caderno de Atenção Básica nº 26 - Saúde Sexual e Saúde Reprodutiva (Ministério da Saúde)'
  },
  {
    id: 'mf-2',
    category: 'Lei 14.443/2022',
    question: 'A mulher ainda precisa da assinatura do marido para fazer laqueadura?',
    isTrue: false,
    explanation: 'Mito! A Lei Federal nº 14.443/2022 retirou expressamente a necessidade de consentimento do cônjuge. A mulher tem autonomia absoluta sobre o próprio corpo. A idade mínima também caiu para 21 anos (ou qualquer idade para quem tiver pelo menos 2 filhos vivos).',
    officialSource: 'Diário Oficial da União - Lei nº 14.443/2022'
  },
  {
    id: 'mf-3',
    category: 'Enfermagem na APS',
    question: 'Enfermeiras podem colocar DIU de Cobre na UBS pelo SUS?',
    isTrue: true,
    explanation: 'Verdade! As resoluções do COFEN (Conselho Federal de Enfermagem) nº 690/2022 e 714/2023, apoiadas pelo Ministério da Saúde, respaldam e qualificam enfermeiras e enfermeiros para a consulta em saúde reprodutiva e a realização segura da inserção do DIU.',
    officialSource: 'Conselho Federal de Enfermagem (COFEN) e Portarias da Atenção Primária'
  },
  {
    id: 'mf-4',
    category: 'IST e Dupla Proteção',
    question: 'Tomar anticoncepcional hormonal ou usar DIU protege contra HIV e Sífilis?',
    isTrue: false,
    explanation: 'Mito perigoso! Nenhum hormônio nem o DIU oferecem barreira biológica contra bactérias e vírus das ISTs. Por isso o SUS preconiza a Dupla Proteção: método contraceptivo + camisinha em toda relação.',
    officialSource: 'Departamento de HIV/Aids, Tuberculose, Hepatites Virais e ISTs (DATHI/MS)'
  },
  {
    id: 'mf-5',
    category: 'Pílula do Dia Seguinte',
    question: 'A pílula do dia seguinte é um abortivo e só pode ser tomada duas vezes na vida?',
    isTrue: false,
    explanation: 'Mito! A pílula de emergência impede ou atrasa a ovulação. Se a mulher já estiver grávida e o embrião implantado, a pílula não causa aborto e não interfere na gravidez. Também não causa infertilidade, embora deva ser reservada para imprevistos.',
    officialSource: 'Guia Prático para a Atenção Integral à Saúde Sexual e Reprodutiva (MS)'
  },
  {
    id: 'mf-6',
    category: 'Amamentação',
    question: 'Mulheres que amamentam só podem usar camisinha para não prejudicar o leite?',
    isTrue: false,
    explanation: 'Mito! O DIU de Cobre, a minipílula de noretisterona e a injeção trimestral (progestagênio) são comprovadamente seguros durante a amamentação e não reduzem a quantidade nem alteram os nutrientes do leite materno.',
    officialSource: 'Critérios Médicos de Elegibilidade para Anticoncepção (OMS / MS)'
  }
];
