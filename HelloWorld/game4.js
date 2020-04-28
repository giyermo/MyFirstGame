class game4 extends Phaser.Scene {
    constructor() {
      super({key: 'game4'});
    }
  
    create() {
      this.add.text(567, 310, 'Has completado todos los niveles', {fill: '#000000', fintSize: '50px'});
      this.input.on('pointerdown', () => {
        this.cameras.main.fade(1000, 0, 0, 0, false);
      });
    }
  };