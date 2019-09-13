import Phaser from 'phaser';
import dudeSheet from '../assets/dude.png';

export class DemoScene extends Phaser.Scene {
  preload() {
    this.load.spritesheet('dude', dudeSheet, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    // Create the player
    const player = this.physics.add.sprite(
      +this.game.config.width / 2,
      +this.game.config.height / 2,
      'dude',
      4,
    );
    player.setBounce(0);
    player.setCollideWorldBounds(true);
  }

  update() {}
}
