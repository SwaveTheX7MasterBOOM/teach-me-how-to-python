var menuState = {

	cloud: 0,
	gym:0,
	clsRoom:0,
	lib:0,
	arrow:0,

	create: function() { 
		game.add.image(0, 0, 'bg-sky');
		cloud = game.add.tileSprite(0, 0, 5000, 1189, 'cloud');
		game.add.image(0, 0, 'bg');
		
		gym = game.add.button(0, 1314, 'gym', this.actionOnClickGym, this, 1, 0, 1, 0);
		clsRoom = game.add.button(1275, 160, 'class', this.actionOnClickCls, this, 1, 0, 1, 0);
		lib = game.add.button(2850, 710, 'library', this.actionOnClickLib, this, 1, 0, 1, 0);
		
         
	
	if(game.global.scene === 0)
	{
			this.attention(gym);
			clsRoom.input.enabled = false;
			lib.input.enabled = false;
		
		game.world.add(new SpeechBubble(game, 2000, 1300, 400, false, "Go HERE"));
		
	}
	

	},
	
	update: function(){
		
		cloud.tilePosition.x += 2;
		
	},
	
	attention: function(obj){
		
				arrow = game.add.sprite(obj.x + obj.width/2, obj.y - 408, 'arrow');
		arrow.scale.setTo(2,2);
		arrow.animations.add('point');
		arrow.animations.play('point', 10, true);
		
		var tween = game.add.tween(arrow).to( { y: arrow.y - 100 }, 2000, "Linear", true);
		tween.yoyo(true, 0);
		tween.repeat(-1);
		
	},



actionOnClickGym: function() {

    console.log('click');
	game.global.scene = 1;
	location.href = "arena.html";

},

actionOnClickCls: function() {

    console.log('click');
	location.href = "classRoom.html";

},

actionOnClickLib: function() {

    console.log('click');
	location.href = "library.html";

},

	start: function() {
		//game.state.start('play');	
	}
};





var SpeechBubble = function(game, x, y, width, tail, text) {
    Phaser.Sprite.call(this, game, x, y);
    
    // Some sensible minimum defaults
    width = width || 27;
    var height = 18;
    
    // Set up our text and run our custom wrapping routine on it
    this.bitmapText = game.make.bitmapText(x + 12, y + 4, 'retro', text, 50);
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

















