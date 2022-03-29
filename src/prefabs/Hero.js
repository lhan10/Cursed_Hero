// Hero frefab
class Hero extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        scene.physics.add.existing(this);

        this.scene = scene;

        //set moveVelocity
        this.moveVelocity = 20;

        //set destroyed
        this.destroyed = false;
        

    }

    update() {
        
        
        
    }

    hurt() {
        
        this.scene.sound.play('dhp');
        this.setTint(0xFF0000); 
        this.scene.time.delayedCall(500, () => {
            this.clearTint();
        });
        if (sh >0){
            sh-=1
        }else{
            hp -= 1;
        }
    }


    reset() {
        
    }
}