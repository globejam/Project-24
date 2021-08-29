class PlayerArcher {
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
      this.image = loadImage("assets/playerArcher.png");
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
        if (keyIsDown(RIGHT_ARROW) ) {
        angle += 0.5;
      }
    
      if (keyIsDown(LEFT_ARROW) && angle > -1.45) {
        angle -= 0.5;
      }
      push();
      translate(pos.x, pos.y);
      console.log(angle);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      
  
      
    }
  }