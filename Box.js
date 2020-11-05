class Box {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      this.image = loadImage("sprites/dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("white")
      fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, 250, 250);
      pop();
    }
  };
  