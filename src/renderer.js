import { CONFIG } from './config.js';

export class Renderer {
  constructor(context) {
    this.context = context;
  }

  draw(game) {
    this.clear();
    if (game.state === 'start') {
      this.drawStartScreen();
      return;
    }
    this.drawHud(game);
    this.drawPlayer(game.player);
    this.drawItems(game.items);
  }

  clear() {
    this.context.fillStyle = CONFIG.backgroundColor;
    this.context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
  }

  drawStartScreen() {
    this.context.fillStyle = CONFIG.titleColor;
    this.context.textAlign = 'center';
    this.context.font = `${CONFIG.titleFontSize}px ${CONFIG.titleFont}`;
    this.context.fillText('Chuva de Bugs', CONFIG.canvasWidth / 2, CONFIG.titleOffsetY);

    this.context.fillStyle = CONFIG.textColor;
    this.context.font = `${CONFIG.instructionFontSize}px ${CONFIG.instructionFont}`;
    this.context.fillText('Pressione Espaço para começar', CONFIG.canvasWidth / 2, CONFIG.instructionOffsetY);
  }

  drawHud(game) {
    this.context.fillStyle = CONFIG.textColor;
    this.context.textAlign = 'left';
    this.context.font = `${CONFIG.hudFontSize}px ${CONFIG.instructionFont}`;
    this.context.fillText(`☕ ${game.score}`, CONFIG.hudMargin, CONFIG.hudY);
    this.context.textAlign = 'right';
    this.context.fillText('❤️'.repeat(game.lives), CONFIG.canvasWidth - CONFIG.hudMargin, CONFIG.hudY);
  }

  drawPlayer(player) {
    const centerX = player.x + CONFIG.playerWidth / 2;
    this.context.save();
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = CONFIG.playerBackgroundColor;
    this.context.fillRect(player.x, CONFIG.playerGroundY, CONFIG.playerWidth, CONFIG.playerHeight);
    this.context.font = `bold ${CONFIG.playerFontSize}px ${CONFIG.playerFont}`;
    this.context.fillStyle = CONFIG.textColor;
    this.context.fillText(CONFIG.playerEmoji, centerX, CONFIG.playerGroundY + CONFIG.playerHeight / 2);
    this.context.restore();
  }

  drawItems(items) {
    this.context.textAlign = 'left';
    this.context.font = `${CONFIG.itemFontSize}px ${CONFIG.itemFont}`;
    for (const item of items) {
      const emoji = item.type === 'coffee' ? CONFIG.coffeeEmoji : CONFIG.bugEmoji;
      this.context.fillText(emoji, item.x, item.y);
    }
  }
}
