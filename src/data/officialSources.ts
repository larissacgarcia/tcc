export interface OfficialSource {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  documentType: string;
  url: string;
  relevance: string;
}

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'caderno-26',
    title: 'Caderno de Atenção Básica nº 26: Saúde Sexual e Saúde Reprodutiva',
    organization: 'Ministério da Saúde do Brasil / Secretaria de Atenção à Saúde',
    year: 'Edição Oficial',
    documentType: 'Manual Técnico e Diretriz Clínica',
    description: 'Diretriz central do SUS para acolhimento, escolha informada de métodos contraceptivos, abordagem em enfermagem e prevenção de ISTs na Atenção Básica.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/saude_sexual_saude_reprodutiva.pdf',
    relevance: 'Base para os fluxogramas de acolhimento e atuação das equipes da Estratégia Saúde da Família (ESF).'
  },
  {
    id: 'criterios-elegibilidade-oms-ms',
    title: 'Critérios Médicos de Elegibilidade para Uso de Métodos Anticoncepcionais',
    organization: 'Organização Mundial da Saúde (OMS) e Ministério da Saúde do Brasil',
    year: 'Diretriz Padronizada',
    documentType: 'Classificação Clínica Internacional',
    description: 'Classifica as condições de saúde em 4 categorias de segurança para cada método contraceptivo (Categorias 1 a 4), prevenindo riscos cardiovasculares e trombose.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf',
    relevance: 'Base do algoritmo do quiz interativo deste aplicativo.'
  },
  {
    id: 'lei-14443',
    title: 'Lei Federal nº 14.443, de 2 de Setembro de 2022',
    organization: 'Presidência da República / Diário Oficial da União',
    year: '2022 (Vigente)',
    documentType: 'Legislação Federal',
    description: 'Altera a Lei do Planejamento Familiar (Lei nº 9.263/1996) para dispensar o consentimento expresso de ambos os cônjuges para a esterilização cirúrgica voluntária e reduzir a idade mínima de 25 para 21 anos.',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm',
    relevance: 'Garante autonomia absoluta da mulher na realização de Laqueadura no SUS.'
  },
  {
    id: 'resolucoes-cofen-diu',
    title: 'Resoluções COFEN nº 690/2022 e 714/2023: Inserção de DIU por Enfermeiros',
    organization: 'Conselho Federal de Enfermagem (COFEN)',
    year: '2022/2023',
    documentType: 'Resolução Técnico-Normativa',
    description: 'Normatiza a atuação do enfermeiro no planejamento reprodutivo e regulamenta a competência técnica para realização da consulta clínica, solicitação de exames, inserção, revisão e retirada do Dispositivo Intrauterino (DIU).',
    url: 'http://www.cofen.gov.br/',
    relevance: 'Respalda a atuação segura e qualificada da Enfermagem na Atenção Primária.'
  },
  {
    id: 'pcdti-hiv-ist',
    title: 'Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pré e Pós-Exposição (PrEP e PEP)',
    organization: 'Ministério da Saúde / Secretaria de Vigilância em Saúde e Ambiente (SVSA)',
    year: 'Atualização Contínua',
    documentType: 'Protocolo Clínico do SUS',
    description: 'Define as diretrizes de dispensação e acompanhamento para PrEP, PEP e testagem rápida para ISTs em toda a rede pública.',
    url: 'https://www.gov.br/aids/pt-br/assuntos/prevencao-combinada',
    relevance: 'Fundamenta o conteúdo de prevenção e combate às ISTs do portal.'
  }
];
