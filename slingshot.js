class Slingshot {
    constructor(bodyA, pointB) {
      var slingoptions = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 0.04,
         length: 10
      }
      this.pointB = pointB;
      this.sling = Constraint.create(slingoptions)
      World.add(world, this.sling);
    }
    fly(){
      this.sling.bodyA = null;
    }
    display(){
      var pointA = this.sling.bodyA.position;
      var pointB = this.sling.bodyB.position;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
  };