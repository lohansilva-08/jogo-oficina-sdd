# Plano de implementação: Chuva de Bugs

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [ ] 1. Criar o esqueleto visual e o loop do jogo
  - Criar a estrutura da página, o estilo centralizado e a área de jogo com Canvas fixo.
  - Adicionar as configurações iniciais do jogo em um único objeto exportado.
  - Criar o ponto de entrada com loop `requestAnimationFrame` e delta time.
  - Mostrar algo visível na tela e iniciar o jogo sem erros de carregamento.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`
  - **Como verificar:** abrir o jogo pelo servidor local → a área do jogo aparece centralizada, com fundo escuro e o loop ativo.
  - _Requisitos: 1.1, 1.2_

- [ ] 2. Implementar o controle do dev e os itens
  - Criar o módulo de regras da partida com a tela inicial e início por Espaço.
  - Implementar movimento contínuo com as setas ou A/D, mantendo o dev dentro dos limites.
  - Criar cafés e bugs em posições aleatórias no topo, fazer a queda e remover itens que chegam ao chão.
  - Desenhar o dev, os itens, os pontos e as vidas durante a partida.
  - **Arquivos:** `src/main.js`, `src/game.js`, `src/renderer.js`
  - **Como verificar:** iniciar com Espaço e mover o dev com as quatro teclas → o dev não sai dos limites; cafés e bugs caem e itens sem coleta desaparecem ao chegar ao chão.
  - _Requisitos: 1.3, 2.1, 2.2, 2.3, 3.1, 3.4_

- [ ] 3. Implementar colisões, vidas, fim da partida e reinício
  - Aplicar +1 ponto ao coletar café e remover o café colidido.
  - Diminuir 1 vida ao colidir com bug e encerrar ao chegar a 0 vidas.
  - Criar as telas de fim de jogo com pontuação, recorde e instrução para reiniciar com Espaço.
  - Reiniciar uma partida com 0 pontos, 3 vidas e controles funcionando.
  - **Arquivos:** `src/main.js`, `src/game.js`, `src/renderer.js`
  - **Como verificar:** coletar café e tocar bug deliberadamente → pontos e vidas mudam uma vez por colisão; ao perder todas as vidas, aparecem pontuação, recorde e reinício por Espaço.
  - _Requisitos: 3.2, 3.3, 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 4. Concluir dificuldade, recorde persistente e conferência geral
  - Aumentar gradualmente a velocidade de queda e a frequência de criação durante a partida, respeitando limites configurados.
  - Persistir o maior resultado com armazenamento local e tratar valores inválidos ou armazenamento indisponível como recorde zero.
  - Revisar todas as telas, controles, estados, colisões e efeitos de reinício.
  - Conferir todos os critérios dos requisitos e corrigir somente desvios encontrados pelo plano.
  - **Arquivos:** `src/config.js`, `src/game.js`, `src/main.js`, `src/renderer.js`, `src/storage.js`
  - **Como verificar:** jogar por mais tempo e obter pontuação alta → itens aceleram e surgem com mais frequência; fechar e reabrir a página mantém o recorde; todas as telas, controles e reinícios continuam funcionando.
  - _Requisitos: 3.2, 4.1, 4.2, 5.3, 6.1, 6.2_

## Correções

<vazio por enquanto; o comando /corrigir-bug escreve aqui>
