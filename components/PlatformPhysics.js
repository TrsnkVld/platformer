
// You can write more code here

/* START OF COMPILED CODE */

class PlatformPhysics {
	
	constructor(gameObject) {
		gameObject["__PlatformPhysics"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;

		scene.physics.add.existing(this.gameObject)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {PlatformPhysics} */
	static getComponent(gameObject) {
		return gameObject["__PlatformPhysics"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
