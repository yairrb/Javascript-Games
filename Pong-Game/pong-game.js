document.addEventListener("DOMContentLoaded", function (event) {

    var canvas = document.getElementById("myCanvas");
    let drawer = new Drawer(canvas);


    let player_1 = new Bar(10, 100, 10, 100);//w, h ,x, y
    let player_2 = new Bar(10, 100, 980, 100);

    var direction_player_1 = '';
    var direction_player_2 = '';


    drawer.draw_rectangle(player_1.width, player_1.heigth,player_1.x, player_1.y);
    drawer.draw_rectangle(player_2.width, player_2.heigth,player_2.x, player_2.y);




    function move_player_1(event) {
        if (event.keyCode == 38 && direction_player_1 != "UP") {
            direction_player_1 = "UP";
        }

        if (event.keyCode == 40 && direction_player_1 != "DOWN") {
            direction_player_1 = "DOWN";
        }
    }

    function update_position() {
        if (direction_player_1 == 'DOWN') {
            player_1.y = player_1.y +2;
            
        }
        if (direction_player_1 == 'UP') {
            player_1.y = player_1.y -2;

        }

        if (direction_player_2 == 'DOWN') {
            player_2.y -= 2;
        }
        if (direction_player_2 == 'UP') {
            player_2.y += 2;
        }
     
    }


    function move_player_2(event) {
        if (event.keyCode == 83 && direction_player_2 != "UP") {
            direction_player_2 = "UP";
        }

        if (event.keyCode == 87 && direction_player_2 != "DOWN") {
            direction_player_2 = "DOWN";
        }
    }

    function move_players(event) {
        move_player_1(event);
        move_player_2(event);
    }

    function collition() {
        if (player_1.y > 501){
            direction_player_1 = "UP";
        }

        if (player_1.y < 0){
            direction_player_1 = "DOWN";
        }
        
    }
    

    function draw(){
        drawer.clear_canvas();
        drawer.draw_rectangle(player_1.width,player_1.heigth ,player_1.x , player_1.y);
        drawer.draw_rectangle(player_2.x,player_2.heigth , player_2.width, player_2.y);
        update_position();
        collition();
    }


    /* Listener de movimiento de las teclas */
    document.addEventListener("keydown", move_players);

    setInterval(draw, 10);





});