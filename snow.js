class snow{
    constructor(x,y,radius){
        this.radius=radius

        var options={
            isStatic : false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body)
        this.image=loadImage("snow5.webp");

        this.radius=radius;
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}