const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 20;
const rows = canvas.height / scale;
const column = canvas.height / scale;

var moveX = scale;
var moveY = 0;
var increaseSpeed = false;
var speed;
var snake;
var rocks;
var chosenDifficulty;
var chosenSpeed;

document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById('modal-init');
  modal.style.display = 'block';
  document.getElementById('game-speed').addEventListener('click', (e) => {
    if (e.target.value === 'slow') {
      chosenSpeed = 'SLOW';
      speed = 200;
    };
    if (e.target.value === 'regular') {
      chosenSpeed = 'REGULAR';
      speed = 150;
    }
    if (e.target.value === 'fast') {
      chosenSpeed = 'FAST';
      speed = 100;
    };
  });
  document.getElementById('game-difficulty').addEventListener('click', (e) => {
    if (e.target.value === 'easy') {
      chosenDifficulty = 'EASY';
      snake = new Snake();
    };
    if (e.target.value === 'standard') {
      chosenDifficulty = 'STANDARD';
      snake = new HardSnake();
    };
    if (e.target.value === 'hard') {
      snake = new HardSnake();
      chosenDifficulty = 'HARD';
      increaseSpeed = true;
    };
  });
  document.getElementById('rock-quantity').addEventListener('click', (e) => {
    if (e.target.value === 'none') {
      if (rocks) {
        rocks.rocks = [];
      }
      rocks = null;
    };
    if (e.target.value === 'medium') {
      rocks = new Rocks();
      rocks.quantity = 25;
      rocks.generateRocks()
    };
    if (e.target.value === 'lots') {
      rocks = new Rocks();
      rocks.quantity = 35;
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
  showSettings()
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
      cookie.randomLocation();
      updateScore();
      if (increaseSpeed) {
        speed = speed - 5;
        console.log(speed)
      }
    }

    if(snake.gameOver) {
      clearInterval(run);
      let finalScreen = document.getElementById('modal-end');
      document.getElementById('final-score').innerHTML = `Final Score: ${snake.score}`;
      finalScreen.style.display = 'block';
    }

  }, speed)

}

const changeDirection = (x, y) => {
  moveX = x;
  moveY = y;
};

const updateScore = () => {
  document.getElementById('score').innerHTML = `Score: ${snake.score}`
};

const showSettings = () => {
  document.getElementById('chosen-speed').innerHTML = `Game Speed: ${chosenSpeed}`;
  document.getElementById('chosen-difficulty').innerHTML = `Game Difficulty: ${chosenDifficulty}`;
};
