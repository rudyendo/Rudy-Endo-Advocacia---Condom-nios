import heroCondominiumImage from './assets/images/hero_condominium_law_1795631757621.jpg';

export const SITE_CONFIG = {
  // Preencha com o endpoint do seu formulário (Formspree, Make, Brevo, etc.)
  FORM_ENDPOINT: '',

  // URL do PDF do Guia do Síndico (coloque o arquivo em /public/guia-do-sindico.pdf ou informe a URL completa)
  PDF_URL: '/guia-do-sindico.pdf',

  // IDs de rastreamento (carregados automaticamente apenas se preenchidos)
  TRACKING: {
    GA4_ID: '',
    GTM_ID: '',
    META_PIXEL_ID: '',
  },

  BRANDING: {
    name: 'Rudy Endo Advocacia',
    legalName: 'Rudy Endo – Sociedade Individual de Advocacia',
    oabSociety: 'Registro OAB/RN nº 801',
    oabLawyer: 'OAB/RN nº 12.466',
    lawyerFullName: 'Rudy Anderson Diniz Endo',
    cnpj: '28.528.995/0001-87',
    logoUrl: '/assets/aistudio/logo_3ea6d8e0.png',
    aboutImageUrl: '/assets/aistudio/rudy-endo_750fad2e.jpeg',
    aboutImageAlt: 'Dr. Rudy Endo, advogado condominial em Natal/RN',
    heroImageUrl: heroCondominiumImage,
    ogImageUrl: '/og-image.jpg',
  },

  CONTACT_INFO: {
    whatsappNumber: '5584998347202',
    whatsappDisplay: '(84) 99834-7202',
    whatsappPrefilledMessage:
      'Olá, Dr. Rudy! Sou síndico(a) de um condomínio e gostaria de conversar sobre uma questão jurídica.',
    email: 'rudy@rudyendo.adv.br',
    privacyEmail: 'contato@rudyendo.adv.br',
    address:
      'Rua Desembargador Régulo Tinôco, 1293-B, Sala 02 — Barro Vermelho, Natal/RN — CEP 59022-080',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Desembargador+Régulo+Tinôco+1293+Barro+Vermelho+Natal+RN',
    hours: 'Segunda a sexta, das 9h às 18h, mediante agendamento',
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(
    customMessage ?? SITE_CONFIG.CONTACT_INFO.whatsappPrefilledMessage
  );
  return `https://wa.me/${SITE_CONFIG.CONTACT_INFO.whatsappNumber}?text=${text}`;
}

export const NAVIGATION = {
  links: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],
  ctaLabel: 'Falar no WhatsApp',
};

export const HERO_CONTENT = {
  badge: 'DIREITO CONDOMINIAL · NATAL/RN',
  title: 'Assessoria jurídica para síndicos que precisam decidir com segurança',
  subtitle:
    'Inadimplência, assembleias contestadas, convenção desatualizada ou condômino em conflito? Orientamos o síndico e o conselho com respostas claras, por escrito e no prazo que a gestão exige.',
  primaryCta: 'Falar no WhatsApp',
  secondaryCta: 'Baixar guia gratuito',
  supportLine:
    'Resposta em até 24 horas úteis · Atendimento presencial no RN, PB, PE e CE e online em todo o Brasil',
};

export const PAIN_POINTS_CONTENT = {
  title: 'Situações em que o síndico não deveria decidir sozinho',
  items: [
    'A inadimplência está comprometendo o caixa e as cobranças amigáveis já não funcionam.',
    'Uma assembleia foi questionada — ou você teme que a próxima seja.',
    'A convenção e o regimento interno não dão conta dos problemas atuais (aluguel por temporada, animais, obras, vagas).',
    'Um condômino ameaça processar o condomínio ou o síndico.',
    'O conselho pede uma decisão e você precisa de um fundamento jurídico por escrito.',
    'Há um contrato, obra ou funcionário que pode gerar passivo para o condomínio.',
  ],
  closingLine:
    'Se alguma dessas situações é familiar, uma conversa de 15 minutos pode evitar meses de problema.',
  ctaLabel: 'Quero conversar sobre o meu condomínio',
};

