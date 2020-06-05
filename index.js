const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const column = canvas.height / scale;

var snake;
var moveX = scale;
var moveY = 0;
var speed;
var rules;

//make our modal: choose speed and difficulty
//assign value to speed and rules from user input

(function() {
  snake = new HardSnake();
  cookie = new Cookie();
  cookie.randomLocation()

  const run = setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    cookie.draw()
    snake.move(moveX, moveY);

    if(snake.eat(cookie)) {
      cookie.randomLocation()
    }

    if(snake.gameOver) {
      clearInterval(run);
    }

  }, 100)

})()

const changeDirection = (x, y) => {
  moveX = x;
  moveY = y;
}
