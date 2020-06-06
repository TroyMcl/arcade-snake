class Rocks {
  constructor() {
    this.rocks = [];
    this.quantity;
  }

  generateRocks() {
    for (let i = 0; i < this.quantity; i++) {
      let x = (Math.floor((Math.random() * rows -1) + 1) * scale);
      let y = (Math.floor((Math.random() * column -1) + 1) * scale);
      let rock = { x, y};
      this.rocks.push(rock);
    }
  }

  draw() {
    for( let i = 0; i < this.rocks.length; i++) {
      ctx.fillStyle = '#838a85';
      ctx.fillRect(this.rocks[i].x , this.rocks[i].y, scale, scale);
    }
  }
}
