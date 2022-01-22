//menu inicial que esconde quando inicia e volta quando recomeça
const menuInicial = document.querySelector('#menuInicial')
const apresentacao = document.querySelector('#apresentacao')

//sons a serem tocados
const temaMusica = document.querySelector('#temaMusica')
const gritoMusica = document.querySelector('#gritoMusica')

//variaveis para interacoes
const start = document.querySelector('#start') //botao de começar
const interacoes = document.querySelector('#interacoes') //div de interacoes
const imagens = document.querySelector('#imagens') //div de imagens - começa escondida

//input de texto de jogador, vez do jogador e imagem de cada jogador
let jogador1 = document.querySelector('#jogador1')
let jogador2 = document.querySelector('#jogador2')
let vezDoJogador1
let imagemJogador1
let imagemJogador2

//criando pontuacao e seu vetor
let pont0
let pont1
let pont2
let pont3
let pont4
let pont5
let pont6
let pont7
let pont8
const vetorPontuacao = [
  pont0,
  pont1,
  pont2,
  pont3,
  pont4,
  pont5,
  pont6,
  pont7,
  pont8
]

//personagens a serem escolhidos
const cachorro = document.querySelector('#cachorro') //0
const coelho = document.querySelector('#coelho') //1
const gato = document.querySelector('#gato') //2
const passaro = document.querySelector('#passaro') //3
const porco = document.querySelector('#porco') //4
const vetorDePersonagens = [cachorro, coelho, gato, passaro, porco]

//recebe os nomes dos jogadores e exibe a tela de personagens
function comecar() {
  if (jogador1.value.length == 0) {
    alert('Digite o nome do 1º assassino!')
  } else if (jogador2.value.length == 0) {
    alert('Digite o nome do 2º assassino!')
  } else if (jogador1.value == jogador2.value) {
    alert('É necessário 2 assassinos diferentes!')
  } else {
    jogador1 = jogador1.value
    jogador2 = jogador2.value
    interacoes.innerHTML = `${jogador1}, mostre quem é você:`
    imagens.setAttribute('class', 'mostrar') //exibe a div escondida com imagens
  }
}

//define a escolha do personagem para o jogador 1, retira a opcao de onclick para o jogador 1 e define outro onclick para o jogador 2 escolher seu personagem
function escolherPersonagem(personagem) {
  vetorDePersonagens[personagem].setAttribute('class', 'esconder')
  imagemJogador1 = vetorDePersonagens[personagem]
  interacoes.innerHTML = `${jogador2}, mostre quem é você:`
  for (let i in vetorDePersonagens) {
    vetorDePersonagens[i].removeAttribute(
      'onclick',
      `escolherPersonagem (${i})`
    )
    vetorDePersonagens[i].setAttribute('onclick', `escolherPersonagem2 (${i})`)
  }
}

//define a escolha do personagem para o jogador 2 e esconde todas as outras opcoes
function escolherPersonagem2(personagem) {
  imagemJogador2 = vetorDePersonagens[personagem]
  imagens.setAttribute('class', 'esconder')

  interacoes.innerHTML = `\u{1F52A}${jogador1}, mate agora!\u{1F52A}`

  //define que o jogo esta pronto para começar
  vezDoJogador1 = true
}

//recebendo as posicoes a serem jogadas e criando seu vetor
const pos0 = document.getElementsByClassName('posicao')[0]
const pos1 = document.getElementsByClassName('posicao')[1]
const pos2 = document.getElementsByClassName('posicao')[2]
const pos3 = document.getElementsByClassName('posicao')[3]
const pos4 = document.getElementsByClassName('posicao')[4]
const pos5 = document.getElementsByClassName('posicao')[5]
const pos6 = document.getElementsByClassName('posicao')[6]
const pos7 = document.getElementsByClassName('posicao')[7]
const pos8 = document.getElementsByClassName('posicao')[8]
const vetorPos = [pos0, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8]

