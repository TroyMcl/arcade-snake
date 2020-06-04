const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const colum = canvas.height / scale;

var snake;
var moveX = scale;
var moveY = 0;

(function() {
  snake = new Snake();

  setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    snake.move(moveX, moveY)
    snake.draw()
  }, 1000)

})()

const changeDirection = (x, y) => {
  moveX = x;
  moveY = y;
}
