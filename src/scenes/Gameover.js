class Gameover extends Phaser.Scene {
    constructor() {
        super('gameoverScene');
    }

    preload() {
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, 400, 256,'gameover').setOrigin(0,0);
        cursors = this.input.keyboard.createCursorKeys();
        this.add.bitmapText(10.5*textSpacer, 12*textSpacer,'gem','Press Right Arrow to restart the game.',10).setOrigin(0).setTint(0xa83232);
        hp = max_hp;
        range = 0.15;
        level = 1;
        sh = 0;
        this.sound.play('gameover');
    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.sound.play('switch');
            this.rd = Math.round(Math.random()*3);
                    switch(this.rd){
                        case 0:
                            this.scene.start('map1Scene');
                            this.sound.play('switch');
                            break;
                        case 1:
                            this.scene.start('map2Scene');
                            this.sound.play('switch');
                            break;
                        case 2:
                            this.scene.start('map3Scene');
                            this.sound.play('switch');
                            break;
                        case 3:
                            this.scene.start('map4Scene');
                            this.sound.play('switch');
                            break;
                    }
        }
    }
}