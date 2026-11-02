export interface AbntReferenceItem {
  id: string;
  category: 'ministerio_saude' | 'cofen' | 'legislacao' | 'bvs_opas_fiocruz';
  categoryLabel: string;
  authors: string;
  title: string;
  subtitle?: string;
  edition?: string;
  city: string;
  publisher: string;
  year: string;
  pages?: string;
  url: string;
  accessDate: string;
  abntFormatted: string;
  bibtex: string;
  relevanceToTcc: string;
  bvsDatabase: string;
}

export interface QuestionScientificBase {
  questionId: string;
  questionNumber: number;
  questionTitle: string;
  clinicalPurpose: string;
  scientificRationale: string;
  categoriesInvolved: string;
  referencedSource: string;
  abntCitation: string;
  sourceUrl: string;
}

export const ABNT_REFERENCES: AbntReferenceItem[] = [
  {
    id: 'ref-criterios-ms-2020',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde / OMS',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde.',
    title: 'Critérios médicos de elegibilidade para uso de métodos anticoncepcionais',
    subtitle: 'adaptação dos critérios da Organização Mundial da Saúde para o Sistema Único de Saúde',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2020',
    pages: '172 p.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS/MS)',
    relevanceToTcc: 'Diretriz norteadora do algoritmo clínico de recomendação. Define as Categorias 1 (sem restrição), 2 (vantagens superam riscos), 3 (riscos superam vantagens) e 4 (contraindicação inaceitável).',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Critérios médicos de elegibilidade para uso de métodos anticoncepcionais: adaptação dos critérios da Organização Mundial da Saúde para o Sistema Único de Saúde. Brasília: Ministério da Saúde, 2020. 172 p. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_criterios_2020,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Critérios médicos de elegibilidade para uso de métodos anticoncepcionais},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2020},
  url = {https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf}
}`
  },
  {
    id: 'ref-lei-14443-2022',
    category: 'legislacao',
    categoryLabel: 'Legislação Federal',
    authors: 'BRASIL.',
    title: 'Lei nº 14.443, de 2 de setembro de 2022',
    subtitle: 'Altera a Lei nº 9.263, de 12 de janeiro de 1996, para determinar prazo para oferecimento de métodos e técnicas contraceptivas e disciplinar condições para esterilização cirúrgica voluntária',
    city: 'Brasília',
    publisher: 'Diário Oficial da União',
    year: '2022',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Portal da Legislação / Planalto Federal',
    relevanceToTcc: 'Marco histórico no planejamento reprodutivo. Revogou a exigência de consentimento do cônjuge/parceiro para laqueadura e vasectomia, reduziu a idade mínima para 21 anos e permitiu a esterilização durante o parto cesárea.',
    abntFormatted: 'BRASIL. Lei nº 14.443, de 2 de setembro de 2022. Altera a Lei nº 9.263, de 12 de janeiro de 1996, para determinar prazo para oferecimento de métodos e técnicas contraceptivas e disciplinar condições para esterilização cirúrgica voluntária. Diário Oficial da União: seção 1, Brasília, DF, ano 159, n. 169, p. 1-2, 5 set. 2022. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm. Acesso em: 02 nov. 2026.',
    bibtex: `@misc{brasil_lei_14443_2022,
  author = {{BRASIL}},
  title = {Lei nº 14.443, de 2 de setembro de 2022},
  year = {2022},
  howpublished = {Diário Oficial da União, Brasília, DF},
  url = {https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm}
}`
  },
  {
    id: 'ref-cofen-690-2022',
    category: 'cofen',
    categoryLabel: 'Conselho Federal de Enfermagem (COFEN)',
    authors: 'CONSELHO FEDERAL DE ENFERMAGEM (COFEN).',
    title: 'Resolução COFEN nº 690, de 14 de fevereiro de 2022',
    subtitle: 'Normatiza a atuação do enfermeiro no planejamento reprodutivo e a inserção, revisão e retirada do Dispositivo Intrauterino (DIU)',
    city: 'Brasília',
    publisher: 'COFEN',
    year: '2022',
    url: 'http://www.cofen.gov.br/resolucao-cofen-no-690-2022_95932.html',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual do Conselho Federal de Enfermagem',
    relevanceToTcc: 'Legitima o protagonismo da Enfermagem na inserção e acompanhamento do DIU de Cobre na Atenção Básica, assegurando respaldo técnico e ético às(aos) enfermeiras(os).',
    abntFormatted: 'CONSELHO FEDERAL DE ENFERMAGEM (COFEN). Resolução COFEN nº 690, de 14 de fevereiro de 2022. Normatiza a atuação do enfermeiro no planejamento reprodutivo e a inserção, revisão e retirada do Dispositivo Intrauterino (DIU). Brasília: COFEN, 2022. Disponível em: http://www.cofen.gov.br/resolucao-cofen-no-690-2022_95932.html. Acesso em: 02 nov. 2026.',
    bibtex: `@misc{cofen_resolucao_690_2022,
  author = {{CONSELHO FEDERAL DE ENFERMAGEM}},
  title = {Resolução COFEN nº 690/2022: Atuação do enfermeiro no planejamento reprodutivo e inserção do DIU},
  year = {2022},
  address = {Brasília},
  url = {http://www.cofen.gov.br/resolucao-cofen-no-690-2022_95932.html}
}`
  },
  {
    id: 'ref-cofen-714-2023',
    category: 'cofen',
    categoryLabel: 'Conselho Federal de Enfermagem (COFEN)',
    authors: 'CONSELHO FEDERAL DE ENFERMAGEM (COFEN).',
    title: 'Resolução COFEN nº 714, de 31 de janeiro de 2023',
    subtitle: 'Atualiza as normas para a realização da consulta de enfermagem e prescrição de medicamentos no âmbito da atenção integral à saúde da mulher',
    city: 'Brasília',
    publisher: 'COFEN',
    year: '2023',
    url: 'http://www.cofen.gov.br/resolucao-cofen-no-714-2023_106720.html',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual do Conselho Federal de Enfermagem',
    relevanceToTcc: 'Regulamenta a prescrição de anticoncepcionais orais e injetáveis, solicitação de exames complementares e realização de testes rápidos por enfermeiros na APS.',
    abntFormatted: 'CONSELHO FEDERAL DE ENFERMAGEM (COFEN). Resolução COFEN nº 714, de 31 de janeiro de 2023. Atualiza as normas para a realização da consulta de enfermagem e prescrição de medicamentos no âmbito da atenção integral à saúde da mulher. Brasília: COFEN, 2023. Disponível em: http://www.cofen.gov.br/resolucao-cofen-no-714-2023_106720.html. Acesso em: 02 nov. 2026.',
    bibtex: `@misc{cofen_resolucao_714_2023,
  author = {{CONSELHO FEDERAL DE ENFERMAGEM}},
  title = {Resolução COFEN nº 714/2023: Consulta de Enfermagem e Prescrição em Saúde da Mulher},
  year = {2023},
  address = {Brasília},
  url = {http://www.cofen.gov.br/resolucao-cofen-no-714-2023_106720.html}
}`
  },
  {
    id: 'ref-pcdt-prep-pep-2023',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde / DATHI',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de HIV/Aids, Tuberculose, Hepatites Virais e ISTs.',
    title: 'Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pré-Exposição (PrEP) e Pós-Exposição (PEP) de Risco à Infecção pelo HIV',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2023',
    pages: '144 p.',
    url: 'https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2023/pcdt-pep-prep/view',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'BVS Ministério da Saúde / SciELO Saúde Pública',
    relevanceToTcc: 'Embasamento científico para a seção de Dupla Proteção, detalhando o prazo de 72 horas para a PEP e o regime contínuo da PrEP na rede básica.',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de HIV/Aids, Tuberculose, Hepatites Virais e ISTs. Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pré-Exposição (PrEP) e Pós-Exposição (PEP) de Risco à Infecção pelo HIV. Brasília: Ministério da Saúde, 2023. 144 p. Disponível em: https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2023/pcdt-pep-prep/view. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_pcdt_pep_prep_2023,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Protocolo Clínico e Diretrizes Terapêuticas para PrEP e PEP de Risco à Infecção pelo HIV},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2023},
  url = {https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2023/pcdt-pep-prep/view}
}`
  },
  {
    id: 'ref-opas-oms-manual-2022',
    category: 'bvs_opas_fiocruz',
    categoryLabel: 'OPAS / OMS (BVS)',
    authors: 'ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE (OPAS); ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS).',
    title: 'Planejamento familiar: um manual global para profissionais e serviços de saúde',
    edition: '4. ed.',
    city: 'Washington, D.C.',
    publisher: 'OPAS/OMS',
    year: '2022',
    pages: '460 p.',
    url: 'https://iris.paho.org/handle/10665.2/56102',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS / IRIS OPAS)',
    relevanceToTcc: 'Fornece as taxas mundiais padronizadas de eficácia habitual e de uso perfeito (Índice de Pearl) e as recomendações de aconselhamento centrado na pessoa.',
    abntFormatted: 'ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE; ORGANIZAÇÃO MUNDIAL DA SAÚDE. Planejamento familiar: um manual global para profissionais e serviços de saúde. 4. ed. Washington, D.C.: OPAS/OMS, 2022. 460 p. Disponível em: https://iris.paho.org/handle/10665.2/56102. Acesso em: 02 nov. 2026.',
    bibtex: `@book{opas_planejamento_familiar_2022,
  author = {{OPAS/OMS}},
  title = {Planejamento familiar: um manual global para profissionais e serviços de saúde},
  edition = {4},
  publisher = {Organização Pan-Americana da Saúde},
  address = {Washington, D.C.},
  year = {2022},
  url = {https://iris.paho.org/handle/10665.2/56102}
}`
  },
  {
    id: 'ref-fiocruz-iff-2021',
    category: 'bvs_opas_fiocruz',
    categoryLabel: 'IFF / FIOCRUZ (BVS)',
    authors: 'INSTITUTO NACIONAL DE SAÚDE DA MULHER, DA CRIANÇA E DO ADOLESCENTE FERNANDES FIGUEIRA (IFF/FIOCRUZ).',
    title: 'Atenção à Saúde Reprodutiva: inserção de DIU no pós-parto imediato e pós-aborto na Atenção Primária e Maternidades',
    city: 'Rio de Janeiro',
    publisher: 'Portal de Boas Práticas IFF/Fiocruz',
    year: '2021',
    url: 'https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/diu-pos-parto-e-pos-aborto/',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'BVS Fiocruz / Portal de Boas Práticas',
    relevanceToTcc: 'Fundamenta a pergunta de puerpério e amamentação, demonstrando a segurança da inserção do DIU de Cobre nas maternidades e UBSs.',
    abntFormatted: 'INSTITUTO NACIONAL DE SAÚDE DA MULHER, DA CRIANÇA E DO ADOLESCENTE FERNANDES FIGUEIRA. Atenção à Saúde Reprodutiva: inserção de DIU no pós-parto imediato e pós-aborto na Atenção Primária e Maternidades. Rio de Janeiro: IFF/Fiocruz, 2021. Disponível em: https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/diu-pos-parto-e-pos-aborto/. Acesso em: 02 nov. 2026.',
    bibtex: `@article{fiocruz_diu_posparto_2021,
  author = {{IFF/FIOCRUZ}},
  title = {Atenção à Saúde Reprodutiva: inserção de DIU no pós-parto e puerpério},
  journal = {Portal de Boas Práticas em Saúde da Mulher},
  year = {2021},
  url = {https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/diu-pos-parto-e-pos-aborto/}
}`
  },
  {
    id: 'ref-cab-26-ms',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde (Clássico Permanente)',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica.',
    title: 'Saúde sexual e saúde reprodutiva',
    edition: '1. ed., 1. reimpr.',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2013',
    pages: '300 p.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/saude_sexual_saude_reprodutiva.pdf',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS/MS - Caderno de Atenção Básica nº 26)',
    relevanceToTcc: 'Texto de fundamentação de referência da Estratégia Saúde da Família (ESF) para a estruturação das consultas de acolhimento e oferta dos métodos contraceptivos.',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. Saúde sexual e saúde reprodutiva. 1. ed., 1. reimpr. Brasília: Ministério da Saúde, 2013. 300 p. (Cadernos de Atenção Básica, n. 26). Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/saude_sexual_saude_reprodutiva.pdf. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_cab26_2013,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Saúde sexual e saúde reprodutiva: Cadernos de Atenção Básica nº 26},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2013},
  url = {https://bvsms.saude.gov.br/bvs/publicacoes/saude_sexual_saude_reprodutiva.pdf}
}`
  },
  {
    id: 'ref-protocolo-saude-mulher-ms',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde (Protocolo de Saúde da Mulher)',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica.',
    title: 'Protocolos da Atenção Básica: Saúde das Mulheres',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2016',
    pages: '230 p.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS/MS - Protocolo Oficial)',
    relevanceToTcc: 'Documento central de referência da Atenção Básica que orienta a Consulta de Enfermagem em Saúde Reprodutiva, anamnese dirigida, critérios de dispensação de contraceptivos, abordagem sindrômica de ISTs e prevenção do câncer de colo uterino.',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. Protocolos da Atenção Básica: Saúde das Mulheres. Brasília: Ministério da Saúde, 2016. 230 p. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_protocolo_saude_mulher_2016,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Protocolos da Atenção Básica: Saúde das Mulheres},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2016},
  url = {https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf}
}`
  },
  {
    id: 'ref-proteger-cuidar-adolescentes-2017',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde (Saúde do Adolescente)',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Ações Programáticas Estratégicas.',
    title: 'Proteger e cuidar de adolescentes na atenção básica',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2017',
    pages: '234 p.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/proteger_cuidar_adolescentes_atencao_basica.pdf',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS/MS)',
    relevanceToTcc: 'Diretriz central do SUS para a prevenção da gravidez na adolescência e ações da Enfermagem na Atenção Primária. Fundamenta o acolhimento confidencial, sem julgamentos, a oferta de métodos de barreira e a prescrição/inserção de LARCs.',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Ações Programáticas Estratégicas. Proteger e cuidar de adolescentes na atenção básica. Brasília: Ministério da Saúde, 2017. 234 p. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/proteger_cuidar_adolescentes_atencao_basica.pdf. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_proteger_adolescentes_2017,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Proteger e cuidar de adolescentes na atenção básica},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2017},
  url = {https://bvsms.saude.gov.br/bvs/publicacoes/proteger_cuidar_adolescentes_atencao_basica.pdf}
}`
  },
  {
    id: 'ref-caderneta-saude-adolescente-2021',
    category: 'ministerio_saude',
    categoryLabel: 'Ministério da Saúde (Caderneta da Adolescente)',
    authors: 'BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde.',
    title: 'Caderneta de Saúde da Adolescente',
    city: 'Brasília',
    publisher: 'Ministério da Saúde',
    year: '2021',
    pages: '64 p.',
    url: 'https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_saude_adolescente_feminina.pdf',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Biblioteca Virtual em Saúde (BVS/MS)',
    relevanceToTcc: 'Instrumento oficial entregue às adolescentes na APS contendo orientações sobre puberdade, direitos sexuais, dupla proteção, vacinação contra HPV e prevenção de gravidez precoce.',
    abntFormatted: 'BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Caderneta de Saúde da Adolescente. Brasília: Ministério da Saúde, 2021. 64 p. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_saude_adolescente_feminina.pdf. Acesso em: 02 nov. 2026.',
    bibtex: `@book{brasil_caderneta_adolescente_2021,
  author = {{BRASIL. Ministério da Saúde}},
  title = {Caderneta de Saúde da Adolescente},
  publisher = {Ministério da Saúde},
  address = {Brasília},
  year = {2021},
  url = {https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_saude_adolescente_feminina.pdf}
}`
  },
  {
    id: 'ref-lei-prevencao-gravidez-adolescencia',
    category: 'legislacao',
    categoryLabel: 'Legislação Federal (Semana da Gravidez na Adolescência)',
    authors: 'BRASIL.',
    title: 'Lei nº 13.798, de 3 de janeiro de 2019',
    subtitle: 'Acrescenta art. 8º-A à Lei nº 8.069, de 13 de julho de 1990 (Estatuto da Criança e do Adolescente), para instituir a Semana Nacional de Prevenção da Gravidez na Adolescência',
    city: 'Brasília',
    publisher: 'Diário Oficial da União',
    year: '2019',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13798.htm',
    accessDate: '02 nov. 2026',
    bvsDatabase: 'Portal da Legislação / Planalto Federal',
    relevanceToTcc: 'Institui a obrigatoriedade de campanhas informativas e educativas multidisciplinares coordenadas pela Atenção Primária à Saúde e equipes de Enfermagem.',
    abntFormatted: 'BRASIL. Lei nº 13.798, de 3 de janeiro de 2019. Acrescenta art. 8º-A à Lei nº 8.069, de 13 de julho de 1990 (Estatuto da Criança e do Adolescente), para instituir a Semana Nacional de Prevenção da Gravidez na Adolescência. Diário Oficial da União, Brasília, DF, 4 jan. 2019. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13798.htm. Acesso em: 02 nov. 2026.',
    bibtex: `@misc{brasil_lei_13798_2019,
  author = {{BRASIL}},
  title = {Lei nº 13.798, de 3 de janeiro de 2019: Semana Nacional de Prevenção da Gravidez na Adolescência},
  year = {2019},
  url = {https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13798.htm}
}`
  }
];

export const QUESTION_SCIENTIFIC_BASES: QuestionScientificBase[] = [
  {
    questionId: 'age',
    questionNumber: 1,
    questionTitle: 'Faixa etária e momento da vida',
    clinicalPurpose: 'Avaliar a segurança cardiovascular do estrogênio em mulheres ≥ 35 anos e garantir o direito de acolhimento confidencial a adolescentes.',
    scientificRationale: 'O Ministério da Saúde e a OMS classificam o uso de anticoncepcionais hormonais combinados em mulheres fumantes com 35 anos ou mais como Categoria 3 ou 4 devido ao risco de infarto agudo do miocárdio e acidente vascular cerebral. Em adolescentes, o ECA e as portarias da Atenção Primária garantem sigilo na consulta de enfermagem sem exigência de presença de responsáveis.',
    categoriesInvolved: 'Categoria 1 (Geral) / Categoria 3 e 4 (Fumantes ≥ 35 anos)',
    referencedSource: 'Critérios Médicos de Elegibilidade da OMS/MS (2020) & Estatuto da Criança e do Adolescente',
    abntCitation: 'BRASIL. Ministério da Saúde, 2020, p. 24-28.',
    sourceUrl: 'https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf'
  },
  {
    questionId: 'postpartum',
    questionNumber: 2,
    questionTitle: 'Pós-parto e amamentação (lactação)',
    clinicalPurpose: 'Identificar métodos que não inibam a produção láctea nem passem esteroides danosos ao recém-nascido.',
    scientificRationale: 'Estrogênios combinados são contraindicados nas primeiras 6 semanas pós-parto (risco tromboembólico materno aumentado no puerpério imediato e prejuízo à lactogênese). Métodos apenas com progestagênio (minipílula de noretisterona, injeção trimestral de AMP) e o DIU de Cobre são Categoria 1 no aleitamento materno.',
    categoriesInvolved: 'Categoria 1 (DIU Cobre, Minipílula) vs Categoria 4 (Combinados < 6 semanas pós-parto)',
    referencedSource: 'Manual Global de Planejamento Familiar OPAS/OMS (2022) & Portal de Boas Práticas IFF/Fiocruz (2021)',
    abntCitation: 'ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE, 2022, cap. 2-5.',
    sourceUrl: 'https://iris.paho.org/handle/10665.2/56102'
  },
  {
    questionId: 'routine',
    questionNumber: 3,
    questionTitle: 'Rotina e taxa de adesão aos medicamentos',
    clinicalPurpose: 'Diferenciar usuárias de métodos dependentes de adesão diária de candidatas a Métodos Reversíveis de Longa Duração (LARCs).',
    scientificRationale: 'O Índice de Pearl demonstra que a pílula combinada tem 0,3% de taxa de falha com uso perfeito, mas salta para 7% a 9% no uso habitual da população real devido a esquecimentos. O DIU de Cobre mantém eficácia contínua (< 0,8%) independente da memória da paciente, sendo recomendado pelo MS para quem relata rotina corrida.',
    categoriesInvolved: 'LARC (Longa Ação: DIU) vs Métodos de Curta Duração',
    referencedSource: 'Caderno de Atenção Básica nº 26 (MS) & OPAS/OMS (2022)',
    abntCitation: 'BRASIL. Ministério da Saúde, 2013, p. 65-72.',
    sourceUrl: 'https://bvsms.saude.gov.br/bvs/publicacoes/saude_sexual_saude_reprodutiva.pdf'
  },
  {
    questionId: 'health_conditions',
    questionNumber: 4,
    questionTitle: 'Condições clínicas de risco (Hipertensão, Enxaqueca com Aura, Trombose)',
    clinicalPurpose: 'Prevenção de eventos tromboembólicos venosos e vasculares cerebrais graves.',
    scientificRationale: 'Enxaqueca com aura neurológica (escotomas, cintilações, perda transitória de campo visual) é classificada formalmente como Categoria 4 (Contraindicação Absoluta) para qualquer anticoncepcional que contenha estrogênio, devido ao risco multiplicado de Acidente Vascular Encefálico (AVE) isquêmico. Histórico de TVP/embolia pulmonar prévia também é Categoria 4.',
    categoriesInvolved: 'Categoria 4 do Ministério da Saúde (Contraindicação Médica Inaceitável)',
    referencedSource: 'Critérios Médicos de Elegibilidade para Uso de Anticoncepcionais (Ministério da Saúde / OMS, 2020)',
    abntCitation: 'BRASIL. Ministério da Saúde, 2020, p. 55-63.',
    sourceUrl: 'https://bvsms.saude.gov.br/bvs/publicacoes/criterios_medicos_elegibilidade_anticoncepcionais.pdf'
  },
  {
    questionId: 'menstrual_bleeding',
    questionNumber: 5,
    questionTitle: 'Padrão de fluxo menstrual e dismenorreia (cólicas)',
    clinicalPurpose: 'Adequar a tolerabilidade e os benefícios não contraceptivos de cada método.',
    scientificRationale: 'O DIU de Cobre pode acarretar aumento temporário do fluxo menstrual e de cólicas nos primeiros 3 a 6 meses de adaptação miometrial. Já os progestagênios (injeção trimestral de medroxiprogesterona) promovem atrofia endometrial com alta incidência de amenorreia ou sangramento escasso, sendo benéficos em usuárias com dismenorreia severa.',
    categoriesInvolved: 'Adaptação sintomática e indicação individualizada na consulta de enfermagem',
    referencedSource: 'Guia de Boas Práticas de Enfermagem em Saúde Sexual e Reprodutiva (COREN-SP, 2022)',
    abntCitation: 'CONSELHO REGIONAL DE ENFERMAGEM DE SÃO PAULO, 2022, p. 34-40.',
    sourceUrl: 'http://www.coren-sp.gov.br/'
  },
  {
    questionId: 'reproductive_goals',
    questionNumber: 6,
    questionTitle: 'Expectativa reprodutiva e tempo de espera planejado',
    clinicalPurpose: 'Evitar métodos de esterilização precipitados em quem tem dúvidas e amparar quem deseja método definitivo sob a Lei 14.443/2022.',
    scientificRationale: 'A suspensão do injetável trimestral pode demandar até 10 meses para retorno da ovulação regular, não sendo ideal para quem quer engravidar no próximo semestre. Por outro lado, quem busca método definitivo tem o direito assegurado pela Lei Federal 14.443/2022 (sem aval do cônjuge, a partir dos 21 anos ou com 2 filhos vivos, com 60 dias de reflexão).',
    categoriesInvolved: 'Retorno à Fertilidade vs Lei 14.443/2022 (Planejamento Familiar)',
    referencedSource: 'Lei Federal nº 14.443/2022 & Critérios MS (2020)',
    abntCitation: 'BRASIL. Lei nº 14.443/2022; BRASIL. Ministério da Saúde, 2020, p. 110-115.',
    sourceUrl: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm'
  },
  {
    questionId: 'hormone_preference',
    questionNumber: 7,
    questionTitle: 'Preferência individual em relação a hormônios',
    clinicalPurpose: 'Princípio da autonomia, consentimento esclarecido e decisão compartilhada na enfermagem.',
    scientificRationale: 'A Política Nacional de Humanização (HumanizaSUS) e as Resoluções COFEN 690/2022 e 714/2023 preconizam a escuta qualificada e o respeito à autonomia da mulher, priorizando métodos não-hormonais (DIU de cobre TCu 380A e preservativos) quando manifestada essa preferência.',
    categoriesInvolved: 'Autonomia da Usuária & Resoluções COFEN 690/2022 e 714/2023',
    referencedSource: 'Conselho Federal de Enfermagem (COFEN, 2022/2023) & HumanizaSUS (MS)',
    abntCitation: 'CONSELHO FEDERAL DE ENFERMAGEM, 2022, art. 2º.',
    sourceUrl: 'http://www.cofen.gov.br/resolucao-cofen-no-690-2022_95932.html'
  }
];

export const TECHNOLOGIES_USED = [
  {
    name: 'React 19 & TypeScript',
    category: 'Engenharia de Frontend',
    description: 'Interface declarativa com tipagem estática rigorosa para garantir consistência no processamento dos critérios clínicos de elegibilidade.'
  },
  {
    name: 'Tailwind CSS v4 & Lucide Icons',
    category: 'Design & Acessibilidade',
    description: 'Sistema de design minimalista, responsivo e adaptado para telas de smartphones, com suporte a alto contraste e diretrizes de usabilidade visual.'
  },
  {
    name: 'Vite 8 & Client-Side Execution',
    category: 'Arquitetura & Privacidade',
    description: 'Execução 100% local no navegador da usuária, sem coleta, armazenamento ou transmissão de dados para servidores externos (em conformidade com a LGPD e Ética em Pesquisa).'
  },
  {
    name: 'CSS Print Engine (@media print)',
    category: 'Documentação Acadêmica & Clínica',
    description: 'Padronização de quebra de página (break-inside: avoid) para exportação perfeita de relatórios clínicos e referências ABNT em PDF sem cortes indevidos.'
  }
];

export const PROJECT_TREE_STRUCTURE = `enfrepro-tcc-enfermagem/
├── public/
│   ├── favicon.svg              # Ícone minimalista de enfermagem
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navegação minimalista e acessível
│   │   ├── HomeView.tsx         # Página inicial dedicada (Apresentação do TCC)
│   │   ├── QuizView.tsx         # Questionário clínico de elegibilidade (página separada)
│   │   ├── MethodsCatalog.tsx   # Catálogo dos métodos contraceptivos no SUS
│   │   ├── UbsGuideView.tsx     # Fluxos das salas da UBS & Territorialidade
│   │   ├── IstEducationView.tsx # Dupla Proteção, Testes Rápidos e PEP/PrEP
│   │   ├── NursingAndRightsView.tsx # Resoluções COFEN & Lei 14.443/2022
│   │   ├── MythsAndFactsView.tsx    # Educação em saúde interativa
│   │   ├── ReferencesAbntView.tsx   # PÁGINA EXCLUSIVA DE REFERÊNCIAS ABNT
│   │   └── Footer.tsx           # Rodapé acadêmico e canais de apoio (136/180)
│   ├── data/
│   │   ├── abntReferences.ts    # Base de dados ABNT, BVS, MS, COFEN e fundamentação
│   │   ├── contraceptiveMethods.ts  # Métodos do SUS e critérios de Pearl
│   │   ├── quizQuestions.ts     # Perguntas científicas do questionário
│   │   ├── susUbsGuide.ts       # Protocolos de atendimento da Atenção Primária
│   │   └── istEducation.ts      # Dados clínicos de prevenção combinada
│   ├── utils/
│   │   └── eligibilityAlgorithm.ts # Algoritmo de classificação clínica (OMS/MS)
│   ├── App.tsx                  # Roteamento de abas minimalista
│   ├── index.css                # Estilos base e regras de impressão (@media print)
│   └── main.tsx                 # Ponto de entrada React 19
├── package.json                 # Dependências e scripts
└── vite.config.ts               # Configuração do Vite e Tailwind`;

