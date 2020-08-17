// pipe variables
function Pipe(x, middle, width, highlight) {
  this.x = x;
  this.middle = middle;
  this.w = width;
  this.highlight = highlight;
  this.passed = false;
  
  // update pipe
  Pipe.prototype.update = function() {
  this.x -= speed;
  };

  // draw pipe
  Pipe.prototype.show = function() {
    rectMode(CORNERS);
      stroke(50);
    strokeWeight(3);
      fill(this.highlight);
      rect(this.x, 0, this.x + 10, this.middle - (this.w / 2));
    rect(this.x, height, this.x + 10, this.middle + (this.w / 2));
  };

  // detect if ball has passed the pipe
  Pipe.prototype.pass = function(x) {
	  this.passed = this.x < x;
      return this.x < x;
    }
  };