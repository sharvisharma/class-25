class Paper{
    constructor(x,y){
        var stick={
            'restitution':0.8,
            'friction':0.8,
            'density':1.5
            
        }
        this.body= Bodies.rectangle(x,y,50,50,stick);
        this.width=50;
        this.height=50;
        this.image=loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        
        strokeWeight(5);
        stroke("yellow");
        image(this.image,0,0);
        fill("red");
        //ect(0,0,this.width,this.height);
        pop();
    }
};