// global variables
var gravity = 0.5;
var speed = 6;

// player
var ball;

// obstacles
var pipes = [];

// score
var score;

// setup canvas and objects
function setup() {

  createCanvas(640, 480); // set canvas size
  ball = new Ball(64, height / 2, 15); // create ball from ball function
  score = 0; // initial score
  textAlign(CENTER); // score counter alignment
  textSize(40); // score counter size

   // create pipes from pipe function
   pipes.push(new Pipe(width, random(height / 2) + height / 4, 200,  // randomize pipe height
   color(score % 255, random(255), random(255)))); // randomize pipe color
}

// draw objects
function draw() {
  background(0); // set background color as black

  ball.update(); // update and draw ball
  ball.show(); // draw updated ball

    // push pipes to canvas
    if (frameCount % 75 === 0) {
    pipes.push(new Pipe(width, random(height / 2) + height / 4, 200, 
    color(score % 255, random(255), random(255))));
  }
	handlePipes(); // collision detection method
  noStroke(); // no outline
  text(score, 50, height - 20); // score counter position
}

// draw pipes
function handlePipes() {
	for (var i = 0; i < pipes.length; i++) {
		pipes[i].show();
		pipes[i].update();

    // if collision is detected
    if (ball.collides(pipes[i])) {
		gameOver();
    }

    // if no collision is detected
	else if (!pipes[i].passed){
		if(pipes[i].pass(ball.x))
			score++;
		}
    }
  }
  
// game over message
function gameOver() {
	noLoop();
	noStroke();
	textSize(45);
	text("Game Over!", width / 2, height / 2);
	textSize(40);
	text("Press F5 to restart!", width / 2, height / 2 + 30);
}

// ball control using spacebar
function keyPressed() {
  if (key == ' ') {
    ball.fly(-12);
  }
}