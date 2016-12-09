var gameState = {

	bg: 0,
	lib:0,
	arrow:0,

	create: function() { 
	
		bg = game.add.sprite(0, 0, 'bg');
			bg.animations.add('bg', [0, 1, 2, 3, 4, 5], 5, true);
			bg.animations.play('bg');

			new book();
			

		

		
		
/*game.world.add(new SpeechBubble(game, 300, 220, 290, false, 'retro', -1, null, null, text1), this);
game.world.add(new SpeechBubble(game, 620, 220, 290, false, 'retro', -1, null, null, "What are you doing here?"), this);*/
	},
	
	update: function(){
		
		
		
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

var style;
var text1;
var text2;
var text3;
var checkText = false;
var left;
var right;

var book = function(){
	
	Phaser.Sprite.call(this, game, (game.width / 7), -100, 'book');
this.scale.setTo(2, 2);
	this.animations.add('in', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 5, false);
	this.animations.add('out', [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5, false);
	this.animations.add('turnLeft', [25, 26], 5, false);
	this.animations.add('turnRight', [27, 28], 5, false);
	
	$.gl.scramble('#page1'); 
	$.gl.scramble('#page2'); 

	
	this.animations.play('in').onComplete.add(function()
												{

													
													style = { font: 'bold 16pt Arial', fill: 'black', align: 'center', wordWrap: true, wordWrapWidth: 290 };

													text1 = game.add.text(300, 150, $('#page1').text(), style);
													text2 = game.add.text(620, 150, $('#page2').text(), style);
													
													    $.gl.unscramble('#page1', function() {
															$.gl.unscramble('#page2');          
														});
													checkText = true;
													
													
												}, this);
	
	game.add.existing(this);
	
};

book.prototype = Object.create(Phaser.Sprite.prototype);
book.prototype.constructor = book;

book.prototype.update = function() {

if(checkText === true)
{
    text1.setText($('#page1').text());
    text2.setText($('#page2').text());
}
};

function pageRight()
{
	
	
	
}

function pageLeft()
{
	
	
	
}

// random letter effect
$.gl = {};
$.gl.intervalID = -1;
$.gl.countDown = 6.00;
$.gl.fillCharInterval = 0.08;
$.gl.beat = 0.00;
$.gl.step = 0.00;
$.gl.div = null;
$.gl.orig = null; // char array
$.gl.doneCallback = null;

$.gl.randomLetter = function() {
	return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

$.gl.scramble = function(__id) {
	$(__id).attr('orig', $(__id).text());
	$.gl.orig = $(__id).attr('orig').split('');
	$(__id).empty();
	for (var i = 0; i < $.gl.orig.length; i++) {
		if ($.gl.orig[i] != ' ') {
			$(__id).append('<span>' + $.gl.randomLetter() + '</span>');
		} else {
			$(__id).append('<span> </span>');
		}
	}
};

$.gl.unscramble = function(__id, __doneCallback) {
	
	if ($.gl.intervalID == -1) {
		$.gl.orig = $(__id).attr('orig').split('');
		$.gl.countDown = 6.00;
		$.gl.beat = 0.00;
		$.gl.step = 0.00;
		$.gl.div = $(__id);
		$.gl.doneCallback = __doneCallback;
		$.gl.intervalID = window.setInterval($.gl.unscrambleChar, 1);
	} else {
		window.clearInterval($.gl.intervalID);
		$.gl.intervalID = -1;
	}
};

$.gl.unscrambleChar = function() {
	var spans = $('span', $($.gl.div));
	$.gl.countDown -= 0.01;
	$.gl.step += 0.01;
	$.gl.beat += 0.01;
	var charIndex = Math.floor(((Math.random() * 1000) * 1000) % $.gl.orig.length);

	if ($.gl.countDown <= 0) {
		window.clearInterval($.gl.intervalID);
		$.gl.intervalID = -1;
		// fill in correct letters
		for (var i = 0; i < spans.length; i++) {
			$(spans[i]).text($.gl.orig[i]);
		}
		if (typeof($.gl.doneCallback) === 'function') {
			$.gl.doneCallback();
		}
	}

	if ($.gl.beat >= 0.01) {
		// fill with random chars
		var ch = $(spans[charIndex]).text();
		if (ch != '' && ch != $.gl.orig[charIndex]) {
			$(spans[charIndex]).text($.gl.randomLetter());
		}
		$.gl.beat = 0.00;
	}

	if ($.gl.step >= $.gl.fillCharInterval) {
		// fill with correct char
		var ch = $(spans[charIndex]).text();
		if (ch != '' && ch != $.gl.orig[charIndex]) {
			$(spans[charIndex]).text($.gl.orig[charIndex]);
		}
		$.gl.step = 0.00;
	}
};  




