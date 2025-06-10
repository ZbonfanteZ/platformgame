import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { Instruction } from './scenes/Instruction';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';


import { Game, Types } from "phaser";
import { WinScreen } from './scenes/WinScreen';
import { Second } from './scenes/Second';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 300 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Instruction,
        MainGame,
        GameOver,
        WinScreen,
        Second,
    ]
};

export default new Game(config);
