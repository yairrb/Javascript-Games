

class BodyBox {


    constructor( width, heigth ){
        this.body = new Box(width, heigth );
        this.bodyExtension = null;
    }


    getTail(){
        return this.bodyExtension;
    }

    getBody() {
        return this.body;
    }

    setTail( boxBody) {
        this.bodyExtension = boxBody;
    }

    
}