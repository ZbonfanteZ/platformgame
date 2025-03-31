import { Scene } from 'phaser';

export class WinScreen extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    //gameover_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('WinScreen');
    }

    create ()
    {
        this.camera = this.cameras.main

        //this.background = this.add.image(512, 384, 'background');
        //this.background.setAlpha(0.5);

        this.gameover_text = this.add.text(450, 384, 'You win!', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
