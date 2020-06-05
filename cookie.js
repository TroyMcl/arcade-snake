class Cookie {
  constructor() {
    this.x = scale;
    this.y = scale;
  }

  randomLocation() {
    this.x = (Math.floor((Math.random() * rows -1) + 1) * scale)
    this.y = (Math.floor((Math.random() * column -1) + 1) * scale)
  }

  draw() {
    ctx.fillStyle = '#eb4034'
    ctx.fillRect(this.x , this.y, scale, scale)
  }
}