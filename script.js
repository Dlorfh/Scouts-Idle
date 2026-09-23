const PEOPLE = [
  {
    nome: 'Lorenzo Silva',
    grupo: 'Escoteiros',
    cidade: 'Florianópolis',
    estado: 'Santa Catarina',
    imagem: 'imagens/Lorenzo.jpg',
    anosEscotismo: 6,
    nroEspecialidades: 4,
    ramo: 'Marinheiro',
    motto: 'A melhor rota é aquela que leva a todos juntos.',
    genero: 'Masculino',
    patente: 'Escoteiro',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Escoteiro de Ouro',
    modalidade: 'Rural'
  },
  {
    nome: 'Beatriz Costa',
    grupo: 'Lobinhos',
    cidade: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    imagem: 'assets/imagens/beatriz.jpg',
    anosEscotismo: 5,
    nroEspecialidades: 3,
    ramo: 'Caminhante',
    motto: 'Cada trilha ensina mais do que um mapa.',
    genero: 'Feminino',
    patente: 'Lobinha',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Especialista',
    modalidade: 'Urbana'
  },
  {
    nome: 'Caio Mendes',
    grupo: 'Escoteiros',
    cidade: 'Curitiba',
    estado: 'Paraná',
    imagem: 'assets/imagens/caio.jpg',
    anosEscotismo: 7,
    nroEspecialidades: 5,
    ramo: 'Pioneiro',
    motto: 'Trabalho em equipe faz a fogueira durar mais.',
    genero: 'Masculino',
    patente: 'Pioneiro',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: true,
    insigniaGrauMaximo: 'Escoteiro de Prata',
    modalidade: 'Rural'
  },
  {
    nome: 'Diana Rocha',
    grupo: 'Exploradores',
    cidade: 'Salvador',
    estado: 'Bahia',
    imagem: 'assets/imagens/diana.jpg',
    anosEscotismo: 4,
    nroEspecialidades: 2,
    ramo: 'Navegante',
    motto: 'A coragem cresce quando a equipe confia.',
    genero: 'Feminino',
    patente: 'Exploradora',
    jaFoiEmAcampamentoNacional: false,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Escoteira de Bronze',
    modalidade: 'Litorânea'
  },
  {
    nome: 'Eduardo Nunes',
    grupo: 'Escoteiros',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    imagem: 'assets/imagens/eduardo.jpg',
    anosEscotismo: 8,
    nroEspecialidades: 6,
    ramo: 'Sobrevivência',
    motto: 'A calma e a preparação abrem o caminho certo.',
    genero: 'Masculino',
    patente: 'Escoteiro',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Escoteiro de Ouro',
    modalidade: 'Montanhosa'
  },
  {
    nome: 'Fernanda Lima',
    grupo: 'Pioneiras',
    cidade: 'Recife',
    estado: 'Pernambuco',
    imagem: 'assets/imagens/fernanda.jpg',
    anosEscotismo: 3,
    nroEspecialidades: 2,
    ramo: 'Primeiros Socorros',
    motto: 'Quem cuida do próximo também fortalece a tropa.',
    genero: 'Feminino',
    patente: 'Pioneira',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Especialista',
    modalidade: 'Urbana'
  },
  {
    nome: 'Gabriel Almeida',
    grupo: 'Exploradores',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    imagem: 'assets/imagens/gabriel.jpg',
    anosEscotismo: 9,
    nroEspecialidades: 7,
    ramo: 'Orientação',
    motto: 'O verdadeiro escoteiro lê o terreno e também o coração da equipe.',
    genero: 'Masculino',
    patente: 'Escoteiro',
    jaFoiEmAcampamentoNacional: true,
    jaFoiEmAcampamentoInternacional: true,
    insigniaGrauMaximo: 'Escoteiro de Ouro',
    modalidade: 'Rural'
  },
  {
    nome: 'Heloísa Pereira',
    grupo: 'Lobinhas',
    cidade: 'Goiânia',
    estado: 'Goiás',
    imagem: 'assets/imagens/heloisa.jpg',
    anosEscotismo: 4,
    nroEspecialidades: 3,
    ramo: 'Cozinha de Campo',
    motto: 'Uma boa fogueira começa com boa companhia.',
    genero: 'Feminino',
    patente: 'Lobinha',
    jaFoiEmAcampamentoNacional: false,
    jaFoiEmAcampamentoInternacional: false,
    insigniaGrauMaximo: 'Escoteira de Bronze',
    modalidade: 'Rural'
  }
];

const CATEGORY_DEFS = [
  { key: 'grupo', label: 'Grupo' },
  { key: 'cidade', label: 'Cidade' },
  { key: 'estado', label: 'Estado' },
  { key: 'patente', label: 'Patente' },
  { key: 'anosEscotismo', label: 'Anos de escotismo' },
  { key: 'nroEspecialidades', label: 'Nº de especialidades' },
  { key: 'ramo', label: 'Ramo' },
  { key: 'genero', label: 'Gênero' },
  { key: 'jaFoiEmAcampamentoNacional', label: 'Acampamento Nacional' },
  { key: 'jaFoiEmAcampamentoInternacional', label: 'Acampamento Internacional' },
  { key: 'insigniaGrauMaximo', label: 'Insígnia de Grau Máximo' },
  { key: 'modalidade', label: 'Modalidade' }
];

const MAX_ATTEMPTS = 6;
let target = PEOPLE[Math.floor(Math.random() * PEOPLE.length)];
let history = [];
const currentMode = document.body.dataset.mode || 'tradicional';

const input = document.getElementById('guessInput');
const suggestions = document.getElementById('suggestions');
const guessButton = document.getElementById('guessButton');

