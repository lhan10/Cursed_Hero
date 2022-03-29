class Map4 extends Phaser.Scene {
    constructor() {
        super('map4Scene');

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
        this.load.tilemapTiledJSON("map4","map4.json");
    }

    create() {

        // add a tile map
        
        const map = this.add.tilemap("map4");    // this is referencing the key to our Tiled JSON file
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
        this.rm1 = Math.round(Math.random()*2);
        if (this.rm1 == 0){
            const m1Spawn = map.findObject('Spawns', obj=> obj.name === 'm1Spawn');
            this.monster1 = new Eyeball(this,m1Spawn.x, m1Spawn.y, 'pink_eyeball', 0);
            this.monster1.setImmovable(true);      
        }else if(this.rm1 == 1){
            const m1Spawn = map.findObject('Spawns', obj=> obj.name === 'm1Spawn');
            this.monster1 = new Fire(this,m1Spawn.x, m1Spawn.y, 'fire', 0);
            this.monster1.setImmovable(true);
        }else{
            const m1Spawn = map.findObject('Spawns', obj=> obj.name === 'm1Spawn');
            this.monster1 = new Slime(this,m1Spawn.x, m1Spawn.y, 'green_slime', 0);
            this.monster1.setImmovable(true);
        }
        this.rm2 = Math.round(Math.random()*2);
        if (this.rm2 == 0){
            const m2Spawn = map.findObject('Spawns', obj=> obj.name === 'm2Spawn');
            this.monster2 = new Eyeball(this,m2Spawn.x, m2Spawn.y, 'pink_eyeball', 0);
            this.monster2.setImmovable(true);      
        }else if(this.rm2 == 1){
            const m2Spawn = map.findObject('Spawns', obj=> obj.name === 'm2Spawn');
            this.monster2 = new Fire(this,m2Spawn.x, m2Spawn.y, 'fire', 0);
            this.monster2.setImmovable(true);
        }else{
            const m2Spawn = map.findObject('Spawns', obj=> obj.name === 'm2Spawn');
            this.monster2 = new Slime(this,m2Spawn.x, m2Spawn.y, 'green_slime', 0);
            this.monster2.setImmovable(true);
        }
        

        this.rm3 = Math.round(Math.random()*2);
        if (this.rm3 == 0){
            const m3Spawn = map.findObject('Spawns', obj=> obj.name === 'm3Spawn');
            this.monster3 = new Eyeball(this,m3Spawn.x, m3Spawn.y, 'pink_eyeball', 0);
            this.monster3.setImmovable(true);      
        }else if(this.rm3 == 1){
            const m3Spawn = map.findObject('Spawns', obj=> obj.name === 'm3Spawn');
            this.monster3 = new Fire(this,m3Spawn.x, m3Spawn.y, 'fire', 0);
            this.monster3.setImmovable(true);
        }else{
            const m3Spawn = map.findObject('Spawns', obj=> obj.name === 'm3Spawn');
            this.monster3 = new Slime(this,m3Spawn.x, m3Spawn.y, 'green_slime', 0);
            this.monster3.setImmovable(true);
        }
        
        this.rm4 = Math.round(Math.random()*2);
        if (this.rm4 == 0){
            const m4Spawn = map.findObject('Spawns', obj=> obj.name === 'm4Spawn');
            this.monster4 = new Eyeball(this,m4Spawn.x, m4Spawn.y, 'pink_eyeball', 0);
            this.monster4.setImmovable(true);      
        }else if(this.rm4 == 1){
            const m4Spawn = map.findObject('Spawns', obj=> obj.name === 'm4Spawn');
            this.monster4 = new Fire(this,m4Spawn.x, m4Spawn.y, 'fire', 0);
            this.monster4.setImmovable(true);
        }else{
            const m4Spawn = map.findObject('Spawns', obj=> obj.name === 'm4Spawn');
            this.monster4 = new Slime(this,m4Spawn.x, m4Spawn.y, 'green_slime', 0);
            this.monster4.setImmovable(true);
        }



        //spawn door
        const doorSpawn = map.findObject('Spawns', obj=> obj.name === 'doorSpawn');
        this.door = new Door(this,doorSpawn.x, doorSpawn.y, 'door', 0);
        this.door.setImmovable(true);

        // spawn trap
        const trap1Spawn = map.findObject('Spawns', obj=> obj.name === 'trap1Spawn');
        this.trap1 = new Trap(this,trap1Spawn.x, trap1Spawn.y, 'trap', 0);
        this.trap1.setImmovable(true); 

        // add hero physics
        this.hero.body.setCollideWorldBounds(true);
        this.hero.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);

        // add bullet
        this.bullet1 = new Bullet(this,-100,-100,'bullet').setOrigin(0,0);
        // add life text
        this.lifeText = this.add.bitmapText(5, 5, 'gem', 'Life: '+hp+'/'+max_hp+'Current shield:'+sh, 30).setOrigin(0,0).setTint(0xee2c79);
        
        // add drops
        this.heart1 = new Drop(this,-50,-50,'heart',0);
        this.key1 = new Drop(this,-50,-50,'key',0);
        this.range1 = new Drop(this,-50,-50,'range',0);
        this.medicine1 = new Drop(this,-50,-50,'random',0);
        this.shield1 = new Drop(this,-50,-50,'shield',0);
        this.monsterKilled = 0;

        //add text reminder
        this.reminder1 = new Reminder(this,-10,-10,'heart',0);

        // set camera bounds
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.hero, true, 0.25, 0.25); 

        //set world physics
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);
        this.physics.world.gravity.y = 2000;
        
        // create collider
        this.physics.add.collider(this.hero, worldLayer0);
        this.physics.add.collider(this.monster1, worldLayer0);
        this.physics.add.collider(this.monster2, worldLayer0);
        this.physics.add.collider(this.monster3, worldLayer0);
        this.physics.add.collider(this.monster4, worldLayer0);
        this.physics.add.collider(this.door, worldLayer0);
        this.physics.add.collider(this.trap1, worldLayer0);


        
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
        this.door.anims.play('close');

        // trap animation (activating)
        this.anims.create({
            key: 'activate',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 3 }),
        });

        // init door animation
        this.trap1.anims.play('activate');
    

        // add outcome for collision between hero and monsters
        this.physics.add.collider(this.hero,this.monster1, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);
        this.physics.add.collider(this.hero,this.monster2, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);
        this.physics.add.collider(this.hero,this.monster3, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);
        this.physics.add.collider(this.hero,this.monster4, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);


        // add outcome for collision between hero and traps
        this.physics.add.collider(this.hero,this.trap1, ()=>{
            this.hero.x -= 30;
            this.hero.hurt();
        },null, this);



        // add outcome for collision between hero and door
        this.physics.add.collider(this.hero,this.door, ()=>{
            if (!this.door.opened && (this.monsterKilled>=4 || this.haveKey)){
                this.sound.play('open');
                this.bgm.stop();
                this.door.opened = true;
                this.door.anims.play('open');
                this.hero.alpha = false;
                this.bullet1.alpha = false;
                this.time.delayedCall(1000, () => {
                    level += 1;
                    if (level==5){
                        this.scene.start('bossScene');
                    }else if(level==10){
                        this.scene.start('boss2Scene');
                    }else{
                        this.rd = Math.round(Math.random()*2);
                        
                        if(this.rd ==0){
                            this.scene.start('map2Scene');
                        }else if(this.rd ==1){
                            this.scene.start('map3Scene');
                        }else{
                            this.scene.start('map1Scene');
                        }
                        
                    }
            });
            }

        },null, this);

        // bullet colide with monster
        this.physics.add.collider(this.bullet1, this.monster1, ()=>{
            this.monster1.hurt();
            this.monster1.setTint(0xFF0000);
            if (this.monster1.hp <= 0){
                this.sound.play('kill');
                this.monsterKilled += 1;
                this.itemDrop(this.monster1);    
                this.monster1.destroyed = true;
                this.monster1.destroy();
            }  
                        
        },null, this);
        this.physics.add.collider(this.bullet1,this.monster2, ()=>{
            this.monster2.hurt();
            if (this.monster2.hp <= 0){
                this.sound.play('kill');
                this.monsterKilled += 1;
                this.itemDrop(this.monster2);
                this.monster2.destroyed = true;
                this.monster2.destroy();
            }
        },null, this);
        this.physics.add.collider(this.bullet1,this.monster3, ()=>{
            this.monster3.hurt();
            if (this.monster3.hp <= 0){
                this.sound.play('kill');
                this.monsterKilled += 1;
                this.itemDrop(this.monster3);
                this.monster3.destroyed = true;
                this.monster3.destroy();
            }
        },null, this);
        this.physics.add.collider(this.bullet1,this.monster4, ()=>{
            this.monster4.hurt();
            if (this.monster4.hp <= 0){
                this.sound.play('kill');
                this.monsterKilled += 1;
                this.itemDrop(this.monster4);
                this.monster4.destroyed = true;
                this.monster4.destroy();
            }
        },null, this);

        //hero collsion with monster bullets
        if (this.monster1.haveBullet){
            this.physics.add.collider(this.hero,this.monster1.monsterBullet, ()=>{
                this.hero.hurt();
                this.monster1.monsterBullet.x = -10;
                this.monster1.monsterBullet.y = -10;
                this.monster1.monsterBullet.setVelocityX(0);
                this.monster1.monsterBullet.setVelocityY(0);
                
            },null, this);
        }

        if (this.monster2.haveBullet){
            this.physics.add.collider(this.hero,this.monster2.monsterBullet, ()=>{
                this.hero.hurt();
                this.monster2.monsterBullet.x = -10;
                this.monster2.monsterBullet.y = -10;
                this.monster2.monsterBullet.setVelocityX(0);
                this.monster2.monsterBullet.setVelocityY(0);
            },null, this);
        }
        if (this.monster3.haveBullet){
            this.physics.add.collider(this.hero,this.monster3.monsterBullet, ()=>{
                this.hero.hurt();
                this.monster3.monsterBullet.x = -10;
                this.monster3.monsterBullet.y = -10;
                this.monster3.monsterBullet.setVelocityX(0);
                this.monster3.monsterBullet.setVelocityY(0);
            },null, this);
        }
        if (this.monster4.haveBullet){
            this.physics.add.collider(this.hero,this.monster4.monsterBullet, ()=>{
                this.hero.hurt();
                this.monster4.monsterBullet.x = -10;
                this.monster4.monsterBullet.y = -10;
                this.monster4.monsterBullet.setVelocityX(0);
                this.monster4.monsterBullet.setVelocityY(0);
            },null, this);
        }
        //have key
        this.havekey = false;
        //hero collide with drops
        this.physics.add.collider(this.hero,this.heart1, ()=>{
            this.sound.play('pick');
            this.reminder1.show("HP+1");
            if (hp<max_hp){
                hp+=1;
            }
            this.heart1.x = -50;
            this.heart1.y = -50;
        },null, this);
        this.physics.add.collider(this.hero,this.key1, ()=>{
            this.sound.play('pick');
            this.reminder1.show("Got Key");
            this.haveKey = true;
            this.key1.x = -50;
            this.key1.y = -50;
        },null, this);
        this.physics.add.collider(this.hero,this.range1, ()=>{
            this.sound.play('pick');
            this.reminder1.show("Range++");
            range += 0.05;
            this.bullet1.timeMoving += 0.05;
            this.range1.x = -50;
            this.range1.y = -50;
        },null, this);
        this.physics.add.collider(this.hero,this.shield1, ()=>{
            this.sound.play('pick');
            this.reminder1.show("Shield+1");
            sh +=1
            this.shield1.x = -50;
            this.shield1.y = -50;
        },null, this);
        this.physics.add.collider(this.hero,this.medicine1, ()=>{
            this.sound.play('pick');
            this.rmm = Math.round(Math.random()*2);
            
            switch(this.rmm){
                case 0:
                    this.reminder1.show("HP+1");
                    if (hp<max_hp){
                        hp+=1;
                    }
                    break;
                case 1:
                    this.reminder1.show("Range++");
                    range += 0.05;
                    this.bullet1.timeMoving += 0.05;
                    break;
                case 2: 
                    this.reminder1.show("HP-1");         
                    hp-=1;
            }
            this.medicine1.x =-50;
            this.medicine1.y =-50;
        },null, this);

        this.bgm = game.sound.add('bgm2');
        this.bgm.loop = true;
        this.bgm.play();
        this.bgm.setVolume(0.5);

    }



    update() {
        if (hp <=  0){
            this.bgm.stop();
            this.scene.start('gameoverScene');

        }
        //update location and content of lifeText
        this.lifeText.x = this.hero.x-64;
        this.lifeText.text = 'HP:'+hp+'/'+max_hp+' Shield:'+sh;
        this.bullet1.update();

        //update monsters
        this.monster1.update();
        this.monster2.update();
        this.monster3.update();
        this.monster4.update();

        this.reminder1.update();

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
        
    }

    itemDrop(monster){
        this.rdrop = Math.round(Math.random()*10);
        switch(this.rdrop){
            case 0:
                this.heart1.x = monster.x;
                this.heart1.y = monster.y;
                break;
            case 1:
                this.key1.x = monster.x;
                this.key1.y = monster.y;
                break;
            case 2:
                this.range1.x = monster.x;
                this.range1.y = monster.y;
                break;
            case 3:
                this.medicine1.x = monster.x;
                this.medicine1.y = monster.y;
                break;
            case 4:
                this.shield1.x = monster.x;
                this.shield1.y = monster.y;
                break;
        }
    }
}