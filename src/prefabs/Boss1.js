// Boss1 frefab
class Boss1 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        scene.physics.add.existing(this);

        this.scene = scene;

        this.body.allowGravity = false;
        //set animation
        this.anims.play('boss1leftMove');

        //set move range
        this.rangeA = this.x - 64*3;
        this.rangeB = this.x + 64;

        //set moveVelocity
        this.initialVelocity = 80;
        this.moveVelocity = -5*this.initialVelocity;

        //set destroyed
        this.destroyed = false;

        //set hp
        this.hp = 40;

        this.haveBullet = false;

        this.body.setSize(64,64);

    }

    update() {
        
        if (!this.destroyed){
            this.setVelocityX(this.moveVelocity);
            if (this.x<=this.rangeA){
                this.anims.play('boss1rightMove');
                this.moveVelocity = this.initialVelocity;
            }else if(this.x>=this.rangeB){
                this.anims.play('boss1leftMove');
                this.moveVelocity = -5*this.initialVelocity;
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