export interface ContraceptiveMethod {
  id: string;
  name: string;
  shortName: string;
  category: 'larc' | 'hormonal_short' | 'barrier' | 'emergency' | 'permanent';
  categoryLabel: string;
  hormoneType: 'Sem hormônio' | 'Combinado (Estrogênio + Progesterona)' | 'Apenas Progestagênio' | 'Não se aplica';
  durationText: string;
  effectivenessTypical: string; // ex: 99.2%
  effectivenessPerfect: string; // ex: 99.8%
  pearlIndex: string; // Taxa de falha
  howItWorks: string;
  pros: string[];
  consOrSideEffects: string[];
  whoCanUse: string;
  contraindications: string[];
  availableInSUS: boolean;
  howToGetInSUS: {
    where: string;
    whoExecutes: string;
    documentsNeeded: string[];
    steps: string[];
  };
  myths: { myth: string; fact: string }[];
  tags: string[];
}

export const CONTRACEPTIVE_METHODS: ContraceptiveMethod[] = [
  {
    id: 'diu-cobre',
    name: 'DIU de Cobre (TCu 380A)',
    shortName: 'DIU de Cobre',
    category: 'larc',
    categoryLabel: 'LARC (Longa Ação Reversível)',
    hormoneType: 'Sem hormônio',
    durationText: 'Até 10 a 12 anos (reversível a qualquer momento)',
    effectivenessTypical: '99,2% (0,8% de falha)',
    effectivenessPerfect: '99,4% (0,6% de falha)',
    pearlIndex: '0,6 - 0,8 gravidezes por 100 mulheres/ano',
    howItWorks: 'Pequeno dispositivo de polietileno em formato de T envolvido por cobre, inserido no útero. O cobre cria uma reação inflamatória local inofensiva ao corpo da mulher, mas que imobiliza os espermatozoides e impede a fecundação.',
    pros: [
      '100% livre de hormônios (não interfere na ovulação, peso, libido ou humor)',
      'Altíssima eficácia contínua por até 10 a 12 anos',
      'Não depende de lembrar todo dia ou todo mês',
      'Pode ser retirado a qualquer momento na UBS pela enfermeira ou médico, com retorno imediato da fertilidade',
      'Pode ser usado por adolescentes, mulheres que nunca tiveram filhos (nulíparas) e durante a amamentação',
      'Pode ser usado como anticoncepção de emergência em até 5 dias após a relação desprotegida'
    ],
    consOrSideEffects: [
      'Pode aumentar o fluxo menstrual e as cólicas nos primeiros 3 a 6 meses de adaptação',
      'Requer procedimento de inserção por profissional de saúde capacitado'
    ],
    whoCanUse: 'Mulheres de qualquer idade (incluindo adolescentes e quem nunca pariu) que buscam alta eficácia sem hormônios.',
    contraindications: [
      'Gravidez confirmada ou suspeita',
      'Doença Inflamatória Pélvica (DIP) ativa ou infecção genital atual',
      'Sangramento vaginal anormal não diagnosticado',
      'Câncer do colo do útero ou endométrio ativo',
      'Malformações uterinas anatômicas graves que distorçam a cavidade'
    ],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Na Unidade Básica de Saúde (UBS / Posto de Saúde) ou Ambulatório de Saúde da Mulher.',
      whoExecutes: 'Enfermeiras(os) capacitadas(os) (conforme Resoluções COFEN 690/2022 e 714/2023) ou Médicas(os) de Família/Ginecologistas.',
      documentsNeeded: ['Cartão SUS', 'Documento oficial com foto (RG/CNH)', 'Comprovante de residência'],
      steps: [
        'Procure a sua UBS de referência e participe da consulta de enfermagem ou grupo de acolhimento em planejamento reprodutivo.',
        'Realize o teste rápido de gravidez (se necessário) e testes de IST.',
        'O procedimento de inserção é ambulatorial (feito no próprio consultório da UBS, sem necessidade de centro cirúrgico ou internação).',
        'Retorno de acompanhamento em 30 a 45 dias para checagem dos fios e adaptação.'
      ]
    },
    myths: [
      {
        myth: 'O DIU de cobre é abortivo.',
        fact: 'Mito. O DIU atua antes da fecundação: os íons de cobre inativam os espermatozoides, impedindo o encontro com o óvulo.'
      },
      {
        myth: 'Quem nunca engravidou não pode colocar DIU.',
        fact: 'Mito! O Ministério da Saúde e a OMS confirmam que mulheres nulíparas (sem filhos) e adolescentes podem usar DIU com total segurança.'
      },
      {
        myth: 'O DIU sai do lugar durante a relação sexual.',
        fact: 'Mito. O DIU fica guardado dentro da cavidade uterina, bem protegido pelo colo do útero. O pênis não tem contato com o DIU.'
      }
    ],
    tags: ['Sem Hormônio', 'Longo Prazo', 'Mais Eficaz', 'Inserção na UBS']
  },
  {
    id: 'injetavel-trimestral',
    name: 'Injetável Trimestral (Acetato de Medroxiprogesterona 150mg)',
    shortName: 'Injeção Trimestral',
    category: 'hormonal_short',
    categoryLabel: 'Injetável Hormonal',
    hormoneType: 'Apenas Progestagênio',
    durationText: 'Aplicação intramuscular a cada 3 meses (12 semanas)',
    effectivenessTypical: '96% (4% de falha típica por atraso na dose)',
    effectivenessPerfect: '99,8% (0,2% de falha)',
    pearlIndex: '0,2 - 4 gravidezes por 100 mulheres/ano',
    howItWorks: 'Injeção intramuscular de progestagênio de depósito que bloqueia a ovulação e espessa o muco cervical, impedindo a passagem dos espermatozoides.',
    pros: [
      'Aplicação com intervalo confortável: apenas 4 vezes ao ano na sala de vacinas/enfermagem da UBS',
      'Não contém estrogênio: muito seguro para quem amamenta (a partir de 6 semanas pós-parto)',
      'Excelente para mulheres com enxaqueca com aura ou contraindicação ao estrogênio',
      'Muitas usuárias entram em amenorreia (param de menstruar) ou têm redução expressiva do fluxo',
      'Alta discrição e privacidade no uso'
    ],
    consOrSideEffects: [
      'Pode causar pequenos escapes (spotting) ou amenorreia completa',
      'Retorno da fertilidade pode demorar de 6 a 10 meses após a interrupção',
      'Pode haver leve alteração de peso e retenção hídrica em algumas mulheres'
    ],
    whoCanUse: 'Mulheres que esquecem a pílula diária, lactantes, mulheres que não podem tomar estrogênio e quem deseja parar de menstruar.',
    contraindications: [
      'Câncer de mama atual ou prévio',
      'Sangramento vaginal inexplicado antes de investigação clínica',
      'Doença hepática aguda grave',
      'Hipertensão grave não controlada (PA ≥ 160/100 mmHg)'
    ],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Sala de Procedimentos ou Sala de Vacinas/Medicação da sua UBS.',
      whoExecutes: 'Equipe de enfermagem da UBS (técnicos e enfermeiros), após consulta de acolhimento.',
      documentsNeeded: ['Cartão SUS', 'Documento com foto', 'Cartão de Planejamento Reprodutivo ou Receita da UBS'],
      steps: [
        'Acolhimento na UBS e consulta para verificar critérios de elegibilidade.',
        'Primeira dose administrada preferencialmente até o 5º dia do ciclo menstrual ou após descartar gestação.',
        'A mulher recebe o cartão com a data exata da próxima aplicação em 90 dias.'
      ]
    },
    myths: [
      {
        myth: 'Ficar sem menstruar faz o sangue acumular no corpo e faz mal.',
        fact: 'Mito. Com a injeção trimestral, o endométrio simplesmente não cresce, logo não há sangue para descer. Isso não causa mal algum à saúde.'
      },
      {
        myth: 'A injeção trimestral causa infertilidade definitiva.',
        fact: 'Mito. A fertilidade retorna normalmente, embora possa levar alguns meses após a última dose para o ciclo regularizar.'
      }
    ],
    tags: ['Apenas Progestagênio', 'A cada 3 meses', 'Amamentação', 'Sem Estrogênio']
  },
  {
    id: 'injetavel-mensal',
    name: 'Injetável Mensal (Enantato de Noretisterona + Valerato de Estradiol)',
    shortName: 'Injeção Mensal',
    category: 'hormonal_short',
    categoryLabel: 'Injetável Hormonal',
    hormoneType: 'Combinado (Estrogênio + Progesterona)',
    durationText: 'Aplicação intramuscular mensal (a cada 30 dias)',
    effectivenessTypical: '97% (3% de falha com atrasos)',
    effectivenessPerfect: '99,9% (0,05% de falha)',
    pearlIndex: '0,05 - 3 gravidezes por 100 mulheres/ano',
    howItWorks: 'Combinação de estrogênio e progesterona injetável que inibe a ovulação e mantém controle previsível do ciclo menstrual a cada mês.',
    pros: [
      'Uma única injeção por mês na UBS, eliminando o estresse diário da pílula',
      'Ciclo menstrual costuma permanecer regular com sangramento de privação previsível',
      'Rápido retorno da fertilidade após suspender o método',
      'Melhora cólicas menstruais e acne em comparação a métodos só com progesterona'
    ],
    consOrSideEffects: [
      'Necessidade de ir à UBS todo mês para aplicação',
      'Contém estrogênio, portanto possui contraindicações cardiovasculares similares às da pílula combinada',
      'Sensibilidade nas mamas e dor passageira no local da injeção'
    ],
    whoCanUse: 'Mulheres saudáveis que esquecem de tomar comprimidos todo dia, mas desejam manter o sangramento regular mensal e retorno rápido da fertilidade.',
    contraindications: [
      'Pressão alta não controlada (PAS ≥ 140 ou PAD ≥ 90)',
      'Tabagismo com idade ≥ 35 anos',
      'Enxaqueca com aura em qualquer idade',
      'Histórico pessoal de Trombose Venosa Profunda (TVP) ou Embolia Pulmonar',
      'Mulheres amamentando com menos de 6 meses pós-parto'
    ],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'UBS / Posto de Saúde mais próximo.',
      whoExecutes: 'Profissionais de Enfermagem da Atenção Básica.',
      documentsNeeded: ['Cartão SUS', 'Documento com foto'],
      steps: [
        'Consulta de planejamento reprodutivo na UBS para conferir pressão arterial e histórico.',
        'Aplicação intramuscular no glúteo ou deltoide na sala de procedimentos.',
        'Retorno rigorosamente a cada 30 dias (com tolerância máxima descrita no protocolo do MS de ±3 dias).'
      ]
    },
    myths: [
      {
        myth: 'Se passar do dia da injeção por 1 dia eu já perco todo o efeito imediatamente.',
        fact: 'Existe uma margem de segurança prevista nos protocolos clínicos, mas a aplicação regular garante máxima eficácia. Em caso de atraso maior, use camisinha e consulte a UBS.'
      }
    ],
    tags: ['Combinado', 'Aplicação Mensal', 'Ciclo Regular', 'Retorno Rápido']
  },
  {
    id: 'pilula-combinada',
    name: 'Pílula Combinada (Levonorgestrel 0,15mg + Etinilestradiol 0,03mg)',
    shortName: 'Pílula Diária Combinada',
    category: 'hormonal_short',
    categoryLabel: 'Via Oral',
    hormoneType: 'Combinado (Estrogênio + Progesterona)',
    durationText: 'Uso diário (cartela de 21 dias com pausa de 7 dias)',
    effectivenessTypical: '93% (7% de falha comum por esquecimentos e atrasos)',
    effectivenessPerfect: '99,7% (0,3% de falha)',
    pearlIndex: '0,3 - 7 gravidezes por 100 mulheres/ano',
    howItWorks: 'Comprimidos orais diários com estrogênio e progesterona que inibem o pico ovulatório e regulam o endométrio.',
    pros: [
      'Disponível gratuitamente em grande quantidade em todas as UBSs e pelo Farmácia Popular',
      'Regula o ciclo menstrual e reduz o volume de sangramento e cólicas',
      'Fácil de iniciar e de interromper quando quiser engravidar',
      'Pode amenizar a oleosidade e acne leve'
    ],
    consOrSideEffects: [
      'Depende 100% da disciplina: esquecer comprimidos ou vomitar reduz a eficácia',
      'Possíveis náuseas, dor de cabeça leve ou sensibilidade mamária no início',
      'Contém estrogênio: contraindicada para fumantes >35 anos, enxaqueca com aura e risco de trombose'
    ],
    whoCanUse: 'Mulheres jovens e adultas com rotina organizada, sem contraindicações cardiovasculares.',
    contraindications: [
      'Fumantes com 35 anos ou mais',
      'Enxaqueca com aura visual ou sensitiva',
      'Hipertensão arterial não controlada',
      'Histórico de trombose ou infarto',
      'Lactantes nas primeiras 6 semanas a 6 meses de pós-parto'
    ],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Farmácia da UBS ou farmácias credenciadas no Aqui Tem Farmácia Popular.',
      whoExecutes: 'Prescrição por Enfermeira(o) ou Médica(o) da Atenção Primária.',
      documentsNeeded: ['Cartão SUS', 'Documento com foto', 'Receita emitida na UBS'],
      steps: [
        'Consulta na UBS com verificação de pressão arterial e índice de massa corporal.',
        'Retirada mensal ou trimestral das cartelas na farmácia básica da unidade.',
        'Orientações sobre o que fazer em caso de esquecimento de comprimido.'
      ]
    },
    myths: [
      {
        myth: 'Precisa fazer "pausa" de vez em quando para limpar o organismo.',
        fact: 'Mito prejudicial! Não existe necessidade biológica de pausar a pílula para limpar o corpo. Pausas não planejadas aumentam drasticamente o risco de gravidez indesejada.'
      },
      {
        myth: 'A pílula anticoncepcional causa infertilidade futura.',
        fact: 'Mito. A pílula atua apenas no ciclo em que é tomada. Ao suspender o uso, a fertilidade volta ao padrão individual da mulher.'
      }
    ],
    tags: ['Disponível na Farmácia', 'Uso Diário', 'Regula Menstruação', 'Grátis no SUS']
  },
  {
    id: 'minipilula-lactacao',
    name: 'Minipílula / Pílula de Progestagênio (Noretisterona 0,35mg)',
    shortName: 'Minipílula (Lactação / Só Progesterona)',
    category: 'hormonal_short',
    categoryLabel: 'Via Oral',
    hormoneType: 'Apenas Progestagênio',
    durationText: 'Uso contínuo diário (sem pausas entre cartelas)',
    effectivenessTypical: '93% (com falhas por atraso maior que 3h)',
    effectivenessPerfect: '99,7% (0,3% de falha)',
    pearlIndex: '0,3 - 7 gravidezes por 100 mulheres/ano',
    howItWorks: 'Comprimido diário com dose baixa de progestagênio que altera o muco cervical e o endométrio. Não interfere na produção e qualidade do leite materno.',
    pros: [
      'Método de primeira escolha para mulheres que estão amamentando (início já no puerpério)',
      'Sem estrogênio: seguro para quem tem contraindicações a estrogênios',
      'Cartela contínua: não precisa contar dias de pausa',
      'Não afeta a amamentação nem o crescimento do bebê'
    ],
    consOrSideEffects: [
      'Exige extremo rigor no horário diário (atrasos de mais de 3 horas exigem proteção adicional por 48h)',
      'Pode causar pequenos escapes irregulares'
    ],
    whoCanUse: 'Mulheres no pós-parto e em fase de amamentação exclusiva ou mista, e mulheres intolerantes ao estrogênio.',
    contraindications: [
      'Câncer de mama atual',
      'Sangramento vaginal inexplicado grave',
      'Doença hepática aguda grave'
    ],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Farmácia da Unidade Básica de Saúde.',
      whoExecutes: 'Prescrição por Enfermeira(o) na consulta puerperal ou Médico(a).',
      documentsNeeded: ['Cartão SUS', 'Certidão do bebê ou cartão de vacinas', 'Documento com foto'],
      steps: [
        'Consulta de retorno de puerpério na UBS aos 7 a 42 dias pós-parto.',
        'A enfermeira orienta o início do método e entrega a receita para retirada na farmácia da unidade.',
        'Orientação sobre manter o mesmo horário todos os dias.'
      ]
    },
    myths: [
      {
        myth: 'A minipílula passa hormônio para o leite e faz mal ao bebê.',
        fact: 'Mito. É totalmente segura e recomendada pela Organização Mundial da Saúde e Ministério da Saúde para lactantes.'
      }
    ],
    tags: ['Amamentação', 'Pós-Parto', 'Sem Estrogênio', 'Uso Contínuo']
  },
  {
    id: 'preservativo-externo-interno',
    name: 'Preservativo Externo (Masculino) & Interno (Feminino)',
    shortName: 'Preservativos (Camisinhas)',
    category: 'barrier',
    categoryLabel: 'Método de Barreira',
    hormoneType: 'Sem hormônio',
    durationText: 'Uso pontual a cada relação sexual',
    effectivenessTypical: '87% (13% de falha por uso incorreto, rompimento ou não usar sempre)',
    effectivenessPerfect: '98% (2% de falha com uso correto em todas as relações)',
    pearlIndex: '2 - 13 gravidezes por 100 mulheres/ano',
    howItWorks: 'Barreira física de látex ou borracha sintética (nitrila) que impede a passagem de espermatozoides e patógenos infecciosos.',
    pros: [
      'O ÚNICO método que protege simultaneamente contra gravidez e ISTs (HIV, Sífilis, Hepatites, Gonorreia, Clamídia, HPV)',
      '100% livre de hormônios e sem efeito colateral sistêmico',
      'Distribuição 100% gratuita e ilimitada no SUS em dispensadores de livre acesso',
      'Não exige prescrição médica nem consulta prévia para pegar',
      'O preservativo interno (feminino) pode ser colocado horas antes da relação e confere total autonomia à mulher'
    ],
    consOrSideEffects: [
      'Eficácia contra gravidez depende do uso correto em TODAS as relações',
      'Pode rasgar se usado com lubrificantes à base de óleo (use apenas à base de água)'
    ],
    whoCanUse: 'Todas as pessoas sexualmente ativas em qualquer fase da vida. Essencial na Dupla Proteção!',
    contraindications: ['Apenas alergia severa ao látex (neste caso, utilizar preservativos de poliuretano/nitrila no SUS)'],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Recepção, banheiros, corredores ou farmácia de qualquer UBS, CTA, UPA ou hospital do SUS.',
      whoExecutes: 'Retirada livre e gratuita por qualquer pessoa (livre demanda).',
      documentsNeeded: ['Nenhum documento é obrigatório para retirar nos dispensadores livres'],
      steps: [
        'Entre em qualquer UBS e dirija-se ao dispensador ou balcão de acolhimento.',
        'Pegue a quantidade necessária para suas relações, além de sachês de lubrificante à base d’água.',
        'Também estão disponíveis preservativos femininos/internos com orientações da equipe de enfermagem.'
      ]
    },
    myths: [
      {
        myth: 'Usar duas camisinhas juntas protege o dobro.',
        fact: 'Mito muito perigoso! O atrito entre dois látex aumenta drasticamente o risco de romper. Use apenas uma camisinha por vez.'
      },
      {
        myth: 'Camisinha feminina é difícil de usar e machuca.',
        fact: 'Mito. Ela vem bem lubrificada, é macia, adapta-se confortavelmente ao canal vaginal e pode ser inserida até 8 horas antes.'
      }
    ],
    tags: ['Prevenção de IST', 'Sem Hormônio', 'Acesso Imediato', 'Dupla Proteção']
  },
  {
    id: 'anticoncepcao-emergencia',
    name: 'Anticoncepção de Emergência (Pílula do Dia Seguinte - Levonorgestrel 1,5mg)',
    shortName: 'Pílula do Dia Seguinte',
    category: 'emergency',
    categoryLabel: 'Emergencial',
    hormoneType: 'Apenas Progestagênio',
    durationText: 'Dose única de emergência em até 72 horas (3 dias) após relação desprotegida',
    effectivenessTypical: 'Até 85% a 95% quando tomada nas primeiras 24 horas',
    effectivenessPerfect: 'Maior eficácia quanto mais cedo for tomada',
    pearlIndex: 'Método apenas emergencial, não indicado para uso de rotina',
    howItWorks: 'Dose concentrada de levonorgestrel que adia ou impede a liberação do óvulo (ovulação) e altera o muco cervical. NÃO funciona se a fecundação e nidação já tiverem ocorrido.',
    pros: [
      'Segunda chance crucial após falha de método (camisinha rompeu, esqueceu pílulas, violência sexual)',
      'Disponível gratuitamente em todas as UBSs e UPAs sem necessidade de consulta médica burocrática',
      'Não tem efeito abortivo: se a gravidez já estiver implantada, não afeta o feto'
    ],
    consOrSideEffects: [
      'Não protege contra ISTs',
      'Pode causar náusea passageira, dor de cabeça e alteração na data da próxima menstruação',
      'Não deve substituir um método regular de alta eficácia'
    ],
    whoCanUse: 'Mulheres em situação de emergência após relação sexual desprotegida.',
    contraindications: ['Gravidez já confirmada (pois não terá efeito, embora não cause malformação)'],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Acolhimento da UBS ou Pronto Atendimento / UPA do SUS.',
      whoExecutes: 'Dispensação imediata pela Enfermagem ou Farmácia da UBS.',
      documentsNeeded: ['Cartão SUS ou documento de identificação (atendimento prioritário)'],
      steps: [
        'Compareça à UBS o mais rápido possível (idealmente nas primeiras 24h, limite de até 72h).',
        'Informe na recepção/acolhimento que precisa de anticoncepção de emergência.',
        'A enfermagem acolhe sem julgamentos morais e dispensa o medicamento na hora.',
        'Aproveite a visita para realizar testes rápidos e já agendar a escolha de um método regular (como o DIU de Cobre).'
      ]
    },
    myths: [
      {
        myth: 'A pílula do dia seguinte é um tipo de aborto.',
        fact: 'Mito comprovado pela ciência e pelo Ministério da Saúde. Ela atua impedindo a ovulação. Se a mulher já estiver grávida, a pílula não interrompe a gestação.'
      },
      {
        myth: 'A pílula do dia seguinte só pode ser tomada 2 vezes na vida senão a mulher fica estéril.',
        fact: 'Mito. Ela não causa infertilidade. Porém, seu uso repetido desregula o ciclo e é menos eficaz do que métodos regulares.'
      }
    ],
    tags: ['Emergência', 'Até 72 horas', 'Sem Julgamento', 'Gratuito na UBS']
  },
  {
    id: 'laqueadura-vasectomia',
    name: 'Métodos Definitivos: Laqueadura Tubária & Vasectomia (Lei 14.443/2022)',
    shortName: 'Laqueadura & Vasectomia (Definitivos)',
    category: 'permanent',
    categoryLabel: 'Cirúrgico Definitivo',
    hormoneType: 'Não se aplica',
    durationText: 'Permanente / Irreversível',
    effectivenessTypical: '99,5% (Laqueadura) / 99,85% (Vasectomia)',
    effectivenessPerfect: '99,5% - 99,9%',
    pearlIndex: '< 0,5 gravidezes por 100 pessoas/ano',
    howItWorks: 'Cirurgias que interrompem o trajeto dos gametas: na mulher, ligadura/secção das tubas uterinas (trompas); no homem, ligadura dos canais deferentes (vasectomia ambulatorial simples).',
    pros: [
      'Método cirúrgico permanente e definitivo',
      'Nova Lei 14.443/2022: NÃO exige mais consentimento ou assinatura do cônjuge/parceiro!',
      'Idade mínima reduzida de 25 para 21 anos (ou em qualquer idade para quem tem pelo menos 2 filhos vivos)',
      'Possibilidade de laqueadura durante o parto cesárea (se manifestado com 60 dias de antecedência no pré-natal da UBS)',
      'Vasectomia é um procedimento ambulatorial rápido com anestesia local (15 a 20 minutos)'
    ],
    consOrSideEffects: [
      'Deve ser considerado permanente e irreversível (reversões são complexas e nem sempre disponíveis no SUS)',
      'Exige prazo obrigatório de reflexão de 60 dias entre a manifestação da vontade e a cirurgia',
      'Não protege contra Infecções Sexualmente Transmissíveis'
    ],
    whoCanUse: 'Mulheres e homens com 21 anos ou mais, ou com pelo menos 2 filhos vivos, com convicção de que não desejam mais filhos.',
    contraindications: ['Incerteza sobre o desejo futuro de ter filhos'],
    availableInSUS: true,
    howToGetInSUS: {
      where: 'Inicia na Unidade Básica de Saúde (UBS) e cirurgia realizada em hospital conveniado do SUS.',
      whoExecutes: 'Encaminhamento pela equipe da ESF/UBS e cirurgia por cirurgião/ginecologista ou urologista.',
      documentsNeeded: ['Cartão SUS', 'RG e CPF', 'Comprovante de residência', 'Termo de Consentimento Livre e Esclarecido assinado com antecedência mínima de 60 dias'],
      steps: [
        'Acolhimento na UBS e manifestação de interesse em método definitivo.',
        'Participação nas reuniões de aconselhamento reprodutivo na UBS para conhecer todas as opções reversíveis (como DIU de 10 anos).',
        'Assinatura do termo de consentimento com prazo legal mínimo de 60 dias para reflexão.',
        'Encaminhamento via regulação municipal (SISREG) para a realização do procedimento cirúrgico.'
      ]
    },
    myths: [
      {
        myth: 'A mulher precisa da autorização assinada do marido para fazer laqueadura.',
        fact: 'Mito derrubado por lei! A Lei Federal nº 14.443/2022 revogou expressamente essa exigência. O corpo e a decisão pertencem exclusivamente à mulher.'
      },
      {
        myth: 'A vasectomia tira a potência sexual ou masculinidade do homem.',
        fact: 'Mito absoluto. A vasectomia apenas impede os espermatozoides de passarem. A ereção, orgasmo, volume da ejaculação e libido continuam idênticos.'
      }
    ],
    tags: ['Definitivo', 'Nova Lei 14.443', 'Sem Autorização Marido', '21 Anos ou 2 Filhos']
  }
];
