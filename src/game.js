import { CONFIG } from './config.js';

export class Game {
  constructor() {
    this.state = 'start';
    this.score = 0;
    this.lives = CONFIG.initialLives;
    this.player = {
      x: (CONFIG.canvasWidth - CONFIG.playerWidth) / 2,
      y: CONFIG.playerY
    };
    this.items = [];
    this.spawnTimer = 0;
    this.keys = {};
  }

  handleKeyDown(code) {
    if (code === 'Space' && this.state === 'start') {
      this.start();
      return;
    }
    this.keys[code] = true;
  }

  handleKeyUp(code) {
    this.keys[code] = false;
  }

  start() {
    this.state = 'playing';
    this.score = 0;
    this.lives = CONFIG.initialLives;
    this.items = [];
    this.spawnTimer = 0;
    this.player.x = (CONFIG.canvasWidth - CONFIG.playerWidth) / 2;
  }

  update(deltaTime) {
    if (this.state !== 'playing') {
      return;
    }

    this.movePlayer(deltaTime);
    this.updateItems(deltaTime);
  }

  movePlayer(deltaTime) {
    const movingLeft = this.keys.ArrowLeft || this.keys.KeyA;
    const movingRight = this.keys.ArrowRight || this.keys.KeyD;
    const direction = Number(movingRight) - Number(movingLeft);
    this.player.x += direction * CONFIG.playerSpeed * deltaTime;
    this.player.x = Math.max(0, Math.min(CONFIG.canvasWidth - CONFIG.playerWidth, this.player.x));
  }

  updateItems(deltaTime) {
    this.spawnTimer += deltaTime;
    if (this.spawnTimer >= CONFIG.initialSpawnInterval) {
      this.spawnTimer = 0;
      this.spawnItem();
    }

    for (const item of this.items) {
      item.y += CONFIG.initialFallSpeed * deltaTime;
    }
    this.items = this.items.filter((item) => item.y < CONFIG.canvasHeight);
  }

  spawnItem() {
    const type = Math.random() < CONFIG.itemTypeChance ? 'coffee' : 'bug';
    this.items.push({
      type,
      x: Math.random() * (CONFIG.canvasWidth - CONFIG.itemSize),
      y: CONFIG.itemStartY
    });
  }
}
