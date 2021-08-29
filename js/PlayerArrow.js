class PlayerArrow {
    constructor(x, y, width, height,angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true,
      };
      this.width = width;
      this.height = height;
      this.angle = angle
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(-41);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
      }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      Matter.Body.setAngle(this.body,angle)
      if (keyIsDown(RIGHT_ARROW) ) {
        angle += 0.5;
      }
  
      if (keyIsDown(LEFT_ARROW) && angle > -1.45) {
        angle -= 0.5;
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }