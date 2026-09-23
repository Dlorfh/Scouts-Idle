# Scouts Idle

Jogo de adivinhação inspirado no escotismo. A cada rodada, o jogador tenta descobrir qual escoteiro está sendo apresentado usando pistas de perfil, imagem ou lema.

## Modos de jogo

- **Tradicional:** compara os dados do palpite com o perfil secreto.
- **Imagem:** revela gradualmente a imagem do escoteiro.
- **Frase:** apresenta o lema do escoteiro como pista.

Cada rodada permite até seis tentativas. Os palpites anteriores ficam registrados na tela com indicação dos campos corretos, parcialmente correspondentes ou incorretos.

## Dados dos escoteiros

Os perfis ficam no array `PEOPLE`, em `script.js`. Cada objeto pode conter:

- nome
- grupo
- cidade e estado
- imagem
- anos de escotismo
- número de especialidades
- ramo
- lema (`motto`)
- gênero
- patente
- participação em acampamento nacional e internacional
- insígnia de grau máximo
- modalidade

## Como executar

O projeto é estático e não precisa de instalação de dependências.

1. Abra `index.html` no navegador; ou
2. use a extensão **Live Server** do VS Code para executar a pasta localmente.

O arquivo `index.html` funciona como menu. Cada modo possui uma página própria:

- `tradicional.html`
- `imagem.html`
- `frase.html`

## Imagens

Os caminhos das imagens são definidos no campo `imagem` de cada perfil. Para exibir fotos reais, adicione os arquivos correspondentes em `assets/imagens/`, por exemplo:

```text
assets/
└── imagens/
	├── lorenzo.jpg
	├── beatriz.jpg
	├── caio.jpg
	└── ...
```

Caso os arquivos não estejam disponíveis, o jogo continua funcionando, mas as imagens não serão carregadas.

## Estrutura

```text
Scouts idle/
├── index.html    # Menu de escolha do modo
├── tradicional.html # Página do modo tradicional
├── imagem.html   # Página do modo imagem
├── frase.html    # Página do modo frase
├── script.js     # Perfis, regras e funcionamento do jogo
├── styles.css    # Layout e paleta azul
├── imagens/      # Pasta local para imagens do projeto
└── README.md     # Documentação
```

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Google Fonts: Outfit e Lora
