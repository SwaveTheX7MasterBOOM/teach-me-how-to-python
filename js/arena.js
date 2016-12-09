var gameState = {

	cloud: 0,
	gym:0,
	clsRoom:0,
	lib:0,
	ar:0,
	character:0,
	enemy:0,
	wiz:0,

	create: function() { 
		game.add.image(0, 0, 'bg-sky');
		cloud = game.add.tileSprite(0, 0, 5000, 1189, 'cloud');
		game.add.image(0, 0, 'bg');
		
			character = new character(500,1200);
			enemy = new purpleGhoul(3500,1700);
			
			wiz = new wizard(500, 2639);
		//(game, x, y, width, tail, font, time, callback, cbparams, text)
		game.world.add(new SpeechBubble(game, 1400, 1300, 500, true, 'guy', 4, enemyEnterence, null, "anybody home?"));

	},
	
	
	update: function(){
		
		cloud.tilePosition.x += 2;
		

		
	}
	
	
};


function enemyEnterence()
{
	
	enemy.appear();
	
}

function characterResponce()
{
	
	game.world.add(new SpeechBubble(game, 1400, 1300, 600, true, 'guy', 4, showcaseProblem, null, "Any Chance you're a friendly ghost?"));
	
}

function showcaseProblem()
{
	
	                    $('html, body').animate({
                        scrollTop: $("#testt").offset().top
                    }, 500);
					
					ar = new arrow(400, 2300);
					
					
					$("#info").append('<h2 class="tlt">A wild ghost has appeared!</h2> <h4 class="tlt">Try to survive</h4> <h4 class="tlt">Attempt to ward the ghost off by waving your staff around.</h4> <h4 class="tlt">Press the "Run Program" button to start.</h4>');
	
	$('.tlt').textillate({ in : {
    effect: 'rotateIn',
    delayScale: 1,

    // set the delay between each character
    delay: 100,
    shuffle: true
  }

});
	
}


function codeInput(input)
{
	
	ar.destroy();
	console.log(input.substring(0, input.length-1));
	
	var b = "Back! You foul Phantasm!"
	
	if(input.substring(0, input.length-1) === b)
	{
		character.animations.play('attack');
		game.world.add(new SpeechBubble(game, 1400, 1300, 600, true, 'guy', 4, monsterResponse1, null, input));
	
	}
	else if(input.substring(0, input.length-1) === "Dark Bomb!")
	{
character.animations.play('attack');
new spell(800,800);
		game.world.add(new SpeechBubble(game, 1400, 1300, 600, true, 'guy', 5, monsterResponse2, null, input));
		
		
	}
	
}

function monsterResponse1()
{
	
	enemy.attack(character);
	
}

function monsterResponse2()
{
	
	enemy.die();
	character.animations.play('idle');
	game.world.add(new SpeechBubble(game, 1400, 1300, 600, true, 'guy', 5, moveOn, null, "THAT WAS AWESOME! ...Uh Oh, I better get to class."), this);
	
}

function moveOn()
{
	
	location.href = "classRoom.html";
	
}

function showcaseProblem2()
{
	wiz.disappear();
			character.animations.play('idle');
		enemy.destroy();
		enemy = new purpleGhoul(3500,1700);
		enemy.alpha = 1;
		
	                    $('html, body').animate({
                        scrollTop: $("#testt").offset().top
                    }, 500);
					
					ar = new arrow(400, 2300);
					
					var editor = ace.edit("editor");
					editor.setValue('#Use this cool new spell\ndef darkBomb():\n\tprint "Dark Bomb!"\n\treturn\n\ndarkBomb()');
					
					$("#info").empty();
					$("#info").append('<h2 class="tlt">A powerful new spell!</h2> <h4 class="tlt">Use the new Spell</h4> <h4 class="tlt">Press the "Run Program" button to start.</h4>');
	
	$('.tlt').textillate({ in : {
    effect: 'rotateIn',
    delayScale: 1,

    // set the delay between each character
    delay: 100,
    shuffle: true
  }

});
	
}




