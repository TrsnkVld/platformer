
// You can write more code here

/* START OF COMPILED CODE */

class platform-start extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "volcano", frame !== undefined && frame !== null ? frame : "Volcano Level Set_Platformer - Ground 10.png");
		
		this.scaleX = 0.5286129472082527;
		this.scaleY = 0.5286129472082527;
		
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
