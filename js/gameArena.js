var game = new Phaser.Game(5000, 2639, Phaser.AUTO, 'gameDiv');

game.global = {

	scene: 0

};

game.state.add('bootArena', bootState);
game.state.add('loadArena', loadState);
game.state.add('arena', gameState);



game.state.start('bootArena');