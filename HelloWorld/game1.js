class game1 extends Phaser.Scene {
  constructor() {
    super({key: 'game1'});
  }

  create() {
    this.add.text(567, 310, 'Alcanza las salidas', {fill: '#000000', fintSize: '50px'});
    this.input.on('pointerdown', () => {
      this.cameras.main.fade(1000, 0, 0, 0, false);
      setTimeout(() => {this.scene.start('game2');}, 1001);
    });
  }
};