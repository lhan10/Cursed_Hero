class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene');
    }

    preload() {

    }

    create() {
        let title011 = this.add.bitmapText(centerX - 3*textSpacer, 3.5*textSpacer, 'gem', 'Ligen Han', 18).setOrigin(0.5).setTint(0x4ea832);
        let title012 = this.add.bitmapText(centerX - 5* textSpacer, 6.5*textSpacer, 'gem', 'Ligen Han', 18).setOrigin(0.5).setTint(0x4ea832);
        let title021 = this.add.bitmapText(centerX + 3*textSpacer, 3.5*textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title022 = this.add.bitmapText(centerX , 6.5* textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title023 = this.add.bitmapText(centerX - 3*textSpacer, 9.5*textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title031 = this.add.bitmapText(centerX +5*textSpacer, 6.5*textSpacer, 'gem', 'Henry Huang', 18).setOrigin(0.5).setTint(0xffff00);
        let title032 = this.add.bitmapText(centerX + 3* textSpacer, 9.5*textSpacer, 'gem', 'Henry Huang', 18).setOrigin(0.5).setTint(0xffff00);
        let title04 = this.add.bitmapText(centerX, 2*textSpacer, 'gem', 'Programming', 32).setOrigin(0.5).setTint(0x0099ff);
        let title05 = this.add.bitmapText(centerX, 5*textSpacer, 'gem', 'Art', 32).setOrigin(0.5).setTint(0x0099ff);
        let title06 = this.add.bitmapText(centerX, 8*textSpacer, 'gem', 'Music', 32).setOrigin(0.5).setTint(0x0099ff);
        let tilte07 = this.add.bitmapText(textSpacer, 12*textSpacer,'gem','Press Left Arrow to go back.', 14).setOrigin(0,0).setTint(0xa83232);
        cursors = this.input.keyboard.createCursorKeys();  
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
          
            // start gameplay scene
            this.sound.play('switch');
            this.scene.start('menuScene');
        }
    }
}