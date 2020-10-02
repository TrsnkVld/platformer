
// You can write more code here

/* START OF COMPILED CODE */

class platform extends Phaser.GameObjects.Container {
	
	constructor(scene, x, y) {
		super(scene, x, y);
		
		// platform_1_1
		const platform_1_1 = new platform-middle(scene, 65, 0.00531005859375);
		this.add(platform_1_1);
		
		// platform-start_3_1
		const platform_start_3_1 = new platform-start(scene, 0, 0.00531005859375);
		this.add(platform_start_3_1);
		
		// platform-start_3_1_1
		const platform_start_3_1_1 = new platform-end(scene, 130.38377380371094, 0);
		this.add(platform_start_3_1_1);
		
		// platform_1_1 (components)
		new Physics(platform_1_1);
		
		// platform_start_3_1 (components)
		new Physics(platform_start_3_1);
		
		// platform_start_3_1_1 (components)
		new Physics(platform_start_3_1_1);
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
