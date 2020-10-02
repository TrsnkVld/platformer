// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Image} */
		this.sky;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.rocks_1;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.clouds_1;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.clouds_2;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.rocks_2;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.clouds_3;
		/** @type {Phaser.GameObjects.TileSprite} */
		this.clouds_4;
		/** @type {Phaser.GameObjects.Sprite} */
		this.person;
		/** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image>} */
		this.platforms;
		
		/* START-USER-CTR-CODE */

		//this.cursors = scene.input.keyboard.createCursorKeys();

		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// sky
		const sky = this.add.image(0, 0, "sky");
		sky.scaleX = 0.7059312906418038;
		sky.scaleY = 0.7059312906418038;
		sky.setOrigin(0, 0);
		
		// rocks_1
		const rocks_1 = this.add.tileSprite(0, 0, 8000, 1080, "rocks_1");
		rocks_1.scaleX = 0.7059312906418038;
		rocks_1.scaleY = 0.7059312906418038;
		rocks_1.setOrigin(0, 0);
		
		// clouds_1
		const clouds_1 = this.add.tileSprite(0, 0, 8000, 1080, "clouds_1");
		clouds_1.scaleX = 0.7059312906418038;
		clouds_1.scaleY = 0.7059312906418038;
		clouds_1.setOrigin(0, 0);
		
		// clouds_2
		const clouds_2 = this.add.tileSprite(0, 0, 8000, 1080, "clouds_2");
		clouds_2.scaleX = 0.7059312906418038;
		clouds_2.scaleY = 0.7059312906418038;
		clouds_2.setOrigin(0, 0);
		
		// rocks_2
		const rocks_2 = this.add.tileSprite(0, 0, 8000, 1080, "rocks_2");
		rocks_2.scaleX = 0.7059312906418038;
		rocks_2.scaleY = 0.7059312906418038;
		rocks_2.setOrigin(0, 0);
		
		// clouds_3
		const clouds_3 = this.add.tileSprite(0, 0, 8000, 1080, "clouds_3");
		clouds_3.scaleX = 0.7059312906418038;
		clouds_3.scaleY = 0.7059312906418038;
		clouds_3.setOrigin(0, 0);
		
		// clouds_4
		const clouds_4 = this.add.tileSprite(0, 0, 8000, 1080, "clouds_4");
		clouds_4.scaleX = 0.7059312906418038;
		clouds_4.scaleY = 0.7059312906418038;
		clouds_4.setOrigin(0, 0);
		
		// platform
		const platform = this.add.tileSprite(80, 699, 500, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform.scaleX = 0.5291556075952513;
		platform.scaleY = 0.5291556075952513;
		
		// platform-start
		const platform_start = this.add.image(-85, 699, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start.scaleX = 0.5286129472082527;
		platform_start.scaleY = 0.5286129472082527;
		
		// platform-start_1
		const platform_start_1 = this.add.image(243.52078346601888, 699.43471816377, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1.scaleX = 0.5301479966247101;
		platform_start_1.scaleY = 0.5301479966247101;
		platform_start_1.flipX = true;
		
		// platform-start_1_1
		const platform_start_1_1 = this.add.image(130.55162263855232, 579.0377495688133, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_1.scaleX = 0.5301479966247101;
		platform_start_1_1.scaleY = 0.5301479966247101;
		platform_start_1_1.flipX = true;
		
		// platform-start_2
		const platform_start_2 = this.add.image(63.03084016784919, 578.6030571860008, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_2.scaleX = 0.5286129472082527;
		platform_start_2.scaleY = 0.5286129472082527;
		
		// platform_1
		const platform_1 = this.add.tileSprite(352.42735015224304, 457.37190084843405, 150, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_1.scaleX = 0.5291556075952513;
		platform_1.scaleY = 0.5291556075952513;
		
		// platform-start_1_2
		const platform_start_1_2 = this.add.image(425.9481326229461, 457.80659323124655, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_2.scaleX = 0.5301479966247101;
		platform_start_1_2.scaleY = 0.5301479966247101;
		platform_start_1_2.flipX = true;
		
		// platform-start_3
		const platform_start_3 = this.add.image(279.42735015224304, 457.37190084843405, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_3.scaleX = 0.5286129472082527;
		platform_start_3.scaleY = 0.5286129472082527;
		
		// platform-start_2_1
		const platform_start_2_1 = this.add.image(617.2068572633024, 382.5759502117163, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_2_1.scaleX = 0.5286129472082527;
		platform_start_2_1.scaleY = 0.5286129472082527;
		
		// platform-start_1_1_1
		const platform_start_1_1_1 = this.add.image(684.7276397340055, 383.0106425945288, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_1_1.scaleX = 0.5301479966247101;
		platform_start_1_1_1.scaleY = 0.5301479966247101;
		platform_start_1_1_1.flipX = true;
		
		// image_1
		const image_1 = this.add.tileSprite(895, 359, 359, 24, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		
		// image_2
		const image_2 = this.add.tileSprite(1158, 575, 90, 350, "volcano", "Volcano Level Set_Platformer - Ground 09.png");
		
		// image_3
		const image_3 = this.add.image(1134, 411, "volcano", "Volcano Level Set_Platformer - Ground 04.png");
		
		// image_2_1
		const image_2_1 = this.add.tileSprite(1245, 592, 90, 350, "volcano", "Volcano Level Set_Platformer - Ground 09.png");
		image_2_1.flipX = true;
		
		// image_3_1
		const image_3_1 = this.add.image(1262.2397560234858, 410.85034192755984, "volcano", "Volcano Level Set_Platformer - Ground 04.png");
		image_3_1.flipX = true;
		
		// platform_1_1
		const platform_1_1 = this.add.tileSprite(1315, 730, 150, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_1_1.scaleX = 0.5291556075952513;
		platform_1_1.scaleY = 0.5291556075952513;
		
		// platform-start_1_2_1
		const platform_start_1_2_1 = this.add.image(1388, 730, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_2_1.scaleX = 0.5301479966247101;
		platform_start_1_2_1.scaleY = 0.5301479966247101;
		platform_start_1_2_1.flipX = true;
		
		// platform-start_3_1
		const platform_start_3_1 = this.add.image(1242, 730, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_3_1.scaleX = 0.5286129472082527;
		platform_start_3_1.scaleY = 0.5286129472082527;
		
		// volcano_Level_Set_Environment___Signpost_02_png
		const volcano_Level_Set_Environment___Signpost_02_png = this.add.image(1257, 665, "volcano", "Volcano Level Set_Environment - Signpost 02.png");
		volcano_Level_Set_Environment___Signpost_02_png.scaleX = 0.5550438000800895;
		volcano_Level_Set_Environment___Signpost_02_png.scaleY = 0.5550438000800895;
		volcano_Level_Set_Environment___Signpost_02_png.flipX = true;
		
		// platform-start_1_2_1_1
		const platform_start_1_2_1_1 = this.add.image(1112, 660, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_2_1_1.scaleX = 0.5301479966247101;
		platform_start_1_2_1_1.scaleY = 0.5301479966247101;
		platform_start_1_2_1_1.flipX = true;
		
		// platform-start_3_1_1
		const platform_start_3_1_1 = this.add.image(1045, 660, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_3_1_1.scaleX = 0.5286129472082527;
		platform_start_3_1_1.scaleY = 0.5286129472082527;
		
		// platform-start_1_2_2
		const platform_start_1_2_2 = this.add.image(866, 660, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_2_2.scaleX = 0.5301479966247101;
		platform_start_1_2_2.scaleY = 0.5301479966247101;
		platform_start_1_2_2.flipX = true;
		
		// platform_1_2
		const platform_1_2 = this.add.tileSprite(793, 660, 150, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_1_2.scaleX = 0.5291556075952513;
		platform_1_2.scaleY = 0.5291556075952513;
		
		// platform-start_3_2
		const platform_start_3_2 = this.add.image(720, 660, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_3_2.scaleX = 0.5286129472082527;
		platform_start_3_2.scaleY = 0.5286129472082527;
		
		// image_1_1
		const image_1_1 = this.add.tileSprite(957, 638, 120, 24, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		
		// volcano_Level_Set_Collectable_Object___Locked_Golden_Treasure_Box_png
		const volcano_Level_Set_Collectable_Object___Locked_Golden_Treasure_Box_png = this.add.image(748, 605, "volcano", "Volcano Level Set_Collectable Object - Locked Golden Treasure Box.png");
		volcano_Level_Set_Collectable_Object___Locked_Golden_Treasure_Box_png.scaleX = 0.5238140363870418;
		volcano_Level_Set_Collectable_Object___Locked_Golden_Treasure_Box_png.scaleY = 0.4442283044492815;
		volcano_Level_Set_Collectable_Object___Locked_Golden_Treasure_Box_png.flipX = true;
		
		// volcano_Level_Set_Environment___Red_Flag_png
		const volcano_Level_Set_Environment___Red_Flag_png = this.add.image(694, 580, "volcano", "Volcano Level Set_Environment - Red Flag.png");
		volcano_Level_Set_Environment___Red_Flag_png.scaleX = 0.8048538887351329;
		volcano_Level_Set_Environment___Red_Flag_png.scaleY = 0.8048538887351329;
		volcano_Level_Set_Environment___Red_Flag_png.flipX = true;
		
		// person
		const person = this.add.sprite(236, 533, "player", "idle-right_0.png");
		
		// lists
		const platforms = [platform, platform_start_1, platform_start, platform_start_1_1, platform_start_2, platform_start_3, platform_1, platform_start_1_2, image_1, platform_start_2_1, platform_start_1_1_1, image_3, image_3_1, platform_start_1_2_1, platform_1_1, platform_start_3_1, platform_start_1_2_2, platform_1_2, platform_start_3_2, platform_start_3_1_1, platform_start_1_2_1_1, image_1_1]
		
		// platform (components)
		const platformPhysics = new Physics(platform);
		platformPhysics.isStatic = true;
		
		// platform_start (components)
		const platform_startPhysics = new Physics(platform_start);
		platform_startPhysics.isStatic = true;
		
		// platform_start_1 (components)
		const platform_start_1Physics = new Physics(platform_start_1);
		platform_start_1Physics.isStatic = true;
		
		// platform_start_1_1 (components)
		const platform_start_1_1Physics = new Physics(platform_start_1_1);
		platform_start_1_1Physics.isStatic = true;
		
		// platform_start_2 (components)
		const platform_start_2Physics = new Physics(platform_start_2);
		platform_start_2Physics.isStatic = true;
		
		// platform_1 (components)
		const platform_1Physics = new Physics(platform_1);
		platform_1Physics.isStatic = true;
		
		// platform_start_1_2 (components)
		const platform_start_1_2Physics = new Physics(platform_start_1_2);
		platform_start_1_2Physics.isStatic = true;
		
		// platform_start_3 (components)
		const platform_start_3Physics = new Physics(platform_start_3);
		platform_start_3Physics.isStatic = true;
		
		// platform_start_2_1 (components)
		const platform_start_2_1Physics = new Physics(platform_start_2_1);
		platform_start_2_1Physics.isStatic = true;
		
		// platform_start_1_1_1 (components)
		const platform_start_1_1_1Physics = new Physics(platform_start_1_1_1);
		platform_start_1_1_1Physics.isStatic = true;
		
		// image_1 (components)
		const image_1Physics = new Physics(image_1);
		image_1Physics.isStatic = true;
		
		// image_2 (components)
		const image_2Physics = new Physics(image_2);
		image_2Physics.isStatic = true;
		
		// image_3 (components)
		const image_3Physics = new Physics(image_3);
		image_3Physics.isStatic = true;
		
		// image_2_1 (components)
		const image_2_1Physics = new Physics(image_2_1);
		image_2_1Physics.isStatic = true;
		
		// image_3_1 (components)
		const image_3_1Physics = new Physics(image_3_1);
		image_3_1Physics.isStatic = true;
		
		// platform_1_1 (components)
		const platform_1_1Physics = new Physics(platform_1_1);
		platform_1_1Physics.isStatic = true;
		
		// platform_start_1_2_1 (components)
		const platform_start_1_2_1Physics = new Physics(platform_start_1_2_1);
		platform_start_1_2_1Physics.isStatic = true;
		
		// platform_start_3_1 (components)
		const platform_start_3_1Physics = new Physics(platform_start_3_1);
		platform_start_3_1Physics.isStatic = true;
		
		// platform_start_1_2_1_1 (components)
		const platform_start_1_2_1_1Physics = new Physics(platform_start_1_2_1_1);
		platform_start_1_2_1_1Physics.isStatic = true;
		
		// platform_start_3_1_1 (components)
		const platform_start_3_1_1Physics = new Physics(platform_start_3_1_1);
		platform_start_3_1_1Physics.isStatic = true;
		
		// platform_start_1_2_2 (components)
		const platform_start_1_2_2Physics = new Physics(platform_start_1_2_2);
		platform_start_1_2_2Physics.isStatic = true;
		
		// platform_1_2 (components)
		const platform_1_2Physics = new Physics(platform_1_2);
		platform_1_2Physics.isStatic = true;
		
		// platform_start_3_2 (components)
		const platform_start_3_2Physics = new Physics(platform_start_3_2);
		platform_start_3_2Physics.isStatic = true;
		
		// image_1_1 (components)
		const image_1_1Physics = new Physics(image_1_1);
		image_1_1Physics.isStatic = true;
		
		// person (components)
		const personPhysics = new Physics(person);
		personPhysics.width = 50;
		personPhysics.height = 110;
		personPhysics.offsetX = 25;
		personPhysics.offsetY = 15;
		new Movement(person);
		
		this.sky = sky;
		this.rocks_1 = rocks_1;
		this.clouds_1 = clouds_1;
		this.clouds_2 = clouds_2;
		this.rocks_2 = rocks_2;
		this.clouds_3 = clouds_3;
		this.clouds_4 = clouds_4;
		this.person = person;
		this.platforms = platforms;
	}
	
	/* START-USER-CODE */


	create() {
		const width = this.scale.width;
		const height = this.scale.height;

		const sceneWidth = width * 3;

		this.editorCreate();
		//this.map = this.make.tilemap({key: 'Level'});
		this.physics.add.collider(this.person, this.platforms);
		this.physics.world.setBounds(0, 0, sceneWidth, height, true, true, true, true);

		

		
		setTimeout(() => {
			this.person.body.setCollideWorldBounds(true);
			this.person.body.checkCollision.up = false;
			this.person.body.checkCollision.left = false;
			this.person.body.checkCollision.right = false;
		}, 50);

		//console.log(this)

		this.cameras.main.setBounds(1, 0, sceneWidth, height);
		this.cameras.main.startFollow(this.person);

		this.sky.setScrollFactor(0);
		this.rocks_1.setScrollFactor(0.1);
		this.clouds_1.setScrollFactor(0.13);
		this.clouds_2.setScrollFactor(0.15);
		this.rocks_2.setScrollFactor(0.17);
		this.clouds_3.setScrollFactor(0.24);
		this.clouds_4.setScrollFactor(0.25);
	}

	update() {

		const camera = this.cameras.main;


	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
