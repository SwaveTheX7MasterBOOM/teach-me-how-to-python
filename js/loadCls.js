var loadState = {

	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('arrow', 'images/Arrow.png', 186, 204);
		game.load.spritesheet('bg', 'images/class-background.png', 1167, 615, 12);
		game.load.spritesheet('wizard', 'images/wiz.png', 321, 332);
		game.load.spritesheet('bubble-border', 'images/bubSheet.png', 9, 9);
		game.load.image('bubble-tail', 'images/bubTail.png');
		game.load.bitmapFont('wiz', 'fonts/wiz/wiz.png', 'fonts/wiz/wiz.fnt');  
		
	},

	create: function() { 
		game.state.start('cls');
	}
};