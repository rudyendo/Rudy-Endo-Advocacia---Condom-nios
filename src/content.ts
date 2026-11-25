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
  eyebrow: 'DIREITO CONDOMINIAL · NATAL/RN',
  titleMain: 'O síndico responde pelas decisões que toma.',
  titleHighlight: 'Não decida sozinho.',
  subtitle:
    'Inadimplência pressionando o caixa, assembleia que pode ser anulada, condômino ameaçando processar. Assessoria jurídica para síndicos de Natal e do Nordeste, com orientação por escrito em até 24 horas úteis.',
  primaryCta: 'Falar com o advogado agora',
  secondaryCta: 'Baixar o guia gratuito',
  supportItems: [
    'Atendimento direto com o advogado',
    'Resposta em até 24h úteis',
    'Presencial no RN, PB, PE e CE e online em todo o Brasil',
  ],
};

export const PAIN_POINTS_CONTENT = {
  eyebrow: 'RISCOS DO DIA A DIA',
  title: 'Quanto custa adiar uma decisão jurídica no condomínio?',
  subtitle:
    'Os problemas abaixo parecem pequenos — até chegarem à assembleia, ao conselho ou ao Judiciário.',
  items: [
    {
      number: '01',
      title: 'Cada mês de inadimplência sai do bolso de quem paga em dia.',
      consequence:
        'Sem cobrança estruturada, o rombo vira cota extra, obra adiada e desgaste do síndico na assembleia.',
    },
    {
      number: '02',
      title: 'Uma falha no edital pode anular tudo o que foi aprovado.',
      consequence:
        'Quórum errado, convocação fora do prazo ou ata mal redigida abrem espaço para ação judicial — e para refazer a assembleia.',
    },
    {
      number: '03',
      title: 'Regras antigas não resolvem problemas novos.',
      consequence:
        'Aluguel por temporada, animais, carregador de carro elétrico, obras: sem previsão clara na convenção, cada multa aplicada pode ser contestada.',
    },
    {
      number: '04',
      title: 'Ameaça de processo não se responde no grupo do WhatsApp.',
      consequence:
        'O que o síndico escreve hoje pode virar prova amanhã. Responder com orientação jurídica evita que um conflito vire ação.',
    },
    {
      number: '05',
      title: 'O síndico pode ser responsabilizado pessoalmente.',
      consequence:
        'Atos de gestão praticados com culpa, omissão ou excesso de poderes podem gerar responsabilização pessoal do síndico — não apenas do condomínio.',
    },
    {
      number: '06',
      title: 'Contrato mal feito vira dívida do condomínio.',
      consequence:
        'Terceirizada que não paga os funcionários, obra sem controle da NBR 16.280, administradora sem cláusulas claras: o passivo costuma cair no condomínio.',
    },
  ],
  closingTitle: 'Reconheceu alguma dessas situações?',
  closingText:
    'Uma conversa de 15 minutos com o advogado pode evitar meses de problema — e proteger você na prestação de contas.',
  ctaLabel: 'Quero orientação para o meu condomínio',
};

export const SERVICES_CONTENT = {
  eyebrow: 'COMO PODEMOS AJUDAR',
  title: 'Você cuida da gestão. A parte jurídica fica com a gente.',
  ctaLabel: 'Falar com o advogado agora',
  items: [
    {
      id: 'cobranca',
      title: 'Cobrança de inadimplentes',
      description:
        'Você deixa de ser o cobrador. Estruturamos a cobrança extrajudicial e, se não houver acordo, executamos as cotas na Justiça — com relatório periódico para prestar contas ao conselho.',
    },
    {
      id: 'assembleias',
      title: 'Assembleias seguras, do edital à ata',
      description:
        'Revisamos a convocação, orientamos quórum e votação, participamos quando necessário e redigimos a ata. Menos brecha para contestação.',
    },
    {
      id: 'convencao',
      title: 'Convenção e regimento atualizados',
      description:
        'Regras claras para multar, autorizar e proibir — com base legal e aprovação conduzida em assembleia, até o registro em cartório.',
    },
    {
      id: 'pareceres',
      title: 'Parecer por escrito para decisões difíceis',
      description:
        'Quando o conselho cobra e o condômino contesta, você decide com um documento jurídico na mão.',
    },
    {
      id: 'defesa',
      title: 'Defesa do condomínio em processos',
      description:
        'Ações cíveis e trabalhistas com acompanhamento próximo: você é informado de cada passo, sem juridiquês.',
    },
    {
      id: 'contratos',
      title: 'Contratos, obras e registros',
      description:
        'Terceirizadas, administradora, reformas (NBR 16.280), matrícula e instituição do condomínio: prevenção de passivos antes que eles apareçam.',
    },
  ],
};

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: 'SEM COMPLICAÇÃO',
  title: 'Simples para o síndico. Claro para o conselho.',
  steps: [
    {
      number: '01',
      title: 'Você conta o que está acontecendo',
      description:
        'Pelo WhatsApp ou formulário. Em até 24h úteis, o próprio advogado retorna.',
    },
    {
      number: '02',
      title: 'Recebe uma proposta por escrito',
      description:
        'Escopo e honorários definidos — mensal ou por demanda — prontos para apresentar ao conselho ou à assembleia.',
    },
    {
      number: '03',
      title: 'Conta com acompanhamento contínuo',
      description:
        'Canal direto, prazos combinados e relatórios que facilitam sua prestação de contas.',
    },
  ],
  note: 'Precisa da aprovação da assembleia para contratar? Preparamos a documentação e, se necessário, apresentamos a proposta aos condôminos.',
};

