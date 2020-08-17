
class Snake {


    constructor( width, height){

        this.head = new BodyBox( width, height);
        this.width = width;
        this.height = height;
    }
    
    getHead(){
        return this.head
    }
}