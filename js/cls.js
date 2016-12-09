var gameState = {


	wiz:0,
	arrow:0,


	create: function() { 
		bg = game.add.sprite(0, 0, 'bg');
			bg.animations.add('background', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5, true);
			bg.animations.play('background');

		wiz = new wizard(200, 615).appear();
	

	},
	
	update: function(){
		
		if (game.input.activePointer.isDown && quiet === true)
		{
			quiet = false;
			currentConvo.destroy();
			convo();
		}
		
	},
	
	attention: function(obj){
		
				arrow = game.add.sprite(obj.x + obj.width/2, obj.y - 408, 'arrow');
		arrow.scale.setTo(2,2);
		arrow.animations.add('point');
		arrow.animations.play('point', 10, true);
		
		var tween = game.add.tween(arrow).to( { y: arrow.y - 100 }, 2000, "Linear", true);
		tween.yoyo(true, 0);
		tween.repeat(-1);
		
	}




};


var quiet = false;

function shutUp()
{
	quiet = true;

	
}

var x = 0;
var currentConvo;

function convo()
{
	switch(x)
	{
		
		case 0:
		
			x++; 
			
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 300, true, 'wiz', -1, shutUp, null, "Oh, it's you again."), this);
		
					        $('html, body').animate({
                        scrollTop: $("#testt").offset().top
                    }, 2000);
			

					$("#info").append('<h2 class="tlt">Click the screen to continue the conversation</h2>');

						$('.tlt').textillate({ in : {
							effect: 'bounceIn',
							delayScale: 1,

							// set the delay between each character
							delay: 100,
							shuffle: true
						  }

						});
		
			break;
			
		case 1:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "Didn't think I'd be seeing you again."), this);
		

					
					
			break;
			
			
		case 2:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "Speaking of seeing you..."), this);
		
			break;
			
		case 3:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "What are you doing here?"), this);
		
			break;
			
		case 4:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "Classes do not begin until tomorrow."), this);
		
			break;
			
		case 5:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "I've got important work to do So why don't you run along to the library or something."), this);
		
			break;
			
		case 6:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "Goodbye for now."), this);
		
			break;
			
		case 7:
		
			x++; 
			currentConvo = game.world.add(new SpeechBubble(game, 400, 300, 400, true, 'wiz', -1, shutUp, null, "And Try not to pick any more fights with the spirits in the arena until you have at least had your first lesson"), this);
		
			break;
			
		case 8:
		
			location.href = "library.html";
		
			break;
		
	};
	
	
}

var wizard = function(x, y){
	
	Phaser.Sprite.call(this, game, x, y, 'wizard');
this.animations.add('go');
	
	
	game.add.existing(this);
	
};

wizard.prototype = Object.create(Phaser.Sprite.prototype);
wizard.prototype.constructor = wizard;

wizard.prototype.update = function() {

    

};

wizard.prototype.appear = function() {

    game.add.tween(this).to( { y: this.y - 332 }, 4000, 'Linear', true).onComplete.add(function(){this.animations.play('go', 5, true); convo();}, this);

};


var SpeechBubble = function(game, x, y, width, tail, font, time, callback, cbparams, text) {
    Phaser.Sprite.call(this, game, x, y);
    
    // Some sensible minimum defaults
    width = width || 27;
    var height = 18;
    
    // Set up our text and run our custom wrapping routine on it
    this.bitmapText = game.make.bitmapText(x + 12, y + 4, font, text, 50);
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
	
	
	if(time > 0)
	{
	game.time.events.add(Phaser.Timer.SECOND * time, function(){this.destroy(); if(callback != null){callback.apply(null, cbparams);}}, this);
	}
	else
	{
		
		game.time.events.add(Phaser.Timer.SECOND * 2, function(){ if(callback != null){callback.apply(null, cbparams);}}, this);
		
	}
	
	
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









