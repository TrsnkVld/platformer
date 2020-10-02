
// You can write more code here

/* START OF COMPILED CODE */

class platform-thin extends Phaser.GameObjects.TileSprite {
	
	constructor(scene, x, y, width, height, texture, frame) {
		super(scene, x, y, typeof width === "number" ? width : 120, typeof height === "number" ? height : 24, texture || "volcano", frame !== undefined && frame !== null ? frame : "Volcano Level Set_Platformer - Wooden Bridge.png");
		
		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.isStatic = true;
		
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
