export interface SusProcedureLocation {
  id: string;
  methodName: string;
  targetLocation: string;
  professionalRole: string;
  howToSchedule: string;
  estimatedWaitTime: string;
  documentsRequired: string[];
  tipsForVisit: string[];
  nursingRoleDetails: string;
}

export const SUS_LOCATIONS: SusProcedureLocation[] = [
  {
    id: 'diu-cobre-loc',
    methodName: 'DIU de Cobre (TCu 380A)',
    targetLocation: 'Consultório de Enfermagem ou Médico da sua Unidade Básica de Saúde (UBS) / Clínica da Família',
    professionalRole: 'Enfermeira(o) capacitada(o) (Resolução COFEN 690/2022) ou Médica(o) de Família / Ginecologista',
    howToSchedule: 'Compareça ao acolhimento da UBS ou agende consulta de Enfermagem em Saúde Reprodutiva. Não precisa de encaminhamento para hospital!',
    estimatedWaitTime: 'Geralmente realizada no próprio mês do acolhimento na própria UBS.',
    documentsRequired: [
      'Documento de identificação com foto (RG ou CNH)',
      'Cartão Nacional de Saúde (Cartão SUS físico ou pelo aplicativo Meu SUS Digital)',
      'Comprovante de residência (para vincular à equipe de Saúde da Família do seu bairro)',
      'Teste de gravidez negativo recente (pode ser feito na própria UBS minutos antes)'
    ],
    tipsForVisit: [
      'Não é obrigatório estar menstruada no momento da inserção, embora o colo possa estar ligeiramente mais aberto durante o ciclo.',
      'Você pode tomar um analgésico comum (como ibuprofeno ou dipirona) cerca de 30 a 60 minutos antes, se orientado pelo profissional.',
      'O procedimento dura cerca de 10 a 15 minutos, é ambulatorial e você volta para casa no mesmo dia.',
      'A equipe agendará uma consulta de retorno em 30 a 45 dias para checar a adaptação e o fio do DIU.'
    ],
    nursingRoleDetails: 'As(os) enfermeiras(os) da Atenção Primária são pioneiras(os) no acolhimento reprodutivo. Com capacitação técnica e respaldo do Conselho Federal de Enfermagem (COFEN) e do Ministério da Saúde, a inserção realizada por enfermeiras na UBS tem índices de segurança e conforto equivalentes aos mais altos padrões mundiais.'
  },
  {
    id: 'injetaveis-loc',
    methodName: 'Injeção Mensal ou Trimestral',
    targetLocation: 'Sala de Procedimentos / Sala de Vacinas e Medicação da UBS',
    professionalRole: 'Técnico(a) de Enfermagem e Enfermeira(o) da UBS',
    howToSchedule: 'Livre acolhimento na sala de medicação após avaliação inicial no acolhimento ou consulta de rotina.',
    estimatedWaitTime: 'Atendimento no mesmo dia durante o horário de funcionamento da UBS (muitas abrem de 7h às 19h no Saúde na Hora).',
    documentsRequired: [
      'Cartão SUS',
      'Documento oficial com foto',
      'Receita ou Cartão de Acompanhamento da UBS indicando o tipo de injeção e a data'
    ],
    tipsForVisit: [
      'Para injeção trimestral: a aplicação ocorre a cada 90 dias (com tolerância máxima de 2 semanas de margem pelo MS).',
      'Para injeção mensal: rigorosamente a cada 30 dias (±3 dias de margem de segurança).',
      'Nunca massageie o local da injeção no braço ou nádega após a aplicação, pois a massagem acelera a liberação do depósito hormonal precocemente.',
      'Guarde com carinho o cartãozinho com a data da próxima aplicação anotada pela enfermagem.'
    ],
    nursingRoleDetails: 'A equipe de enfermagem realiza a checagem da dosagem, data da última menstruação, pressão arterial e orienta sobre o que esperar nas próximas semanas de forma acolhedora.'
  },
  {
    id: 'pilulas-loc',
    methodName: 'Pílula Combinada ou Minipílula (Lactação)',
    targetLocation: 'Farmácia Básica da UBS ou Farmácias Populares Credenciadas',
    professionalRole: 'Farmacêutico(a), Enfermeira(o) e Dispensadores da UBS',
    howToSchedule: 'Basta apresentar a receita emitida na consulta de enfermagem ou médica da Atenção Básica.',
    estimatedWaitTime: 'Retirada imediata no balcão da farmácia da UBS.',
    documentsRequired: [
      'Cartão SUS',
      'Documento com foto e CPF',
      'Receita do SUS (geralmente válida por 6 meses a 1 ano para retirada contínua)'
    ],
    tipsForVisit: [
      'Você pode retirar cartelas para vários meses de uma vez (conforme estoque e norma do seu município), evitando idas desnecessárias.',
      'Também disponível gratuitamente na rede privada pelo programa federal "Aqui Tem Farmácia Popular" apresentando CPF e receita.',
      'Tire dúvidas na entrega sobre o que fazer caso tenha esquecido o comprimido por mais de 12 horas.'
    ],
    nursingRoleDetails: 'Em grande parte dos municípios brasileiros, a consulta de enfermagem em saúde sexual e reprodutiva permite a renovação de receitas e acompanhamento de queixas leves com escuta atenta.'
  },
  {
    id: 'preservativos-loc',
    methodName: 'Preservativo Externo (Masculino) e Interno (Feminino)',
    targetLocation: 'Dispensadores de livre acesso na recepção e corredores da UBS',
    professionalRole: 'Acesso autônomo (não precisa falar com atendente se não desejar)',
    howToSchedule: 'Sem agendamento e sem filas. Totalmente livre.',
    estimatedWaitTime: 'Imediato (0 minutos).',
    documentsRequired: [
      'Nenhum documento é obrigatório para retirar camisinhas nos dispensadores públicos.'
    ],
    tipsForVisit: [
      'Pegue uma quantidade suficiente para suas relações habituais.',
      'Lembre-se de pegar também os sachês de gel lubrificante à base de água (distribuídos pelo Ministério da Saúde).',
      'Se tiver curiosidade sobre o preservativo feminino/interno, peça à enfermagem para mostrar um modelo demonstrativo.'
    ],
    nursingRoleDetails: 'A enfermagem do SUS trabalha continuamente para desmistificar o uso da camisinha interna e incentivar a autonomia feminina.'
  },
  {
    id: 'emergencia-loc',
    methodName: 'Anticoncepção de Emergência (Pílula do Dia Seguinte)',
    targetLocation: 'Acolhimento da UBS ou Pronto Atendimento / UPA 24 horas',
    professionalRole: 'Enfermeira(o) de Acolhimento ou Farmácia da UBS',
    howToSchedule: 'Demanda espontânea de emergência (atendimento prioritário sem agendamento).',
    estimatedWaitTime: 'Atendimento imediato ou poucos minutos.',
    documentsRequired: [
      'Cartão SUS ou documento de identificação (o atendimento não pode ser negado por falta de documento)'
    ],
    tipsForVisit: [
      'Vá o quanto antes: tomar nas primeiras 24 horas garante a máxima eficácia.',
      'Não sinta vergonha: o Ministério da Saúde estabelece que a dispensação da pílula do dia seguinte deve ser livre de moralismos ou julgamentos.',
      'Se houver vômito até 2 horas após ingerir o comprimido, retorne à UBS para receber uma nova dose.'
    ],
    nursingRoleDetails: 'O acolhimento com classificação de risco garante escuta humanizada, oferta imediata de testes rápidos para ISTs e a oportunidade de planejar um método de longa duração (como o DIU).'
  },
  {
    id: 'laqueadura-loc',
    methodName: 'Laqueadura Tubária e Vasectomia (Lei 14.443/2022)',
    targetLocation: 'Acolhimento da UBS -> Regulação Municipal (SISREG) -> Hospital Cirúrgico do SUS',
    professionalRole: 'Equipe Multiprofissional da ESF (Enfermagem, Psicologia, Serviço Social e Medicina)',
    howToSchedule: 'Procure sua UBS e declare que deseja iniciar o processo de esterilização voluntária.',
    estimatedWaitTime: 'Prazo legal obrigatório de 60 dias para aconselhamento + tempo de agendamento na rede cirúrgica regulada.',
    documentsRequired: [
      'Documento com foto (RG/CNH) e CPF comprovando ter 21 anos ou mais (ou qualquer idade com 2 filhos vivos)',
      'Certidão de nascimento dos filhos (se tiver)',
      'Cartão SUS e comprovante de residência',
      'Termo de Consentimento Informado assinado (NÃO requer assinatura de cônjuge ou parceiro)'
    ],
    tipsForVisit: [
      'A Nova Lei 14.443/2022 aboliu a exigência de consentimento do marido/parceiro: a decisão é estritamente sua!',
      'Pode ser realizada durante o parto cesárea se a gestante manifestar a vontade com pelo menos 60 dias de antecedência no pré-natal da UBS.',
      'Participe das oficinas de planejamento reprodutivo para conhecer todos os métodos reversíveis de altíssima eficácia antes da decisão cirúrgica final.'
    ],
    nursingRoleDetails: 'A enfermagem acompanha a mulher durante todo o processo educativo, garantindo que a decisão seja livre, informada, acolhida e sem qualquer coação.'
  }
];

