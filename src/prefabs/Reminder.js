// Reminder frefab
class Reminder extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        scene.physics.add.existing(this);

        this.scene = scene;
        this.body.allowGravity = false;
        this.text1 = this.scene.add.bitmapText(5, 5, 'gem', '', 10).setOrigin(0,0).setTint(0xf4a83a);
        
    }

    show(textin) {
        this.text1.text = textin;
        this.scene.time.delayedCall(1500, () => {
            this.text1.text = '';
        });     
        
    }

    update(){
        this.text1.x = this.scene.hero.x-5;
        this.text1.y = this.scene.hero.y-25;
    }
}