//insere a imagem do jogador na posicao escolhida
//indica a mudanca de vez e nao permite que um jogador jogue em cima de uma posicao ja escolhida previamente
//cada jogada é associada ao vetor de pontuacao
function jogando(i) {
  if (vezDoJogador1 == true && vetorPos[i].innerHTML == '') {
    if (imagemJogador1 == cachorro) {
      vetorPos[i].innerHTML =
        '<img src="https://i.ibb.co/1qSLnfW/leatherface.png"/>'
      vetorPontuacao[i] = 1
    } else if (imagemJogador1 == coelho) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/Db62kCr/fred.png"/>'
      vetorPontuacao[i] = 1
    } else if (imagemJogador1 == gato) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/0ZbL6tD/jason.png"/>'
      vetorPontuacao[i] = 1
    } else if (imagemJogador1 == passaro) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/26rRsgh/it.png"/>'
      vetorPontuacao[i] = 1
    } else if (imagemJogador1 == porco) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/SPNhqHJ/freira.png"/>'
      vetorPontuacao[i] = 1
    }

    vezDoJogador1 = false
    interacoes.innerHTML = `\u{1F52A}${jogador2}, mate agora!\u{1F52A}`
  } else if (vezDoJogador1 == false && vetorPos[i].innerHTML == '') {
    if (imagemJogador2 == cachorro) {
      vetorPos[i].innerHTML =
        '<img src="https://i.ibb.co/1qSLnfW/leatherface.png"/>'
      vetorPontuacao[i] = 2
    } else if (imagemJogador2 == coelho) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/Db62kCr/fred.png"/>'
      vetorPontuacao[i] = 2
    } else if (imagemJogador2 == gato) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/0ZbL6tD/jason.png"/>'
      vetorPontuacao[i] = 2
    } else if (imagemJogador2 == passaro) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/26rRsgh/it.png"/>'
      vetorPontuacao[i] = 2
    } else if (imagemJogador2 == porco) {
      vetorPos[i].innerHTML = '<img src="https://i.ibb.co/SPNhqHJ/freira.png"/>'
      vetorPontuacao[i] = 2
    }

    vezDoJogador1 = true
    interacoes.innerHTML = `\u{1F52A}${jogador1}, mate agora!\u{1F52A}`
  }

  //finalizando a partida
  {
    //empate
    velha()

    //ganhando na vertical
    vertical(1)
    vertical(2)

    //ganhando na horizontal
    horizontal(1)
    horizontal(2)

    //ganhando na diagonal
    diagonal(1)
    diagonal(2)
  }
}

//conferem o campeao na vertical, horizontal e diagonal
function vertical(p) {
  if (
    (vetorPontuacao[0] == p &&
      vetorPontuacao[1] == p &&
      vetorPontuacao[2] == p) ||
    (vetorPontuacao[3] == p &&
      vetorPontuacao[4] == p &&
      vetorPontuacao[5] == p) ||
    (vetorPontuacao[6] == p && vetorPontuacao[7] == p && vetorPontuacao[8] == p)
  ) {
    ganhador(p)
  }
}
function horizontal(p) {
  if (
    (vetorPontuacao[0] == p &&
      vetorPontuacao[3] == p &&
      vetorPontuacao[6] == p) ||
    (vetorPontuacao[1] == p &&
      vetorPontuacao[4] == p &&
      vetorPontuacao[7] == p) ||
    (vetorPontuacao[2] == p && vetorPontuacao[5] == p && vetorPontuacao[8] == p)
  ) {
    ganhador(p)
  }
}
function diagonal(p) {
  if (
    (vetorPontuacao[0] == p &&
      vetorPontuacao[4] == p &&
      vetorPontuacao[8] == p) ||
    (vetorPontuacao[2] == p && vetorPontuacao[4] == p && vetorPontuacao[6] == p)
  ) {
    ganhador(p)
  }
}
//caso dê empate exibe uma msg e cria o botao dianamico de reload
function velha() {
  if (
    vetorPos[0].innerHTML != '' &&
    vetorPos[1].innerHTML != '' &&
    vetorPos[2].innerHTML != '' &&
    vetorPos[3].innerHTML != '' &&
    vetorPos[4].innerHTML != '' &&
    vetorPos[5].innerHTML != '' &&
    vetorPos[6].innerHTML != '' &&
    vetorPos[7].innerHTML != '' &&
    vetorPos[8].innerHTML != ''
  ) {
    interacoes.innerHTML = `\u{2620}Você foi incapaz de matar a sua vítima, melhore suas habilidades!\u{2620}`
    for (let i in vetorPos) {
      vetorPos[i].removeAttribute('onclick', `jogando (${i})`)
    }
    const novoBotao = document.createElement('input')
    novoBotao.setAttribute('type', 'button')
    novoBotao.setAttribute('value', '\u{1F52A}Novos assassinos\u{1F52A}')
    novoBotao.setAttribute('onclick', 'botaoRecarregar()')

    const novoBotao2 = document.createElement('input')
    novoBotao2.setAttribute('type', 'button')
    novoBotao2.setAttribute('value', '\u{1F52A}Mesmos Assassinos\u{1F52A}')
    novoBotao2.setAttribute('onclick', 'botaoRestart()')
    apresentacao.setAttribute('class', 'esconder')
    interacoes.setAttribute('class', 'final')
    interacoes.appendChild(novoBotao)
    interacoes.appendChild(novoBotao2)
  }
}

