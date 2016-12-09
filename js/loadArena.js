var loadState = {

	preload: function () {
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('arrow', 'images/Arrow.png', 186, 204);
		game.load.spritesheet('character', 'images/PlayerSheet.png', 1112, 714, 17);
		game.load.spritesheet('ghost', 'images/EnemySheet.png', 542, 683, 26);
		game.load.spritesheet('bubble-border', 'images/bubSheet.png', 9, 9);
		game.load.spritesheet('wizard', 'images/wiz.png', 321, 332);
		game.load.spritesheet('spell', 'images/darkSpell.png', 1081, 617);
        game.load.image('bubble-tail', 'images/bubTail.png');
		game.load.image('bg', 'images/gym-background.png');
		game.load.image('bg-sky', 'images/gym-background-sky.jpg');
		game.load.image('cloud', 'images/clouds.png');
		game.load.bitmapFont('retro', 'fonts/retro/retro.png', 'fonts/retro/retro.fnt');  
		game.load.bitmapFont('ghoul', 'fonts/testBit/font.png', 'fonts/testBit/font.fnt');  
		game.load.bitmapFont('guy', 'fonts/mainGuy/mainGuy.png', 'fonts/mainGuy/mainGuy.fnt');  
		game.load.bitmapFont('wiz', 'fonts/wiz/wiz.png', 'fonts/wiz/wiz.fnt');  

	},

	create: function() { 
		game.state.start('arena');
	}
};