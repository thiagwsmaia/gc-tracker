const STORAGE_KEY = "gc-classic-tracker-v1";

const characterImages = Object.fromEntries([
  "Elesis", "Lire", "Arme", "Lass", "Ryan", "Ronan", "Amy", "Jin", "Sieghart", "Mari", "Dio", "Zero",
  "Rey", "Lupus", "Lin", "Azin", "Holy", "Edel", "Veigas", "Decane", "Ai", "Kallia", "Uno", "Iris", "Ereb"
].map(name => [name, `https://gcfarm.com.br/img/char/${name}_1.webp`]));

const gcFarmCatalog = {
  source: "https://gcfarm.com.br/personagens.php",
  pages: ["Dashboard", "Equipamentos", "Inventário", "Progresso de Missões", "Ranking", "Coleção Visual"],
  publicPages: [
    "FAQ: perguntas sobre inventário, missões, ranking e gratuidade",
    "Guia GCC: contexto do Grand Chase Classic e proposta do GCFarm",
    "Apoiadores oficiais", "Premium", "Termos de uso", "Política de cookies", "Política de privacidade"
  ],
  dashboardMetrics: ["Top 3 personagens por ataque total", "Chase level", "Cartas level", "VP", "Pontos de presença"],
  rankingColumns: ["Posição", "Personagem", "Screenshot", "Usuário", "Level", "Ataque total", "Ataque total sem MP"],
  equipmentTabs: ["Atributos", "Cartas", "Fortificação"],
  equipmentSlots: [
    "Elmo", "Cota", "Calça", "Luva", "Sapato", "Capa", "Arma principal", "Diadema", "Máscara",
    "Asas", "Facas", "Escudos", "Arma secundária", "Anel", "Colar", "Tornozeleira",
    "Brinco ou piercing 1", "Brinco ou piercing 2"
  ],
  missions: [
    ["Fornalha Infernal", "diária", "estrelas"], ["Altar da Ruína", "diária", "estrelas"],
    ["Torre das Ilusões", "diária", "andares/estrelas"], ["Covil de Berkas", "diária", "estrela"],
    ["Torre da Extinção", "diária", "estrelas"], ["Terra do Julgamento", "fim de semana", "janela sexta-segunda"],
    ["Vazio 1 (Invasão)", "rotação", "fragmentos"], ["Vazio 2 (Contaminação)", "rotação", "fragmentos"],
    ["Vazio 3 (Pesadelo)", "rotação", "fragmentos"], ["Vazio 4 (Apocalipse)", "rotação", "fragmentos"],
    ["Cerco de Teroka", "diária", "estrela"], ["Templo do Tempo", "diária", "estrela"],
    ["A Grande Explosão de Calnat", "diária", "estrela"], ["Caminho Abissal", "reset", "despertar"],
    ["Solene", "especial", "tornozeleiras"]
  ],
  sharedItems: [
    "[Evento] Pergaminho de Propriedade Única", "[Evento] Pergaminho de Propriedades de GP",
    "Chama das Bestas Míticas", "Escamas do Dragão de Ferro", "Estilhaço da Escuridão",
    "Fragmento da Fênix Fantasma", "Fragmento de Adrite", "Fragmento de Visual Chase",
    "Fragmento do Brinco dos Guardiões Dimensionais", "Fragmento do Caos Disperso",
    "Fragmento do Piercing dos Guardiões Dimensionais", "Fragmento do Vazio Apocalipse",
    "Fragmento do Vazio Unificado", "Massa de Desejos Concentrados", "Medalha do Julgamento",
    "Moeda do Abismo", "Moeda Épica", "Núcleo de Sentilena Antigo", "Núcleo Demoníaco Unificado",
    "Núcleo Dimensional", "Parte de Fragmento do Vazio Apocalipse", "Parte de Fragmento do Vazio Unificado",
    "Pedaço de Moeda Épica", "Pedra de Despertar da Liberação", "Pedra de Despertar da Transformação",
    "Pedra de fortificação", "Pedra Sombria", "Pergaminho de Abertura SR",
    "Pergaminho de Alteração de Atributo Único", "Pergaminho de Propriedades de GP",
    "Pergaminho de Remoção Especial", "Pergaminho_de_Propriedade Única", "Pulseira de Folhas Quebrada",
    "Removedor", "Símbolo da Terra do Julgamento", "Símbolo do Passe Premium",
    "Ticket de Entrada de Missão de Outro Mundo", "Ticket de Entrada de Missão Raid",
    "Ticket de Missão Rápida", "Ticket do Desafio Épico", "Ticket do Festival Missões Evento",
    "Ticket Heróico", "Tornozeleira de Espinhos da Escuridão (Apocalipse)",
    "Tornozeleira de Espinhos da Escuridão (Consolação)", "Tornozeleira de Espinhos da Escuridão (Escuridão)",
    "Tornozeleira de Espinhos da Escuridão (Eternidade)", "Tornozeleira de Espinhos da Escuridão (Harmonia)",
    "Verdadeiro Fragmento do Vazio Apocalipse", "Verdadeiro Fragmento do Vazio Unificado"
  ],
  visualAttributes: [
    "ACERTO CRÍTICO +0,30%", "ATAQUE +50", "ATAQUE ESPECIAL +40", "DANO CRÍTICO +0,50%",
    "DEFESA +30", "EXP +0,50%", "GP +0,50%", "HP RECUPERADO +2,00%",
    "LANÇA INFERNAL, DANO +50", "MP RECUPERADO +0,50%",
    "RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "VITALIDADE +30"
  ],
  visualClasses: {
    ELESIS: ["ESPADACHIM=DANO CRÍTICO +0,50%", "CAVALEIRA=DEFESA +30", "GLADIADORA=GP +0,50%", "JUSTICEIRA=ATAQUE ESPECIAL +40", "DESPERTAR=ATAQUE +50"],
    LIRE: ["ARQUEIRA=EXP +0,50%", "CAÇADORA=DEFESA +30", "GUARDIÃ=VITALIDADE +30", "NOVA=LANÇA INFERNAL, DANO +50", "DESPERTAR=DANO CRÍTICO +0,50%"],
    ARME: ["MAGA=LANÇA INFERNAL, DANO +50", "ALQUIMISTA=DEFESA +30", "FEITICEIRA=VITALIDADE +30", "ARQUIMAGA=RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    LASS: ["NINJA=HP RECUPERADO +2,00%", "MERCENÁRIO=DEFESA +30", "VINGADOR=VITALIDADE +30", "RETALHADOR=LANÇA INFERNAL, DANO +50", "DESPERTAR=ATAQUE +50"],
    RYAN: ["DRUÍDA=ATAQUE +50", "SENTILELA=MP RECUPERADO +0,50%", "XAMÃ=ATAQUE ESPECIAL +40", "EXECUTOR=ACERTO CRÍTICO +0,30%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    RONAN: ["ARCANO=LANÇA INFERNAL, DANO +50", "DRACONIANO=HP RECUPERADO +2,00%", "DEFENSOR=VITALIDADE +30", "INQUISIDOR=GP +0,50%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    AMY: ["DANÇARINA=ATAQUE +50", "MUSA=EXP +0,50%", "DIVA=MP RECUPERADO +0,50%", "SUPERSTAR=DANO CRÍTICO +0,50%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    JIN: ["LUTADOR=ATAQUE +50", "MESTRE=ATAQUE ESPECIAL +40", "MONGE=VITALIDADE +30", "ILUMINADO=HP RECUPERADO +2,00%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    SIEGHART: ["GLADIADOR=EXP +0,50%", "COMANDANTE=DEFESA +30", "GENERAL=GP +0,50%", "AVATAR=RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "DESPERTAR=ATAQUE +50"],
    MARI: ["TECNOMAGA=LANÇA INFERNAL, DANO +50", "DUELISTA=RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "POLARIS=VITALIDADE +30", "LA GEAS=GP +0,50%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    DIO: ["PROFANO=HP RECUPERADO +2,00%", "DRAKAR=GP +0,50%", "LEVIATÃ=VITALIDADE +30", "ASMODEUS=MP RECUPERADO +0,50%", "DESPERTAR=ATAQUE +50"],
    ZERO: ["ANDARILHO=ATAQUE +50", "PEREGRINO=ACERTO CRÍTICO +0,30%", "ERRANTE=VITALIDADE +30", "INSURGENTE=RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    REY: ["INVOCADORA=ATAQUE +50", "ENCANTRIX=MP RECUPERADO +0,50%", "PRINCESA DE ELYOS=DEFESA +30", "IMPERATRIZ DAS TREVAS=EXP +0,50%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    LUPUS: ["CAÇADOR DE RECOMPENSAS=ATAQUE ESPECIAL +40", "DESPERTAR=ATAQUE +50"],
    LIN: ["SACERDOTISA=ATAQUE +50", "DESPERTADA=DEFESA +30", "CAÓTICA=DANO CRÍTICO +0,50%", "ESCOLHIDA=EXP +0,50%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    AZIN: ["GUERREIRO=DANO CRÍTICO +0,50%", "RYUJIN=ACERTO CRÍTICO +0,30%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    HOLY: ["PALADINA=ACERTO CRÍTICO +0,30%", "TEMPLÁRIA=ATAQUE +50", "DESPERTAR=ATAQUE ESPECIAL +40"],
    EDEL: ["CAPITÃ=MP RECUPERADO +0,50%", "MAJOR=RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS +0,80%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    VEIGAS: ["DESTRUIDOR=HP RECUPERADO +2,00%", "DESPERTAR=DANO CRÍTICO +0,50%"],
    DECANE: ["BRUXA DO CAOS=MP RECUPERADO +0,50%", "BRUXA LUNÁTICA=ACERTO CRÍTICO +0,30%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    AI: ["OPERADORA=ATAQUE +50", "SUPERVISORA=EXP +0,50%", "DESPERTAR=ATAQUE ESPECIAL +40"],
    KALLIA: ["INVESTIGADORA=DANO CRÍTICO +0,50%", "SOLUCIONADORA=ATAQUE ESPECIAL +40", "DESPERTAR=ATAQUE +50"],
    UNO: ["SANGUINÁRIO=ATAQUE +50", "SOMBRA SANGRENTA=VITALIDADE +30", "DESPERTAR=ATAQUE ESPECIAL +40"],
    IRIS: ["PINTORA=ATAQUE ESPECIAL +40", "IMAGINISTA=ATAQUE ESPECIAL +40", "DESPERTAR=ATAQUE +50"]
  }
};

const visualSetSlots = ["Elmo", "Cota", "Calça", "Luvas", "Sapatos", "Capa", "Arma", "Diadema", "Mascara", "Asas", "Facas", "Escudo", "Pet"];
const visualSetOptions = ["Nenhum", "SEASON 4", "SEASON 5", "SEASON 6", "SEASON 7", "SEASON 8", "SEASON 9", "SEASON 10"];
const visualAccuracyPerPiece = 3;
const visualSetRules = {
  Elmo: { ideal: ["SEASON 10"], alt: [], hint: "acerto" },
  Cota: { ideal: ["SEASON 9", "SEASON 4"], alt: [], hint: "acerto" },
  "Calça": { ideal: ["SEASON 8"], alt: ["SEASON 5"], hint: "all stat + mp rec / dano critico" },
  Luvas: { ideal: ["SEASON 10", "SEASON 8"], alt: [], hint: "acerto" },
  Sapatos: { ideal: ["SEASON 7", "SEASON 9"], alt: ["SEASON 8", "SEASON 5", "SEASON 6", "SEASON 10"], hint: "mp rec + all stat / dano critico" },
  Capa: { ideal: ["SEASON 7", "SEASON 6", "SEASON 8"], alt: [], hint: "atk + crit chance" },
  Arma: { ideal: ["SEASON 7"], alt: [], hint: "all stat + crit chance" },
  Diadema: { ideal: ["SEASON 10"], alt: [], hint: "acerto" },
  Mascara: { ideal: ["SEASON 9", "SEASON 8"], alt: [], hint: "acerto" },
  Asas: { ideal: ["SEASON 7", "SEASON 9"], alt: ["SEASON 10", "SEASON 6"], hint: "mp rec + crit dmg / mp rec" },
  Facas: { ideal: ["SEASON 6"], alt: [], hint: "crit chance + special atk" },
  Escudo: { ideal: ["SEASON 10", "SEASON 5"], alt: [], hint: "acerto" }
};
const visualSetBuilds = [
  {
    title: "Build de Acerto Crítico",
    tag: "referência GCFarm",
    notes: [
      ["Set Season 10", "4 peças", "Elmo, Diadema, Escudo e Luva/Asas"],
      ["Set Season 8", "4 peças", "Luva, Calça, Sapato, Capa ou Máscara"],
      ["Elmo", "Season 10", "acerto"],
      ["Diadema", "Season 10", "acerto"],
      ["Escudo", "Season 10/5", "acerto"],
      ["Luvas", "Season 10/8", "acerto"],
      ["Mascara", "Season 9/8", "acerto"],
      ["Cota", "Season 9/4", "acerto"],
      ["Sapatos", "Season 7/9", "peça restante boa"],
      ["Capa", "Season 7/6/8", "peça restante boa"],
      ["Arma", "Season 7", "peça restante boa"],
      ["Facas", "Season 6", "peça restante boa"]
    ]
  },
  {
    title: "Build de Dano Crítico",
    tag: "prints do jogo",
    notes: [
      ["Pacote 8ª Temporada", "4 peças", "Dano crítico +6,00% + Resistência à contaminação +2,50%"],
      ["8ª Temporada", "Escudo", "Dano crítico +3,00%; print do Mordomo Real"],
      ["8ª Temporada", "Elmo/Luvas/Sapatos", "peças para fechar o pacote 8"],
      ["Pacote 9ª Temporada", "4 peças", "Ataque +300 + Resistência à contaminação +2,50%"],
      ["9ª Temporada", "Asas", "Dano crítico +3,00% + MP recuperado +4,00%"],
      ["9ª Temporada", "Cota/Diadema/Facas/Arma", "peças para fechar o pacote 9"],
      ["Pacote 10ª Temporada", "4 peças", "Acerto crítico +2,00% + Resistência à contaminação +2,50%"],
      ["10ª Temporada", "Capa", "Dano crítico +3,00% + MP recuperado +4,00%"],
      ["10ª Temporada", "Máscara", "peça destacada no print"],
      ["5ª Temporada", "Calça", "entra para completar a build de dano"],
      ["7ª Temporada", "Asa", "entra para completar a build de dano"],
      ["Bônus 12 peças", "8ª/9ª/10ª + extras", "Dano crítico +10,00%"]
    ]
  }
];
const visualSetSeedRows = [
  ["Lire", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Lass", ["SEASON 7","SEASON 5","SEASON 5","SEASON 8","SEASON 5","SEASON 8","Nenhum","SEASON 8","SEASON 5","SEASON 6","SEASON 5","Nenhum","Sim"]],
  ["Jin", ["SEASON 6","SEASON 7","SEASON 5","SEASON 8","SEASON 7","SEASON 8","SEASON 4","SEASON 6","SEASON 5","SEASON 5","SEASON 6","SEASON 5","Sim"]],
  ["Sieghart", ["SEASON 10","SEASON 5","SEASON 8","SEASON 6","SEASON 7","SEASON 6","SEASON 7","SEASON 5","SEASON 8","Nenhum","Nenhum","SEASON 8","Não"]],
  ["Dio", ["SEASON 10","SEASON 7","SEASON 5","SEASON 7","Nenhum","SEASON 7","SEASON 7","SEASON 5","SEASON 7","SEASON 7","SEASON 10","Nenhum","Não"]],
  ["Zero", ["SEASON 8","Nenhum","Nenhum","SEASON 10","Nenhum","SEASON 6","SEASON 4","Nenhum","Nenhum","Nenhum","SEASON 10","SEASON 5","Não"]],
  ["Lupus", ["SEASON 5","SEASON 4","SEASON 5","Nenhum","Nenhum","SEASON 7","SEASON 5","Nenhum","SEASON 8","Nenhum","Nenhum","Nenhum","Sim"]],
  ["Edel", ["SEASON 6","SEASON 4","SEASON 5","Nenhum","Nenhum","Nenhum","SEASON 7","Nenhum","Nenhum","SEASON 6","SEASON 5","Nenhum","Sim"]],
  ["Azin", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Rey", ["Nenhum","Nenhum","Nenhum","Nenhum","SEASON 7","SEASON 7","Nenhum","Nenhum","Nenhum","SEASON 7","Nenhum","Nenhum","Não"]],
  ["Lin", ["SEASON 10","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","SEASON 10","SEASON 7","Nenhum","SEASON 7","Não"]],
  ["Veigas", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Decane", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Ai", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Kallia", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Uno", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Elesis", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Arme", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Ryan", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Ronan", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Amy", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Mari", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Holy", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]],
  ["Iris", ["Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Nenhum","Não"]]
];

const voidMaterialItems = [
  ["voidOrange", "Fragmento do Void Laranja", "https://gcfarm.com.br/img/itens/Fragmento_do_Vazio_Unificado_2.png"],
  ["voidBlue", "Fragmento do Void Azul", "https://gcfarm.com.br/img/itens/Fragmento_do_Vazio_Apocalipse.png"],
  ["dimensionalCore", "Núcleo Dimensional", "https://gcfarm.com.br/img/itens/N%C3%BAcleo_Dimensional.webp"],
  ["promiseVestige", "Vestígio de Promessa", "./assets/item-icons/promise-vestige.png"],
  ["chaosFragment", "Fragmento do Caos Disperso", "https://gcfarm.com.br/img/itens/fragmento_caos.webp"]
];
const accessoryStages = [
  ["rare", "Raro"],
  ["epic", "Épico"],
  ["legendary", "Lendário"],
  ["chaos", "Caos"]
];
const equipmentRarities = ["Comum", "Raro", "Épico", "Lendário", "Ancestral", "Caos"];
const equipmentAttributeOptions = [
  ["attack", "Ataque", "+431"],
  ["defense", "Defesa", "+231"],
  ["vitality", "Vitalidade", "+231"],
  ["hpRecovery", "HP recuperado", "+13,50%"],
  ["mpRecovery", "MP recuperado", "+6,03%"],
  ["gpGain", "GP adquirido", "+0,30%"],
  ["specialAttack", "Ataque especial", "+732"],
  ["specialDefense", "Defesa especial", "+431"],
  ["critChance", "Acerto crítico", "+2,80%"],
  ["critDamage", "Dano crítico", "+24,98%"],
  ["contaminationResist", "Resistência à contaminação", "+1,10%"],
  ["backAttackDamage", "Dano de ataque pelas costas", "+1,02%"],
  ["expGain", "EXP adquirido", "+0,10%"],
  ["infernalChance", "Chance de lança infernal", "+0,02%"],
  ["infernalDamage", "Lança infernal, dano", "+15"]
];
const equipmentCardsCatalog = [
  ["Carta com uma Promessa", "Ataque +100 Resistência à contaminação +0,55%"],
  ["Memória Preciosa", "Ataque +100 Resistência à contaminação +0,55%"],
  ["O Que Não Pode Ser Desfeito", "Ataque +100 Resistência à contaminação +0,55%"],
  ["Onde o Olhar Permanece", "Ataque +100 Resistência à contaminação +0,55%"],
  ["Para a Luz Estelar da Noite Profunda", "Ataque +100 Resistência à contaminação +0,55%"]
].map(([name, attr], index) => ({ id: `promise-card-${index + 1}`, name, attr }));
const equipmentCatalog = {
  "Elmo": [
    {
      id: "phoenix-phantom-helm",
      name: "Elmo da Fênix Fantasma",
      type: "elmo",
      level: 80,
      rarity: "Épico",
      iconClass: "item-phoenix",
      mainAttributes: ["Defesa +608"],
      secondaryLimit: 3,
      secondaryRanges: {}
    },
    {
      id: "void-observer-helm",
      name: "Elmo do Observador do Vazio",
      type: "elmo",
      level: 85,
      rarity: "Ancestral",
      iconClass: "item-void-observer",
      mainAttributes: ["Defesa +914"],
      secondaryLimit: 5,
      secondaryRanges: {
        attack: "Faixa: 361 até 560",
        defense: "Faixa: 131 até 330",
        vitality: "Faixa: 131 até 330",
        hpRecovery: "Faixa: 10,05 até 20,00%",
        mpRecovery: "Faixa: 4,02 até 8,00%",
        gpGain: "Faixa: 0,19 até 2,18%",
        specialAttack: "Faixa: 602 até 1.000",
        specialDefense: "Faixa: 202 até 600",
        critChance: "Faixa: 1,61 até 3,60%",
        critDamage: "Faixa: 16,08 até 32,00%",
        contaminationResist: "Faixa: 1,10 até 3,09%",
        backAttackDamage: "Faixa: 1,02 até 5,00%",
        expGain: "Faixa: 0,10 até 2,09%",
        infernalChance: "Faixa: 0,02 até 4,00%",
        infernalDamage: "Faixa: 15 até 3.000"
      }
    }
  ]
};

const equipmentMainAttributeBySlot = {
  "Elmo": "Defesa +914",
  "Cota": "Defesa +1.120",
  "Calça": "Defesa +914",
  "Luva": "Ataque +608",
  "Sapato": "Defesa +608",
  "Capa": "Ataque +431",
  "Arma principal": "Ataque +1.820",
  "Diadema": "Defesa +431",
  "Máscara": "Defesa +431",
  "Asas": "Ataque +560",
  "Facas": "Ataque +560",
  "Escudos": "Defesa +560",
  "Arma secundária": "Ataque +914",
  "Anel": "Ataque +431",
  "Colar": "Defesa +431",
  "Tornozeleira": "Defesa +431",
  "Brinco ou piercing 1": "Ataque +361",
  "Brinco ou piercing 2": "Ataque +361"
};

gcFarmCatalog.equipmentSlots.forEach(slot => {
  if (!equipmentCatalog[slot]) {
    equipmentCatalog[slot] = [equipmentCatalogFallbackItem(slot)];
  }
});

equipmentCatalog["Arma secundária"].push({
  id: "berkas-reserve-weapon",
  name: "Arma de Reserva de Berkas",
  type: "arma secundária",
  level: 85,
  rarity: "Lendário",
  iconClass: "item-berkas",
  slotIconClass: "slot-secondary",
  mainAttributes: ["Arma reserva identificada no print"],
  secondaryLimit: 3,
  secondaryRanges: {}
});

[
  ["Elmo", "lupus-void-helm", "Elmo Void do Lupus"],
  ["Cota", "lupus-void-cota", "Cota Void do Lupus"],
  ["Calça", "lupus-void-calca", "Calça Void do Lupus"],
  ["Luva", "lupus-void-luva", "Luva Void do Lupus"],
  ["Sapato", "lupus-void-sapato", "Sapato Void do Lupus"],
  ["Capa", "lupus-void-capa", "Capa Void do Lupus"],
  ["Arma principal", "lupus-void-arma-principal", "Arma Void do Lupus"]
].forEach(([slot, id, name]) => {
  if ((equipmentCatalog[slot] || []).some(item => item.id === id)) return;
  equipmentCatalog[slot].push({
    id,
    name,
    type: slot.toLowerCase(),
    level: 85,
    rarity: "Ancestral",
    iconClass: "item-void-observer",
    mainAttributes: [equipmentMainAttributeBySlot[slot] || "Atributo principal pendente"],
    secondaryLimit: 5,
    secondaryRanges: equipmentCatalog[slot][0]?.secondaryRanges || {}
  });
});

const equipmentIconCache = "20260804-lupus-print";
const equipmentIconSrcById = {
  "void-observer-helm": `./assets/equipment-icons/jin-print/void-observer-helm.png?v=${equipmentIconCache}`,
  "void-observer-cota": `./assets/equipment-icons/jin-print/void-observer-cota.png?v=${equipmentIconCache}`,
  "void-observer-calca": `./assets/equipment-icons/jin-print/void-observer-calca.png?v=${equipmentIconCache}`,
  "void-observer-luva": `./assets/equipment-icons/jin-print/void-observer-luva.png?v=${equipmentIconCache}`,
  "void-observer-sapato": `./assets/equipment-icons/jin-print/void-observer-sapato.png?v=${equipmentIconCache}`,
  "void-observer-capa": `./assets/equipment-icons/jin-print/void-observer-capa.png?v=${equipmentIconCache}`,
  "void-observer-arma-principal": `./assets/equipment-icons/jin-print/void-observer-arma-principal.png?v=${equipmentIconCache}`,
  "berkas-reserve-weapon": `./assets/equipment-icons/jin-print/berkas-reserve-weapon.png?v=${equipmentIconCache}`,
  "void-observer-diadema": `./assets/equipment-icons/jin-print/void-observer-diadema.png?v=${equipmentIconCache}`,
  "void-observer-mascara": `./assets/equipment-icons/jin-print/void-observer-mascara.png?v=${equipmentIconCache}`,
  "void-observer-asas": `./assets/equipment-icons/jin-print/void-observer-asas.png?v=${equipmentIconCache}`,
  "void-observer-facas": `./assets/equipment-icons/jin-print/void-observer-facas.png?v=${equipmentIconCache}`,
  "void-observer-escudos": `./assets/equipment-icons/jin-print/void-observer-escudos.png?v=${equipmentIconCache}`,
  "void-observer-brinco-ou-piercing-1": `./assets/equipment-icons/jin-print/void-observer-brinco-ou-piercing-1.png?v=${equipmentIconCache}`,
  "lupus-void-helm": `./assets/equipment-icons/lupus-print/lupus-void-helm.png?v=${equipmentIconCache}`,
  "lupus-void-cota": `./assets/equipment-icons/lupus-print/lupus-void-cota.png?v=${equipmentIconCache}`,
  "lupus-void-calca": `./assets/equipment-icons/lupus-print/lupus-void-calca.png?v=${equipmentIconCache}`,
  "lupus-void-luva": `./assets/equipment-icons/lupus-print/lupus-void-luva.png?v=${equipmentIconCache}`,
  "lupus-void-sapato": `./assets/equipment-icons/lupus-print/lupus-void-sapato.png?v=${equipmentIconCache}`,
  "lupus-void-capa": `./assets/equipment-icons/lupus-print/lupus-void-capa.png?v=${equipmentIconCache}`,
  "lupus-void-arma-principal": `./assets/equipment-icons/lupus-print/lupus-void-arma-principal.png?v=${equipmentIconCache}`
};

Object.values(equipmentCatalog).flat().forEach(item => {
  item.iconSrc = equipmentIconSrcById[item.id] || item.iconSrc || "";
});

function equipmentCatalogFallbackItem(slot) {
  const slug = slot
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return {
    id: `void-observer-${slug}`,
    name: `${slot} do Observador do Vazio`,
    type: slot.toLowerCase(),
    level: 85,
    rarity: "Ancestral",
    iconClass: "item-slot",
    slotIconClass: equipmentSlotIconClass(slot),
    mainAttributes: [equipmentMainAttributeBySlot[slot] || "Atributo principal pendente"],
    secondaryLimit: 5,
    secondaryRanges: {
      attack: "Faixa: 361 até 560",
      defense: "Faixa: 131 até 330",
      vitality: "Faixa: 131 até 330",
      hpRecovery: "Faixa: 10,05 até 20,00%",
      mpRecovery: "Faixa: 4,02 até 8,00%",
      gpGain: "Faixa: 0,19 até 2,18%",
      specialAttack: "Faixa: 602 até 1.000",
      specialDefense: "Faixa: 202 até 600",
      critChance: "Faixa: 1,61 até 3,60%",
      critDamage: "Faixa: 16,08 até 32,00%",
      contaminationResist: "Faixa: 1,10 até 3,09%",
      backAttackDamage: "Faixa: 1,02 até 5,00%",
      expGain: "Faixa: 0,10 até 2,09%",
      infernalChance: "Faixa: 0,02 até 4,00%",
      infernalDamage: "Faixa: 15 até 3.000"
    }
  };
}

const gcFarmMissionIcons = {
  forno: "https://gcfarm.com.br/img/missoes-desafios/01_fornalha_infernal.webp",
  altar: "https://gcfarm.com.br/img/missoes-desafios/02_altar_da_ruina.webp",
  torre: "https://gcfarm.com.br/img/missoes-desafios/03_torre_das_ilusoes.webp",
  berkas: "https://gcfarm.com.br/img/missoes-desafios/04_covil_de_berkas.webp",
  extincao: "https://gcfarm.com.br/img/missoes-desafios/05_torre_da_extincao.webp",
  julgamento: "https://gcfarm.com.br/img/missoes-desafios/06_terra_do_julgamento.webp",
  vazio1: "https://gcfarm.com.br/img/missoes-desafios/07_vazio_invasao.webp",
  vazio4: "https://gcfarm.com.br/img/missoes-desafios/void4.png",
  calnat: "https://gcfarm.com.br/img/missoes-desafios/13_a_grande_explosao_de_calnat.webp",
  abissal: "https://gcfarm.com.br/img/missoes-desafios/Caminho_Abissal.webp",
  solene: "https://gcfarm.com.br/img/missoes-desafios/solene.png"
};
const gcFarmStarIcons = {
  on: "https://gcfarm.com.br/img/icons/star-on.webp",
  off: "https://gcfarm.com.br/img/icons/star-off.webp"
};
const soleneRingOptions = [
  { id: "S1", label: "Anel Solene 1", icon: "./assets/mission-icons/solene-rings/solene-ring-1.png" },
  { id: "S2", label: "Anel Solene 2", icon: "./assets/mission-icons/solene-rings/solene-ring-2.png" },
  { id: "S3", label: "Anel Solene 3", icon: "./assets/mission-icons/solene-rings/solene-ring-3.png" },
  { id: "S4", label: "Anel Solene 4", icon: "./assets/mission-icons/solene-rings/solene-ring-4.png" },
  { id: "S5", label: "Anel Solene 5", icon: "./assets/mission-icons/solene-rings/solene-ring-5.png" }
];

const titleStatusMilestones = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const titleBoardItems = [
  { id: "void-1-title", name: "Título do Void 1", category: "Vazio", icon: "./assets/title-icons/void-1-real.png" },
  { id: "harrier-1-title", name: "Harrier I", category: "Harrier", icon: "./assets/title-icons/harrier-real-1-v8.png" },
  { id: "harrier-2-title", name: "Harrier II", category: "Harrier", icon: "./assets/title-icons/harrier-real-2-v8.png" },
  { id: "exp-1", name: "Experiência I", category: "Experiência", icon: "./assets/title-icons/exp-1.png" },
  { id: "exp-2", name: "Experiência II", category: "Experiência", icon: "./assets/title-icons/exp-2.png" },
  { id: "exp-3", name: "Experiência III", category: "Experiência", icon: "./assets/title-icons/exp-3-no-star-v8.png" }
];

const powerIndicatorTargets = {
  combinedAttack: 70000,
  critDamage900: 900,
  critDamage1000: 1000,
  critChance100: 100
};

const screenshotEquipmentFindings = {
  Jin: {
    ta: 1215,
    attack: 1215379,
    power: {
      attack: 43237,
      specialAttack: 28541,
      combinedAttack: 71778,
      critDamage: 1001.23,
      critChance: 111.44
    },
    reviewStatus: "print-confirmed",
    source: {
      nonVisual: "print 2026-08-04",
      equipment: "print 2026-08-04"
    },
    accessories: {
      earrings: "legendary"
    },
    titleStatus: titleStatusDefault(1215),
    notes: [
      "Print 2026-08-04: identificado como Jin.",
      "Ataque Total lido no print: 1.215.379; marco de 1000 AT considerado completo.",
      "Indicadores de poder do print: Ataque + Ataque Especial = 71.778; Dano Crítico 1001,23%; Acerto Crítico 111,44%.",
      "Set Void completo inferido pelos fundos vermelhos nos equipamentos.",
      "Arma secundária/reserva identificada como Berkas.",
      "Brinco marcado como lendário pelo fundo roxo."
    ].join("\n"),
    equipment: {
      weapon: "Set Void completo",
      armor: "Void completo",
      ring: "Void",
      slots: {
        "Elmo": printSlot("Elmo", "void-observer-helm", "Ancestral", 16, "Void confirmado pelo fundo vermelho no print."),
        "Cota": printSlot("Cota", "void-observer-cota", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Calça": printSlot("Calça", "void-observer-calca", "Ancestral", 10, "Void confirmado pelo fundo vermelho no print."),
        "Luva": printSlot("Luva", "void-observer-luva", "Ancestral", 18, "Void confirmado pelo fundo vermelho no print."),
        "Sapato": printSlot("Sapato", "void-observer-sapato", "Ancestral", 14, "Void confirmado pelo fundo vermelho no print."),
        "Capa": printSlot("Capa", "void-observer-capa", "Ancestral", 16, "Void confirmado pelo fundo vermelho no print."),
        "Arma principal": printSlot("Arma principal", "void-observer-arma-principal", "Ancestral", 17, "Arma Void confirmada pelo fundo vermelho no print."),
        "Arma secundária": printSlot("Arma secundária", "berkas-reserve-weapon", "Lendário", 0, "Arma reserva de Berkas identificada no print."),
        "Diadema": printSlot("Diadema", "void-observer-diadema", "Ancestral", 9, "Parte do set Void completo inferido pelo print."),
        "Máscara": printSlot("Máscara", "void-observer-mascara", "Ancestral", 0, "Parte do set Void completo inferido pelo print."),
        "Asas": printSlot("Asas", "void-observer-asas", "Ancestral", 0, "Parte do set Void completo inferido pelo print."),
        "Facas": printSlot("Facas", "void-observer-facas", "Ancestral", 0, "Parte do set Void completo inferido pelo print."),
        "Escudos": printSlot("Escudos", "void-observer-escudos", "Ancestral", 0, "Parte do set Void completo inferido pelo print."),
        "Brinco ou piercing 1": printSlot("Brinco ou piercing 1", "void-observer-brinco-ou-piercing-1", "Lendário", 0, "Brinco lendário pelo fundo roxo no print.")
      }
    }
  },
  Lupus: {
    ta: 828,
    attack: 828005,
    power: {
      attack: 35027,
      specialAttack: 19222,
      combinedAttack: 54249,
      critDamage: 787.90,
      critChance: 102.34
    },
    reviewStatus: "print-confirmed",
    source: {
      nonVisual: "print 2026-08-04",
      equipment: "print 2026-08-04"
    },
    titleStatus: titleStatusDefault(828),
    notes: [
      "Print 2026-08-04: identificado como Lupus.",
      "Ataque Total lido no print: 828.005; marco de 800 AT considerado completo.",
      "Indicadores de poder do print: Ataque + Ataque Especial = 54.249; Dano Crítico 787,90%; Acerto Crítico 102,34%.",
      "Peças Void visíveis registradas a partir dos fundos vermelhos no print.",
      "Arma principal Void visível no print com fortificação +17."
    ].join("\n"),
    equipment: {
      weapon: "Void parcial visível",
      armor: "Void visível",
      ring: "Acessórios pendentes de confirmação",
      slots: {
        "Elmo": printSlot("Elmo", "lupus-void-helm", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Cota": printSlot("Cota", "lupus-void-cota", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Calça": printSlot("Calça", "lupus-void-calca", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Luva": printSlot("Luva", "lupus-void-luva", "Ancestral", 17, "Void confirmado pelo fundo vermelho no print."),
        "Sapato": printSlot("Sapato", "lupus-void-sapato", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Capa": printSlot("Capa", "lupus-void-capa", "Ancestral", 9, "Void confirmado pelo fundo vermelho no print."),
        "Arma principal": printSlot("Arma principal", "lupus-void-arma-principal", "Ancestral", 17, "Arma Void confirmada pelo fundo vermelho no print.")
      }
    }
  }
};

const seed = {
  lastImport: "2026-07-24",
  dataPolicy: "Dados nao-visuais aguardam print do jogo. A planilha antiga fica como referencia, nao como verdade atual.",
  titleOrder: [],
  dailyOrder: [],
  voidOrder: [],
  characterOrder: [],
  account: {
    nickname: "thiaggo",
    plan: "Padrão",
    chaseLevel: 0,
    cardLevel: 0,
    vp: 0,
    presencePoints: 0,
    julgamentoDone: false
  },
  rotation: {
    active: "Vazio 1 (Invasão)",
    next: "2026-07-29 03:00 America/Sao_Paulo"
  },
  visualSet: Object.fromEntries(visualSetSeedRows.map(([name, values]) => [
    name,
    Object.fromEntries(visualSetSlots.map((slot, index) => [slot, values[index] || (slot === "Pet" ? "Não" : "Nenhum")]))
  ])),
  visualOrder: visualSetSeedRows.map(([name]) => name),
  visualCollectionOwned: {},
  characters: [
    ["Jin", 8, 766, 3, 54, 1, 5, 15],
    ["Sieghart", 9, 539, 15, 5, 9, 8, 13],
    ["Dio", 11, 525, 7, 6, 0, 7, 14],
    ["Lupus", 14, 437, 20, 11, 11, 4, 14],
    ["Edel", 18, 338, 14, 7, 2, 3, 15],
    ["Lass", 4, 314, 25, 24, 5, 3, 8],
    ["Zero", 12, 312, 26, 19, 5, 3, 13],
    ["Azin", 16, 335, 21, 14, 2, 3, 15],
    ["Lire", 2, 219, 8, 8, 0, 2, 15],
    ["Decane", 20, 163, 0, 0, 0, 1, 15],
    ["Iris", 24, 158, 0, 0, 0, 1, 15],
    ["Rey", 13, 132, 0, 0, 0, 1, 15],
    ["Ronan", 6, 130, 0, 0, 0, 1, 15],
    ["Elesis", 1, 127, 0, 0, 0, 1, 15],
    ["Arme", 3, 107, 0, 0, 0, 1, 14],
    ["Uno", 23, 0, 0, 0, 0, 0, 15],
    ["Ai", 21, 0, 0, 0, 0, 0, 15],
    ["Kallia", 22, 0, 0, 0, 0, 0, 15],
    ["Mari", 10, 0, 0, 0, 0, 0, 15],
    ["Veigas", 19, 0, 0, 0, 0, 0, 15],
    ["Ryan", 5, 0, 0, 0, 0, 0, 15],
    ["Amy", 7, 0, 0, 0, 0, 0, 15],
    ["Lin", 15, 0, 0, 0, 0, 0, 15],
    ["Holy", 17, 0, 0, 0, 0, 0, 15],
    ["Ereb", 25, 0, 0, 0, 0, 0, 15]
  ].map(([name, order, ta, void1, void2, void3, titles, missingVisual]) => ({
    name, order, ta, level: 90, attack: 0,
    image: characterImages[name],
    reviewStatus: "needs-print",
    voids: { invasao: void1, contaminacao: void2, pesadelo: void3 },
    materials: {
      voidOrange: void1,
      voidBlue: void3,
      dimensionalCore: 0,
      promiseVestige: 0,
      chaosFragment: 0
    },
    accessories: {
      earrings: "",
      piercing: ""
    },
    titles: { done: titles, total: titleBoardItems.length },
    titleBoard: Object.fromEntries(titleBoardItems.map((item, index) => [item.id, index < titles])),
    titleStatus: titleStatusDefault(ta),
    visual: { missing: missingVisual, total: 15 },
    source: {
      visual: "planilha",
      nonVisual: "pendente"
    },
    daily: {
      forno: false, altar: false, torre: false, andar: ["Lupus", "Lin", "Edel"].includes(name) ? 22 : 30,
      berkas: false, teroka: false, templo: false, calnat: false, tod: false,
      voidStars: 0, void4Stars: 0, abissalDone: false, abissalComplete: false,
      purple: 0, red: 0, loj: 0
    },
    equipment: {
      weapon: name === "Arme" ? "4a Class Void" : name === "Iris" ? "1a Class Void" : "Nao tem Classe",
      armor: name === "Arme" ? "Void" : "Nao tem Classe",
      ring: name === "Arme" ? "Infinito Brilhante (III)" : name === "Sieghart" ? "Dimensao Forjado (I)" : "Nenhum",
      necklace: name === "Arme" ? "Halloween +9" : "Nenhum",
      slots: equipmentSlotDefaults()
    },
    notes: ""
  }))
};

applyScreenshotFindings(seed);

let state = loadState();
let currentView = "dashboard";
let selectedCharacter = null;
let selectedEquipmentSlot = null;
let selectedEquipmentTab = "attributes";
let visualCollectionFilter = "Todos";
let characterSort = "order";

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? migrateState(JSON.parse(saved)) : structuredClone(seed);
}

function migrateState(saved) {
  const migrated = { ...structuredClone(seed), ...saved };
  const savedByName = new Map((saved.characters || []).map(char => [char.name, char]));
  migrated.characters = seed.characters.map(base => {
    const old = savedByName.get(base.name);
    return old ? {
      ...base,
      ...old,
      order: base.order,
      source: { ...base.source, ...(old.source || {}) },
      equipment: { ...base.equipment, ...(old.equipment || {}), slots: mergeEquipmentSlots(old.equipment?.slots || {}) },
      daily: { ...base.daily, ...(old.daily || {}) },
      voids: { ...base.voids, ...(old.voids || {}) },
      materials: { ...base.materials, ...(old.materials || {}) },
      accessories: { ...base.accessories, ...(old.accessories || {}) },
      visual: { ...base.visual, ...(old.visual || {}) },
      titles: { done: old.titles?.done ?? base.titles.done, total: titleBoardItems.length },
      titleBoard: { ...base.titleBoard, ...(old.titleBoard || {}) },
      titleStatus: { ...titleStatusDefault(old.ta ?? base.ta), ...(old.titleStatus || {}) },
      reviewStatus: old.reviewStatus || "needs-print"
    } : base;
  });
  migrated.visualSet = { ...seed.visualSet, ...(saved.visualSet || {}) };
  migrated.visualCollectionOwned = { ...(saved.visualCollectionOwned || {}) };
  migrated.characterOrder = saved.characterOrder || (saved.characters || [])
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  if (!migrated.characterOrder.length) {
    migrated.characterOrder = [...seed.characters]
      .sort((a, b) => a.order - b.order)
      .map(char => char.name);
  }
  migrated.dailyOrder = saved.dailyOrder || (saved.characters || [])
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  if (!migrated.dailyOrder.length) {
    migrated.dailyOrder = [...seed.characters]
      .sort((a, b) => a.order - b.order)
      .map(char => char.name);
  }
  migrated.voidOrder = saved.voidOrder || (saved.characters || [])
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  if (!migrated.voidOrder.length) {
    migrated.voidOrder = [...seed.characters]
      .sort((a, b) => a.order - b.order)
      .map(char => char.name);
  }
  migrated.titleOrder = saved.titleOrder || (saved.characters || [])
    .sort((a, b) => b.ta - a.ta || a.order - b.order)
    .map(char => char.name);
  if (!migrated.titleOrder.length) {
    migrated.titleOrder = [...seed.characters]
      .sort((a, b) => b.ta - a.ta || a.order - b.order)
      .map(char => char.name);
  }
  migrated.visualOrder = saved.visualOrder || (saved.characters || [])
    .filter(char => seed.visualSet[char.name])
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  if (!migrated.visualOrder.length) migrated.visualOrder = seed.visualOrder;
  migrated.account = { ...seed.account, ...(saved.account || {}) };
  migrated.dataPolicy = seed.dataPolicy;
  applyScreenshotFindings(migrated);
  return migrated;
}

function applyScreenshotFindings(targetState) {
  Object.entries(screenshotEquipmentFindings).forEach(([name, finding]) => {
    const char = targetState.characters.find(item => item.name === name);
    if (!char) return;
    char.ta = finding.ta ?? char.ta;
    char.attack = finding.attack ?? char.attack;
    char.reviewStatus = finding.reviewStatus || char.reviewStatus;
    char.source = { ...(char.source || {}), ...(finding.source || {}) };
    char.power = { ...(char.power || {}), ...(finding.power || {}) };
    char.accessories = { ...(char.accessories || {}), ...(finding.accessories || {}) };
    char.titleStatus = { ...(char.titleStatus || {}), ...(finding.titleStatus || {}) };
    char.notes = mergeNotes(char.notes, finding.notes);
    char.equipment = {
      ...(char.equipment || {}),
      ...(finding.equipment || {}),
      slots: {
        ...mergeEquipmentSlots(char.equipment?.slots || {}),
        ...mergePartialEquipmentSlots(finding.equipment?.slots || {})
      }
    };
  });
}

function mergeNotes(current = "", incoming = "") {
  if (!incoming) return current || "";
  if (!current) return incoming;
  return current.includes(incoming.split("\n")[0]) ? current : `${current}\n\n${incoming}`;
}

function printSlot(slot, itemId, rarity, fortification = 0, notes = "") {
  const item = equipmentItemById(slot, itemId);
  return {
    ...equipmentSlotDefault(slot),
    itemId,
    name: item?.name || "",
    kind: item?.type || slot.toLowerCase(),
    rarity,
    fortification,
    notes,
    tab: "attributes"
  };
}

function mergeEquipmentSlots(savedSlots = {}) {
  return Object.fromEntries(gcFarmCatalog.equipmentSlots.map(slot => [
    slot,
    normalizeEquipmentSlot(slot, savedSlots[slot])
  ]));
}

function mergePartialEquipmentSlots(savedSlots = {}) {
  return Object.fromEntries(Object.entries(savedSlots)
    .filter(([slot]) => gcFarmCatalog.equipmentSlots.includes(slot))
    .map(([slot, data]) => [slot, normalizeEquipmentSlot(slot, data)]));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function titleStatusDefault(ta) {
  const totalAttack = Number(ta || 0);
  return Object.fromEntries(titleStatusMilestones.map(value => [value, totalAttack >= value]));
}

function filteredCharacters() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  return state.characters
    .filter(char => char.name.toLowerCase().includes(q))
    .sort((a, b) => b.ta - a.ta || a.order - b.order);
}

function pct(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function dailyDoneCount(char) {
  return ["forno", "altar", "torre", "berkas", "teroka", "templo", "calnat", "tod"]
    .filter(key => char.daily[key]).length;
}

function render() {
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  document.querySelector(`#${currentView}`).classList.add("active");
  document.querySelectorAll(".nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.view === currentView));
  const titles = {
    dashboard: "Painel inicial",
    characters: "Personagens",
    daily: "Rotina",
    voids: "Itens",
    titles: "Títulos",
    visualSet: "Visual",
    visual: "Coleção visual",
    gcfarm: "Catalogo GCFarm",
    automation: "Automacao e prints"
  };
  document.querySelector("#viewTitle").textContent = titles[currentView];
  renderDashboard();
  renderCharacters();
  renderDaily();
  renderVoids();
  renderTitles();
  renderVisualSet();
  renderVisual();
  renderGcFarm();
  renderAutomation();
}

function renderDashboard() {
  const chars = state.characters;
  const top = [...chars]
    .sort((a, b) => (b.attack || b.ta) - (a.attack || a.ta) || a.order - b.order)
    .slice(0, 3);
  document.querySelector("#dashboard").innerHTML = `
    <section class="home-hero">
      <p class="eyebrow">Painel inicial</p>
      <h2>Bem-vindo, ${state.account.nickname}</h2>
      <p class="muted">Acompanhe novidades do projeto, status da sua conta e acessos rápidos para seus controles do GC Tracker.</p>
    </section>
    <div class="home-cards">
      <article class="home-card account-card">
        <span>Conta</span>
        <strong>${state.account.plan}</strong>
        <small>Conta gratuita ativa.</small>
      </article>
      <article class="home-card top-card">
        <span>Top 3 personagens mais fortes (ataque total)</span>
        <div class="top-mini-list">
          ${top.map(topCharacterMini).join("")}
        </div>
      </article>
      ${dashboardMetricCard("Chase level", "chaseLevel")}
      ${dashboardMetricCard("Cartas level", "cardLevel")}
      ${dashboardMetricCard("VP", "vp")}
      ${dashboardMetricCard("Pontos de presença", "presencePoints")}
    </div>
  `;
}

function stat(label, value, hint) {
  return `<article class="stat"><span class="muted">${label}</span><strong>${value}</strong><small class="muted">${hint}</small></article>`;
}

function characterNameCell(char, className = "character-name-cell") {
  return `<span class="${className}"><img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'"><strong>${char.name}</strong></span>`;
}

function topCharacterMini(char) {
  const value = char.attack || char.ta || 0;
  return `
    <div class="top-mini">
      <img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
      <strong>${char.name}</strong>
      <small>${value.toLocaleString("pt-BR")}</small>
    </div>
  `;
}

function dashboardMetricCard(label, key) {
  const value = Number(state.account[key] || 0).toLocaleString("pt-BR");
  return `
    <article class="home-card metric-card">
      <button class="metric-edit" type="button" title="Editar ${label}" onclick="editAccountMetric('${key}', '${label}')">✎</button>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function editAccountMetric(key, label) {
  const current = state.account[key] ?? 0;
  const next = prompt(`Novo valor para ${label}:`, current);
  if (next === null) return;
  state.account[key] = Number(next.replace(/[.]/g, "").replace(",", ".")) || 0;
  saveState();
  render();
}

function characterCard(char) {
  const titlePct = pct(char.titles.done, char.titles.total);
  const visualDone = char.visual.total - char.visual.missing;
  const visualPct = pct(visualDone, char.visual.total);
  return `
    <article class="character-card">
      <div class="char-head">
        <img class="portrait" src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
        <div>
          <h3>${char.name}</h3>
          <small class="muted">TA ${char.ta.toLocaleString("pt-BR")} · Lv ${char.level}</small>
        </div>
        <button onclick="openEditor('${char.name}')">Editar</button>
      </div>
      <div class="char-body">
        <div>
          <div class="pill-row"><span class="pill warn">Print pendente</span><span class="pill ${visualPct > 60 ? "good" : "warn"}">Visual ${visualPct}%</span><span class="pill">Voids ${voidTotal(char)}</span></div>
        </div>
        <div class="progress"><span style="width:${Math.max(titlePct, 4)}%"></span></div>
        <div class="pill-row">
          <span class="pill">Arma: ${char.equipment.weapon}</span>
          <span class="pill">Anel: ${char.equipment.ring}</span>
        </div>
      </div>
    </article>
  `;
}

function renderCharacters() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const rows = [...state.characters]
    .filter(char => char.name.toLowerCase().includes(q))
    .sort(characterSorter);
  document.querySelector("#characters").innerHTML = `
    <section class="equipment-panel">
      <div class="equipment-toolbar">
        <h2>Equipamentos dos Personagens</h2>
        <div class="sort-controls">
          <label for="characterSort">Ordenar por:</label>
          <select id="characterSort" onchange="setCharacterSort(this.value)">
            <option value="order" ${characterSort === "order" ? "selected" : ""}>Lançamento de personagem</option>
            <option value="attack" ${characterSort === "attack" ? "selected" : ""}>Ataque total</option>
            <option value="name" ${characterSort === "name" ? "selected" : ""}>Nome</option>
            <option value="voids" ${characterSort === "voids" ? "selected" : ""}>Voids totais</option>
          </select>
          <button onclick="renderCharacters()">Aplicar</button>
        </div>
      </div>
      <div class="equipment-grid">
        ${rows.map(equipmentCard).join("")}
      </div>
    </section>
  `;
}

function characterSorter(a, b) {
  if (characterSort === "attack") return (b.attack || b.ta) - (a.attack || a.ta) || characterOrderIndex(a.name) - characterOrderIndex(b.name);
  if (characterSort === "name") return a.name.localeCompare(b.name, "pt-BR");
  if (characterSort === "voids") return voidTotal(b) - voidTotal(a) || characterOrderIndex(a.name) - characterOrderIndex(b.name);
  return characterOrderIndex(a.name) - characterOrderIndex(b.name);
}

function setCharacterSort(value) {
  characterSort = value;
  renderCharacters();
}

function equipmentCard(char) {
  const attack = char.attack || 0;
  const progress = equipmentCompletion(char);
  const indicators = powerIndicators(char);
  const orderControls = characterSort === "order"
    ? `<div class="equipment-order-actions">
        <button type="button" title="Mover ${char.name} para esquerda" onclick="moveCharacterCard('${char.name}', -1)">◀</button>
        <button type="button" title="Mover ${char.name} para direita" onclick="moveCharacterCard('${char.name}', 1)">▶</button>
      </div>`
    : "";
  return `
    <article class="equipment-card">
      <div class="equipment-portrait">
        <img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
      </div>
      <div class="equipment-content">
        <div class="equipment-head">
          <div>
            <h3>${char.name}</h3>
            <small>Ataque total: ${attack.toLocaleString("pt-BR")}</small>
          </div>
          <button class="edit-square" onclick="openEditor('${char.name}')" title="Editar ${char.name}">✎</button>
        </div>
        ${orderControls}
        <div class="equipment-progress" title="${progress.filled}/${progress.total} slots preenchidos">
          <span>${progress.filled}/${progress.total}</span>
          <div><i style="width:${progress.percent}%"></i></div>
        </div>
        ${indicators.length ? `<div class="power-indicators">${indicators.map(powerIndicatorChip).join("")}</div>` : ""}
        <div class="equipment-slots">
          ${gcFarmCatalog.equipmentSlots.map(slot => equipmentSlotButton(char, slot)).join("")}
        </div>
      </div>
    </article>
  `;
}

function powerIndicators(char) {
  const power = char.power || {};
  const combined = Number(power.combinedAttack || 0) || Number(power.attack || 0) + Number(power.specialAttack || 0);
  const critDamage = Number(power.critDamage || 0);
  const critChance = Number(power.critChance || 0);
  return [
    {
      label: "ATK+AE",
      value: combined ? combined.toLocaleString("pt-BR") : "-",
      ready: combined >= powerIndicatorTargets.combinedAttack,
      title: `Ataque + Ataque Especial${combined ? `: ${combined.toLocaleString("pt-BR")}` : ""}`
    },
    {
      label: "DC 900",
      value: critDamage ? `${critDamage.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%` : "-",
      ready: critDamage >= powerIndicatorTargets.critDamage900,
      title: `Dano Crítico >= 900%`
    },
    {
      label: "DC 1000",
      value: critDamage ? `${critDamage.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%` : "-",
      ready: critDamage >= powerIndicatorTargets.critDamage1000,
      title: `Dano Crítico >= 1000%`
    },
    {
      label: "AC 100",
      value: critChance ? `${critChance.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%` : "-",
      ready: critChance >= powerIndicatorTargets.critChance100,
      title: `Acerto Crítico >= 100%`
    }
  ].filter(item => item.value !== "-");
}

function powerIndicatorChip(item) {
  return `<span class="power-chip ${item.ready ? "is-ready" : "is-low"}" title="${escapeHtml(item.title)}"><b>${item.label}</b><small>${escapeHtml(item.value)}</small></span>`;
}

function characterOrderNames() {
  return sharedCharacterOrderNames();
}

function characterOrderIndex(name) {
  const index = characterOrderNames().indexOf(name);
  return index >= 0 ? index : 999;
}

function moveCharacterCard(name, direction) {
  const order = characterOrderNames();
  const index = order.indexOf(name);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex], order[index]];
  setSharedCharacterOrder(order);
  saveState();
  renderCharacters();
}

function sharedCharacterOrderNames(filter = () => true) {
  const validNames = [...state.characters]
    .filter(filter)
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  const saved = Array.isArray(state.voidOrder) && state.voidOrder.length
    ? state.voidOrder
    : Array.isArray(state.characterOrder) ? state.characterOrder : [];
  return [...saved.filter(name => validNames.includes(name)), ...validNames.filter(name => !saved.includes(name))];
}

function setSharedCharacterOrder(order) {
  const validNames = [...state.characters]
    .sort((a, b) => a.order - b.order)
    .map(char => char.name);
  const nextOrder = [...order.filter(name => validNames.includes(name)), ...validNames.filter(name => !order.includes(name))];
  state.voidOrder = nextOrder;
  state.characterOrder = nextOrder;
  state.dailyOrder = nextOrder;
  state.titleOrder = nextOrder;
  state.visualOrder = nextOrder.filter(name => state.visualSet[name]);
}

function equipmentCompletion(char) {
  const slots = char.equipment?.slots || {};
  const filled = gcFarmCatalog.equipmentSlots.filter(slot => {
    const data = normalizeEquipmentSlot(slot, slots[slot] || {});
    return Boolean(data.itemId || data.kind || data.name);
  }).length;
  const total = gcFarmCatalog.equipmentSlots.length;
  return { filled, total, percent: total ? Math.round((filled / total) * 100) : 0 };
}

function equipmentSlotButton(char, slot) {
  const data = normalizeEquipmentSlot(slot, char.equipment?.slots?.[slot] || {});
  const filled = data.itemId || data.kind || data.name;
  const item = equipmentItemById(slot, data.itemId);
  const summary = filled ? equipmentSlotSummary(data, item) : slot;
  const fullTitle = filled ? `${slot}: ${item?.name || data.name || data.kind || "preenchido"}${data.rarity ? ` (${data.rarity})` : ""}` : slot;
  const hasRealImage = filled && item?.iconSrc;
  const visibleLabel = hasRealImage ? equipmentSlotImageBadge(data) : summary;
  return `
    <button class="equipment-slot ${filled ? "has-item" : ""} ${hasRealImage ? "has-real-image" : ""}" title="${escapeHtml(fullTitle)}" onclick="openEquipmentSlot('${char.name}', '${slot}')">
      ${filled ? equipmentItemIcon(item || { iconClass: "item-generic" }) : equipmentSlotPlaceholderIcon(slot)}
      <small>${escapeHtml(visibleLabel)}</small>
    </button>
  `;
}

function equipmentSlotImageBadge(data) {
  const fort = Number(data.fortification || 0);
  return fort > 0 ? `+${fort}` : "0";
}

function equipmentSlotSummary(data, item) {
  const rarity = data.rarity || item?.rarity || data.kind || "Equipado";
  const fort = Number(data.fortification || 0);
  return fort > 0 ? `${rarity} +${fort}` : rarity;
}

function equipmentSlotPlaceholderIcon(slot) {
  return `<span class="equipment-empty-icon ${equipmentSlotIconClass(slot)}" aria-hidden="true"></span>`;
}

function equipmentSlotIconClass(slot) {
  const classes = {
    "Elmo": "slot-helmet",
    "Cota": "slot-armor",
    "Calça": "slot-pants",
    "Luva": "slot-glove",
    "Sapato": "slot-boots",
    "Capa": "slot-cape",
    "Arma principal": "slot-weapon",
    "Diadema": "slot-diadem",
    "Máscara": "slot-mask",
    "Asas": "slot-wings",
    "Facas": "slot-daggers",
    "Escudos": "slot-shield",
    "Arma secundária": "slot-secondary",
    "Anel": "slot-ring",
    "Colar": "slot-necklace",
    "Tornozeleira": "slot-anklet",
    "Brinco ou piercing 1": "slot-earring",
    "Brinco ou piercing 2": "slot-earring"
  };
  return classes[slot] || "slot-generic";
}

function equipmentSlotLabel(slot) {
  const labels = {
    "Elmo": "EL",
    "Cota": "CO",
    "Calça": "CA",
    "Luva": "LU",
    "Sapato": "SP",
    "Capa": "CP",
    "Arma principal": "AP",
    "Diadema": "DI",
    "Máscara": "MA",
    "Asas": "AS",
    "Facas": "FA",
    "Escudos": "ES",
    "Arma secundária": "AS2",
    "Anel": "AN",
    "Colar": "CL",
    "Tornozeleira": "TZ",
    "Brinco ou piercing 1": "B1",
    "Brinco ou piercing 2": "B2"
  };
  return labels[slot] || slot.slice(0, 2).toUpperCase();
}

function equipmentSlotDefaults() {
  return Object.fromEntries(gcFarmCatalog.equipmentSlots.map(slot => [slot, equipmentSlotDefault(slot)]));
}

function equipmentSlotDefault(slot) {
  return {
    slot,
    itemId: "",
    kind: "",
    name: "",
    rarity: "",
    notes: "",
    tab: "attributes",
    attributes: {},
    attributeValues: {},
    cards: [],
    fortification: 0
  };
}

function normalizeEquipmentSlot(slot, data = {}) {
  return {
    ...equipmentSlotDefault(slot),
    ...data,
    attributes: { ...(data.attributes || {}) },
    attributeValues: { ...(data.attributeValues || {}) },
    cards: Array.isArray(data.cards) ? data.cards : []
  };
}

function equipmentItemById(slot, id) {
  return (equipmentCatalog[slot] || []).find(item => item.id === id);
}

function equipmentItemIcon(item) {
  if (item?.iconSrc) {
    return `<span class="equipment-item-icon item-image"><img src="${escapeHtml(item.iconSrc)}" alt=""></span>`;
  }
  if (item?.slotIconClass) {
    return `<span class="equipment-item-icon ${item.iconClass || "item-slot"}"><span class="equipment-empty-icon ${item.slotIconClass}" aria-hidden="true"></span></span>`;
  }
  return `<span class="equipment-item-icon ${item?.iconClass || "item-generic"}"></span>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderDaily() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const rows = [...state.characters]
    .filter(char => char.name.toLowerCase().includes(q))
    .sort((a, b) => dailyOrderIndex(a.name) - dailyOrderIndex(b.name) || a.order - b.order);
  const starMissions = [
    ["forno", "Fornalha Infernal", gcFarmMissionIcons.forno, 3],
    ["altar", "Altar da Ruína", gcFarmMissionIcons.altar, 3],
    ["torre", "Torre das Ilusões", gcFarmMissionIcons.torre, 5],
    ["berkas", "Covil de Berkas", gcFarmMissionIcons.berkas, 1],
    ["extincao", "Torre da Extinção", gcFarmMissionIcons.extincao, 3]
  ];
  document.querySelector("#daily").innerHTML = `
    <section class="mission-panel">
      <button class="mission-reset" onclick="resetDaily()">Zerar rotina</button>
      <div class="mission-scroll">
        <table class="mission-table">
          <thead>
            <tr>
              <th class="mission-character-head">Personagem</th>
              ${starMissions.map(([, label, icon]) => missionHeader(label, icon)).join("")}
              ${missionHeader("Void", gcFarmMissionIcons.vazio1)}
              ${missionHeader("Vazio 4 (Apocalipse)", gcFarmMissionIcons.vazio4)}
              ${missionHeader("Caminho Abissal", gcFarmMissionIcons.abissal)}
              ${missionHeader("Terra do Julgamento", gcFarmMissionIcons.julgamento)}
            </tr>
          </thead>
          <tbody>
            ${rows.map((char, index) => `
              <tr>
                <td class="mission-char-cell">
                  <img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
                  <div class="mission-char-name-row">
                    <strong>${char.name}</strong>
                    <div class="row-order-actions">
                      <button type="button" title="Subir ${char.name}" onclick="moveDailyCharacter('${char.name}', -1)">▲</button>
                      <button type="button" title="Descer ${char.name}" onclick="moveDailyCharacter('${char.name}', 1)">▼</button>
                    </div>
                  </div>
                  <small>Ataque Total: ${(char.attack || 0).toLocaleString("pt-BR")}</small>
                  <div class="mission-progress"><span style="width:${missionProgress(char)}%"></span></div>
                  <small>${missionProgress(char)}%</small>
                </td>
                ${starMissions.map(([key,, , max]) => `<td>${missionStars(char, key, max)}</td>`).join("")}
                <td>${missionStars(char, "void", 2)}</td>
                <td>${missionStars(char, "void4", 2)}</td>
                <td>${abissalStatus(char)}</td>
                ${index === 0 ? sharedJudgmentCell(rows.length) : ""}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function missionHeader(label, icon) {
  return `<th><img class="mission-head-icon" src="${icon}" alt="${label}" onerror="this.style.display='none'"><span>${label}</span></th>`;
}

function moveDailyCharacter(name, direction) {
  const pageScroll = window.scrollY;
  const missionScroll = document.querySelector("#daily .mission-scroll");
  const tableScroll = missionScroll ? { top: missionScroll.scrollTop, left: missionScroll.scrollLeft } : { top: 0, left: 0 };
  const order = dailyOrderNames();
  const index = order.indexOf(name);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex], order[index]];
  setSharedCharacterOrder(order);
  saveState();
  renderDaily();
  requestAnimationFrame(() => {
    window.scrollTo(0, pageScroll);
    const nextMissionScroll = document.querySelector("#daily .mission-scroll");
    if (nextMissionScroll) {
      nextMissionScroll.scrollTop = tableScroll.top;
      nextMissionScroll.scrollLeft = tableScroll.left;
    }
  });
}

function dailyOrderNames() {
  return sharedCharacterOrderNames();
}

function dailyOrderIndex(name) {
  const index = dailyOrderNames().indexOf(name);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function missionStars(char, key, max) {
  const value = Number(char.daily[`${key}Stars`] ?? (char.daily[key] ? max : 0));
  const done = value > 0;
  return `
    <div class="mission-stars ${done ? "is-done" : "is-empty"}" title="${value}/${max}">
      ${Array.from({ length: max }, (_, i) => `
        <button type="button" title="${char.name}: ${i + 1}/${max}" onclick="setMissionStars('${char.name}', '${key}', ${i + 1})">
          <img class="gc-mission-star" src="${i < value ? gcFarmStarIcons.on : gcFarmStarIcons.off}" alt="${i < value ? "feito" : "pendente"}">
        </button>
      `).join("")}
    </div>
  `;
}

function sharedJudgmentCell(rowspan) {
  const done = Boolean(state.account.julgamentoDone);
  return `
    <td class="shared-routine-cell" rowspan="${rowspan}">
      <button class="shared-routine-toggle ${done ? "is-complete" : ""}" type="button" onclick="toggleSharedJudgment()">
        ${done ? "Completo" : "Incompleto"}
      </button>
    </td>
  `;
}

function toggleSharedJudgment() {
  state.account.julgamentoDone = !state.account.julgamentoDone;
  saveState();
  renderDaily();
}

function cycleMissionStars(name, key, max) {
  const char = findChar(name);
  const prop = `${key}Stars`;
  const current = Number(char.daily[prop] ?? (char.daily[key] ? max : 0));
  const next = current >= max ? 0 : current + 1;
  char.daily[prop] = next;
  char.daily[key] = next > 0;
  saveState();
  render();
}

function setMissionStars(name, key, target) {
  const char = findChar(name);
  const prop = `${key}Stars`;
  const current = Number(char.daily[prop] ?? (char.daily[key] ? target : 0));
  const next = current === target ? target - 1 : target;
  char.daily[prop] = next;
  char.daily[key] = next > 0;
  saveState();
  renderDaily();
}

function missionCounterStack(char, group, labels) {
  return `<div class="mission-counter-stack">${labels.map((label, index) => {
    const key = `${group}${index + 1}`;
    const fallback = group === "invasao" ? ["invasao", "contaminacao", "pesadelo"][index] : null;
    const value = fallback ? char.voids[fallback] : Number(char.daily[key] || 0);
    return `<button class="mission-counter" title="${label}" onclick="editMissionCounter('${char.name}', '${group}', ${index + 1}, '${fallback || ""}')"><span>${missionCounterInitial(label)}</span><strong>${Number(value || 0).toLocaleString("pt-BR")}</strong><i>✎</i></button>`;
  }).join("")}</div>`;
}

function missionCounterInitial(label) {
  return label.slice(0, 1).toUpperCase();
}

function editMissionCounter(name, group, index, fallback) {
  const char = findChar(name);
  const key = `${group}${index}`;
  const current = fallback ? char.voids[fallback] : char.daily[key] || 0;
  const next = prompt("Novo valor:", current);
  if (next === null) return;
  const value = Number(next.replace(/[.]/g, "").replace(",", ".")) || 0;
  if (fallback) char.voids[fallback] = value;
  else char.daily[key] = value;
  saveState();
  render();
}

function abissalStatus(char) {
  const done = Boolean(char.daily.abissalDone);
  return `
    <div class="abissal-status">
      <button class="mission-stars abissal-star ${done ? "is-done" : "is-empty"}" title="Caminho Abissal feito?" onclick="toggleDailyFlag('${char.name}', 'abissalDone')">
        <img class="gc-mission-star" src="${done ? gcFarmStarIcons.on : gcFarmStarIcons.off}" alt="${done ? "feito" : "pendente"}">
      </button>
    </div>
  `;
}

function toggleDailyFlag(name, key) {
  const char = findChar(name);
  char.daily[key] = !char.daily[key];
  saveState();
  render();
}

function soleneBadges(char) {
  const value = char.daily.solene || "Nenhuma";
  const badges = soleneRingOptions.map(ring => `
    <button type="button" class="solene-badge ${value === ring.id ? "is-selected" : ""}" onclick="setSolene('${char.name}', '${ring.id}')" title="${ring.label}" aria-label="${char.name}: ${ring.label}">
      <img src="${ring.icon}" alt="${ring.label}" onerror="this.style.display='none'">
    </button>
  `).join("");
  return `<div class="solene-box">${badges}<button type="button" class="solene-none" onclick="setSolene('${char.name}', 'Nenhuma')">${value}</button></div>`;
}

function setSolene(name, value) {
  findChar(name).daily.solene = value;
  saveState();
  renderVoidsPreservingScroll();
}

function missionProgress(char) {
  const starMax = { forno: 3, altar: 3, torre: 5, berkas: 1, extincao: 3, void: 2, void4: 2 };
  const filled = Object.entries(starMax)
    .reduce((sum, [key, max]) => sum + Number(char.daily[`${key}Stars`] ?? (char.daily[key] ? max : 0)), 0)
    + (char.daily.abissalDone ? 1 : 0);
  const total = Object.values(starMax).reduce((sum, value) => sum + value, 0) + 1;
  return Math.round((filled / total) * 100);
}

function renderVoids() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const rows = [...state.characters]
    .filter(char => char.name.toLowerCase().includes(q))
    .sort((a, b) => voidOrderIndex(a.name) - voidOrderIndex(b.name) || a.order - b.order);
  document.querySelector("#voids").innerHTML = `
    <section class="void-material-panel">
      <div class="void-material-scroll">
        <table class="void-material-table">
          <thead>
            <tr>
              <th>Personagem</th>
              ${voidMaterialItems.map(([, label, icon]) => `<th><img src="${icon}" alt="${label}"><span>${label}</span></th>`).join("")}
              <th><img src="${gcFarmMissionIcons.solene}" alt="Solene"><span>Solene</span></th>
              <th><span>Brinco/Piercing</span></th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(char => `
              <tr>
                <td class="void-character-cell">
                  <div class="void-character-row">
                    ${characterNameCell(char)}
                    <div class="row-order-actions">
                      <button type="button" title="Subir ${char.name}" onclick="moveVoidCharacter('${char.name}', -1)">▲</button>
                      <button type="button" title="Descer ${char.name}" onclick="moveVoidCharacter('${char.name}', 1)">▼</button>
                    </div>
                  </div>
                </td>
                ${voidMaterialItems.map(([key, label]) => `<td>${voidMaterialStepper(char, key, label)}</td>`).join("")}
                <td class="void-solene-cell">${soleneBadges(char)}</td>
                <td>${accessoryStageSelector(char, "earringsPiercing", "Brinco/Piercing")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function voidOrderNames() {
  return sharedCharacterOrderNames();
}

function voidOrderIndex(name) {
  const index = voidOrderNames().indexOf(name);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function moveVoidCharacter(name, direction) {
  const order = voidOrderNames();
  const index = order.indexOf(name);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex], order[index]];
  setSharedCharacterOrder(order);
  saveState();
  renderVoidsPreservingScroll();
}

function renderVoidsPreservingScroll() {
  const pageScroll = window.scrollY;
  const materialScroll = document.querySelector("#voids .void-material-scroll");
  const tableScroll = materialScroll ? { top: materialScroll.scrollTop, left: materialScroll.scrollLeft } : { top: 0, left: 0 };
  renderVoids();
  requestAnimationFrame(() => {
    window.scrollTo(0, pageScroll);
    const nextMaterialScroll = document.querySelector("#voids .void-material-scroll");
    if (nextMaterialScroll) {
      nextMaterialScroll.scrollTop = tableScroll.top;
      nextMaterialScroll.scrollLeft = tableScroll.left;
    }
  });
}

function accessoryStageSelector(char, key, label) {
  const value = key === "earringsPiercing"
    ? (char.accessories?.earrings || char.accessories?.piercing || "")
    : (char.accessories?.[key] || "");
  return `
    <div class="accessory-stage" aria-label="${label} de ${char.name}">
      ${accessoryStages.map(([stage, stageLabel]) => `
        <button type="button" class="${value === stage ? "is-selected" : ""}" onclick="setAccessoryStage('${char.name}', '${key}', '${stage}')">${stageLabel}</button>
      `).join("")}
    </div>
  `;
}

function setAccessoryStage(name, key, stage) {
  const char = findChar(name);
  if (key === "earringsPiercing") {
    const current = char.accessories?.earrings || char.accessories?.piercing || "";
    const next = current === stage ? "" : stage;
    char.accessories = { ...(char.accessories || {}), earrings: next, piercing: next };
  } else {
    const current = char.accessories?.[key] || "";
    char.accessories = { ...(char.accessories || {}), [key]: current === stage ? "" : stage };
  }
  saveState();
  renderVoidsPreservingScroll();
}

function voidMaterialStepper(char, key, label) {
  const value = Number(char.materials?.[key] || 0);
  return `
    <div class="void-material-stepper" aria-label="${char.name}: ${label}">
      <button type="button" title="Diminuir ${label}" onclick="stepVoidMaterial('${char.name}', '${key}', -1)">‹</button>
      <input class="void-material-value" type="text" inputmode="numeric" value="${value.toLocaleString("pt-BR")}" title="Editar ${label}" aria-label="${label} de ${char.name}" onfocus="this.select()" onkeydown="commitVoidMaterialInput(event, '${char.name}', '${key}')" onblur="setVoidMaterialFromInput('${char.name}', '${key}', this.value)">
      <button type="button" title="Aumentar ${label}" onclick="stepVoidMaterial('${char.name}', '${key}', 1)">›</button>
    </div>
  `;
}

function setVoidMaterial(name, key, value) {
  const char = findChar(name);
  const amount = Math.max(0, Math.round(Number(value || 0)));
  char.materials = { ...(char.materials || {}), [key]: amount };
  if (key === "voidOrange") char.voids.invasao = amount;
  if (key === "voidBlue") char.voids.pesadelo = amount;
  saveState();
  renderVoidsPreservingScroll();
}

function stepVoidMaterial(name, key, delta) {
  const char = findChar(name);
  const current = Number(char.materials?.[key] || 0);
  setVoidMaterial(name, key, current + delta);
}

function commitVoidMaterialInput(event, name, key) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  setVoidMaterialFromInput(name, key, event.currentTarget.value);
}

function setVoidMaterialFromInput(name, key, raw) {
  const value = Number(String(raw).replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(value)) {
    renderVoidsPreservingScroll();
    return;
  }
  setVoidMaterial(name, key, value);
}

function editVoidMaterial(name, key, label) {
  const char = findChar(name);
  const raw = prompt(`${label} de ${name}`, Number(char.materials?.[key] || 0));
  if (raw === null) return;
  const value = Number(String(raw).replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(value)) return;
  setVoidMaterial(name, key, value);
}

function renderTitles() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const rows = [...state.characters]
    .filter(char => char.name.toLowerCase().includes(q))
    .sort((a, b) => titleOrderIndex(a.name) - titleOrderIndex(b.name) || a.order - b.order);
  const groups = titleBoardGroups();
  document.querySelector("#titles").innerHTML = `
    <section class="title-board-panel">
      <div class="title-board-toolbar">
        <div>
          <h2>Títulos dos Personagens</h2>
          <p class="muted">Status por TA e acompanhamento dos títulos por personagem.</p>
        </div>
        <div class="title-board-legend">
          <span><i class="title-dot title-done"></i>feito</span>
          <span><i class="title-dot title-missing"></i>pendente</span>
          <span><i class="title-dot title-status-ok"></i>TA atingido</span>
          <span><i class="title-dot title-status-low"></i>faltando TA</span>
        </div>
      </div>
      <div class="title-board-scroll">
        <table class="title-board-table">
          <thead>
            <tr>
              <th class="title-date-head" colspan="2">Data: 26 julho.</th>
              <th class="title-group-head" colspan="${titleStatusMilestones.length}">Status</th>
              ${groups.map(group => `<th class="title-group-head" colspan="${group.items.length}">${group.category}</th>`).join("")}
            </tr>
            <tr>
              <th class="title-character-head">Char</th>
              <th class="title-at-head">AT</th>
              ${titleStatusMilestones.map(value => `<th class="title-status-head">${value}</th>`).join("")}
              ${titleBoardItems.map(item => `
                <th class="title-icon-head" title="${item.category}: ${item.name}">
                  <img src="${item.icon}" alt="${item.name}" onerror="this.style.display='none'">
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.map(char => titleBoardRow(char)).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function titleBoardGroups() {
  return titleBoardItems.reduce((groups, item) => {
    const current = groups[groups.length - 1];
    if (current && current.category === item.category) current.items.push(item);
    else groups.push({ category: item.category, items: [item] });
    return groups;
  }, []);
}

function titleBoardRow(char) {
  const completed = titleCompletedCount(char);
  char.titles = { ...(char.titles || {}), done: completed, total: titleBoardItems.length };
  return `
    <tr>
      <td class="title-character-cell">
        ${characterNameCell(char)}
        <div class="row-order-actions">
          <button type="button" title="Subir ${char.name}" onclick="moveTitleCharacter('${char.name}', -1)">▲</button>
          <button type="button" title="Descer ${char.name}" onclick="moveTitleCharacter('${char.name}', 1)">▼</button>
        </div>
      </td>
      <td class="title-at-cell">
        <input type="text" inputmode="numeric" value="${Number(char.ta || 0).toLocaleString("pt-BR")}" aria-label="AT de ${char.name}" onchange="setTitleAttack('${char.name}', this.value)" onblur="setTitleAttack('${char.name}', this.value)" onkeydown="if(event.key === 'Enter') this.blur()">
      </td>
      ${titleStatusMilestones.map(value => titleStatusCell(char, value)).join("")}
      ${titleBoardItems.map(item => titleProgressCell(char, item)).join("")}
    </tr>
  `;
}

function titleStatusCell(char, value) {
  const done = char.titleStatus?.[value] ?? Number(char.ta || 0) >= value;
  return `
    <td class="title-status-cell ${done ? "is-ready" : "is-low"}" title="${char.name}: marco ${value}">
      <button type="button" aria-label="${char.name}: marco ${value}" onclick="toggleTitleStatus('${char.name}', ${value})">
        ${done ? "<span>✓</span>" : ""}
      </button>
    </td>
  `;
}

function titleProgressCell(char, item) {
  const done = Boolean(char.titleBoard?.[item.id]);
  return `
    <td class="title-progress-cell ${done ? "is-done" : "is-missing"}" title="${char.name}: ${item.name}">
      <button type="button" aria-label="${char.name}: ${item.name}" onclick="toggleTitleProgress('${char.name}', '${item.id}')">
        <span>${done ? "✓" : "×"}</span>
      </button>
    </td>
  `;
}

function titleCompletedCount(char) {
  const board = char.titleBoard || {};
  return titleBoardItems.filter(item => board[item.id]).length;
}

function toggleTitleProgress(name, titleId) {
  const char = findChar(name);
  char.titleBoard = { ...(char.titleBoard || {}), [titleId]: !char.titleBoard?.[titleId] };
  char.titles = { done: titleCompletedCount(char), total: titleBoardItems.length };
  saveState();
  renderTitles();
}

function toggleTitleStatus(name, value) {
  const char = findChar(name);
  const current = char.titleStatus?.[value] ?? Number(char.ta || 0) >= value;
  const next = !current;
  const status = { ...titleStatusDefault(char.ta), ...(char.titleStatus || {}) };
  titleStatusMilestones.forEach(milestone => {
    if (next && milestone <= value) status[milestone] = true;
    if (!next && milestone >= value) status[milestone] = false;
  });
  char.titleStatus = status;
  saveState();
  renderTitles();
}

function setTitleAttack(name, raw) {
  const char = findChar(name);
  const value = Number(String(raw).replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(value) || value < 0) return;
  char.ta = Math.round(value);
  char.titleStatus = titleStatusDefault(char.ta);
  saveState();
  renderTitles();
  renderDashboard();
}

function moveTitleCharacter(name, direction) {
  const pageScroll = window.scrollY;
  const titleScroll = document.querySelector("#titles .title-board-scroll");
  const tableScroll = titleScroll ? { top: titleScroll.scrollTop, left: titleScroll.scrollLeft } : { top: 0, left: 0 };
  const order = titleOrderNames();
  const index = order.indexOf(name);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex], order[index]];
  setSharedCharacterOrder(order);
  saveState();
  renderTitles();
  requestAnimationFrame(() => {
    window.scrollTo(0, pageScroll);
    const nextTitleScroll = document.querySelector("#titles .title-board-scroll");
    if (nextTitleScroll) {
      nextTitleScroll.scrollTop = tableScroll.top;
      nextTitleScroll.scrollLeft = tableScroll.left;
    }
  });
}

function titleOrderNames() {
  return sharedCharacterOrderNames();
}

function titleOrderIndex(name) {
  const index = titleOrderNames().indexOf(name);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function renderVisualSet() {
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const rows = state.characters
    .filter(char => state.visualSet[char.name])
    .filter(char => char.name.toLowerCase().includes(q))
    .sort((a, b) => visualOrderIndex(a.name) - visualOrderIndex(b.name) || a.order - b.order);
  document.querySelector("#visualSet").innerHTML = `
    <div class="visual-layout">
      <section class="visual-board panel">
        <div class="panel-header">
          <div>
            <h2>Peças do Conjunto Visual</h2>
            <p class="muted">Base importada da aba Conjunto Visual</p>
          </div>
          <span class="pill good">${rows.length} personagens</span>
        </div>
        <div class="visual-legend">
          <span><i class="legend-dot cell-best"></i>ideal da planilha</span>
          <span><i class="legend-dot cell-neutral"></i>alternativa ou dano critico</span>
          <span><i class="legend-dot cell-warn"></i>temporada ruim no slot</span>
          <span><i class="legend-dot cell-none"></i>vazio</span>
        </div>
        <div class="visual-scroll">
          <table class="visual-table">
            <thead>
              <tr>
                <th class="char-col">Char</th>
                <th class="accuracy-col">Acerto</th>
                ${visualSetSlots.map(slot => `<th>${slot}</th>`).join("")}
                <th>Meta</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(char => visualSetRow(char)).join("")}
            </tbody>
          </table>
        </div>
      </section>
      <aside class="visual-notes panel">
        <div class="panel-header">
          <div>
            <h2>Builds visuais</h2>
            <p class="muted">Acerto crítico separado de dano crítico</p>
          </div>
          <span class="pill warn">referência</span>
        </div>
        <div class="visual-note-list">
          ${visualSetBuilds.map(visualBuildNotes).join("")}
        </div>
      </aside>
    </div>
  `;
}

function visualBuildNotes(build) {
  return `
    <section class="visual-build-note">
      <header>
        <h3>${build.title}</h3>
        <span>${build.tag}</span>
      </header>
      ${build.notes.map(([name, season, hint]) => `<div class="visual-note"><strong>${name}</strong><span>${season}</span><small>${hint}</small></div>`).join("")}
    </section>
  `;
}

function visualSetRow(char) {
  const row = state.visualSet[char.name] || {};
  const meta = visualSetMetaScore(row);
  return `
    <tr>
      <td class="char-cell">
        <img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
        <span>${char.name}</span>
        <div class="row-order-actions">
          <button type="button" title="Subir ${char.name}" onclick="moveVisualCharacter('${char.name}', -1)">▲</button>
          <button type="button" title="Descer ${char.name}" onclick="moveVisualCharacter('${char.name}', 1)">▼</button>
        </div>
      </td>
      <td class="accuracy-cell"><span>${meta.acerto * visualAccuracyPerPiece}%</span><small>${meta.acerto} peças</small></td>
      ${visualSetSlots.map(slot => visualSetCell(char.name, slot, row[slot])).join("")}
      <td><span class="pill ${meta.ideal >= 8 ? "good" : meta.ideal >= 4 ? "warn" : "bad"}" title="${meta.alt} alternativa(s)">${meta.ideal}/12</span></td>
    </tr>
  `;
}

function visualSetCell(name, slot, value = "Nenhum") {
  const cls = slot === "Pet" ? (value === "Sim" ? "cell-pet" : "cell-none") : visualSetClass(slot, value);
  const title = slot === "Pet" ? "Pet visual" : visualSetTitle(slot, value);
  return `<td><button class="visual-cell ${cls}" title="${title}" aria-label="${slot}: ${value}" onclick="cycleVisualSet('${name}','${slot}')"><span>${visualSetLabel(value)}</span></button></td>`;
}

function visualSetLabel(value) {
  if (!value || value === "Nenhum") return "Nenhum";
  const season = value.match(/^SEASON\s+(\d+)$/);
  return season ? `S${season[1]}` : value;
}

function visualSetClass(slot, value) {
  if (!value || value === "Nenhum") return "cell-none";
  const rule = visualSetRules[slot] || { ideal: [], alt: [] };
  if (rule.ideal[0] === value) return "cell-best";
  if (rule.ideal.includes(value)) return "cell-good";
  if (rule.alt.includes(value)) return "cell-neutral";
  return "cell-warn";
}

function visualSetTitle(slot, value) {
  if (!value || value === "Nenhum") return `${slot}: vazio`;
  const rule = visualSetRules[slot] || { ideal: [], alt: [], hint: "" };
  if (rule.ideal.includes(value)) return `${slot}: ideal (${rule.hint})`;
  if (rule.alt.includes(value)) return `${slot}: alternativa (${rule.hint})`;
  return `${slot}: ruim para esse slot na tabela`;
}

function visualSetMetaScore(row) {
  return visualSetSlots
    .filter(slot => slot !== "Pet")
    .reduce((score, slot) => {
      const rule = visualSetRules[slot] || { ideal: [], alt: [] };
      const value = row[slot];
      const matchesReference = rule.ideal.includes(value) || rule.alt.includes(value);
      const givesAccuracy = /acerto/i.test(rule.hint || "") && matchesReference;
      return {
        ideal: score.ideal + (rule.ideal.includes(value) ? 1 : 0),
        alt: score.alt + (rule.alt.includes(value) ? 1 : 0),
        acerto: score.acerto + (givesAccuracy ? 1 : 0)
      };
    }, { ideal: 0, alt: 0, acerto: 0 });
}

function cycleVisualSet(name, slot) {
  const row = state.visualSet[name] || {};
  const options = slot === "Pet" ? ["Não", "Sim"] : visualSetOptions;
  const current = row[slot] || options[0];
  const next = options[(options.indexOf(current) + 1) % options.length] || options[0];
  state.visualSet[name] = { ...row, [slot]: next };
  saveState();
  render();
}

function moveVisualCharacter(name, direction) {
  const pageScroll = window.scrollY;
  const visualScroll = document.querySelector("#visualSet .visual-scroll");
  const tableScroll = visualScroll ? { top: visualScroll.scrollTop, left: visualScroll.scrollLeft } : { top: 0, left: 0 };
  const order = visualOrderNames();
  const index = order.indexOf(name);
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex], order[index]];
  setSharedCharacterOrder(order);
  saveState();
  render();
  requestAnimationFrame(() => {
    window.scrollTo(0, pageScroll);
    const nextVisualScroll = document.querySelector("#visualSet .visual-scroll");
    if (nextVisualScroll) {
      nextVisualScroll.scrollTop = tableScroll.top;
      nextVisualScroll.scrollLeft = tableScroll.left;
    }
  });
}

function visualOrderNames() {
  return sharedCharacterOrderNames(char => state.visualSet[char.name]);
}

function visualOrderIndex(name) {
  const index = visualOrderNames().indexOf(name);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function renderVisual() {
  const visualRows = Object.entries(gcFarmCatalog.visualClasses).flatMap(([character, entries]) =>
    entries.map((entry, index) => {
      const [className, attr] = entry.split("=");
      return { id: visualCollectionId(character, className), character, className, attr };
    })
  ).map((row, index) => ({ ...row, image: visualCollectionImage(index) }));
  const q = document.querySelector("#search").value.trim().toLowerCase();
  const filters = ["Todos", ...gcFarmCatalog.visualAttributes];
  const filteredRows = visualRows.filter(row => {
    const matchesText = [row.character, row.className, row.attr].some(value => value.toLowerCase().includes(q));
    const matchesFilter = visualCollectionFilter === "Todos" || row.attr === visualCollectionFilter;
    return matchesText && matchesFilter;
  });
  document.querySelector("#visual").innerHTML = `
    <section class="visual-collection-page">
      <h2>Coleção Visual dos Personagens</h2>
      <div class="visual-filter-row">
        <label for="visualCollectionFilter">Filtrar por atributo:</label>
        <select id="visualCollectionFilter" onchange="setVisualCollectionFilter(this.value)">
          ${filters.map(filter => `<option value="${filter}" ${visualCollectionFilter === filter ? "selected" : ""}>${filter}</option>`).join("")}
        </select>
      </div>
      <div class="visual-collection-count">${filteredRows.length}/${visualRows.length}</div>
      <div class="visual-card-grid">
        ${filteredRows.map(visualCollectionCard).join("") || `<p class="muted">Nenhum visual encontrado com esse filtro.</p>`}
      </div>
    </section>
  `;
}

function visualCollectionCard(row) {
  const owned = Boolean(state.visualCollectionOwned?.[row.id]);
  return `
    <article class="visual-collection-card ${owned ? "is-owned" : ""}">
      <button class="visual-owned-toggle" type="button" onclick="toggleVisualCollectionOwned('${row.id}')" title="${owned ? "Coleção marcada" : "Marcar coleção"}" aria-label="${owned ? "Desmarcar" : "Marcar"} ${row.character} ${row.className}">
        ${owned ? "✓" : ""}
      </button>
      <img src="${row.image}" alt="${row.character} ${row.className}" loading="lazy" onerror="this.onerror=null;this.src='${visualCharacterBaseImage(row.character)}'">
      <div>
        <strong>${row.character}</strong>
        <span>${row.className}</span>
        <small>${row.attr}</small>
      </div>
    </article>
  `;
}

function visualCollectionId(character, className) {
  return `${character}:${className}`;
}

function toggleVisualCollectionOwned(id) {
  state.visualCollectionOwned = { ...(state.visualCollectionOwned || {}) };
  if (state.visualCollectionOwned[id]) delete state.visualCollectionOwned[id];
  else state.visualCollectionOwned[id] = true;
  saveState();
  renderVisual();
}

function visualCollectionImage(index) {
  return `./assets/visual-collection/${String(index + 1).padStart(3, "0")}.webp`;
}

function visualCharacterBaseImage(character) {
  return `https://gcfarm.com.br/img/char/${visualCharacterName(character)}_1.webp`;
}

function visualCharacterName(character) {
  const names = {
    ELESIS: "Elesis", LIRE: "Lire", ARME: "Arme", LASS: "Lass", RYAN: "Ryan", RONAN: "Ronan",
    AMY: "Amy", JIN: "Jin", SIEGHART: "Sieghart", MARI: "Mari", DIO: "Dio", ZERO: "Zero",
    REY: "Rey", LUPUS: "Lupus", LIN: "Lin", AZIN: "Azin", HOLY: "Holy", EDEL: "Edel",
    VEIGAS: "Veigas", DECANE: "Decane", AI: "Ai", KALLIA: "Kallia", UNO: "Uno", IRIS: "Iris"
  };
  return names[character] || character;
}

function visualFilterLabel(filter) {
  if (filter === "Todos") return "Todos";
  return filter
    .replace("ACERTO CRÍTICO", "Acerto")
    .replace("DANO CRÍTICO", "Dano crit.")
    .replace("ATAQUE ESPECIAL", "Atk esp.")
    .replace("ATAQUE", "Ataque")
    .replace("DEFESA", "Defesa")
    .replace("MP RECUPERADO", "MP rec.")
    .replace("HP RECUPERADO", "HP rec.")
    .replace("RESISTÊNCIA A DANO DE ATAQUES CRÍTICOS", "Resist. crit.")
    .replace("LANÇA INFERNAL, DANO", "Lança inf.")
    .replace("VITALIDADE", "Vitalidade");
}

function setVisualCollectionFilter(filter) {
  visualCollectionFilter = filter;
  render();
}

function renderGcFarm() {
  const visibleItems = gcFarmCatalog.sharedItems.filter(item => item.toLowerCase().includes(document.querySelector("#search").value.trim().toLowerCase()));
  document.querySelector("#gcfarm").innerHTML = `
    <div class="stats">
      ${stat("Personagens", state.characters.length, "inclui Ereb")}
      ${stat("Missões", gcFarmCatalog.missions.length, "desafios e rotações")}
      ${stat("Slots", gcFarmCatalog.equipmentSlots.length, "equipamento completo")}
      ${stat("Itens", gcFarmCatalog.sharedItems.length, "inventário compartilhado")}
    </div>
    <section class="panel">
      <div class="panel-header">
        <h2>Mapa copiado do GCFarm</h2>
        <span class="pill good">referência local</span>
      </div>
      <div class="catalog-grid">
        ${gcFarmCatalog.pages.map(page => `<span class="catalog-chip">${page}</span>`).join("")}
        ${gcFarmCatalog.publicPages.map(page => `<span class="catalog-chip">${page}</span>`).join("")}
        ${gcFarmCatalog.dashboardMetrics.map(metric => `<span class="catalog-chip">${metric}</span>`).join("")}
        ${gcFarmCatalog.rankingColumns.map(col => `<span class="catalog-chip">Ranking: ${col}</span>`).join("")}
      </div>
    </section>
    <section class="panel">
      <div class="panel-header">
        <h2>Missões e controles</h2>
        <span class="muted">igual ao eixo do GCFarm</span>
      </div>
      <table>
        <thead><tr><th>Missão</th><th>Tipo</th><th>Controle</th></tr></thead>
        <tbody>${gcFarmCatalog.missions.map(([name, type, mode]) => `<tr><td>${name}</td><td>${type}</td><td>${mode}</td></tr>`).join("")}</tbody>
      </table>
    </section>
    <div class="two-col">
      <section class="panel">
        <div class="panel-header">
          <h2>Slots de equipamento</h2>
          <span class="muted">${gcFarmCatalog.equipmentTabs.join(" · ")}</span>
        </div>
        <div class="catalog-grid">${gcFarmCatalog.equipmentSlots.map(slot => `<span class="catalog-chip">${slot}</span>`).join("")}</div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <h2>Atributos visuais</h2>
          <span class="muted">filtro da coleção</span>
        </div>
        <div class="catalog-grid">${gcFarmCatalog.visualAttributes.map(attr => `<span class="catalog-chip">${attr}</span>`).join("")}</div>
      </section>
    </div>
    <section class="panel">
      <div class="panel-header">
        <h2>Itens do inventário compartilhado</h2>
        <span class="muted">${visibleItems.length}/${gcFarmCatalog.sharedItems.length}</span>
      </div>
      <div class="catalog-grid">${visibleItems.map(item => `<span class="catalog-chip">${item}</span>`).join("")}</div>
    </section>
  `;
}

function renderAutomation() {
  document.querySelector("#automation").innerHTML = `
    <div class="two-col">
      <section class="panel">
        <div class="panel-header">
          <h2>Leitor de screenshot</h2>
          <span class="pill warn">semi-automatico</span>
        </div>
        <div class="dropzone">
          <p class="muted">Suba um print da tela de atributos/equipamento. O OCR tenta achar personagem, level e ataque total; você confirma antes de salvar. Esse é o caminho para atualizar os dados que não são visual.</p>
          <input id="screenshotInput" type="file" accept="image/*">
          <img id="shotPreview" class="preview" alt="Preview do print">
          <button onclick="runOcr()">Extrair texto do print</button>
          <textarea id="ocrText" rows="8" placeholder="O texto extraido aparece aqui. Tambem da para colar manualmente."></textarea>
          <button onclick="applyOcrText()">Aplicar leitura sugerida</button>
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <h2>Como automatizar melhor</h2>
          <span class="muted">sem tocar no jogo</span>
        </div>
        <table>
          <tbody>
            <tr><td>Importar planilha</td><td>Use o JSON exportado aqui como backup e ponte entre versoes.</td></tr>
            <tr><td>Prints do jogo</td><td>Mais seguro: print manual, OCR local/no navegador e confirmacao.</td></tr>
            <tr><td>Ver o jogo aberto</td><td>Eu consigo analisar uma janela ou print se voce abrir/mandar, mas nao vou automatizar jogadas ou entradas no cliente.</td></tr>
            <tr><td>Proximo passo</td><td>Mapear uma tela real de personagem para melhorar o parser do OCR.</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  `;
  const input = document.querySelector("#screenshotInput");
  if (input) input.addEventListener("change", previewShot);
}

function voidTotal(char) {
  return Object.values(char.voids).reduce((sum, value) => sum + Number(value || 0), 0);
}

function findChar(name) {
  return state.characters.find(char => char.name === name);
}

function toggleDaily(name, key) {
  const char = findChar(name);
  char.daily[key] = !char.daily[key];
  saveState();
  render();
}

function setDailyValue(name, key, value) {
  findChar(name).daily[key] = Number(value || 0);
  saveState();
}

function setVoid(name, key, value) {
  findChar(name).voids[key] = Number(value || 0);
  saveState();
  render();
}

function setVisualMissing(name, value) {
  findChar(name).visual.missing = Number(value || 0);
  saveState();
  render();
}

function resetDaily() {
  state.characters.forEach(char => {
    Object.keys(char.daily).forEach(key => {
      if (typeof char.daily[key] === "boolean") char.daily[key] = false;
      if (key.endsWith("Stars")) char.daily[key] = 0;
    });
  });
  state.account.julgamentoDone = false;
  saveState();
  render();
}

function openEditor(name) {
  selectedCharacter = findChar(name);
  selectedEquipmentSlot = null;
  selectedEquipmentTab = "attributes";
  document.querySelector("#editor").classList.remove("equipment-editor-dialog");
  document.querySelector("#editorTitle").textContent = `Editar ${name}`;
  document.querySelector("#editorBody").innerHTML = `
    <label class="field">Level <input id="editLevel" type="number" value="${selectedCharacter.level}"></label>
    <label class="field">TA <input id="editTa" type="number" value="${selectedCharacter.ta}"></label>
    <label class="field">Ataque total <input id="editAttack" type="number" value="${selectedCharacter.attack}"></label>
    <label class="field">Arma <input id="editWeapon" value="${selectedCharacter.equipment.weapon}"></label>
    <label class="field">Armadura <input id="editArmor" value="${selectedCharacter.equipment.armor}"></label>
    <label class="field">Notas <textarea id="editNotes" rows="4">${selectedCharacter.notes || ""}</textarea></label>
  `;
  document.querySelector("#editor").showModal();
}

function openEquipmentSlot(name, slot) {
  selectedCharacter = findChar(name);
  selectedEquipmentSlot = slot;
  selectedCharacter.equipment.slots = { ...equipmentSlotDefaults(), ...(selectedCharacter.equipment.slots || {}) };
  selectedCharacter.equipment.slots[slot] = normalizeEquipmentSlot(slot, selectedCharacter.equipment.slots[slot]);
  selectedEquipmentTab = selectedCharacter.equipment.slots[slot].tab || "attributes";
  document.querySelector("#editor").classList.add("equipment-editor-dialog");
  renderEquipmentSlotEditor();
  document.querySelector("#editor").showModal();
}

function currentEquipmentSlotData() {
  return selectedCharacter.equipment.slots[selectedEquipmentSlot] = normalizeEquipmentSlot(
    selectedEquipmentSlot,
    selectedCharacter.equipment.slots[selectedEquipmentSlot]
  );
}

function renderEquipmentSlotEditor() {
  const data = currentEquipmentSlotData();
  const item = equipmentItemById(selectedEquipmentSlot, data.itemId) || {
    id: "",
    name: data.name || "Nenhum equipamento selecionado",
    type: selectedEquipmentSlot.toLowerCase(),
    level: "",
    rarity: data.rarity || "",
    iconClass: "item-empty",
    slotIconClass: equipmentSlotIconClass(selectedEquipmentSlot),
    mainAttributes: [],
    secondaryLimit: 3,
    secondaryRanges: {}
  };
  const selectedItem = equipmentItemById(selectedEquipmentSlot, currentEquipmentSlotData().itemId) || item;
  document.querySelector("#editorTitle").textContent = "";
  document.querySelector("#editorBody").innerHTML = `
    <div class="slot-editor">
      <aside class="slot-editor-side">
        <span class="slot-editor-kicker">Slot ${gcFarmCatalog.equipmentSlots.indexOf(selectedEquipmentSlot) + 1}</span>
        <h2>${selectedEquipmentSlot}</h2>
        <p>Escolha o equipamento e confirme os atributos do slot.</p>
        <span class="slot-editor-character"><img src="${selectedCharacter.image}" alt="">${selectedCharacter.name}</span>
        <section class="slot-item-list">
          <h3>Equipamentos do slot</h3>
          <input id="slotItemSearch" type="search" placeholder="Buscar equipamento" oninput="filterSlotItems(this.value)">
          <div id="slotItemList">${equipmentItemListHtml(selectedItem.id)}</div>
        </section>
      </aside>
      <section class="slot-editor-main">
        <div class="slot-editor-top">
          <div class="slot-item-preview">${equipmentItemIcon(selectedItem)}</div>
          <div class="slot-current-card">
            <strong>${escapeHtml(selectedItem.name || data.name || selectedEquipmentSlot)}</strong>
            <small>${escapeHtml(selectedItem.type || selectedEquipmentSlot.toLowerCase())}${selectedItem.level ? ` · Level ${selectedItem.level}` : ""}</small>
            <label>Raridade:
              <select id="slotRarity">
                ${equipmentRarities.map(rarity => `<option value="${rarity}" ${(data.rarity || selectedItem.rarity) === rarity ? "selected" : ""}>${rarity}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="slot-editor-actions">
            <button type="button" onclick="clearEquipmentSlot()">Limpar slot</button>
            <button type="button" onclick="document.querySelector('#editor').close()">Fechar</button>
            <button type="button" class="slot-save-button" onclick="saveEquipmentSlotFromEditor()">Salvar</button>
          </div>
        </div>
        <section class="slot-detail-panel">
          <h3>Atributos principais</h3>
          <div class="slot-main-attributes">${(selectedItem.mainAttributes || []).map(attr => `<span>${escapeHtml(attr)}</span>`).join("") || `<span>Sem atributo principal cadastrado</span>`}</div>
          <div class="slot-tabs">
            ${equipmentTabButton("attributes", "Atributos")}
            ${equipmentTabButton("cards", "Cartas")}
            ${equipmentTabButton("fortification", "Fortificação")}
          </div>
          ${equipmentTabContent(selectedItem, data)}
        </section>
      </section>
    </div>
  `;
}

function equipmentItemListHtml(selectedId, query = "") {
  const items = equipmentCatalog[selectedEquipmentSlot] || [];
  const visible = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  return (visible.length ? visible : [{
    id: "manual",
    name: `${selectedEquipmentSlot} manual`,
    type: selectedEquipmentSlot.toLowerCase(),
    level: "",
    iconClass: "item-generic"
  }]).map(item => `
    <button type="button" class="slot-item-option ${selectedId === item.id ? "is-selected" : ""}" onclick="applyEquipmentItem('${item.id}', true)">
      ${equipmentItemIcon(item)}
      <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.type)}${item.level ? ` · Level ${item.level}` : ""}</small></span>
    </button>
  `).join("");
}

function filterSlotItems(query) {
  document.querySelector("#slotItemList").innerHTML = equipmentItemListHtml(currentEquipmentSlotData().itemId, query);
}

function applyEquipmentItem(itemId, rerender = true) {
  const item = equipmentItemById(selectedEquipmentSlot, itemId);
  const data = currentEquipmentSlotData();
  if (item) {
    data.itemId = item.id;
    data.name = item.name;
    data.kind = item.type;
    data.rarity = data.rarity || item.rarity || "";
  } else {
    data.itemId = "";
    data.name = "";
  }
  if (rerender) renderEquipmentSlotEditor();
}

function equipmentTabButton(tab, label) {
  return `<button type="button" class="${selectedEquipmentTab === tab ? "is-active" : ""}" onclick="setEquipmentTab('${tab}')">${label}</button>`;
}

function setEquipmentTab(tab) {
  updateEquipmentSlotDraftFromForm();
  selectedEquipmentTab = tab;
  currentEquipmentSlotData().tab = tab;
  renderEquipmentSlotEditor();
}

function equipmentTabContent(item, data) {
  if (selectedEquipmentTab === "cards") return equipmentCardsPanel(data);
  if (selectedEquipmentTab === "fortification") return equipmentFortificationPanel(data);
  return equipmentAttributesPanel(item, data);
}

function equipmentAttributesPanel(item, data) {
  const selectedCount = Object.values(data.attributes || {}).filter(Boolean).length;
  const limit = item.secondaryLimit || 3;
  return `
    <h3>Atributos secundários</h3>
    <p class="slot-help">Opcional: deixe sem seleção ou complete até ${limit} atributo(s). Atual: ${selectedCount}.</p>
    <div class="slot-attribute-grid">
      ${equipmentAttributeOptions.map(([key, label, fallback]) => {
        const range = item.secondaryRanges?.[key] || `${label} ${fallback}`;
        const checked = data.attributes?.[key] ? "checked" : "";
        const value = data.attributeValues?.[key] || "";
        return `
          <label class="slot-attribute">
            <input type="checkbox" data-attr-key="${key}" ${checked}>
            <span><strong>${label}</strong><small>${range}</small></span>
            <input class="slot-attribute-value" data-attr-value="${key}" value="${escapeHtml(value)}" placeholder="${escapeHtml(fallback)}">
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function equipmentCardsPanel(data) {
  const cards = Array.isArray(data.cards) ? data.cards : [];
  return `
    <h3>Cartas</h3>
    <p class="slot-help">Clique nas cartas abaixo para preencher até 4 slots. Clique em um slot preenchido para remover a carta.</p>
    <div class="slot-card-slots">
      ${Array.from({ length: 4 }, (_, index) => {
        const card = cards[index];
        return `<button type="button" onclick="removeEquipmentCard(${index})"><strong>${card ? escapeHtml(card.name) : "+"}</strong><small>Slot ${index + 1}</small><em>${card ? escapeHtml(card.attr) : "Vazio"}</em></button>`;
      }).join("")}
    </div>
    <input class="slot-card-search" type="search" placeholder="Buscar carta" oninput="filterEquipmentCards(this.value)">
    <div id="slotCardCatalog" class="slot-card-catalog">${equipmentCardCatalogHtml("")}</div>
  `;
}

function equipmentCardCatalogHtml(query) {
  return equipmentCardsCatalog
    .filter(card => card.name.toLowerCase().includes(query.toLowerCase()) || card.attr.toLowerCase().includes(query.toLowerCase()))
    .map(card => `<button type="button" onclick="addEquipmentCard('${card.id}')"><span>+</span><strong>${escapeHtml(card.name)}</strong><small>${escapeHtml(card.attr)}</small></button>`)
    .join("");
}

function filterEquipmentCards(query) {
  document.querySelector("#slotCardCatalog").innerHTML = equipmentCardCatalogHtml(query);
}

function addEquipmentCard(cardId) {
  updateEquipmentSlotDraftFromForm();
  const data = currentEquipmentSlotData();
  if (data.cards.length >= 4) return;
  const card = equipmentCardsCatalog.find(item => item.id === cardId);
  if (card) data.cards.push(card);
  renderEquipmentSlotEditor();
}

function removeEquipmentCard(index) {
  updateEquipmentSlotDraftFromForm();
  currentEquipmentSlotData().cards.splice(index, 1);
  renderEquipmentSlotEditor();
}

function equipmentFortificationPanel(data) {
  return `
    <h3>Fortificação</h3>
    <p class="slot-help">Informe um valor entre 0 e 18.</p>
    <div class="slot-fortification">
      <span class="fortification-stone"></span>
      <strong>Nível de fortificação</strong>
      <input id="slotFortification" type="number" min="0" max="18" value="${Number(data.fortification || 0)}">
    </div>
  `;
}

function updateEquipmentSlotDraftFromForm() {
  if (!selectedCharacter || !selectedEquipmentSlot) return;
  const data = currentEquipmentSlotData();
  const rarity = document.querySelector("#slotRarity");
  if (rarity) data.rarity = rarity.value;
  const fortification = document.querySelector("#slotFortification");
  if (fortification) data.fortification = Math.max(0, Math.min(18, Number(fortification.value || 0)));
  document.querySelectorAll("[data-attr-key]").forEach(input => {
    data.attributes[input.dataset.attrKey] = input.checked;
  });
  document.querySelectorAll("[data-attr-value]").forEach(input => {
    data.attributeValues[input.dataset.attrValue] = input.value;
  });
}

function saveEquipmentSlotFromEditor() {
  updateEquipmentSlotDraftFromForm();
  selectedEquipmentSlot = null;
  selectedEquipmentTab = "attributes";
  saveState();
  render();
  const editor = document.querySelector("#editor");
  editor.close();
  editor.classList.remove("equipment-editor-dialog");
}

function clearEquipmentSlot() {
  selectedCharacter.equipment.slots[selectedEquipmentSlot] = equipmentSlotDefault(selectedEquipmentSlot);
  saveEquipmentSlotFromEditor();
}

document.querySelector("#saveEditor").addEventListener("click", () => {
  if (!selectedCharacter) return;
  if (selectedEquipmentSlot) {
    saveEquipmentSlotFromEditor();
    return;
  }
  selectedCharacter.level = Number(document.querySelector("#editLevel").value || 0);
  selectedCharacter.ta = Number(document.querySelector("#editTa").value || 0);
  selectedCharacter.attack = Number(document.querySelector("#editAttack").value || 0);
  selectedCharacter.equipment.weapon = document.querySelector("#editWeapon").value;
  selectedCharacter.equipment.armor = document.querySelector("#editArmor").value;
  selectedCharacter.notes = document.querySelector("#editNotes").value;
  saveState();
  render();
});

function previewShot(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const img = document.querySelector("#shotPreview");
  img.src = URL.createObjectURL(file);
  img.style.display = "block";
}

async function runOcr() {
  const file = document.querySelector("#screenshotInput")?.files?.[0];
  const target = document.querySelector("#ocrText");
  if (!file) {
    target.value = "Escolha um print primeiro.";
    return;
  }
  target.value = "Carregando OCR...";
  if (!window.Tesseract) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    }).catch(() => null);
  }
  if (!window.Tesseract) {
    target.value = "Nao consegui carregar o OCR online. Cole o texto manualmente aqui ou teste com internet ativa.";
    return;
  }
  const result = await Tesseract.recognize(file, "por+eng");
  target.value = result.data.text;
}

function applyOcrText() {
  const text = document.querySelector("#ocrText").value;
  const name = state.characters.find(char => new RegExp(`\\b${char.name}\\b`, "i").test(text))?.name;
  const level = text.match(/(?:level|lv\\.?|nivel|nível)\\D{0,8}(\\d{1,3})/i)?.[1];
  const attack = text.match(/(?:ataque total|total attack|ataque)\\D{0,12}([\\d.,]+)/i)?.[1];
  if (!name) {
    alert("Nao achei o personagem no texto. Cole o nome junto do OCR e tente de novo.");
    return;
  }
  const char = findChar(name);
  if (level) char.level = Number(level);
  if (attack) char.attack = Number(attack.replace(/[.]/g, "").replace(",", ""));
  char.reviewStatus = "reviewed-from-print";
  char.source.nonVisual = "print/OCR";
  saveState();
  render();
  alert(`Atualizei ${name}. Confira o card antes de confiar 100%.`);
}

document.querySelectorAll(".nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    render();
  });
});

document.querySelector("#search").addEventListener("input", render);
document.querySelector("#resetBtn").addEventListener("click", () => {
  state = structuredClone(seed);
  saveState();
  render();
});
document.querySelector("#exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gc-classic-tracker-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
});
document.querySelector("#importFile").addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  state = JSON.parse(await file.text());
  saveState();
  render();
});

render();
