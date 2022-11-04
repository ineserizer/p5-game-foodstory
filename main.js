const game = new Game()

const scoreThing = document.getElementById("score")
		console.log("scoreThing", scoreThing)
let counter = 60;

let gameTune = new Audio("./assets/tune.mp3")

function preload() {
	game.preload() 
}

function setup() {
    createCanvas(1080, 600);
	frameRate();

  }
  function keyPressed() {
	clear();
	textSize(20);
	text("Press any key to display it "
			+ "on the screen", 10, 20);
	textSize(100);
	text(key, 100, 150);
  }
  console.log("game.player.score",game.player.score)

  function draw() {
	game.draw()
	gameTune.play()


	if (frameCount % 5 === 0) counter--;

	if (counter <1) {
		textSize(48);
		noLoop()
		text (game.player.score, location.replace ('index3.html?score=' + game.player.score)  )
	}
	
	textSize(32);
	fill(243, 167, 18);
	text ("Time:" + counter, 30, 380);
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump() 
	}
	if (keyCode === 39) {
		game.player.moveRight()
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
}