const gameState = {
  speed:240,
  ups: 380,
  width: 2000,
  height:620,
};

const config = {
  type: Phaser.AUTO,
  width: 1338,
  height: 624,
  backgroundColor: '00FFFF',
  fps: {target: 60},
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1500 },
      enableBody: true,
    }
  },
  scene: [game1, game2, game3]
};

const game = new Phaser.Game(config);