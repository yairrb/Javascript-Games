
class Drawer {

    constructor(canvas) {
        this.canvas = canvas;
        console.log(this.canvas);
    }

    drawSnake(snake) {

        //draw the head
        snake.forEach(piece => {
            this.draw(piece, "#27FE00");
            
        });
    }

    drawFood(food){
        this.draw(food , "#FF1504");
    }

    draw(object, color) {

        var ctx = this.canvas.getContext("2d");

        /* here we draw using context */
        ctx.beginPath();
        ctx.rect(object.getWidth(), object.getHeigth(), 20, 20);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#588F46";

    }


    /* clear the whole screen*/
    clearCanvas() {
        var ctx = this.canvas.getContext("2d");

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

}
