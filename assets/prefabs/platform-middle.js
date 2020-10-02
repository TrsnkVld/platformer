
// You can write more code here

/* START OF COMPILED CODE */

class platform-middle extends Phaser.GameObjects.TileSprite {
	
	constructor(scene, x, y, width, height, texture, frame) {
		super(scene, x, y, typeof width === "number" ? width : 120, typeof height === "number" ? height : 128, texture || "volcano", frame !== undefined && frame !== null ? frame : "Volcano Level Set_Platformer - Ground 11.png");
		
		this.scaleX = 0.5291556075952513;
		this.scaleY = 0.5291556075952513;
		
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
