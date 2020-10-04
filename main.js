
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
				gravity: { y: 800 },//35000
				debug: false,
			}
		}
	});

	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/asset-pack.json");

		this.load.audio('collect', 'assets/audio/coin-collect.wav');
		this.load.audio('treasure', 'assets/audio/treasure.wav', );
		this.load.audio('win', 'assets/audio/win.wav', );
	}

	create() {

		this.scene.start("Level");
	}

}