input.addEventListener('input', () => {
  const value = input.value.trim().toLowerCase();
  suggestions.innerHTML = '';

  if (!value) return;

  PEOPLE.filter((person) => person.nome.toLowerCase().includes(value)).forEach((person) => {
    const item = document.createElement('div');
    item.className = 'suggestion';
    item.innerHTML = `<img src="${person.imagem}" alt="${person.nome}" /><span>${person.nome}</span>`;
    item.addEventListener('click', () => {
      input.value = person.nome;
      guess(person.nome);
    });
    suggestions.appendChild(item);
  });
});

guessButton.addEventListener('click', () => guess());
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    guess();
  }
});

document.getElementById('backToMenu').addEventListener('click', () => {
  window.location.href = 'index.html';
});

function startGame(mode) {
  input.value = '';
  input.disabled = false;
  suggestions.innerHTML = '';
  history = [];
  document.getElementById('result').textContent = '';
  document.getElementById('attempts').textContent = '';
  document.getElementById('history').innerHTML = '';

  const subtitle = document.getElementById('modeSubtitle');
  const imgContainer = document.getElementById('pixel-container');
  const phraseDisplay = document.getElementById('phrase-display');

  imgContainer.classList.add('hidden');
  phraseDisplay.classList.add('hidden');

  if (mode === 'imagem') {
    imgContainer.classList.remove('hidden');
    updateImageBlur();
    subtitle.innerHTML = 'Descubra o escoteiro escondido em até <b>6 tentativas</b>';
  } else if (mode === 'frase') {
    phraseDisplay.classList.remove('hidden');
    phraseDisplay.textContent = `"${target.motto}"`;
    subtitle.innerHTML = 'Descubra o escoteiro pela frase em até <b>6 tentativas</b>';
  } else {
    subtitle.innerHTML = 'Descubra o escoteiro em até <b>6 tentativas</b>';
  }
}

function updateImageBlur() {
  const img = document.getElementById('pixel-img');
  img.src = target.imagem;
  const blurs = [42, 28, 18, 10, 5, 2, 0];
  img.style.filter = `blur(${blurs[history.length]}px)`;
}

function formatFieldValue(value) {
  if (value === true) return 'Sim';
  if (value === false) return 'Não';
  if (value === null || value === undefined || value === '') return '—';
  return String(value);
}

function getPersonName(person) {
  return person?.nome || 'Sem nome';
}

function getPersonMotto(person) {
  return person?.motto || 'Sem lema';
}

function guess(nameOverride) {
  if (history.length >= MAX_ATTEMPTS) return;

  const value = (nameOverride || input.value).trim();
  const person = PEOPLE.find((p) => getPersonName(p).toLowerCase() === value.toLowerCase());

  if (!person || history.some((h) => getPersonName(h.person) === getPersonName(person))) {
    return;
  }

  input.value = '';
  suggestions.innerHTML = '';

  const isCorrect = getPersonName(person) === getPersonName(target);
  history.unshift({ person, correct: isCorrect });

  renderHistory();

  if (currentMode === 'imagem') {
    updateImageBlur();
  }

  if (isCorrect || history.length >= MAX_ATTEMPTS) {
    finishGame();
  }
}

function renderHistory() {
  const container = document.getElementById('history');
  container.innerHTML = '';

  history.forEach((entry) => {
    const card = document.createElement('div');
    card.className = 'card';

    let tags = '';

    if (currentMode === 'tradicional') {
      CATEGORY_DEFS.forEach(({ key, label }) => {
        const currentValue = entry.person[key];
        const targetValue = target[key];
        const currentString = formatFieldValue(currentValue).toLowerCase();
        const targetString = formatFieldValue(targetValue).toLowerCase();

        let resultClass = 'wrong';
        let tooltip = '';

        if (typeof currentValue === 'boolean' || typeof targetValue === 'boolean') {
          resultClass = String(currentValue) === String(targetValue) ? 'correct' : 'wrong';
        } else if (targetString === '?') {
          resultClass = 'unknown';
          tooltip = 'title="Essa informação não foi revelada na resposta correta."';
        } else {
          const currentList = currentString.split(',').map((value) => value.trim()).filter(Boolean);
          const targetList = targetString.split(',').map((value) => value.trim()).filter(Boolean);
          const matches = currentList.filter((value) => targetList.includes(value));

          if (matches.length > 0) {
            resultClass = matches.length === currentList.length && currentList.length === targetList.length ? 'correct' : 'partial';
          }
        }

        tags += `
          <div class="tag">
            <div class="label">${label}</div>
            <div class="value ${resultClass}" ${tooltip}>${formatFieldValue(currentValue)}</div>
          </div>
        `;
      });
    }

    card.innerHTML = `
      <img class="img-fluid" src="${entry.person.imagem}" alt="${getPersonName(entry.person)}" />
      <div class="info-side">
        <div class="name">${getPersonName(entry.person)}</div>
        <div class="quote">"${getPersonMotto(entry.person)}"</div>
        <div class="tags">${tags}</div>
      </div>
    `;

    container.appendChild(card);
  });

  document.getElementById('attempts').textContent = `Tentativas: ${history.length} / ${MAX_ATTEMPTS}`;
}

function finishGame() {
  const resultBox = document.getElementById('result');
  input.disabled = true;

  if (history.some((entry) => entry.correct)) {
    resultBox.textContent = '🎉 Você acertou!';
    resultBox.style.color = 'var(--leaf)';
  } else {
    resultBox.innerHTML = `❌ O escoteiro era <br><b>${getPersonName(target)}</b>`;
    resultBox.style.color = 'var(--danger)';
  }

  const img = document.getElementById('pixel-img');
  if (img) {
    img.src = target.imagem;
    img.style.filter = 'none';
  }
}

startGame(currentMode);
