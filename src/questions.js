const questions = [
  {
    question: "No próximo entroncamento, o motorista deve ceder a passagem?",
    image: "/images/73.jpg",
    options: [
      "Sim.",
      "Não.",
    ],
    answer: "Não.",
  },

  {
    question: "Quando um peão atravessa numa passagem para peões, o motorista deve:",
    image: "/images/71.jpg",
    options: [
      "Reduzir a velocidade, mas continuar.",
      "Acelerar para passar antes do peão",
      "Parar e deixar o peão atravessar.",
    ],
    answer: "Parar e deixar o peão atravessar.",
  },

  {
    question: "Quem deve avançar primeiro num cruzamento sem sinalização:",
    image: "/images/70.jpg",
    options: [
      "O veículo mais rápido.",
      "O veículo que circula pela esquerda",
      "O veículo que circula pela direita.",
    ],
    answer: "O veículo que circula pela direita.",
  },

  {
    question: "O que deve fazer perante este sinal?",
    image: "/images/69.jpg",
    options: [
      "Ceder a passagem a todos os veículos.",
      "Avançar em primeiro lugar.",
      "Manter a velocidade.",
    ],
    answer: "Ceder a passagem a todos os veículos.",
  },


  {
    question: "Os sinais verticais de obrigação são:",
    options: [
      "Circulares com fundo azul.",
      "Retangulares com fundo verde.",
      "Triangulares com borda vermelha.",
    ],
    answer: "Circulares com fundo azul.",
  },

  {
    question: "O que deve respeitar em primeiro lugar?",
    options: [
      "Os sinais luminosos.",
      "As marcas rodoviárias.",
      "As ordens da polícia.",
    ],
    answer: "As ordens da polícia.",
  },

  {
    question: "O sinal com luz amarela está intermitente, pelo que o motorista:",
    image: "/images/66.jpg",
    options: [
      "Deve parar.",
      "Deve acelerar.",
      "Pode passar, mas com cuidado.",
    ],
    answer: "Pode passar, mas com cuidado.",
  },

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

  {
    question: "O sinal indica:",
    image: "/images/65.jpg",
    options: [
      "Passagem de peões",
      "A existência de um túnel.",
      "Entrada num parque de estacionamento.",
    ],
    answer: "A existência de um túnel.",
  },

  
  {
    question: "O sinal indica:",
    image: "/images/64.jpg",
    options: [
      "Estacionamento autorizado.",
      "Estacionamento proibido.",
      "Apenas paragem permitida.",
    ],
    answer: "Estacionamento autorizado.",
  },

  
  {
    question: "O que deve fazer perante um sinal de STOP?",
    image: "/images/61.jpg",
    options: [
      "Parar apenas se vier outro veículo.",
      "Parar obrigatoriamente antes de avançar.",
      "Reduzir a velocidade",
    ],
    answer: "Parar obrigatoriamente antes de avançar.",
  },

  
  {
    question: "Quando a intensidade do trânsito aumenta, a velocidade deve:",
    options: [
      "Diminuir.",
      "Aumentar.",
      "Ser mantida.",
    ],
    answer: "Diminuir.",
  },

  
  {
    question: "Quando a visibilidade é reduzida, para além de utilizar as luzes, deve:",
    options: [
      "Continuar com a mesma velocidade.",
      "Parar o veículo.",
      "Reduzir a velocidade e aumentar a distância para o veículo da frente.",
    ],
    answer: "Reduzir a velocidade e aumentar a distância para o veículo da frente.",
  },

  
  {
    question: "Quando o piso está escorregadio, o motorista deve:",
    options: [
      "Travar bruscamente.",
      "Reduzir a velocidade e evitar manobras bruscas.",
      "Aumentar a velocidade.",
    ],
    answer: "Reduzir a velocidade e evitar manobras bruscas.",
  },

  
  {
    question: "A velocidade deve ser ajustada:",
    options: [
      "Apenas ao limite máximo permitido.",
      "Às condições da estrada e do trânsito.",
      "À vontade do condutor.",
    ],
    answer: "Às condições da estrada e do trânsito.",
  },

  
  {
    question: "O condutor da bicicleta deve ceder a passagem?",
    image: "/images/53.jpg",
    options: [
      "Sim, porque a bicicleta se apresenta pela esquerda.",
      "Não, porque a bicicleta circula na rotunda.",
      "Apenas se houver veículos à sua frente.",
    ],
    answer: "Não, porque a bicicleta circula na rotunda.",
  },

  
  {
    question: "Em rotundas, pode circular na via mais à direita:",
    options: [
      "Apenas para sair na primeira saída.",
      "Sempre, independentemente da saída.",
    ],
    answer: "Apenas para sair na primeira saída.",
  },

  
  {
    question: "Ao circular numa rotunda, o motorista deve saber que:",
    options: [
      "Todos os veículos entram ao mesmo tempo.",
      "Os veículos em serviço de urgência devem ceder a passagem aos veículos que circulam na rotunda.",
      "Deve ceder a passagem aos veículos em serviço de urgência que entram na rotunda.",
    ],
    answer: "Deve ceder a passagem aos veículos em serviço de urgência que entram na rotunda.",
  },

  
  {
    question: "Para mudar de via de circulação dentro de uma rotunda, o motorista deve:",
    options: [
      "Mudar de via sem sinalizar.",
      "Sinalizar e garantir que a manobra é segura.",
      "Mudar rapidamente para sair mais depressa.",
    ],
    answer: "Sinalizar e garantir que a manobra é segura.",
  },

  
  {
    question: "O motorista deve sinalizar a saída de uma rotunda:",
    options: [
      "Ao aproximar-se da saída.",
      "Não é necessário sinalizar.",
      "Apenas se houver trânsito intenso.",
    ],
    answer: "Ao aproximar-se da saída.",
  },

  
  {
    question: "Ao entrar numa rotunda deve:",
    image: "/images/47.jpg",
    options: [
      "Reduzir a velocidade e avançar sem parar.",
      "Avançar em primeiro lugar, porque tem prioridade de passagem.",
      "Ceder passagem aos veículos que já circulam na rotunda.",
    ],
    answer: "Ceder passagem aos veículos que já circulam na rotunda.",
  },

  
  {
    question: "Ao ultrapassar uma bicicleta, deve manter uma distância mínima lateral?",
    options: [
      "Sim, de 1,5 metros.",
      "Sim, de 1 metro",
      "Não",
    ],
    answer: "Sim, de 1,5 metros.",
  },

  
  {
    question: "É permitido ultrapassar em curvas com visibilidade reduzida?",
    options: [
      "Sim, é permitido.",
      "É proibido ultrapassar em curvas com visibilidade reduzida.",
      "Passar rapidamente antes que outro veículo chegue.",
    ],
    answer: "É proibido ultrapassar em curvas com visibilidade reduzida.",
  },

  
  {
    question: "O que deve fazer antes de iniciar uma ultrapassagem? ",
    options: [
      "Verificar se há espaço suficiente e visibilidade.",
      "Aumentar a velocidade.",
      "Aproximar-se ao máximo do veículo da frente.",
    ],
    answer: "Verificar se há espaço suficiente e visibilidade.",
  },

  
  {
    question: "Quando é permitido ultrapassar pela direita?",
    options: [
      "Quando o veículo da frente circula lentamente.",
      "Quando o veículo da frente sinaliza que vai virar à esquerda.",
      "Em qualquer situação",
    ],
    answer: "Quando o veículo da frente sinaliza que vai virar à esquerda.",
  },

  
  {
    question: "Na comunicação com os passageiros é importante:",
    options: [
      "Fazer perguntas durante toda a conversa",
      "Ouvir para compreender.",
      "Falar rapidamente para terminar a conversa.",
    ],
    answer: "Ouvir para compreender.",
  },

  
  {
    question: "Um motorista tem um comportamento profissional quando:",
    options: [
      "É apressado e impaciente durante a condução.",
      "Ignora os pedidos dos passageiros.",
      "É educado, respeita os passageiros e atende às suas necessidades.",
    ],
    answer: "É educado, respeita os passageiros e atende às suas necessidades.",
  },

  
  {
    question: "Chamamos feedback:",
    options: [
      "À resposta ou reação da pessoa à mensagem.",
      "Ao início de uma conversa.",
      "À forma como utilizamos o tom de voz.",
    ],
    answer: "À resposta ou reação da pessoa à mensagem.",
  },

  
  {
    question: "Quando se pode dizer que a comunicação tem sucesso?",
    options: [
      "Quando se fala muito rápido.",
      "Quando a mensagem é compreendida.",
      "Quando ninguém responde.",
    ],
    answer: "Quando a mensagem é compreendida.",
  },

  
  {
    question: "Um motorista deve comportar-se de forma?",
    options: [
      "Agressiva.",
      "Passiva.",
      "Assertiva.",
    ],
    answer: "Assertiva.",
  },

  
  {
    question: "Uma das funções importantes da comunicação é transmitir conhecimento.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },

  
  {
    question: "O que é a comunicação verbal?",
    options: [
      "Usar gestos e sinais para comunicar.",
      "Falar ou escrever para transmitir uma mensagem.",
      "Ficar em silêncio.",
    ],
    answer: "Falar ou escrever para transmitir uma mensagem.",
  },

  
  {
    question: "O que é o 'ruído' na comunicação?",
    options: [
      "Uma conversa entre duas pessoas.",
      "Algo que dificulta a compreensão da mensagem.",
      "O som do rádio.",
    ],
    answer: "Algo que dificulta a compreensão da mensagem.",
  },

  
  {
    question: "Como agir com um passageiro impaciente ou agressivo?",
    options: [
      "Responder com a mesma agressividade.",
      "Manter a calma, ser cordial e evitar o conflito.",
      "Ignorar o passageiro e continuar a viagem.",
    ],
    answer: "Manter a calma, ser cordial e evitar o conflito.",
  },

   {
    question: "O processo de comunicação requer, no mínimo:",
    options: [
      "Um emissor.",
      "Um recetor.",
      "Um emissor e um recetor.",
    ],
    answer: "Um emissor e um recetor.",
  },

  
  {
    question: "O primeiro contacto com o motorista ajuda a criar uma boa impressão sobre o serviço.",
    options: [
      "Verdadeiro",
      "Falso",
    ],
    answer: "Verdadeiro",
  },

  
  {
    question: "Qual é o tempo máximo permitido para veículos TVDE operarem antes de passar por uma inspeção técnica?",
    options: [
      "1 ano após a matrícula e, depois, anualmente",
      "2 anos após a matrícula e, depois, bienalmente",
      "Apenas no prazo estipulado pelo IMT",
    ],
    answer: "1 ano após a matrícula e, depois, anualmente",
  },

  
  {
    question: "Quem é responsável pela fiscalização do cumprimento das normas no serviço TVDE?",
    options: [
      "GNR e IMT",
      "PSP, GNR e IMT",
      "GNR e PSP",
    ],
    answer: "PSP, GNR e IMT",
  },

  
  {
    question: "Para se tornar motorista TVDE, tem que ter carta de condução da categoria B há mais de:",
    options: [
      "1 ano",
      "2 anos",
      "3 anos",
    ],
    answer: "3 anos",
  },

  
  {
    question: "Qual é a idade máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      "5 anos",
      "7 anos",
      "10 anos",
    ],
    answer: "7 anos",
  },

  
  {
    question: "Conduzir com chuva tem como resultado:",
    options: [
      "O aumento de aderência ao piso.",
      "A diminuição da distância de paragem.",
      "A redução da visibilidade.",
    ],
    answer: "A redução da visibilidade.",
  },

   {
    question: "O processo de comunicação prevê a existência mínima de:",
    options: [
      "Um emissor.",
      "Um recetor.",
      "Um emissor e um recetor.",
    ],
    answer: "Um emissor e um recetor.",
  },

  // extra add

  {
    question: "O condutor da bicicleta deve ceder a passagem?",
    image: "/images/53.jpg",
    options: [
      "Sim, porque a bicicleta se apresenta pela esquerda.",
      "Não, porque a bicicleta circula na rotunda.",
      "Apenas se houver veículos à sua frente.",
    ],
    answer: "Não, porque a bicicleta circula na rotunda.",
  },

  {
    question: "Neste local, posso transitar a 50 Km/h?",
    image: "/images/260.jpg",
    options: [
      "Não, porque a sinalização vertical o proíbe.",
      "Sim, porque dentro das localidades esta é a velocidade mínima obrigatória.",
      "Sim, porque o pavimento está em boas condições.",
    ],
    answer: "Não, porque a sinalização vertical o proíbe.",
  },

  {
    question: "Os sinais de proibição indicam:",
    options: [
      "Informações úteis.",
      "Obrigações a cumprir.",
      "Restrições ou limites.",
    ],
    answer: "Restrições ou limites.",
  },

  {
    question: "O sinal com luz amarela está intermitente, pelo que o motorista:",
    image: "/images/66.jpg",
    options: [
      "Deve parar.",
      "Deve acelerar.",
      "Pode passar, mas com cuidado.",
    ],
    answer: "Pode passar, mas com cuidado.",
  },

  
  {
    question: "Numa ultrapassagem, o motorista deve voltar à sua via de trânsito:",
    options: [
      "Após aumentar a velocidade.",
      "Logo após concluir a manobra.",
      "Assim que o veículo ultrapassado fique visível no retrovisor.",
    ],
    answer: "Assim que o veículo ultrapassado fique visível no retrovisor.",
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
    question: "Qual é a lotação máxima permitida para veículos utilizados no serviço TVDE?",
    options: [
      "7 lugares, incluindo o motorista",
      "9 lugares, incluindo o motorista",
      "12 lugares, incluindo o motorista",
    ],
    answer: "9 lugares, incluindo o motorista",
  },

];

export default questions;