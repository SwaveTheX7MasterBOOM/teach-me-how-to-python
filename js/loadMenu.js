var loadState = {

	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('arrow', 'images/Arrow.png', 186, 204);
		game.load.spritesheet('class', 'images/class.png', 1326, 959);
		game.load.spritesheet('gym', 'images/gym.png', 2740, 1411);
		game.load.spritesheet('library', 'images/library.png', 2085, 1174);
		game.load.spritesheet('bubble-border', 'images/bubSheet.png', 9, 9);
        game.load.image('bubble-tail', 'images/bubTail.png');
		game.load.image('bg', 'images/main-background.png');
		game.load.image('bg-sky', 'images/main-background-sky.jpg');
		game.load.image('cloud', 'images/clouds.png');
		game.load.bitmapFont('retro', 'fonts/retro/retro.png', 'fonts/retro/retro.fnt');  
		
	},

	create: function() { 
		game.state.start('menu');
	}
};