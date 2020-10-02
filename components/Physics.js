
// You can write more code here

/* START OF COMPILED CODE */

class Physics {
	
	constructor(gameObject) {
		gameObject["__Physics"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {boolean} */
		this.isStatic = false;
		/** @type {number} */
		this.width = 90;
		/** @type {number} */
		this.height = 150;
		/** @type {number} */
		this.offsetX = 0;
		/** @type {number} */
		this.offsetY = 0;
		
		/* START-USER-CTR-CODE */
		this.scene = this.gameObject.scene;

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}
	
	/* START-USER-CODE */
	
	start() {
		this.scene.physics.add.existing(this.gameObject, this.isStatic);
		//console.log(this.gameObject.texture.key);

		if (this.gameObject.texture.key == "player") {
			/** @returns {Phaser.Physics.Arcade.Body} */
			const body = this.gameObject.body;
			
			body.setSize(this.width, this.height);
			body.setOffset(this.offsetX, this.offsetY);
		}
	
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
