class Paper {
    constructor(r) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,
      }
      
      this.body = Bodies.circle(200, 200,r,options);
      this.r = r;
      this.image = loadImage("sprites/paper.png");
     
     
      World.add(world, this.body);
      
     
    }
    display(){
     
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop();
    }
  };