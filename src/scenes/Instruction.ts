import { Scene, GameObjects } from 'phaser';

export class Instruction extends Scene
{
    //background: GameObjects.Image;
    //logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('Instruction');
    }

    create ()
    {
        //this.background = this.add.image(512, 384, 'background');

        //this.logo = this.add.image(512, 300, 'logo');

        this.title = this.add.text(400, 250,  "Collect all the stars and don't fall off the map", {
            fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
