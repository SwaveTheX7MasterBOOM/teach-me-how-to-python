var loadState = {

	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('arrow', 'images/Arrow.png', 186, 204);
		game.load.spritesheet('bg', 'images/library-background.png', 1167, 876);
		game.load.spritesheet('book', 'images/book.png', 591, 525, 29);
				game.load.spritesheet('bubble-border', 'images/bubSheet.png', 9, 9);
		game.load.image('bubble-tail', 'images/bubTail.png');
game.load.bitmapFont('retro', 'fonts/retro/retro.png', 'fonts/retro/retro.fnt');
		
	},

	create: function() { 
		game.state.start('lib');
	}
};