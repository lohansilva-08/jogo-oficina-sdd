import { CONFIG } from './config.js';

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');

function drawStartScreen() {
  context.fillStyle = CONFIG.backgroundColor;
  context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);

  context.fillStyle = CONFIG.titleColor;
  context.textAlign = 'center';
  context.font = `${CONFIG.titleFontSize}px ${CONFIG.titleFont}`;
  context.fillText('Chuva de Bugs', CONFIG.canvasWidth / 2, CONFIG.titleOffsetY);

  context.fillStyle = CONFIG.textColor;
  context.font = `${CONFIG.instructionFontSize}px ${CONFIG.instructionFont}`;
  context.fillText('Pressione Espaço para começar', CONFIG.canvasWidth / 2, CONFIG.instructionOffsetY);
}

function frame() {
  drawStartScreen();
  requestAnimationFrame(frame);
}

frame();
