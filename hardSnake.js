class HardSnake extends Snake {
  constructor(params) {
    super(params);
  }

  move(x, y) {
    let lastLocation = {x: this.x, y: this.y}
    this.snakeBody.unshift(lastLocation);

    this.x = this.x + x;
    this.y = this.y + y;

    this.draw()
  }

  checkEndGame() {
    for (let i = 0; i < this.snakeBody.length; i++) {
      if (this.x === this.snakeBody[i].x && this.y === this.snakeBody[i].y) {
        this.gameOver = true;
      }
      if (this.x >= canvas.width || this.x < 0) {
        this.gameOver = true;
      }
      if (this.y >= canvas.height || this.y < 0) {
        this.gameOver = true;
      }
    }
  }
}