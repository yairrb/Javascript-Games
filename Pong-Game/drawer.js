class Drawer {


    constructor ( canva ) {
        this.canva = canva;
        console.log(this.canva);
    }

    /* draw a rectangle*/
    draw_rectangle( x , y , width , heigth) {
        var ctx = this.canva.getContext("2d");
        /* here we draw using context */
        ctx.beginPath();
        ctx.rect(width, heigth, x, y);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

    }

    /* draw a circle */
    draw_circle(){

    }

    /* clear the whole screen*/
    clear_canvas() {
        var ctx = this.canva.getContext("2d");

        ctx.clearRect(0, 0, this.canva.width, this.canva.height);
    }
}