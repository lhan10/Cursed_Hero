class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        //load sheets
        this.load.path = './assets/';
        this.load.spritesheet('hero', 'hero-sheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('pink_eyeball', 'Pink-Eyeball.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.spritesheet('fire', 'fire.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.spritesheet('green_slime','Green-Slime.png',{
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('door', 'door.png', {
            frameWidth: 32,
            frameHeight: 32,
        })

        this.load.spritesheet('trap', 'trap.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.spritesheet('boss1', 'boss1.png',{
            frameWidth: 64,
            frameHeight: 64,
        })
        this.load.spritesheet('boss2', 'boss2.png',{
            frameWidth: 64,
            frameHeight: 64,
        })
        this.load.spritesheet('baba','baba.png',{
            frameWidth: 16,
            frameHeight: 16,
        })

        this.load.bitmapFont('gem', 'gem.png', 'gem.xml');
        this.load.image('tower','tower.png');
        this.load.image('bullet','bullet.png');
        this.load.image('fire_bullet','fire_bullet.png');
        this.load.image('green_bullet','green_bullet.png');
        this.load.image('heart','heart.png');
        this.load.image('key','key.png');
        this.load.image('potion','medicine.png');
        this.load.image('random','random.png');
        this.load.image('range','range.png');
        this.load.image('shield','shield.png');
        this.load.json('dialog', 'dialog.json');
        this.load.json('dialog1', 'dialog1.json');
        this.load.json('dialog2', 'dialog2.json');
        this.load.json('dialog3', 'dialog3.json');
        this.load.json('dialog4', 'dialog4.json');
        this.load.json('dialog5', 'dialog5.json');
        this.load.image('dialogbox', 'dialog.png');
        this.load.image('Bugson','hero.png');
        this.load.image('Villagers','villagers.png');
        this.load.image('Stereary','boss.png');
        this.load.image('bosss1','bosss1.png');
        this.load.image('trap1','trap1.png');
        this.load.image('monster1','monster1.png');
        this.load.image('monster2','monster2.png');
        this.load.image('monster3','monster3.png');
        this.load.image('monster4','monster4.png');
        this.load.image('bg1','bg1.png');
        this.load.image('bg2','bg2.png');
        this.load.image('gameover','gameover.png');

        

        //load audio
        this.load.audio('attack','attack.wav');
        this.load.audio('shift','shift.wav');
        this.load.audio('switch','switch.wav');
        this.load.audio('gameover','gameover.wav');
        this.load.audio('pick','pick.wav');
        this.load.audio('kill','kill.wav');
        this.load.audio('bgm1','bgm1.wav');
        this.load.audio('bgm2','bgm2.wav');
        this.load.audio('bgm2','bgm2.wav');
        this.load.audio('ending','ending.wav');
        this.load.audio('dhp','dhp.wav');
        this.load.audio('open','open.wav');

    }

    create() {
        //
        this.anims.create({
            key: 'eyeballMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('pink_eyeball', { start: 0, end: 3 }),
        });

        this.anims.create({
            key: 'fireMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('fire', { start: 0, end: 3 }),
        });
        this.anims.create({
            key: 'greenslimeMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('green_slime', { start: 0, end: 3 }),
        });
        this.anims.create({
            key: 'boss1rightMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('boss1', { start: 0, end: 1 }),
        });
        this.anims.create({
            key: 'boss1leftMove',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('boss1', { start: 2, end: 3 }),
        });
        this.anims.create({
            key: 'boss2Move',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('boss2', { start: 0, end: 3 }),
        });
        this.anims.create({
            key: 'babaMove',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('baba', { start: 0, end: 2 }),
        });
        // go to Title scene
        this.scene.start('titleScene');
    }
}