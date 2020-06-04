document.body.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp':
      changeDirection(0, -scale)
      break;
    case 'ArrowDown':
      changeDirection(0, scale)
      break;
    case 'ArrowRight':
      changeDirection(scale, 0)
      break;
    case 'ArrowLeft':
      changeDirection(-scale, 0)
      break;
    case 'w':
      changeDirection(0, -scale)
      break;
    case 's':
      changeDirection(0, scale)
      break;
    case 'd':
      changeDirection(scale, 0)
      break;
    case 'a':
      changeDirection(-scale, 0)
      break;
    default:
      console.log('You have pressed an invaid key ', event.key)
  }
  //filter - direction type by arro
  //alter a direction function, which is feed into the set interval function
});
