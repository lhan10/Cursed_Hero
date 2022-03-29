class BossMap extends Phaser.Scene {
    constructor() {
        super('bossScene');

         // variables and settings
         this.ACCELERATION = 500;
         this.MAX_X_VEL = 200;   // pixels/second
         this.MAX_Y_VEL = 2000;
         this.DRAG = 600;    
         this.JUMP_VELOCITY = -700;
    }

    preload() {
        // load tile map
        this.load.path = "./assets/tilemaps/";
        this.load.image("tiles","tileset1.png");
        this.load.tilemapTiledJSON("mapboss","mapboss1.json");
    }

    create() {

        // add a tile map
        
        const map = this.add.tilemap("mapboss");    // this is referencing the key to our Tiled JSON file
        // add a tile set to the map
        const tileset = map.addTilesetImage("tileset1", "tiles");
        // create a new tilemap layer
        const worldLayer = map.createLayer("Background", tileset, 0, 32);
        const worldLayer0 = map.createLayer("Terrain", tileset, 0, 32);

        // add terrain collision
        worldLayer0.setCollisionByProperty({
            collides: true
        });
        
        // spawn hero
        const p1Spawn = map.findObject('Spawns', obj=> obj.name === 'p1Spawn');
        this.hero = new Hero(this,p1Spawn.x, p1Spawn.y, 'hero', 0);


        // spawn monster
        const m1Spawn = map.findObject('Spawns', obj=> obj.name === 'm1Spawn');
        this.monster1 = new Boss1(this,m1Spawn.x, m1Spawn.y-32, 'boss1leftMove', 0).setOrigin(0,0);
        this.monster1.setImmovable(true);


        // add hero physics
        this.hero.body.setCollideWorldBounds(true);
        this.hero.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);

        // add bullet
        this.bullet1 = new Bullet(this,-100,-100,'bullet').setOrigin(0,0);
        // add life text
        this.lifeText = this.add.bitmapText(5, 5, 'gem', 'Life: '+hp, 30).setOrigin(0,0).setTint(0xee2c79);
        
        // set camera bounds
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.hero, true, 0.25, 0.25); 

        //set world physics
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);
        this.physics.world.gravity.y = 2000;
        
        // create collider
        this.physics.add.collider(this.hero, worldLayer0);
        this.physics.add.collider(this.monster1, worldLayer0);

        
        // define keyboard cursor input
        cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey('A'); 
        this.keyD = this.input.keyboard.addKey('D'); 
    
        // hero animation(idle)
        this.anims.create({
            key: 'idle',
            defaultTextureKey: 'hero',
            frames: [ 
                { frame: 0 },
            ]
        });

        // hero animations (walking)
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
        });
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
        });

        // hero animations (swinging)
        this.anims.create({
            key: 'swing-right',
            defaultTextureKey: 'hero',
            frames: [ 
                { frame: 8 },
            ]
        });

        this.anims.create({
            key: 'swing-left',
            defaultTextureKey: 'hero',
            frames: [ 
                { frame: 8 },
            ]
        });

        // hero animations (jumping)
        this.anims.create({
            key: 'jump-right',
            defaultTextureKey: 'hero',
            frames: [ 
                { frame: 10 },
            ]
        });

        this.anims.create({
            key: 'jump-left',
            defaultTextureKey: 'hero',
            frames: [ 
                { frame: 11 },
            ]
        });

        // init player animation
        this.hero.anims.play('idle');

        // door animation(close)
        this.anims.create({
            key: 'close',
            defaultTextureKey: 'door',
            frames: [ 
                { frame: 0 },
            ]
        });

        // door animation(opening)
        this.anims.create({
            key: 'open',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('door', { start: 0, end: 3 }),
        });

        // init door animation
        //this.door.anims.play('close');

        // trap animation (activating)
        this.anims.create({
            key: 'activate',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 3 }),
        });



        // add outcome for collision between hero and monsters
        this.physics.add.collider(this.hero,this.monster1, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);


        this.physics.add.collider(this.bullet1, this.monster1, ()=>{
            this.monster1.hurt();
            if (this.monster1.hp <= 0){
                this.bgm.stop();
                this.monster1.destroyed = true;
                this.monster1.destroy();
                level += 1;
                // restore hp
                if (hp<max_hp){
                    hp = max_hp;
                }
                this.rd = Math.round(Math.random()*2);
                console.log(this.rd);
                if(this.rd ==0){
                    this.scene.start('map2Scene');
                }else if(this.rd ==1){
                    this.scene.start('map3Scene');
                }else{
                    this.scene.start('map1Scene');
                }
            }         
        },null, this);
        
        this.bgm = game.sound.add('bgm1');
        this.bgm.loop = true;
        this.bgm.play();
        this.bgm.setVolume(0.5);

        // restore hp
        if (hp<max_hp){
            hp = max_hp;
        }

    }



    update() { 
        if (hp <= 0){
            this.bgm.stop();
            this.scene.start('gameoverScene');
            
        }
        //update location and content of lifeText
        this.lifeText.x = this.hero.x-64;
        this.lifeText.text = 'HP:'+hp+'/'+max_hp+' Shield:'+sh;
        this.bullet1.update();

        //update monsters
        this.monster1.update();
        //this.monster2.update();
        //this.monster3.update();
        //this.monster4.update();

        if(this.keyA.isDown) {
            this.hero.body.setAccelerationX(-this.ACCELERATION);
            this.hero.play('walk-left', true);
            this.hero.setFlip(true, false);
        } else if(this.keyD.isDown) {
            this.hero.body.setAccelerationX(this.ACCELERATION);
            this.hero.play('walk-right', true);
            this.hero.resetFlip();
        } else {
            // set acceleration to 0 so DRAG will take over
            this.hero.play('idle');
            this.hero.body.setAccelerationX(0);
            this.hero.body.setDragX(this.DRAG);
        }

        if(!this.hero.body.blocked.down) {
            this.hero.anims.play('jump-left');
        }
        if(this.hero.body.blocked.down && Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.hero.body.setVelocityY(this.JUMP_VELOCITY);
        }

        if(cursors.shift.isDown || game.input.mousePointer.isDown) {
            this.sound.play('attack');
            this.hero.play('swing-left', true);
            this.bullet1.fire(this.hero.x, this.hero.y)
        }
        
        if (hp == 0){
            this.scene.start('gameoverScene');
        }
    }
}