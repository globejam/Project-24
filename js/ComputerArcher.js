class ComputerArcher {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic: true
      };
      
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.image = loadImage("assets/computerArcher.png");
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
        this.angle -= 0.02;
      }
  
      
    }
  }