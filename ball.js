// ball variables
function Ball(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.velocity = 0;

  // update ball
  Ball.prototype.update = function() {
    this.velocity += gravity;
    this.y += this.velocity;
  };

  // ball movement
  Ball.prototype.fly = function(fly) {
    this.velocity = 0;
    this.velocity += fly;
  };

  // collision detection
  Ball.prototype.collides = function(pipe){
	  
	if (pipe.x - this.x <= this.radius && pipe.x - this.x >= -this.radius) {
    var upperMiddle = pipe.middle - pipe.w / 2;
    var lowerMiddle = pipe.middle + pipe.w / 2;
    return (this.y - this.radius < upperMiddle || this.y + this.radius > lowerMiddle);
  }
  return false;
};

// draw ball
Ball.prototype.show = function() {
	stroke(50);
	strokeWeight(3);
    fill(255);
    ellipse(this.x, this.y, 30, 30);
  };
}