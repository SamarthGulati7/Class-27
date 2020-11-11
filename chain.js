class Chain{

constructor(body1,body2){

var options={
bodyA: body1,
bodyB: body2,
length: 10,
stiffness: 0.2
}
this.chain=Matter.Constraint.create(options);
World.add(world,this.chain);
}

display(){

strokeWeight(2.5);
var A= this.chain.bodyA.position
var B= this.chain.bodyB.position

line(A.x,A.y,B.x,B.y);

}

}