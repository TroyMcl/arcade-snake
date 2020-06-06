const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const column = canvas.height / scale;

var moveX = scale;
var moveY = 0;
var speed;
var snake;
var rocks;

document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById('modal-init');
  modal.style.display = 'block';
  document.getElementById('game-speed').addEventListener('click', (e) => {
    if (e.target.value === 'slow') {
      speed = 200;
    };
    if (e.target.value === 'fast') {
      speed = 100;
    };
  });
  document.getElementById('game-difficulty').addEventListener('click', (e) => {
    if (e.target.value === 'easy') {
      snake = new Snake();
    };
    if (e.target.value === 'standard') {
      snake = new HardSnake();
    };
    if (e.target.value === 'hard') {
      snake = new HardSnake();
      rocks = new Rocks();
      rocks.generateRocks()
    };
  });
  document.getElementById('start-game').addEventListener('click', (e) => {
    if (speed && snake) {
      modal.style.display = 'none';
      startGame()
    }
  });

});

const startGame = function() {
  cookie = new Cookie();
  cookie.randomLocation()

  const run = setInterval(() => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if (rocks) {
      rocks.draw();
    }
    cookie.draw();
    snake.move(moveX, moveY);

    if(snake.eat(cookie)) {
      cookie.randomLocation()
    }
    
    if(snake.gameOver) {
      clearInterval(run);
      let finalScreen = document.getElementById('modal-end');
      finalScreen.style.display = 'block';
    }

  }, speed)

}

const changeDirection = (x, y) => {
  moveX = x;
  moveY = y;
}