export interface UbsSearchTip {
  title: string;
  description: string;
  actionText: string;
  actionUrl?: string;
  icon: string;
}

export const UBS_DISCOVERY_TIPS: UbsSearchTip[] = [
  {
    title: 'Aplicativo "Meu SUS Digital" (Oficial)',
    description: 'Baixe o app oficial do Ministério da Saúde para ver a UBS mais próxima, conferir suas vacinas, exames e dados do Cartão Nacional de Saúde.',
    actionText: 'Acessar Meu SUS Digital',
    actionUrl: 'https://meususdigital.saude.gov.br/',
    icon: 'Smartphone'
  },
  {
    title: 'Disque Saúde 136 (Ligação Gratuita)',
    description: 'Central oficial do Ministério da Saúde. Ligue grátis de qualquer telefone e informe seu CEP ou bairro para saber a unidade de saúde responsável.',
    actionText: 'Ligar para o 136',
    actionUrl: 'tel:136',
    icon: 'Phone'
  },
  {
    title: 'Georreferenciamento de UBS do Ministério da Saúde',
    description: 'Mapa oficial de estabelecimentos de Atenção Primária cadastrados no CNES (Cadastro Nacional de Estabelecimentos de Saúde).',
    actionText: 'Consultar Mapa de Unidades',
    actionUrl: 'https://cnes.datasus.gov.br/',
    icon: 'MapPin'
  },
  {
    title: 'Basta ir ao Posto de Saúde mais perto da sua casa!',
    description: 'A Atenção Primária funciona por território. Qualquer agente comunitário de saúde ou atendente na recepção confere seu endereço e confirma se você já está cadastrada na equipe daquele bairro.',
    actionText: 'Dica de Acolhimento Territorial',
    icon: 'Compass'
  }
];
