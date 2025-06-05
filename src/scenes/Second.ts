import { Scene } from 'phaser';

export class Game extends Scene {
    platforms: Phaser.Physics.Arcade.StaticGroup;
    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    starText: any;

    constructor() {
        super('Second');
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );

        this.load.audio('music', 'assets/music.mp3');
        this.load.audio('DeadSound', 'assets/DeadSound.mp3')

    }
    stars: Phaser.GameObjects.Group;

    create() {
        this.sound.unlock();
        this.sound.play('music', { loop: true });
        let backgroundCamera = this.cameras.cameras[0];
        let playerCamera = this.cameras.add();
        let uiCamera = this.cameras.add();

        this.cursors = this.input.keyboard!.createCursorKeys();

        let sky = this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        //Add platforms
        //this.platforms.create makes width and height
        //first number is top to bottom second is left to right
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
        this.platforms.create(1250, 230, 'ground');
        this.platforms.create(1500, 200, 'ground');
        this.platforms.create(2100, 150, 'ground');
        this.platforms.create(2400, 200, 'ground');
        this.platforms.create(3000, 150, 'ground');
        this.platforms.create(3800, 100, 'ground');
        this.platforms.create(3400, 10, 'ground');
        this.platforms.create(4000, 1, 'ground');
        this.platforms.create(4600, 50, 'ground');
        this.platforms.create(5100, 100, 'ground');
        this.platforms.create(5900, 200, 'ground');
        this.platforms.create(5600, 30, 'ground');


        this.player = this.physics.add.sprite(100, 450, 'dude');
        playerCamera.startFollow(this.player);
        this.player.setBounce(0.2);
        // this.player.setCollideWorldBounds(true);


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.stars = this.physics.add.group({
            allowGravity: true
        });
        // Create all the stars
        this.stars.create(50, 500, 'star');
        this.stars.create(250, 500, 'star');
        this.stars.create(450, 500, 'star');
        this.stars.create(650, 500, 'star');
        this.stars.create(200, 200, 'star');
        this.stars.create(1500, 150, 'star');
        this.stars.create(1250, 0, 'star');
        this.stars.create(1700, 0, 'star');
        this.stars.create(2000, 0, 'star');
        this.stars.create(2300, 0, 'star');
        this.stars.create(2600, 0, 'star');
        this.stars.create(6000, 0, 'star');
        this.stars.create(2900, 0, 'star');
        this.stars.create(3100, 0, 'star');
        this.stars.create(5700, 0, 'star');
        this.stars.create(3600, 0, 'star');
        this.stars.create(3800, 0, 'star');
        this.stars.create(4000, 0, 'star');
        this.stars.create(5800, 0, 'star');
        this.stars.create(4500, 0, 'star');
        this.stars.create(4800, 0, 'star');
        this.stars.create(5000, 0, 'star');
        this.stars.create(5200, 0, 'star');
        this.stars.create(5400, 0, 'star');
        this.stars.create(5600, 0, 'star');
        this.stars.create(5800, 0, 'star');
        this.stars.create(5700, 0, 'star');
        this.stars.create(4700, 0, 'star');

        //highest platform
        this.stars.create(450, 350, 'star');
        //middle platform
        this.stars.create(650, 150, 'star');
        //top platform
        // Update the starText to show the number of stars
        this.starText = this.add.text(16, 16, 'Stars: ' + this.stars.countActive(true), { fontSize: '32px', fill: '#000' });

        //this.platforms.create(600, 400, 'ground');
        // this.platforms.create(50, 250, 'ground');
        // this.platforms.create(750, 220, 'ground');
        // this.platforms.create(1250, 230, 'ground');
        // this.platforms.create(1500, 200, 'ground');
        // this.platforms.create(2100, 150, 'ground');
        // this.platforms.create(2400, 200, 'ground');
        // this.platforms.create(3000, 150, 'ground');
        // this.platforms.create(3800, 100, 'ground');
        // this.platforms.create(3400, 10, 'ground');
        // this.platforms.create(4000, 0, 'ground');
        // this.platforms.create(4600, 50, 'ground');
        // this.platforms.create(5100, 100, 'ground');
        // this.platforms.create(5900, 200, 'ground');
        // this.platforms.create(5600, 30, 'ground');
        this.stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });


        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, (player: any, star: any) => {
            star.disableBody(true, true);

            this.starText.setText('Stars: ' + this.stars.countActive(true))
        }, undefined, this);

        // Camera changes to show the UI
        for (let cam of [backgroundCamera, uiCamera]) {
            cam.ignore(this.player);
            cam.ignore(this.platforms);
            cam.ignore(this.stars);
        }
        playerCamera.ignore(this.starText);
        playerCamera.ignore(sky);
        backgroundCamera.ignore(this.starText);
        uiCamera.ignore(sky);
    }

    update() {
        console.log("x: " + this.player.x);
        console.log("y: " + this.player.y);
        if (this.player.y > 600) {
            this.scene.start("GameOver");
            this.sound.play('DeadSound');
        }
       if (this.stars.countActive() < 1) {
           this.scene.start("WinScreen");
       }
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}
