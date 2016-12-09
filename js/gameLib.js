var game = new Phaser.Game(1167, 876, Phaser.AUTO, 'gameDiv');

game.global = {

	scene: 0

};

game.state.add('bootLib', bootState);
game.state.add('loadLib', loadState);
game.state.add('lib', gameState);



game.state.start('bootLib');