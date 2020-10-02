// You can write more code here

/* START OF COMPILED CODE */

class Movement {
	
	constructor(gameObject) {
		gameObject["__Movement"] = this;
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;

		this.cursors = scene.input.keyboard.createCursorKeys();

		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}
	
	/* START-USER-CODE */



	start() {
		let isMovingFront = true;
	}

	update() {

		const speed = 400

		const jump = -27000;

		const person = this.gameObject;

		const touchingDown = person.body.touching.down; //person.body.touching.down;

		/** @type {Phaser.Physics.Arcade.Body} */
		const body = person.body;

		if (!body) {
			return;
		}


		if (this.cursors.space.isDown && this.cursors.right.isDown && touchingDown) {
			//console.log('right-jump');
			//console.log(person)
			body.velocity.y = jump;
			body.velocity.x = speed;
			person.play('player-jump-right')
		}
		else if (this.cursors.space.isDown && this.cursors.left.isDown && touchingDown) {
			//console.log('left-jump');
			body.velocity.y = jump;
			body.velocity.x = -speed;
			person.play('player-jump-left')
		}
		else if (this.cursors.down.isDown && this.cursors.right.isDown) {
			//console.log('right-slide');
			body.setVelocity(speed * 1.1, 0)
			person.play('player-slide-right', true)
		}
		else if (this.cursors.down.isDown && this.cursors.left.isDown) {
			//console.log('left-slide');
			body.setVelocity(-speed * 1.1, 0)
			person.play('player-slide-left', true)
		}
		else if (this.cursors.left.isDown) {
			this.isMovingFront = false;
			body.setVelocity(-speed, 0)
			//console.log(this.isMovingFront)
			person.play('player-run-right', true);
			person.flipX = true;
		}
		else if (this.cursors.right.isDown) {
			this.isMovingFront = true;
			body.setVelocity(speed, 0)
			//console.log(this.isMovingFront)
			person.play('player-run-right', true)
			person.flipX = false;
		}
		else if (this.cursors.down.isDown) {
			body.setVelocity(0, speed)
			//console.log(this.isMovingFront)
			person.play('player-slide-right', true)
			//console.log(person)
		}
		else if (this.cursors.space.isDown && touchingDown) {
			body.velocity.y = jump;
			//console.log(this.isMovingFront)
			person.play('player-jump-right')
			//console.log(touchingDown);
		}
		else {
			body.setVelocity(0, 0)
			const key = person.anims.currentAnim;
			//console.log(parts);
			/*
			const parts = key.split('-')
			const direction = parts[0]
			person.play(`${direction}-idle`)
			*/
			//console.log(this.isMovingFront)
			if (this.isMovingFront == true) {
				person.play('player-idle-right', true);
				person.flipX = false;
			} else {
				person.play('player-idle-right', true);
				person.flipX = true;
			}
		}
		//console.log(this.isMovingFront);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
