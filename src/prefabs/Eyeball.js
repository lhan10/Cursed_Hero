// Eyeball frefab
class Eyeball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        scene.physics.add.existing(this);

        this.scene = scene;

        //set animation
        this.anims.play('eyeballMove');

        //set move range
        this.rangeA = this.x - 64;
        this.rangeB = this.x + 64;

        //set moveVelocity
        this.initialVelocity = 20 + 20*Math.random() + level;
        this.moveVelocity = -this.initialVelocity;

        //set destroyed
        this.destroyed = false;

        //set hp
        this.hp = 3;

        this.haveBullet = false;

    }

    update() {
        
        if (!this.destroyed){
            this.setVelocityX(this.moveVelocity);
            if (this.x<=this.rangeA){
                this.moveVelocity = this.initialVelocity;
            }else if(this.x>=this.rangeB){
                this.moveVelocity = -this.initialVelocity;
            }
                       
            
        }
        
        
    }

    hurt() {
        this.hp -= 1;
        this.setTint(0xFF0000); 
        this.scene.time.delayedCall(500, () => {
            this.clearTint();
        });
    }

    fire() {
        
            
    }

    reset() {
        
    }
}