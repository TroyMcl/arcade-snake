class Snake {
  constructor() {
    this.x = scale;
    this.y = scale;
    this.score = 0;
    this.doubleback = {};
    this.gameOver = false;
    this.snakeBody = [];
  }

  draw() {
    ctx.fillStyle = '#008f26';
    if (this.snakeBody.length > this.score) {
      this.doubleback = this.snakeBody.pop();
    }
    for(let i = 0; i < this.snakeBody.length; i++) {
      ctx.fillRect(this.snakeBody[i].x, this.snakeBody[i].y, scale, scale);
    }
    ctx.fillStyle = '#18f550';
    ctx.fillRect(this.x , this.y, scale, scale);

    this.checkEndGame()
  }

  move(x, y) {
    let lastLocation = {x: this.x, y: this.y}
    this.snakeBody.unshift(lastLocation);

    this.x = this.x + x;
    this.y = this.y + y;

    if (this.x > canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width
    }

    if (this.y > canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.width;
    }

    this.draw()
  }

  eat(cookie) {
    if (cookie.x === this.x && cookie.y === this.y) {
      this.score++;
      return true;
    }
  }

  checkEndGame() {
    if (this.doubleback.x === this.x && this.doubleback.y === this.y) {
      this.gameOver = true;
    }
    for (let i = 0; i < this.snakeBody.length; i++) {
      if (this.x === this.snakeBody[i].x && this.y === this.snakeBody[i].y) {
        this.gameOver = true;
      }
    }
    if (rocks) {
      for (let j = 0; j < rocks.rocks.length; j++) {
        if (rocks.rocks[j].x === this.x && rocks.rocks[j].y === this.y) {
          this.gameOver = true;
        }
      }
    }
  }
}