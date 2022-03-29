class Tutorial extends Phaser.Scene {
    constructor() {
        super('tutorialScene');
    }

    preload() {

    }

    create() {
        this.add.bitmapText(textSpacer, 1/2*textSpacer, 'gem', '    To start the game, player will get 20 HP.', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 3/2*textSpacer, 'gem', 'Everytime the player got hit or attacked by a', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 3*textSpacer, 'gem', 'monster                               or', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.image(centerX-5*textSpacer, 3*textSpacer, 'Stereary').setScale(SCALE);
        this.add.image(centerX-3*textSpacer, 3*textSpacer, 'bosss1').setScale(SCALE);
        this.add.image(centerX-1*textSpacer, 3*textSpacer, 'monster1');
        this.add.image(centerX+1*textSpacer, 3*textSpacer, 'monster2');
        this.add.image(centerX+3*textSpacer, 3*textSpacer, 'monster3');
        this.add.image(centerX+5*textSpacer, 3*textSpacer, 'monster4');
        this.add.bitmapText(textSpacer, 4*textSpacer, 'gem', "step on a trap       will -1 HP. The game will ", 16).setOrigin(0,0).setTint(0x32a860);
        this.add.image(8*textSpacer, 4.7*textSpacer, 'trap1').setScale(SCALE);
        this.add.bitmapText(textSpacer, 5.2*textSpacer, 'gem', "be over if the player's HP is 0. There are 10", 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 6.2*textSpacer, 'gem', 'total levels in this game. In order to pass a ', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 7.2*textSpacer, 'gem', "level, player needs to defeat all the monsters", 16).setOrigin(0,0).setTint(0x32a860);
        this.add.image(centerX+6.5*textSpacer, 8.2*textSpacer, 'key');
        this.add.bitmapText(textSpacer, 8.2*textSpacer, 'gem', 'that exist on the map or obtain a key    from', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 9.2*textSpacer, 'gem', ' killing monsters. Once the player has defeated', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 10.2*textSpacer, 'gem', ' all the monsters on a map or obatined the key,', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.bitmapText(textSpacer, 11.2*textSpacer, 'gem', 'open the door       to go to the next level.', 16).setOrigin(0,0).setTint(0x32a860);
        this.add.image(7.5*textSpacer, 11.5*textSpacer, 'door').setScale(SCALE/(2/3));
        this.add.bitmapText(14*textSpacer, 12.2*textSpacer,'gem','Press Right Arrow to continue the tutorial.',10).setOrigin(0.5).setTint(0xa83232);
        cursors = this.input.keyboard.createCursorKeys();  
    }


    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.scene.start('tutorial2Scene');
            this.sound.play('switch');
        }
    }
}