export const SERVICES_CONTENT = {
  title: 'Como podemos ajudar o seu condomínio',
  subtitle: 'Atuação dedicada ao Direito Condominial, do preventivo ao contencioso.',
  items: [
    {
      id: 'cobranca',
      title: 'Cobrança de inadimplentes',
      description:
        'Cobrança extrajudicial organizada e, quando necessário, execução judicial das cotas condominiais — com acompanhamento e relatórios periódicos para o síndico e o conselho.',
    },
    {
      id: 'assembleias',
      title: 'Assembleias',
      description:
        'Revisão do edital de convocação, orientação sobre quórum e votação, presença em assembleias quando necessário e redação ou revisão da ata, reduzindo o risco de anulação.',
    },
    {
      id: 'convencao',
      title: 'Convenção e regimento interno',
      description:
        'Revisão e atualização da convenção e do regimento conforme o Código Civil e a realidade atual do condomínio, com apoio na aprovação em assembleia e no registro em cartório.',
    },
    {
      id: 'pareceres',
      title: 'Pareceres para o síndico e o conselho',
      description:
        'Respostas por escrito para questões do dia a dia: multas, uso de áreas comuns, obras em unidades, locação por temporada, animais, barulho, vagas de garagem.',
    },
    {
      id: 'defesa',
      title: 'Defesa do condomínio em processos',
      description:
        'Atuação em ações cíveis e trabalhistas envolvendo o condomínio, sempre com comunicação clara sobre andamento, riscos e próximos passos.',
    },
    {
      id: 'contratos',
      title: 'Contratos, registros e prevenção de riscos',
      description:
        'Análise de contratos com prestadores, administradoras e obras (incluindo exigências da NBR 16.280 para reformas em unidades), além de questões de matrícula, instituição e registro do condomínio.',
    },
  ],
};

export const HOW_IT_WORKS_CONTENT = {
  title: 'Como funciona a contratação',
  steps: [
    {
      number: '01',
      title: 'Conversa inicial',
      description:
        'Você conta a situação pelo WhatsApp ou formulário. Entendemos o caso e o perfil do condomínio.',
    },
    {
      number: '02',
      title: 'Proposta por escrito',
      description:
        'Enviamos uma proposta com escopo e honorários — assessoria mensal ou atuação por demanda — no formato que o conselho e a assembleia precisam para avaliar.',
    },
    {
      number: '03',
      title: 'Acompanhamento contínuo',
      description:
        'Canal direto com o advogado responsável, prazos definidos e relatórios para o síndico prestar contas com tranquilidade.',
    },
  ],
  note: 'Precisa apresentar a proposta ao conselho ou levar à assembleia? Preparamos a documentação e, se necessário, explicamos a proposta aos condôminos.',
};

export const ADMINISTRADORAS_CONTENT = {
  title: 'É administradora de condomínios?',
  text: 'Atendemos administradoras que buscam um parceiro jurídico para sua carteira de condomínios: cobrança, pareceres e suporte em assembleias, com padrão de atendimento e relatórios unificados.',
  ctaLabel: 'Falar sobre parceria',
};

export const EBOOK_CONTENT = {
  badge: 'MATERIAL GRATUITO',
  title: 'Guia do Síndico: 5 pontos de atenção jurídica no condomínio',
  description:
    'Um material prático, escrito pelo Dr. Rudy Endo, para o síndico identificar riscos antes que virem problema.',
  listTitle: 'O que você vai encontrar:',
  items: [
    'Checklist para convocar e conduzir assembleias válidas',
    'Como estruturar a cobrança de inadimplentes',
    'Responsabilidade civil do síndico: o que evitar',
    'Obras em unidades e a NBR 16.280',
    'Quando atualizar a convenção e o regimento interno',
  ],
  formTitle: 'Receba o guia agora',
  profileOptions: ['Síndico', 'Conselheiro', 'Administradora', 'Condômino'],
  consentText:
    'Concordo em receber o material e comunicações da Rudy Endo Advocacia, conforme a',
  consentLinkLabel: 'Política de Privacidade',
  submitLabel: 'Quero receber o guia',
  microtext: 'Seus dados não são compartilhados com terceiros.',
  thankYou: {
    title: 'Pronto! Seu guia está aqui.',
    text: 'Clique abaixo para baixar. Se surgir alguma dúvida durante a leitura, fale com a gente pelo WhatsApp.',
    downloadLabel: 'Baixar o guia (PDF)',
    whatsappLabel: 'Tirar uma dúvida no WhatsApp',
  },
};

export const ABOUT_CONTENT = {
  title: 'Quem cuida do seu condomínio',
  nameLine: 'Dr. Rudy Endo — OAB/RN nº 12.466',
  paragraphs: [
    'Advogado com 10 anos de atuação em Direito Condominial, Rudy Endo assessora síndicos, conselhos e administradoras a partir de Natal/RN. É pós-graduado em Direito Imobiliário Aplicado e em Direito Notarial e Registral — formação que une a gestão do condomínio às questões de matrícula, registro e documentação dos imóveis.',
    'Seu trabalho parte de um princípio simples: o síndico precisa de respostas claras, por escrito e a tempo de decidir. Por isso, o atendimento é direto com o advogado responsável, com foco em prevenção — para que os conflitos sejam resolvidos antes de chegar ao Judiciário sempre que possível.',
  ],
  differentialsTitle: 'Diferenciais',
  differentials: [
    'Atendimento direto com o advogado responsável',
    'Respostas por escrito, em linguagem acessível ao conselho e aos condôminos',
    'Pós-graduação em Direito Imobiliário Aplicado e em Direito Notarial e Registral',
    'Foco em prevenção e organização da gestão',
    'Atendimento presencial no RN, PB, PE e CE e online em todo o Brasil',
  ],
};

