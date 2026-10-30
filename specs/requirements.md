# Requisitos: Chuva de Bugs

## Introdução
Chuva de Bugs é um jogo de navegador para jogadores que gostam de desafios rápidos. O jogador controla um dev, coleta cafés e desvia de bugs que caem pela tela.

## Glossário
- **Dev**: personagem controlado pelo jogador na parte inferior da área do jogo.
- **Café**: item coletável que aumenta em 1 a pontuação do jogador.
- **Bug**: item que, ao tocar no dev, reduz a quantidade de vidas em 1.
- **Vida**: recurso que permite continuar jogando; o jogo começa com 3 vidas.
- **Recorde**: maior pontuação alcançada pelo jogador, armazenada pelo navegador.

## Requisitos

### Requisito 1: Tela inicial
**História de usuário:** Como jogador, quero iniciar o jogo de forma simples, para que eu possa começar a jogar rapidamente.

**Critérios de aceitação**
- **1.1** O SISTEMA DEVE mostrar o nome "Chuva de Bugs" na tela inicial.
- **1.2** QUANDO o jogador estiver na tela inicial, O SISTEMA DEVE indicar que a tecla Espaço inicia o jogo.
- **1.3** QUANDO o jogador pressionar Espaço na tela inicial, O SISTEMA DEVE iniciar uma partida com 0 pontos e 3 vidas.

### Requisito 2: Controle do dev
**História de usuário:** Como jogador, quero mover o dev horizontalmente, para que eu possa desviar de bugs e coletar cafés.

**Critérios de aceitação**
- **2.1** QUANDO o jogador pressionar a seta para a esquerda ou a tecla A, O SISTEMA DEVE mover o dev para a esquerda enquanto a tecla estiver pressionada.
- **2.2** QUANDO o jogador pressionar a seta para a direita ou a tecla D, O SISTEMA DEVE mover o dev para a direita enquanto a tecla estiver pressionada.
- **2.3** O SISTEMA DEVE impedir que o dev saia pelos limites laterais da área do jogo.

### Requisito 3: Itens que caem
**História de usuário:** Como jogador, quero enfrentar cafés e bugs em posições variadas, para que cada partida tenha movimento e desafio.

**Critérios de aceitação**
- **3.1** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE criar cafés e bugs em posições aleatórias na parte superior da área do jogo.
- **3.2** QUANDO um café tocar o dev, O SISTEMA DEVE remover o café e aumentar a pontuação em 1.
- **3.3** QUANDO um bug tocar o dev, O SISTEMA DEVE remover o bug e diminuir a quantidade de vidas em 1.
- **3.4** QUANDO um item alcançar o chão sem tocar o dev, O SISTEMA DEVE remover o item sem alterar a pontuação ou a quantidade de vidas.

### Requisito 4: Aumento da dificuldade
**História de usuário:** Como jogador, quero que a partida fique mais desafiadora com o tempo, para que eu precise manter atenção durante o jogo.

**Critérios de aceitação**
- **4.1** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE aumentar progressivamente a velocidade de queda dos itens.
- **4.2** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE aumentar progressivamente a frequência com que os itens são criados.

### Requisito 5: Fim da partida
**História de usuário:** Como jogador, quero saber quando a partida termina e quais foram meus resultados, para que eu possa tentar novamente.

**Critérios de aceitação**
- **5.1** QUANDO o jogador perder a última vida, O SISTEMA DEVE encerrar a partida.
- **5.2** QUANDO uma partida terminar, O SISTEMA DEVE mostrar a pontuação alcançada.
- **5.3** QUANDO uma partida terminar, O SISTEMA DEVE mostrar o recorde atual.
- **5.4** QUANDO o jogador estiver na tela de fim de jogo, O SISTEMA DEVE indicar que a tecla Espaço inicia uma nova partida.
- **5.5** QUANDO o jogador pressionar Espaço na tela de fim de jogo, O SISTEMA DEVE iniciar uma nova partida com 0 pontos e 3 vidas.

### Requisito 6: Registro do recorde
**História de usuário:** Como jogador, quero que meu melhor resultado seja preservado, para que eu possa superar minhas partidas anteriores.

**Critérios de aceitação**
- **6.1** QUANDO o jogador alcançar uma pontuação maior que o recorde salvo, O SISTEMA DEVE atualizar o recorde.
- **6.2** O SISTEMA DEVE manter o recorde mesmo depois que a página do jogo for fechada e reaberta.

## Fora do escopo
- Som e música.
- Multiplayer.
- Login e autenticação.
- Ranking online.
- Níveis ou fases.

## Suposições
- A partida termina imediatamente quando o jogador chega a 0 vidas.
- Pontuação e vidas ficam visíveis durante toda a partida.
- Itens não têm efeito ao atingir o chão, exceto desaparecerem.
- O jogo é encerrado ao fechar ou recarregar a página; não há pausa ou salvamento parcial da partida.
