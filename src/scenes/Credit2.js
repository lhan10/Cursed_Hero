class Credit2 extends Phaser.Scene {
    constructor() {
        super('credit2Scene');
    }

    preload() {

    }

    create() {

        let title011 = this.add.bitmapText(centerX - 3*textSpacer, 2*textSpacer, 'gem', 'Ligen Han', 18).setOrigin(0.5).setTint(0x4ea832);
        let title012 = this.add.bitmapText(centerX - 5* textSpacer, 4*textSpacer, 'gem', 'Ligen Han', 18).setOrigin(0.5).setTint(0x4ea832);
        let title021 = this.add.bitmapText(centerX + 3*textSpacer, 2*textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title022 = this.add.bitmapText(centerX , 4 * textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title023 = this.add.bitmapText(centerX - 3*textSpacer, 6*textSpacer, 'gem', 'Yuwei Mao', 18).setOrigin(0.5).setTint(0xff00ff);
        let title031 = this.add.bitmapText(centerX +5*textSpacer, 4*textSpacer, 'gem', 'Henry Huang', 18).setOrigin(0.5).setTint(0xffff00);
        let title032 = this.add.bitmapText(centerX + 3* textSpacer, 6*textSpacer, 'gem', 'Henry Huang', 18).setOrigin(0.5).setTint(0xffff00);
        let title04 = this.add.bitmapText(centerX, textSpacer, 'gem', 'Programming', 22).setOrigin(0.5).setTint(0x0099ff);
        let title05 = this.add.bitmapText(centerX, 3*textSpacer, 'gem', 'Art', 22).setOrigin(0.5).setTint(0x0099ff);
        let title06 = this.add.bitmapText(centerX, 5*textSpacer, 'gem', 'Music', 22).setOrigin(0.5).setTint(0x0099ff);
        let title02 = this.add.bitmapText(centerX, 9*textSpacer, 'gem', 'THE END', 24).setOrigin(0.5).setTint(0xFFFFFF);
        let title03 = this.add.bitmapText(centerX, 11*textSpacer, 'gem', 'Thank you for playing.', 24).setOrigin(0.5).setTint(0xFFFFFF);
    }

    update() {
    }
}