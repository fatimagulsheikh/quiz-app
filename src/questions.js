const questions = [
  {
    question: "Uma condução defensiva é:",
    options: [
      "Estar atento aos outros condutores, antecipando situações de risco.",
      "Conduzir sempre a alta velocidade.",
    ],
    answer: "Estar atento aos outros condutores, antecipando situações de risco.",
  },

  {
    question: "Ao conduzir à noite, o motorista deve:",
    options: [
      "Reduzir a velocidade apenas nas curvas.",
      "Manter os máximos ligados em todas as situações.",
      "Ver e ser visto, usando corretamente as luzes.",
    ],
    answer: "Ver e ser visto, usando corretamente as luzes.",
  },

  {
    question: "O que deve fazer em condições de nevoeiro?",
    options: [
      "Usar as luzes de nevoeiro e ajustar a velocidade.",
      "Aumentar a velocidade para sair da área com nevoeiro.",
      "Manter as luzes desligadas para economizar energia.",
    ],
    answer: "Usar as luzes de nevoeiro e ajustar a velocidade.",
  },

  {
    question: "O que significa ´manter a distância de segurança´?",
    options: [
      "Garantir a distância mínima entre veículos, de modo a evitar acidentes.",
      "Estar muito próximo do veículo da frente.",
    ],
    answer: "Garantir a distância mínima entre veículos, de modo a evitar acidentes.",
  },


  {
    question: "O que significa ´eco condução´?",
    options: [
      "Utilizar apenas veículos elétricos.",
      "Conduzir de forma eficiente, reduzindo o consumo de combustível e poluição.",
      "Manter a velocidade máxima para chegar rapidamente ao destino.",
    ],
    answer: "Conduzir de forma eficiente, reduzindo o consumo de combustível e poluição.",
  },

  {
    question: "Como deve proceder ao conduzir com neve ou gelo?",
    options: [
      "Aumentar a velocidade para evitar derrapagens.",
      "Travar bruscamente.",
      "Colocar correntes nos pneus e circular devagar.",
    ],
    answer: "Colocar correntes nos pneus e circular devagar.",
  },

  {
    question: "A correta pressão dos pneus contribui para uma condução mais económica.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },

  {
    question: "A condução sob a influência do álcool provoca no condutor a diminuição dos reflexos.",
    options: [
      "Falso",
      "Verdadeiro",
    ],
    answer: "Verdadeiro",
  },

  {
    question: "O que deve fazer para diminuir as emissões de poluentes?",
    options: [
      "Conduzir com o motor a altas rotações.",
      "Fazer a manutenção regular do veículo.",
      "Andar sempre com o ar condicionado ligado.",
    ],
    answer: "Fazer a manutenção regular do veículo.",
  },


  {
    question: "Um motorista de TVDE pode conduzir com uma taxa de alcoolemia de 0,2 g/l.",
    options: [
      "Sim, se estiver em boas condições físicas.",
      "Não.",
      "Sim, porque é um valor permitido.",
    ],
    answer: "Não.",
  },


  {
    question: "Conduzir com chuva tem como resultado:",
    options: [
      "Maior aderência dos pneus ao piso.",
      "A redução da visibilidade.",
    ],
    answer: "A redução da visibilidade.",
  },


  {
    question: "O que deve fazer ao conduzir em zonas de vento forte?",
    options: [
      "Virar o volante no sentido contrário ao do vento.",
      "Aumentar a velocidade para atravessar a zona rapidamente.",
      "Reduzir a velocidade e manter firme o controlo do volante.",
    ],
    answer: "Reduzir a velocidade e manter firme o controlo do volante.",
  },


  {
    question: "A distância de travagem varia com:",
    options: [
      "As condições atmosféricas.",
      "A largura da via.",
      "A sinalização vertical existente no local.",
    ],
    answer: "As condições atmosféricas.",
  },


  {
    question: "Qual é o prazo de validade do certificado de motorista TVDE?",
    options: [
      "3 anos",
      "5 anos",
      "10 anos",
    ],
    answer: "5 anos",
  },


  {
    question: "Qual é a lotação máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      "7 lugares, incluindo o motorista",
      "9 lugares, incluindo o motorista",
      "12 lugares, incluindo o motorista",
    ],
    answer: "9 lugares, incluindo o motorista",
  },


  {
    question: "O que é obrigatório para o transporte de passageiros com mobilidade reduzida?",
    options: [
      "Um veículo com capacidade para transportar cadeiras de rodas",
      "Um veículo elétrico ou híbrido",
      "Um motorista com formação adicional",
    ],
    answer: "Um veículo com capacidade para transportar cadeiras de rodas",
  },


  {
    question: "O tempo máximo permitido para condução de motoristas TVDE é de 10 horas num período de 24 horas.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },


  {
    question: "Os serviços de TVDE podem ser pagos em dinheiro ou cartão de crédito.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Falso",
  },


  {
    question: "Qual é a idade máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      "5 anos",
      "10 anos.",
      "7 anos.",
    ],
    answer: "7 anos.",
  },

  
  {
    question: "Para se tornar motorista TVDE, tem de ter carta de condução da categoria B há mais de:",
    options: [
      "1 ano.",
      "2 anos.",
      "3 anos.",
    ],
    answer: "3 anos.",
  },


  {
    question: "Os motoristas TVDE podem recolher passageiros diretamente na via pública, sem recurso a plataforma eletrónica?",
    options: [
      "Sim.",
      "Não.",
    ],
    answer: "Não.",
  },


  {
    question: "Quem é responsável pela fiscalização do cumprimento das normas no serviço TVDE?",
    options: [
      "GNR e IMT",
      "GNR e PSP",
      "PSP, GNR e IMT",
    ],
    answer: "PSP, GNR e IMT",
  },


  {
    question: "Os motoristas TVDE devem possuir um curso de formação rodoviária inicial de 50 horas para exercerem a atividade.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },


  {
    question: "O serviço de TVDE só pode ser contratado através de plataforma eletrónica.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },


  {
    question: "Veículos usados no serviço TVDE podem ter matrícula estrangeira, desde que sejam autorizados pelo IMT.",
    options: [
      "Sim.",
      "Não",
    ],
    answer: "Não",
  },


  {
    question: "Um veículo usado no serviço TVDE deve passar por uma inspeção técnica:",
    options: [
      "1 ano após a matrícula e, depois, todos os anos.",
      "2 anos após a matrícula e, depois, de dois em dois anos.",
      "No prazo estipulado pelo IMT.",
    ],
    answer: "1 ano após a matrícula e, depois, todos os anos.",
  },


  {
    question: "O tempo de espera para passageiros com mobilidade reduzida deve ser:",
    options: [
      "Superior a 30 minutos",
      "Superior a 15 minutos.",
      "Inferior a 15 minutos.",
    ],
    answer: "Inferior a 15 minutos.",
  },


  {
    question: "Os veículos TVDE podem circular nas vias reservadas a transportes públicos:",
    options: [
      "Sim.",
      "Não.",
    ],
    answer: "Não.",
  },


  {
    question: "A que distância deve colocar o triângulo de pré-sinalização de perigo em caso de avaria?",
    options: [
      "Pelo menos 10 metros.",
      "Pelo menos 50 metros.",
      "Pelo menos 30 metros.",
    ],
    answer: "Pelo menos 30 metros.",
  },


  {
    question: "O que deve fazer ao encontrar um acidente com vítimas?",
    options: [
      "Tentar resolver a situação sozinho.",
      "Garantir a segurança e ligar para o 112.",
      "Seguir a viagem, sem parar.",
    ],
    answer: "Garantir a segurança e ligar para o 112.",
  },


  {
    question: "Em que situação deve ligar para o número de emergência 112?",
    options: [
      "Para pedir informações de trânsito.",
      "Para chamar um reboque.",
      "Sempre que houver necessidade de assistência urgente.",
    ],
    answer: "Sempre que houver necessidade de assistência urgente.",
  },


  {
    question: "O que deve informar ao ligar para o 112, em caso de acidente?",
    options: [
      "Apenas o tipo de acidente.",
      "Localização exata, tipo de acidente e número de vítimas.",
      "A cor dos veículos envolvidos no acidente.",
    ],
    answer: "Localização exata, tipo de acidente e número de vítimas.",
  },


  {
    question: "O que deve fazer se houver um incêndio no motor do veículo?",
    options: [
      "Abrir o capot rapidamente e apagar as chamas com água.",
      "Usar o extintor e apontar à base das chamas.",
      "Esperar que o fogo se apague.",
    ],
    answer: "Usar o extintor e apontar à base das chamas.",
  },


  {
    question: "O que deve fazer após utilizar um extintor?",
    options: [
      "Recarregá-lo ou substituí-lo por um novo.",
      "Guardá-lo no veículo, para a próxima utilização.",
    ],
    answer: "Recarregá-lo ou substituí-lo por um novo.",
  },


  {
    question: "Quando deve usar o colete retrorrefletor?",
    options: [
      "Sempre que sair do veículo para sinalizar ou reparar.",
      "Somente em locais com pouca visibilidade.",
      "Apenas em estradas movimentadas.",
    ],
    answer: "Sempre que sair do veículo para sinalizar ou reparar.",
  },


  {
    question: "No primeiro contacto com uma vítima de um acidente, o que deve fazer primeiro?",
    options: [
      "Verificar se respira e se tem pulsação.",
      "Retirar a vítima do veículo imediatamente.",
      "Procurar por ferimentos visíveis.",
    ],
    answer: "Verificar se respira e se tem pulsação.",
  },


  {
    question: "Em caso de acidente com o seu veículo, deve:",
    options: [
      "Sair rapidamente do veículo sem avisar outros condutores.",
      "Garantir a segurança no local, sinalizar e ligar para o 112.",
      "Resolver a situação sozinho, sem pedir ajuda.",
    ],
    answer: "Garantir a segurança no local, sinalizar e ligar para o 112.",
  },


  {
    question: "Em caso de queimadura deve:",
    options: [
      "Lavar a zona afetada com água quente.",
      "Furar as bolhas existentes.",
      "Evitar tocar diretamente na área queimada.",
    ],
    answer: "Evitar tocar diretamente na área queimada.",
  },


  {
    question: "Para sinalizar corretamente o local de um acidente, o motorista deve:",
    options: [
      "Ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo de pré – sinalização de perigo.",
      "Abandonar o local do acidente.",
    ],
    answer: "Ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo de pré – sinalização de perigo.",
  },


  {
    question: "Os princípios gerais do socorrismo são:",
    options: [
      "Prever, ajudar e socorrer.",
      "Parar, socorrer e alertar.",
      "Prevenir, alertar e socorrer .",
    ],
    answer: "Prevenir, alertar e socorrer .",
  },

];

export default questions;