//exibe uma mensagem para o vencedor e cria um botao dinamicamente para reiniciar a página
function ganhador(j) {
  tocarGrito()
  if (j == 1) {
    interacoes.innerHTML = `<img src="https://i.ibb.co/WK3JxtF/final.png" class='imgfinal'/>`
    alert(`\u{2620}${jogador1}, você assassinou sua vítima!\u{2620}`)
  } else {
    interacoes.innerHTML = `<img src="https://i.ibb.co/WK3JxtF/final.png" class='imgfinal'/>`
    alert(`\u{2620}${jogador2}, você assassinou sua vítima!\u{2620}`)
  }
  const novoBotao = document.createElement('input')
  novoBotao.setAttribute('type', 'button')
  novoBotao.setAttribute('value', `\u{1F52A}Novos assassinos\u{1F52A}`)
  novoBotao.setAttribute('onclick', 'botaoRecarregar()')
  novoBotao.setAttribute('class', 'final')

  const novoBotao2 = document.createElement('input')
  novoBotao2.setAttribute('type', 'button')
  novoBotao2.setAttribute('value', `\u{1F52A}Mesmos Assassinos\u{1F52A}`)
  novoBotao2.setAttribute('onclick', 'botaoRestart()')
  novoBotao2.setAttribute('class', 'final')

  interacoes.setAttribute('class', 'final')
  apresentacao.setAttribute('class', 'esconder')
  interacoes.appendChild(novoBotao)
  interacoes.appendChild(novoBotao2)
  for (let i in vetorPos) {
    vetorPos[i].removeAttribute('onclick', `jogando (${i})`)
  }
}

//dá um reload na página - está associado ao botão final criado dinamicamente
function botaoRecarregar() {
  location.reload()
}

//reseta tudo que precisa para começar um novo jogo com os mesmos jogadores, precisando apenas escolher os novos personagens
function botaoRestart() {
  vezDoJogador1 = true

  interacoes.innerHTML = `${jogador1}, mostre quem é você:`
  imagens.setAttribute('class', 'mostrar')

  for (let i in vetorPos) {
    vetorPos[i].innerHTML = ''
    vetorPos[i].setAttribute('onclick', `jogando (${i})`)
  }

  for (let j in vetorPontuacao) {
    vetorPontuacao[j] = null
  }

  for (let k in vetorDePersonagens) {
    vetorDePersonagens[k].removeAttribute(
      'onclick',
      `escolherPersonagem2 (${k})`
    )
    vetorDePersonagens[k].setAttribute('onclick', `escolherPersonagem (${k})`)
    vetorDePersonagens[k].removeAttribute('class', 'esconder')
  }
}

//funcao das musicas
function tocarTema() {
  temaMusica.play()
}

function tocarGrito() {
  gritoMusica.play()
}
