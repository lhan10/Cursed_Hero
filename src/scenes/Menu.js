class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    
    preload() {
    }

    
    
    create() {
        this.t0 = this.add.bitmapText(centerX-2*textSpacer, 1/2*textSpacer, 'gem', 'Game Menu', 18).setTint(0xa83232);
        this.t1 = this.add.bitmapText(2*textSpacer, 2*textSpacer, 'gem', 'Play Normal Mode', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t2 = this.add.bitmapText(2*textSpacer, 4*textSpacer, 'gem', 'Play God Mode', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t3 = this.add.bitmapText(2*textSpacer, 6*textSpacer, 'gem', 'Tutorial', 18).setOrigin(0,0).setTint(0x8a988e);
        this.t4 = this.add.bitmapText(2*textSpacer, 8*textSpacer, 'gem', 'Credits', 18).setOrigin(0,0).setTint(0x8a988e);
        this.add.bitmapText(centerX, centerY+4.5*textSpacer,'gem','(Press Up Arrown and Down Arrow to pick a option.)',14).setOrigin(0.5).setTint(0xa83232);
        this.add.bitmapText(centerX, centerY+5.5*textSpacer,'gem','(Press Enter to choose the picked option.)',14).setOrigin(0.5).setTint(0xa83232);
        this.add.image(centerX+6*textSpacer, centerY - textSpacer, 'Stereary').setScale(2);
        cursors = this.input.keyboard.createCursorKeys();
        this.option1 = 0;
        this.keyEnter = this.input.keyboard.addKey('Enter');


    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            if(this.option1>1){
                this.option1 -=1;
                this.sound.play('switch');
            }
        }else if (Phaser.Input.Keyboard.JustDown(cursors.down)) {
            if(this.option1<4){
                this.option1 +=1;
                this.sound.play('switch');
            }
        }else if(Phaser.Input.Keyboard.JustDown(this.keyEnter)){
            switch(this.option1){
                case 1:
                    this.scene.start('talkingScene')
                    this.sound.play('switch');
                    break;
                case 2:
                    hp = 999;
                    this.scene.start('talkingScene');
                    this.sound.play('switch');
                        
                    break;
                case 3:
                    this.scene.start('tutorialScene');
                    this.sound.play('switch');
                    break;

                case 4:
                    this.scene.start('creditScene');
                    this.sound.play('switch');
                    break;
            }
        }

        switch(this.option1){
            case 1:
                this.t1.setTint(0xff0000);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0x8a988e);
                break;
            case 2:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0xff0000);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0x8a988e);
                break;
            case 3:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0xff0000);
                this.t4.setTint(0x8a988e);
                break;
            case 4:
                this.t1.setTint(0x8a988e);
                this.t2.setTint(0x8a988e);
                this.t3.setTint(0x8a988e);
                this.t4.setTint(0xff0000);
                break;    
        }


        
    }
}