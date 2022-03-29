class Tutorial2 extends Phaser.Scene {
    constructor() {
        super('tutorial2Scene');
    }

    create(){
        this.add.bitmapText(textSpacer, textSpacer, 'gem', 'Game controls:', 18).setOrigin(0,0).setTint(0x426cf5);
        this.add.bitmapText(3*textSpacer, 2*textSpacer, 'gem', 'Press A and D to move.', 18).setOrigin(0,0).setTint(0x426cf5);
        this.add.bitmapText(3*textSpacer, 3*textSpacer, 'gem', 'Press Space Bar to jump.', 18).setOrigin(0,0).setTint(0x426cf5);
        this.add.bitmapText(3*textSpacer, 4*textSpacer, 'gem', 'Use mouse to fire.', 18).setOrigin(0,0).setTint(0x426cf5);
        this.add.bitmapText(textSpacer, 6.5*textSpacer, 'gem', 'Items that may drop from killing monsters:', 16).setOrigin(0,0).setTint(0xd742f5);
        this.add.image(1*textSpacer, 8*textSpacer, 'heart');
        this.add.image(1*textSpacer, 10*textSpacer, 'range');
        this.add.image(9*textSpacer, 8*textSpacer, 'shield');
        this.add.image(13*textSpacer, 10*textSpacer, 'random');
        this.add.bitmapText(2*textSpacer,8*textSpacer, 'gem', 'Increase 1 HP', 16).setOrigin(0,0).setTint(0xd742f5);
        this.add.bitmapText(2*textSpacer,10*textSpacer, 'gem', 'Increase attacking range', 16).setOrigin(0,0).setTint(0xd742f5);
        this.add.bitmapText(14*textSpacer,10*textSpacer, 'gem', 'Random effects', 16).setOrigin(0,0).setTint(0xd742f5);
        this.add.bitmapText(10*textSpacer,8*textSpacer, 'gem', 'Block one-time damage', 16).setOrigin(0,0).setTint(0xd742f5);
        this.add.bitmapText(10.5*textSpacer, 12*textSpacer,'gem','Press Right Arrow to go back to menu.',10).setOrigin(0).setTint(0xa83232);
        cursors = this.input.keyboard.createCursorKeys();  
    }


    update(){
        if(Phaser.Input.Keyboard.JustDown(cursors.right)){
            this.scene.start('menuScene');
            this.sound.play('switch');
        }

    }

    }
