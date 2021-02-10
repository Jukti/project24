class Stone {

    constructor(x,y,width,height){
        var options = {
            'density' :4,
            'mass':5,
            'friction':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){

        var pos = this.body.position;
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);

    }
}