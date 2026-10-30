import { CONFIG } from './config.js';
import { Game } from './game.js';
import { Renderer } from './renderer.js';

const canvas = document.querySelector('#game');
canvas.width = CONFIG.canvasWidth;
canvas.height = CONFIG.canvasHeight;
const context = canvas.getContext('2d');
const game = new Game();
const renderer = new Renderer(context);
let previousTime = 0;

window.addEventListener('keydown', (event) => {
  if (['ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) {
    event.preventDefault();
  }
  game.handleKeyDown(event.code);
});

window.addEventListener('keyup', (event) => {
  game.handleKeyUp(event.code);
});

function frame(currentTime) {
  const deltaTime = previousTime ? Math.min((currentTime - previousTime) / 1000, CONFIG.maximumDeltaTime) : 0;
  previousTime = currentTime;
  game.update(deltaTime);
  renderer.draw(game);
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
