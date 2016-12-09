var game = new Phaser.Game(5000, 2725, Phaser.AUTO, 'gameDiv');

game.global = {

	scene: 0

};

game.state.add('bootMenu', bootState);
game.state.add('loadMenu', loadState);
game.state.add('menu', menuState);



game.state.start('bootMenu');