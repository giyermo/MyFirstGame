class game3 extends Phaser.Scene {
    constructor() {
        super({key: 'game3'});
    };

    preload() {
        this.load.spritesheet('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/codey_sprite.png', { frameWidth: 72, frameHeight: 90 });
        this.load.spritesheet('snowman', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/snowman.png', { frameWidth: 50, frameHeight: 70 });
        this.load.spritesheet('exit', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/cave_exit.png', { frameWidth: 60, frameHeight: 70 });
        this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Cave+Crisis/platform.png');
        this.load.image('bg1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Tundra/mountain.png');
        this.load.image('bg2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Tundra/trees.png');
        this.load.image('bg3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Tundra/snowdunes.png');
    };

    create() {
        gameState.active = true;

        this.createParallaxBackgrounds = function () {
            gameState.bg1 = this.add.image(0, 0, 'bg1');
            gameState.bg2 = this.add.image(0, 0, 'bg2');
            gameState.bg3 = this.add.image(0, 0, 'bg3');
            gameState.bg1.setOrigin(0, 0);
            gameState.bg2.setOrigin(0, 0);
            gameState.bg3.setOrigin(0, 0);
          };

        this.createParallaxBackgrounds();
        //platform generation
        const platforms = this.physics.add.staticGroup();

        const platPositions = [
            { x: 50, y: 600 },{ x: 250, y: 600 }, { x: 450, y: 600 }, { x: 650, y: 700 }, { x: 850, y: 600 }, 
            { x: 1050, y: 600 }, { x: 1250, y: 600 }, { x: 1450, y: 600 }, { x: 1650, y: 600 }, { x: 1850, y: 600 },
            { x: 2050, y: 600 }, { x: 850, y: 350 }, { x: 850, y: 450 }, { x: 1450, y: 450 }, { x: 1650, y: 350 }, { x: 1900, y: 175 },
          ];
        platPositions.forEach(plat => {
            platforms.create(plat.x, plat.y, 'platform')
        });
        
        //sprite.player
        gameState.player = this.physics.add.sprite(50, 500, 'codey').setScale(.8);

        this.physics.add.collider(gameState.player, platforms);

        gameState.player.setCollideWorldBounds(true);

        //cursors/controls
        gameState.cursors = this.input.keyboard.createCursorKeys();

        //sprite.player.animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('codey', { start: 4, end: 5 }),
            frameRate: 5,
            repeat: -1
          });

        //snowman1
        gameState.enemy = this.physics.add.sprite(575, 600, 'snowman');

    
        this.physics.add.collider(gameState.enemy, platforms);
      
        this.anims.create({
            key: 'snowmanAlert',
            frames: this.anims.generateFrameNumbers('snowman', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
          });
      
        gameState.enemy.anims.play('snowmanAlert', true);

        this.physics.add.overlap(gameState.player, gameState.enemy, () => {
            this.add.text(150, 50, '      Game Over... You are a loser\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
            this.physics.pause();
            gameState.active = false;
            this.anims.pauseAll();
            this.cameras.main.shake(200, .1);
            gameState.enemy.move.stop();
            this.input.on('pointerup', () => {
              this.anims.resumeAll();
              this.scene.restart();
            })
          });

        //snowman2
        gameState.enemy1 = this.physics.add.sprite(675, 600, 'snowman');

          platforms
        this.physics.add.collider(gameState.enemy1, platforms);
      
        this.anims.create({
            key: 'snowmanAlert2',
            frames: this.anims.generateFrameNumbers('snowman', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
          });
      
        gameState.enemy1.anims.play('snowmanAlert2', true);

        this.physics.add.overlap(gameState.player, gameState.enemy1, () => {
            this.add.text(150, 50, '      Game Over... You are a loser\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
            this.physics.pause();
            gameState.active = false;
            this.anims.pauseAll();
            this.cameras.main.shake(200, .1);
            gameState.enemy1.move.stop();
            this.input.on('pointerup', () => {
              this.anims.resumeAll();
              this.scene.restart();
            })
          });

        //snowman3
        gameState.enemy2 = this.physics.add.sprite(1175, 265, 'snowman').setScale(.5);

          platforms
        this.physics.add.collider(gameState.enemy2, platforms);
      
        this.anims.create({
            key: 'snowmanAlert3',
            frames: this.anims.generateFrameNumbers('snowman', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
          });
      
        gameState.enemy2.anims.play('snowmanAlert3', true);

        this.physics.add.overlap(gameState.player, gameState.enemy2, () => {
            this.add.text(150, 50, '      Game Over... You are a loser\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
            this.physics.pause();
            gameState.active = false;
            this.anims.pauseAll();
            this.cameras.main.shake(200, .1);
            gameState.enemy2.move.stop();
            this.input.on('pointerup', () => {
              this.anims.resumeAll();
              this.scene.restart();
            })
          });

        //exit
        gameState.exit = this.physics.add.sprite(1900, 42, 'exit');
        this.anims.create({
            key: 'glow',
            frames: this.anims.generateFrameNumbers('exit', { start: 0, end: 5 }),
            frameRate: 4,
            repeat: -1
          });
        this.physics.add.collider(gameState.exit, platforms);
          gameState.exit.anims.play('glow', true);
      

        this.physics.add.overlap(gameState.player, gameState.exit, () => {
            this.add.text(150, 50, 'You reached the exit!\n  Click.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
            this.physics.pause();
            gameState.active = false;
            this.anims.pauseAll();
            gameState.enemy.move.stop();
            this.cameras.main.fade(1000, 0, 0, 0, false);
            setTimeout(() => {this.scene.start('game4');}, 1001);
          });
        //snowman1.tween
        gameState.enemy.move = this.tweens.add({
            targets: gameState.enemy,
            x: 625,
            ease: 'Linear',
            duration: 1800,
            repeat: -1,
            yoyo: true,
            onRepeat: growSnowman
          });

        //snowman2.tween
        gameState.enemy1.move = this.tweens.add({
            targets: gameState.enemy1,
            x: 725,
            ease: 'Linear',
            duration: 1800,
            repeat: -1,
            yoyo: true,
            onRepeat: growSnowman2
          });

        //snowman3.tween
        gameState.enemy2.move = this.tweens.add({
            targets: gameState.enemy2,
            x: 1325,
            ease: 'Linear',
            duration: 1800,
            repeat: -1,
            yoyo: true,
            onRepeat: growSnowman3
          });

        //snowman.scale
        let scaleChange = 1.1;
          function growSnowman() {
            if (scaleChange < 4) {
              scaleChange += .025;
              gameState.enemy.setScale(scaleChange);
              gameState.enemy.y -= 15;
            }
          }

        //snowman2.scale
        let scaleChange2 = 1.1;
          function growSnowman2() {
            if (scaleChange2 < 4) {
              scaleChange2 += .025;
              gameState.enemy1.setScale(scaleChange2);
              gameState.enemy1.y -= 25;
            }
          }

        //snowman3.scale
        let scaleChange3 = 1.1;
          function growSnowman3() {
            if (scaleChange3 < 4) {
              scaleChange3 += .005;
              gameState.enemy2.setScale(scaleChange3);
              gameState.enemy2.y -= 25;
            }
          };
          
        if (gameState.player.y > 600) {
          this.cameras.main.shake(200, .3);
          this.scene.restart('game3');
        }

        //camera
        this.cameras.main.setBounds(0, 0, gameState.bg3.width, gameState.bg3.height);
        this.physics.world.setBounds(0, 0, gameState.width, gameState.bg3.height + gameState.player.height);                this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
        
        /*if(gameState.player.y > 500) {
            this.cameras.main.shake(240, .01)
            this.scene.restart();               
        };*/
      };

    update() {
        if (gameState.active) {
            if (gameState.cursors.right.isDown) {
              gameState.player.setVelocityX(350);
              gameState.player.anims.play('run', true);
              gameState.player.flipX = false;
            } else if (gameState.cursors.left.isDown) {
              gameState.player.setVelocityX(-350);
              gameState.player.anims.play('run', true);
              gameState.player.flipX = true;
            } else {
              gameState.player.setVelocityX(0);
              gameState.player.anims.play('idle', true);
            }
      
            if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.player.body.touching.down) {
              gameState.player.anims.play('jump', true);
              gameState.player.setVelocityY(-800);
            }
          }
        };
};
        