export function generatePlainTextAbnt(): string {
  let content = '===========================================================\n';
  content += 'REFERÊNCIAS BIBLIOGRÁFICAS EM FORMATO ABNT (NBR 6023)\n';
  content += 'Projeto TCC de Enfermagem: EnfRepro\n';
  content += 'Tecnologia Cuidativo-Educacional em Saúde Reprodutiva na APS\n';
  content += '===========================================================\n\n';

  ABNT_REFERENCES.forEach((ref, index) => {
    content += `[${index + 1}] ${ref.abntFormatted}\n\n`;
  });

  content += '\n===========================================================\n';
  content += 'BASE CIENTÍFICA DAS PERGUNTAS DO QUESTIONÁRIO CLÍNICO\n';
  content += '===========================================================\n\n';

  QUESTION_SCIENTIFIC_BASES.forEach((q) => {
    content += `Pergunta ${q.questionNumber}: ${q.questionTitle}\n`;
    content += `Racional Clínico: ${q.scientificRationale}\n`;
    content += `Referência: ${q.abntCitation}\n`;
    content += `Fonte Oficial: ${q.sourceUrl}\n\n`;
  });

  return content;
}

export function generateBibTex(): string {
  return ABNT_REFERENCES.map((ref) => ref.bibtex).join('\n\n');
}
