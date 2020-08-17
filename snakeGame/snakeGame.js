
document.addEventListener("DOMContentLoaded", function (event) {

    var canvas = document.getElementById("myCanvas");


    /* initial position of the snake
    matrix of heigth 15 boxes and width of 25 boxes
    */
    var x = canvas.width / 2;
    var y = canvas.height - 80;
    // this will provide to us a constant direction
    var direction = "";
    var directionOfBody = "";
    //acces to the score table
    let score = document.getElementById("score-points");
    let record = document.getElementById("records-points");


    /*   GAME OBJECTS  */
    let snake = [];

    let head = new Box(getRandomInt(0, 24) * 20, getRandomInt(0, 14) * 20);
    snake.push(head);
    //new block of food
    var food = new Box(getRandomInt(0, 24) * 20, getRandomInt(0, 14) * 20);

    let drawer = new Drawer(canvas);

    //initial drawing of the snake
    drawer.drawSnake(snake);
    drawer.drawFood(food);

    function updateScore() {
        score.innerHTML = (snake.length - 1);
    }

    function collisionDetection() {
        let head = snake[0];
    

        casToBorder();
        for (let bodyIndex = 1; bodyIndex < snake.length; bodyIndex++) {
            let bodyBlock = snake[bodyIndex];

            console.log(bodyBlock);
            
            if (head.getWidth() == bodyBlock.getWidth() && head.getHeigth() == bodyBlock.getHeigth()) {
                alert("GAME OVER");
                window.localStorage.setItem('record', snake.length -1 );
                location.reload();

            }
        }
    }

    function casToBorder(){
        let head = snake[0];
        
        if (head.getWidth() > 500 ) {
            head.setWidth(0);
        }
        if (head.getWidth() < 0) {
            head.setWidth(500);
        }
        if (head.getHeigth() < 0) {
            head.setHeigth(300);
        }
        if ( head.getHeigth() > 300) {
            head.setHeigth(0);
        }
    };

    function borderCollision() {
        let head = snake[0];

        if (head.getWidth() > 500 || head.getWidth() < 0) {
            alert("GAME OVER");
            location.reload();
        }
        if (head.getHeigth() < 0 || head.getHeigth() > 300) {
            alert("GAME OVER");
            location.reload();
        }

    }


    function nexPositionY() {
        if (direction == "UP") {
            return snake[0].getHeigth() - 20;
        }
        if (direction == "DOWN") {
            return snake[0].getHeigth() + 20;
        }
        return snake[0].getHeigth();

    }

    function nexPositionX() {
        if (direction == "RIGTH") {
            snake[0].getWidth() + 20;
        }
        if (direction == "LEFT") {
            return snake[0].getWidth() - 20;
        }
        return snake[0].getWidth();
    }

    function eatFood() {

        if (food.getWidth() == nexPositionX() && food.getHeigth() == nexPositionY()) {

            console.log("EATING FOOD");
            let newHead = new Box(food.getWidth(), food.getHeigth());
            snake.unshift(newHead);
            console.log(snake.length);
            updateBody();
            createNewFood();
            updateScore();
        }
    }

    function createNewFood() {
        food = new Box(getRandomInt(0, 24) * 20, getRandomInt(0, 14) * 20);
    }


    function moveSnake(event) {

        if (event.keyCode == 37 && direction != "RIGTH" && directionOfBody != "RIGTH") {
            direction = "LEFT";
        }
        if (event.keyCode == 38 && direction != "DOWN" && directionOfBody != "DOWN") {
            direction = "UP";
        }
        if (event.keyCode == 39 && direction != "LEFT" && directionOfBody != "LEFT") {
            direction = "RIGTH";
        }
        if (event.keyCode == 40 && direction != "UP" && directionOfBody != "UP") {
            direction = "DOWN";
        }
    }


    function updatePosition() {
        if (direction == "UP") {
            updateBody();
            snake[0].setHeigth(snake[0].getHeigth() - 20);
        }
        if (direction == "DOWN") {
            updateBody();
            snake[0].setHeigth(snake[0].getHeigth() + 20);
        }
        if (direction == "RIGTH") {
            updateBody();
            snake[0].setWidth(snake[0].getWidth() + 20);
        }
        if (direction == "LEFT") {
            updateBody();
            snake[0].setWidth(snake[0].getWidth() - 20);
        }
    }

    function updateBody() {
        for (let index = snake.length - 1; index >= 0; index--) {
            let elemensnake = snake[index];
            if (index - 1 >= 0) {
                let headSnake = snake[index - 1]
                elemensnake.setWidth(headSnake.getWidth());
                elemensnake.setHeigth(headSnake.getHeigth());
                directionOfBody = direction;
            }
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawGame() {

        record.innerHTML = window.localStorage.getItem('record');
        drawer.clearCanvas();
        drawer.drawSnake(snake);
        drawer.drawFood(food);
        eatFood();
        updatePosition();
        collisionDetection();

    }


    /* Listener de movimiento de las teclas */
    document.addEventListener("keydown", moveSnake);


    setInterval(drawGame, 100);


});