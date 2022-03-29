// Boss2 frefab
class Boss2 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        scene.physics.add.existing(this);

        this.scene = scene;

        //this.body.allowGravity = false;
        //set animation
        this.anims.play('boss2Move');

        //set move range
        this.rangeA = this.x - 256;
        this.rangeB = this.x + 256;

        //set moveVelocity
        this.initialVelocity = 45;
        this.moveVelocity = -5*this.initialVelocity;

        //set destroyed
        this.destroyed = false;

        //set hp
        this.hp = 45;

        this.haveBullet = false;

        this.body.setSize(64,64);
        //define this boss's baby - baba
        this.baba1 = new Baba(this.scene,-10,-10,'baba',0);
        this.baba2 = new Baba(this.scene,-10,-10,'baba',0);
        this.baba2.initialVelocity = -this.baba2.initialVelocity;

    }

    update() {
        
        if (!this.destroyed){
            this.setVelocityX(this.moveVelocity);
            if (this.x<=this.rangeA){
                this.moveVelocity = this.initialVelocity;
            }else if(this.x>=this.rangeB){
                this.moveVelocity = -this.initialVelocity;
            }
            this.baba1.update();
            this.baba2.update();
            
            if (this.y>300) {
                this.x = this.rangeA + Math.round(Math.random()*512);
                this.y = 0; 
                this.baba1.x = this.x;
                this.baba1.y = 208;
                this.baba2.x = this.x+32;
                this.baba2.y = 208;
            }
                  
        }
        
        
    }

    hurt() {
        
        this.hp -= 1;
        this.setTint(0xFF0000); 
        this.scene.time.delayedCall(500, () => {
            this.clearTint();
            if (Math.round(Math.random()*2)==1){
                this.x = this.rangeA + Math.round(Math.random()*512);
            this.y = 0;
            this.baba1.x = this.x;
            this.baba1.y = 208;
            this.baba2.x = this.x+32;
            this.baba2.y = 208;
            }
            
        });
    }

    fire() {
        
            
    }

    reset() {
        
    }
}