var arrow = function(x,y){
		
				Phaser.Sprite.call(this, game, x, y, 'arrow');
		this.scale.setTo(2,2);
		this.animations.add('point');
		this.animations.play('point', 10, true);
		
		var tween = game.add.tween(this).to( { y: this.y - 100 }, 2000, "Linear", true);
		tween.yoyo(true, 0);
		tween.repeat(-1);
		game.add.existing(this);
	}
arrow.prototype = Object.create(Phaser.Sprite.prototype);
arrow.prototype.constructor = arrow;


var spell = function(x,y){
		
				Phaser.Sprite.call(this, game, x, y, 'spell');
				console.log("spellll");
		this.scale.setTo(2,2);
		this.animations.add('go');
		this.animations.play('go', 5, false).onComplete.add(function(){this.destroy();}, this);
		
		var tween = game.add.tween(this).to( { x: 1500 }, 1000, "Linear", true);

		game.add.existing(this);
	}
spell.prototype = Object.create(Phaser.Sprite.prototype);
spell.prototype.constructor = spell;



var character = function(x, y){
	
	Phaser.Sprite.call(this, game, x, y, 'character');
	this.scale.setTo(1.5, 1.5);
	this.widthh = this.width/3;
	
		this.animations.add('idle', [0, 1, 2], 5, true);
		this.animations.add('attack', [3, 4, 5, 6, 7, 8], 5, true);
		this.animations.add('death', [9, 10, 11, 12, 13, 14, 15, 16], 5, false);
	
			this.animations.play('idle');
	
	
	game.add.existing(this);
	
};

character.prototype = Object.create(Phaser.Sprite.prototype);
character.prototype.constructor = character;

character.prototype.update = function() {

    

};



