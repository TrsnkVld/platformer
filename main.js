
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 626 * 2,
		height: 375 * 2,
		type: Phaser.AUTO,
		backgroundColor: "#e4e4e4",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			fps: 60,
			arcade: {
				gravity: { y: 27000 },//35000
				debug: false,
			}
		}
	});

	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {

		this.scene.start("Level");
	}

}