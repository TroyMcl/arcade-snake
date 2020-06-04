function Snake() {
  this.x = scale;
  this.y = scale;


  this.draw = function() {
    ctx.fillStyle = '#18f550'
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  this.move = function (x, y) {
    if(x) {
      this.x = this.x + x
      if(this.x > canvas.width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = canvas.width
      }
    }
    if (y) {
      this.y = this.y + y
      if (this.y > canvas.height) {
        this.y = 0;
      } else if (this.y < 0) {
        this.y = canvas.width;
      }
    }
    this.draw()
  }
}