var purpleGhoul = function(x, y){
	
	Phaser.Sprite.call(this, game, x, y, 'ghost');
	
	var self = this;
	
	this.alpha = 0;
	this.facing = "left";
this.anchor.setTo(.5,.5);

	game.physics.enable(this);
	        this.body.collideWorldBounds=true;
        this.body.gravity.x = 0;
        this.body.gravity.y = 0;
	this.scale.setTo(1.5, 1.5);
		this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.animations.add('attack', [7, 8, 9, 10, 11, 12, 13], 5, false);
		this.animations.add('death', [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 5, false);
	
	game.add.existing(this);
	
};

	purpleGhoul.prototype = Object.create(Phaser.Sprite.prototype);
	purpleGhoul.prototype.constructor = purpleGhoul;

		purpleGhoul.prototype.update = function() {

			            if(this.body.blocked.right === true && this.facing === "right" )//|| )
                        {
                           
							// Invert scale.x to flip left/right
							this.scale.x *= -1;
							this.body.velocity.x = -300;
							this.facing = "left"
							
                                
                        }
						else if(this.body.blocked.left === true && this.facing === "left")
						{
														
							// Invert scale.x to flip left/right
							this.scale.x *= -1;
							this.body.velocity.x = 300;
							this.facing = "right"
							
							
						}

		};

		purpleGhoul.prototype.appear = function() {

			game.add.tween(this).to( { alpha: 1 }, 5000, 'Linear', true).onComplete.add(function(){this.animations.play('idle'); game.world.add(new SpeechBubble(game, 3600, 1500, 500, true, 'ghoul', 2, characterResponce, null, "ROAR!!!!!"));}, this);

		};

		purpleGhoul.prototype.attack = function(obj) {

			game.add.tween(this).to( { alpha: 0 }, 2000, 'Linear', true).onComplete.add(function()
																						{ 
																							game.time.events.add(Phaser.Timer.SECOND * 4, function()
																																			{ 
																																				this.alpha = 1; this.x = obj.x + obj.widthh*2; this.animations.play('attack').onComplete.add(function()
																																																											{
																																																												enemy.roam(); character.animations.play('death').onComplete.add(function()
																																																																												{
																																																																													
																																																																													wiz.appear();	
																																																																														
																																																																												}, this);
																																																											}, this); 
																																			}, this); 
																						}, this);

		};
		
		purpleGhoul.prototype.roam = function() {
			this.alpha = 1;
			this.animations.play('idle');
			this.body.velocity.x = -300;

		};
		
		purpleGhoul.prototype.die = function() {

			this.animations.play('death').onComplete.add(function(){this.destroy();}, this);
			game.world.add(new SpeechBubble(game, 3600, 1500, 900, true, 'ghoul', 2, null, null, "I'm....FREE!!!!"));

		};
		
		
var wizard = function(x, y){
	
	Phaser.Sprite.call(this, game, x, y, 'wizard');

	this.scale.setTo(2, 2);
	
	game.add.existing(this);
	
};

wizard.prototype = Object.create(Phaser.Sprite.prototype);
wizard.prototype.constructor = wizard;

wizard.prototype.update = function() {

    

};

wizard.prototype.appear = function() {

    game.add.tween(this).to( { y: this.y - 664 }, 4000, 'Linear', true).onComplete.add(function()
																						{
																							
																							game.world.add(new SpeechBubble(game, 1000, 2000, 600, true, 'wiz', 10, showcaseProblem2, null, "Looks like You fainted. Why don't we try this again. BUT this time I'll lend you a spell."));
																							
																						}, this);

};

wizard.prototype.disappear = function() {

    game.add.tween(this).to( { y: this.y + 664 }, 4000, 'Linear', true);

};
		
		
		
var SpeechBubble = function(game, x, y, width, tail, font, time, callback, cbparams, text) {
    Phaser.Sprite.call(this, game, x, y);
    
    // Some sensible minimum defaults
    width = width || 27;
    var height = 18;
    
    // Set up our text and run our custom wrapping routine on it
    this.bitmapText = game.make.bitmapText(x + 12, y + 4, font, text, 75);
    SpeechBubble.wrapBitmapText(this.bitmapText, width);
    
    // Calculate the width and height needed for the edges
    var bounds = this.bitmapText.getLocalBounds();
    if (bounds.width + 18 > width) {
        width = bounds.width + 18;
    }
    if (bounds.height + 14 > height) {
        height = bounds.height + 14;
    }
    
    // Create all of our corners and edges
    this.borders = [
        game.make.tileSprite(x + 9, y + 9, width - 9, height - 9, 'bubble-border', 4),
        game.make.image(x, y, 'bubble-border', 0),
        game.make.image(x + width, y, 'bubble-border', 2),
        game.make.image(x + width, y + height, 'bubble-border', 8),
        game.make.image(x, y + height, 'bubble-border', 6),
        game.make.tileSprite(x + 9, y, width - 9, 9, 'bubble-border', 1),
        game.make.tileSprite(x + 9, y + height, width - 9, 9, 'bubble-border', 7),
        game.make.tileSprite(x, y + 9, 9, height - 9, 'bubble-border', 3),
        game.make.tileSprite(x + width, y + 9, 9, height - 9, 'bubble-border', 5)
    ];  
    
    // Add all of the above to this sprite
    for (var b = 0, len = this.borders.length; b < len; b++) {
        this.addChild(this.borders[b]);   
    }

    // Add the tail
	if(tail === true)
	{
    this.tail = this.addChild(game.make.image(x + 18, y + 3 + height, 'bubble-tail'));
	}
	
    // Add our text last so it's on top
    this.addChild(this.bitmapText);
    //this.bitmapText.tint = 0x111111;
    
    // Offset the position to be centered on the end of the tail
    this.pivot.set(x + 25, y + height + 24);
	
	
	
	game.time.events.add(Phaser.Timer.SECOND * time, function(){this.destroy(); if(callback != null){callback.apply(null, cbparams);}}, this);
	
	
	
};

SpeechBubble.prototype = Object.create(Phaser.Sprite.prototype);
SpeechBubble.prototype.constructor = SpeechBubble;

SpeechBubble.wrapBitmapText = function (bitmapText, maxWidth) {
    var words = bitmapText.text.split(' '), output = "", test = "";
    
    for (var w = 0, len = words.length; w < len; w++) {
        test += words[w] + " ";
        bitmapText.text = test;
        bitmapText.updateText();
        if (bitmapText.textWidth > maxWidth) {
            output += "\n" + words[w] + " ";
        }
        else {
            output += words[w] + " ";
        }
        test = output;
    }
    
    output = output.replace(/(\s)$/gm, ""); // remove trailing spaces
    bitmapText.text = output;
    bitmapText.updateText();
}


		
		
		
		
		
		
		
		
		
		
		
		
		
		
