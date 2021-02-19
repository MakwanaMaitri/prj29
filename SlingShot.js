class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
       // this.sling1 = loadImage("sprites/sling1.png");
        //this.sling2 = loadImage("sprites/sling2.png");
        //this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       // image(this.sling1,200,20);
       //image(this.sling2,170,20);
       //stroke(rgb(48,22,8));

            if(this.sling.bodyA){
              // strokeWeight(7);
              var pointA = this.sling.bodyA.position;
              var pointB = this.pointB;
              
              strokeWeight(3);
              line(pointA.x, pointA.y, pointB.x, pointB.y);
        
       }     
    }
}