export const ADMINISTRADORAS_CONTENT = {
  eyebrow: 'PARCERIAS',
  title: 'Administradora de condomínios?',
  text: 'Ofereça aos seus condomínios um suporte jurídico padronizado: cobrança, pareceres e assembleias, com um único interlocutor e relatórios unificados para toda a carteira.',
  ctaLabel: 'Conversar sobre parceria',
};

export const EBOOK_CONTENT = {
  eyebrow: 'MATERIAL GRATUITO',
  title: 'Guia do Síndico: 5 erros jurídicos que mais geram problemas no condomínio',
  description:
    'Um guia prático, escrito pelo Dr. Rudy Endo, para você identificar os riscos antes que eles cheguem à assembleia.',
  listTitle: 'Você vai descobrir:',
  items: [
    'Os erros de convocação que podem anular uma assembleia',
    'Como cobrar inadimplentes sem desgaste pessoal',
    'Quando o síndico responde com o próprio patrimônio',
    'O que a NBR 16.280 exige do síndico em obras nas unidades',
    'Os sinais de que a convenção precisa ser atualizada',
  ],
  formTitle: 'Receba o guia gratuito',
  profileOptions: ['Síndico', 'Conselheiro', 'Administradora', 'Condômino'],
  consentText:
    'Concordo em receber o material e comunicações da Rudy Endo Advocacia, conforme a',
  consentLinkLabel: 'Política de Privacidade',
  submitLabel: 'Quero o guia gratuito',
  microtext:
    'Enviamos também no seu WhatsApp. Seus dados não são compartilhados com terceiros.',
  thankYou: {
    title: 'Pronto! Seu guia está aqui.',
    text: 'Clique abaixo para baixar. Se surgir alguma dúvida durante a leitura, fale com a gente pelo WhatsApp.',
    downloadLabel: 'Baixar o guia (PDF)',
    whatsappLabel: 'Tirar uma dúvida no WhatsApp',
  },
};

export const ABOUT_CONTENT = {
  eyebrow: 'QUEM VAI ESTAR AO SEU LADO',
  title: 'Dr. Rudy Endo',
  nameLine: 'Advogado · OAB/RN nº 12.466',
  paragraphs: [
    'Há 10 anos, Rudy Endo atua ao lado de síndicos, conselhos e administradoras em Direito Condominial. Pós-graduado em Direito Imobiliário Aplicado e em Direito Notarial e Registral, une a rotina da gestão condominial às questões de matrícula, registro e documentação dos imóveis.',
    'Seu método é direto: o síndico precisa de respostas claras, por escrito e a tempo de decidir. Por isso, quem atende é o próprio advogado — e o foco é resolver antes que o problema chegue ao Judiciário.',
  ],
  differentialsEyebrow: 'DIFERENCIAIS',
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
    label: 'em Direito Condominial',
  },
  {
    value: '2',
    label: 'pós-graduações na área imobiliária e registral',
  },
  {
    value: '24h úteis',
    label: 'prazo máximo de retorno',
  },
  {
    value: '4 estados',
    label: 'atendimento presencial',
  },
];

export const FAQ_CONTENT = {
  eyebrow: 'PERGUNTAS FREQUENTES',
  title: 'Dúvidas frequentes',
  items: [
    {
      question: 'O síndico pode ser responsabilizado pessoalmente?',
      answer:
        'Pode. O síndico responde pelos atos de gestão (art. 1.348 do Código Civil) e pode ser responsabilizado por danos causados por culpa, omissão ou excesso de poderes. Por isso, decisões sensíveis devem ter fundamento jurídico por escrito.',
    },
    {
      question:
        'O condomínio responde por dívidas trabalhistas da empresa terceirizada?',
      answer:
        'Pode responder de forma subsidiária, especialmente se não fiscalizar o cumprimento do contrato (Súmula 331 do TST). A análise prévia dos contratos reduz esse risco.',
    },
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
  eyebrow: 'FALE COM O ADVOGADO',
  title: 'Conte o que está acontecendo no seu condomínio',
  description:
    'Você recebe retorno do próprio advogado em até 24 horas úteis. Quanto antes a questão for analisada, mais opções você tem.',
  unitOptions: ['até 30', '31–100', '101–300', 'mais de 300'],
  subjectOptions: [
    'Inadimplência',
    'Assembleia',
    'Convenção ou regimento',
    'Processo judicial',
    'Parecer',
    'Outro',
  ],
  submitLabel: 'Quero receber orientação',
  thankYou: {
    title: 'Mensagem recebida!',
    text: 'Retornaremos em até 24 horas úteis. Se for urgente, chame no WhatsApp.',
    whatsappLabel: 'Falar no WhatsApp agora',
  },
};

export const FLOATING_WHATSAPP_CONTENT = {
  label: 'Dúvida urgente? Fale com o advogado',
  ariaLabel: 'Dúvida urgente? Fale com o advogado no WhatsApp',
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
