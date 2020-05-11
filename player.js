class Player{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Shaurya Pic.jpg");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,0,0);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
      
        for(var i = 0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
}