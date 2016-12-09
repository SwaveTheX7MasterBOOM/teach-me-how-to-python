var game = new Phaser.Game(1167, 615, Phaser.AUTO, 'gameDiv');

game.global = {

	scene: 0

};

game.state.add('bootCls', bootState);
game.state.add('loadCls', loadState);
game.state.add('cls', gameState);



game.state.start('bootCls');