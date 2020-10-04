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
		this.treasure;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_3;
		/** @type {Phaser.GameObjects.Text} */
		this.score;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1_1_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1_1_1_1_1_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.person;
		/** @type {Phaser.GameObjects.Sprite} */
		this.coin_2_1_1_1_1_1;
		/** @type {Array<Phaser.GameObjects.TileSprite|Phaser.GameObjects.Image>} */
		this.platforms;
		/** @type {Phaser.GameObjects.Sprite[]} */
		this.coins;
		/** @type {Phaser.GameObjects.Sprite[]} */
		this.treasures;
		
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
		const image_2_1 = this.add.tileSprite(1244, 592, 90, 350, "volcano", "Volcano Level Set_Platformer - Ground 09.png");
		image_2_1.flipX = true;
		
		// image_3_1
		const image_3_1 = this.add.image(1261.2397560234858, 410.85034192755984, "volcano", "Volcano Level Set_Platformer - Ground 04.png");
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
		
		// treasure
		const treasure = this.add.sprite(748, 605, "volcano", "Volcano Level Set_Collectable Object - Locked Golden Treasure Box.png");
		treasure.scaleX = 0.5238140363870418;
		treasure.scaleY = 0.4442283044492815;
		treasure.flipX = true;
		
		// volcano_Level_Set_Environment___Red_Flag_png
		const volcano_Level_Set_Environment___Red_Flag_png = this.add.image(694, 581, "volcano", "Volcano Level Set_Environment - Red Flag.png");
		volcano_Level_Set_Environment___Red_Flag_png.scaleX = 0.8048538887351329;
		volcano_Level_Set_Environment___Red_Flag_png.scaleY = 0.8048538887351329;
		volcano_Level_Set_Environment___Red_Flag_png.flipX = true;
		
		// coin
		const coin = this.add.sprite(630, 238, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin.scaleX = 0.4315907248475075;
		coin.scaleY = 0.4315907248475075;
		
		// coin_1
		const coin_1 = this.add.sprite(810, 125, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_1.scaleX = 0.4315907248475075;
		coin_1.scaleY = 0.4315907248475075;
		
		// coin_2
		const coin_2 = this.add.sprite(990, 123, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2.scaleX = 0.4315907248475075;
		coin_2.scaleY = 0.4315907248475075;
		
		// coin_3
		const coin_3 = this.add.sprite(1170, 0, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_3.scaleX = 0.4315907248475075;
		coin_3.scaleY = 0.4315907248475075;
		
		// score
		const score = this.add.text(0, 0, "", {});
		score.text = "Score:";
		score.setStyle({"color":"#000","fontSize":"35px","fontStyle":"bold","stroke":"#000","shadow.offsetX":2,"shadow.offsetY":2,"shadow.blur":4,"shadow.stroke":true});
		score.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		
		// platform_2
		const platform_2 = this.add.tileSprite(1729, 612, 500, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_2.scaleX = 0.5291556075952513;
		platform_2.scaleY = 0.5291556075952513;
		
		// platform-start_1_3
		const platform_start_1_3 = this.add.image(1893, 612, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_3.scaleX = 0.5301479966247101;
		platform_start_1_3.scaleY = 0.5301479966247101;
		platform_start_1_3.flipX = true;
		
		// platform-start_4
		const platform_start_4 = this.add.image(1564, 612, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_4.scaleX = 0.5286129472082527;
		platform_start_4.scaleY = 0.5286129472082527;
		
		// platform_3
		const platform_3 = this.add.tileSprite(2140.092188370787, 526.2279821567397, 165, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_3.scaleX = 0.5291556075952513;
		platform_3.scaleY = 0.5291556075952513;
		
		// platform-start_1_4
		const platform_start_1_4 = this.add.image(2217.61297084149, 526.6626745395522, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_4.scaleX = 0.5301479966247101;
		platform_start_1_4.scaleY = 0.5301479966247101;
		platform_start_1_4.flipX = true;
		
		// platform-start_5
		const platform_start_5 = this.add.image(2063.092188370787, 526.2279821567397, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_5.scaleX = 0.5286129472082527;
		platform_start_5.scaleY = 0.5286129472082527;
		
		// platform-start_5_1
		const platform_start_5_1 = this.add.image(1602.0734286655816, 448.1953365869208, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_5_1.scaleX = 0.5286129472082527;
		platform_start_5_1.scaleY = 0.5286129472082527;
		
		// platform-start_1_4_1
		const platform_start_1_4_1 = this.add.image(1756.5941806187066, 448.6300289697333, "volcano", "Volcano Level Set_Platformer - Ground 10.png");
		platform_start_1_4_1.scaleX = 0.5301479966247101;
		platform_start_1_4_1.scaleY = 0.5301479966247101;
		platform_start_1_4_1.flipX = true;
		
		// platform_3_1
		const platform_3_1 = this.add.tileSprite(1679.0734286655816, 448.1953365869208, 165, 128, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platform_3_1.scaleX = 0.5291556075952513;
		platform_3_1.scaleY = 0.5291556075952513;
		
		// coin_2_1
		const coin_2_1 = this.add.sprite(1620, 246, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1.scaleX = 0.4315907248475075;
		coin_2_1.scaleY = 0.4315907248475075;
		
		// coin_2_1_1
		const coin_2_1_1 = this.add.sprite(1800, 492, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1_1.scaleX = 0.4315907248475075;
		coin_2_1_1.scaleY = 0.4315907248475075;
		
		// coin_2_1_1_1
		const coin_2_1_1_1 = this.add.sprite(2160, 123, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1_1_1.scaleX = 0.4315907248475075;
		coin_2_1_1_1.scaleY = 0.4315907248475075;
		
		// coin_2_1_1_1_1
		const coin_2_1_1_1_1 = this.add.sprite(1080, 492, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1_1_1_1.scaleX = 0.4315907248475075;
		coin_2_1_1_1_1.scaleY = 0.4315907248475075;
		
		// coin_2_1_1_1_1_1_1
		const coin_2_1_1_1_1_1_1 = this.add.sprite(900, 492, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1_1_1_1_1_1.scaleX = 0.4315907248475075;
		coin_2_1_1_1_1_1_1.scaleY = 0.4315907248475075;
		
		// person
		const person = this.add.sprite(194, 576, "player", "idle-right_0.png");
		
		// coin_2_1_1_1_1_1
		const coin_2_1_1_1_1_1 = this.add.sprite(1350, 492, "volcano", "Volcano Level Set_Collectable Object - Coin 01.png");
		coin_2_1_1_1_1_1.scaleX = 0.4315907248475075;
		coin_2_1_1_1_1_1.scaleY = 0.4315907248475075;
		
		// lists
		const platforms = [platform, platform_start_1, platform_start, platform_start_1_1, platform_start_2, platform_start_3, platform_1, platform_start_1_2, image_1, platform_start_2_1, platform_start_1_1_1, image_3, image_3_1, platform_start_1_2_1, platform_1_1, platform_start_3_1, platform_start_1_2_2, platform_1_2, platform_start_3_2, platform_start_3_1_1, platform_start_1_2_1_1, image_1_1, platform_start_5_1, platform_3_1, platform_start_1_4_1, platform_2, platform_start_4, platform_start_1_3, platform_start_5, platform_3, platform_start_1_4]
		const coins = [coin, coin_3, coin_2, coin_1, coin_2_1_1_1_1_1_1, coin_2_1_1_1_1, coin_2_1_1, coin_2_1, coin_2_1_1_1, coin_2_1_1_1_1_1]
		const treasures = [treasure]
		
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
		
		// treasure (components)
		const treasurePhysics = new Physics(treasure);
		treasurePhysics.isStatic = true;
		
		// coin (components)
		new Physics(coin);
		
		// coin_1 (components)
		new Physics(coin_1);
		
		// coin_2 (components)
		new Physics(coin_2);
		
		// coin_3 (components)
		new Physics(coin_3);
		
		// platform_2 (components)
		const platform_2Physics = new Physics(platform_2);
		platform_2Physics.isStatic = true;
		
		// platform_start_1_3 (components)
		const platform_start_1_3Physics = new Physics(platform_start_1_3);
		platform_start_1_3Physics.isStatic = true;
		
		// platform_start_4 (components)
		const platform_start_4Physics = new Physics(platform_start_4);
		platform_start_4Physics.isStatic = true;
		
		// platform_3 (components)
		const platform_3Physics = new Physics(platform_3);
		platform_3Physics.isStatic = true;
		
		// platform_start_1_4 (components)
		const platform_start_1_4Physics = new Physics(platform_start_1_4);
		platform_start_1_4Physics.isStatic = true;
		
		// platform_start_5 (components)
		const platform_start_5Physics = new Physics(platform_start_5);
		platform_start_5Physics.isStatic = true;
		
		// platform_start_5_1 (components)
		const platform_start_5_1Physics = new Physics(platform_start_5_1);
		platform_start_5_1Physics.isStatic = true;
		
		// platform_start_1_4_1 (components)
		const platform_start_1_4_1Physics = new Physics(platform_start_1_4_1);
		platform_start_1_4_1Physics.isStatic = true;
		
		// platform_3_1 (components)
		const platform_3_1Physics = new Physics(platform_3_1);
		platform_3_1Physics.isStatic = true;
		
		// coin_2_1 (components)
		new Physics(coin_2_1);
		
		// coin_2_1_1 (components)
		new Physics(coin_2_1_1);
		
		// coin_2_1_1_1 (components)
		new Physics(coin_2_1_1_1);
		
		// coin_2_1_1_1_1 (components)
		new Physics(coin_2_1_1_1_1);
		
		// coin_2_1_1_1_1_1_1 (components)
		new Physics(coin_2_1_1_1_1_1_1);
		
		// person (components)
		new Movement(person);
		const personPhysics = new Physics(person);
		personPhysics.width = 50;
		personPhysics.height = 110;
		personPhysics.offsetX = 25;
		personPhysics.offsetY = 15;
		
		// coin_2_1_1_1_1_1 (components)
		new Physics(coin_2_1_1_1_1_1);
		
		this.sky = sky;
		this.rocks_1 = rocks_1;
		this.clouds_1 = clouds_1;
		this.clouds_2 = clouds_2;
		this.rocks_2 = rocks_2;
		this.clouds_3 = clouds_3;
		this.clouds_4 = clouds_4;
		this.treasure = treasure;
		this.coin = coin;
		this.coin_1 = coin_1;
		this.coin_2 = coin_2;
		this.coin_3 = coin_3;
		this.score = score;
		this.coin_2_1 = coin_2_1;
		this.coin_2_1_1 = coin_2_1_1;
		this.coin_2_1_1_1 = coin_2_1_1_1;
		this.coin_2_1_1_1_1 = coin_2_1_1_1_1;
		this.coin_2_1_1_1_1_1_1 = coin_2_1_1_1_1_1_1;
		this.person = person;
		this.coin_2_1_1_1_1_1 = coin_2_1_1_1_1_1;
		this.platforms = platforms;
		this.coins = coins;
		this.treasures = treasures;
	}
	
	/* START-USER-CODE */


	create() {
		this.sound.add('collect');
		this.sound.add('treasure');

		this.scoreCount = 0;

		this.scoreAll = 0;

		const width = this.scale.width;
		const height = this.scale.height;

		const sceneWidth = width * 3;
		this.physics.world.setBounds(0, 0, sceneWidth, height, true, true, true, true);

		this.editorCreate();
		this.score.fixedToCamera = true;

		this.score.setScrollFactor(0);
		
		//this.map = this.make.tilemap({key: 'Level'});
		this.physics.add.collider(this.person, this.platforms);
		this.physics.add.collider(this.coins, this.platforms);
		
		this.physics.add.overlap(this.person, this.coins, this.collectCoin, null, this);
		this.physics.add.overlap(this.person, this.treasures, this.collectTreasure, null, this);
/*
		this.coins.forEach(coin => {
			coin.play('coin', true);
		})
*/

		for(let i=0; i < this.coins.length; i++) {
			let random = Phaser.Math.Between(0, 5);
			this.coins[i].play('coin', true, random);
		}

		setTimeout(() => {
			//this.person.body.setCollideWorldBounds(true);
			

			this.coins.forEach(el => this.scoreAll += 10);
			this.treasures.forEach(el => this.scoreAll += 100);

			this.platforms.forEach(el => {
				el.body.checkCollision.bottom = false;
				el.body.checkCollision.left = false;
				el.body.checkCollision.right = false;
			});

			
			this.score.text = "Score: "+ this.scoreCount + " / " + this.scoreAll;
		}, 50);

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

	collectCoin(player, coin) {
		coin.destroy(coin.x, coin.y); // remove the tile/coin
		this.scoreCount += 10;
		this.sound.play('collect');
		this.score.text = "Score: "+ this.scoreCount + " / " + this.scoreAll;
		this.win();
		
		return false;
	}

	collectTreasure(player, treasure) {
		treasure.destroy(treasure.x, treasure.y); // remove the tile/coin
		this.scoreCount += 100;
		this.sound.play('treasure');
		this.score.text = "Score: "+ this.scoreCount + " / " + this.scoreAll;
		this.win();

		return false;
	}

	win() {

		if (this.scoreCount == this.scoreAll) {
			this.sound.play('win');
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