export const HIGHLIGHTS_CONTENT = [
  {
    value: '10 anos',
    label: 'de atuação em Direito Condominial',
  },
  {
    value: '2 pós-graduações',
    label: 'Direito Imobiliário e Notarial e Registral',
  },
  {
    value: 'Até 24h úteis',
    label: 'para responder seu contato',
  },
  {
    value: '4 estados',
    label: 'com atendimento presencial (RN, PB, PE e CE)',
  },
];

export const FAQ_CONTENT = {
  title: 'Dúvidas frequentes',
  items: [
    {
      question: 'O síndico pode contratar um advogado para o condomínio?',
      answer:
        'Sim. O síndico representa o condomínio (art. 1.348 do Código Civil). Dependendo da convenção e do orçamento aprovado, a contratação pode exigir aval do conselho ou da assembleia — e nós preparamos a proposta nesse formato.',
    },
    {
      question: 'Quanto custa a assessoria?',
      answer:
        'Depende do porte do condomínio e do escopo (mensal ou por demanda). Após uma conversa inicial, enviamos uma proposta por escrito, sem compromisso.',
    },
    {
      question: 'Como funciona a cobrança de inadimplentes?',
      answer:
        'Começa com uma cobrança extrajudicial organizada. Se não houver acordo, as cotas condominiais podem ser cobradas por execução judicial, pois são título executivo extrajudicial (art. 784, X, do CPC).',
    },
    {
      question: 'Vocês participam das assembleias?',
      answer:
        'Sim, presencialmente ou online, conforme combinado na proposta. Também revisamos o edital de convocação e a ata.',
    },
    {
      question: 'Atendem condomínios fora de Natal?',
      answer:
        'Sim. Atendemos presencialmente no Rio Grande do Norte, Paraíba, Pernambuco e Ceará, e de forma online em todo o Brasil.',
    },
    {
      question: 'Já temos advogado. Faz sentido conversar?',
      answer:
        'Sim. Podemos atuar em uma demanda específica ou dar uma segunda opinião sobre um caso.',
    },
    {
      question: 'Em quanto tempo recebo uma resposta?',
      answer:
        'Respondemos aos contatos em até 24 horas úteis. Reuniões presenciais são feitas mediante agendamento.',
    },
  ],
};

export const CONTACT_CONTENT = {
  title: 'Fale com o advogado',
  description:
    'Conte brevemente a situação do seu condomínio. Retornamos em até 24 horas úteis.',
  unitOptions: ['até 30', '31–100', '101–300', 'mais de 300'],
  subjectOptions: [
    'Inadimplência',
    'Assembleia',
    'Convenção ou regimento',
    'Processo judicial',
    'Parecer',
    'Outro',
  ],
  submitLabel: 'Enviar e receber retorno',
  thankYou: {
    title: 'Mensagem recebida!',
    text: 'Retornaremos em até 24 horas úteis. Se for urgente, chame no WhatsApp.',
    whatsappLabel: 'Falar no WhatsApp agora',
  },
};

export const FLOATING_WHATSAPP_CONTENT = {
  label: 'Fale com o advogado',
  ariaLabel: 'Falar com o advogado no WhatsApp',
};

export const FOOTER_CONTENT = {
  societyLine:
    'Rudy Endo – Sociedade Individual de Advocacia · Registro OAB/RN nº 801 · CNPJ 28.528.995/0001-87',
  lawyerLine: 'Titular: Rudy Anderson Diniz Endo — OAB/RN nº 12.466',
  legalNote:
    '© 2026 Rudy Endo Advocacia. Conteúdo de caráter informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do CFOAB.',
};

export const PRIVACY_POLICY_CONTENT = {
  title: 'Política de Privacidade',
  text: 'A Rudy Endo – Sociedade Individual de Advocacia (Registro OAB/RN nº 801 · CNPJ 28.528.995/0001-87) coleta apenas os dados informados nos formulários deste site (nome, e-mail, WhatsApp e informações sobre o condomínio), com a finalidade de responder ao seu contato, enviar o material solicitado e, com seu consentimento, comunicações sobre Direito Condominial. Os dados não são vendidos nem compartilhados com terceiros, exceto ferramentas necessárias à operação do site (envio de formulários e análise de acessos). Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail contato@rudyendo.adv.br, nos termos da Lei nº 13.709/2018 (LGPD).',
};
