document.addEventListener("DOMContentLoaded", function (event) {

    var canvas = document.getElementById("myCanvas");
    let drawer = new Drawer(canvas);

    let players = [new Bar(10, 100, 10, 100), new Bar(980, 100, 10, 100)];
    //w, h ,x, y

    players.forEach(player => {
        drawer.draw_rectangle(player.width, player.heigth, player.x, player.y);
    });
  

    function move_player(event, player) {
        if (event.keyCode ==87   && player.direction != "UP" && player.x == 10) {
            player.direction = "UP";
        }

        if (event.keyCode == 83 && player.direction != "DOWN" && player.x == 10) {
            player.direction = "DOWN";
        }

        if (event.keyCode == 38 && player.direction != "UP" && player.x == 980) {
            player.direction = "UP";
        }

        if (event.keyCode == 40 && player.direction != "DOWN" && player.x == 980) {
            player.direction = "DOWN";
        }
    }

    function update_position(player) {
        if (player.direction == 'DOWN') {
            player.y += 2;

        }
        if (player.direction == 'UP') {
            player.y -= 2;
        }
    }

    function move_players(event) {
        players.forEach(player => {
            move_player(event, player);
        });
    }

    function collition(player) {
        if (player.y > 501) {
            player.direction = "UP";
        }
        if (player.y < 0) {
            player.direction = "DOWN";
        }
    }


    function draw() {
        drawer.clear_canvas();
        players.forEach(player => {
            drawer.draw_rectangle(player.width, player.heigth, player.x, player.y);
            update_position(player);
            collition(player);
        });
    }


    /* Listener de movimiento de las teclas */
    document.addEventListener("keydown", move_players);

    setInterval(draw, 10);





});