const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const circle = {
  x: 515,
  y: 350,
  radius: 25,
  color: 'red',
};

const handImage = new Image();
handImage.src = 'images/Mão.png'; // Substitua pelo caminho da imagem da mão em formato JPG

let rectangleX = -50;
let rectangleY = 350;
const rectangleWidth = 50;
const rectangleHeight = 30;
const rectangleSpeed = 2;

let isMoving = true; // Iniciar em movimento
let gameOver = false;
let restartCount = 0; // Contador de recomeços

canvas.addEventListener('click', (event) => {
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;

  if (
    !gameOver &&
    clickX >= rectangleX &&
    clickX <= rectangleX + rectangleWidth &&
    clickY >= rectangleY &&
    clickY <= rectangleY + rectangleHeight
  ) {
    rectangleX = -50;
    restartCount += 1;

    if (restartCount === 10) {
      gameOver = true;
    }
  } else if (gameOver) {
    resetGame();
  }
});

function resetGame() {
  rectangleX = -50;
  rectangleY = 350;
  isMoving = true; // Começar em movimento
  gameOver = false;
  restartCount = 0; // Reiniciar o contador de recomeços
}

function checkCollision() {
  const circleDistanceX = Math.abs(circle.x - rectangleX - rectangleWidth / 2);
  const circleDistanceY = Math.abs(circle.y - rectangleY - rectangleHeight / 2);

  if (
    circleDistanceX <= rectangleWidth / 2 + circle.radius &&
    circleDistanceY <= rectangleHeight / 2 + circle.radius
  ) {
    gameOver = true;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameOver) {
    ctx.fillStyle = 'black';
    ctx.font = '48px sans-serif';
    if (restartCount === 10) {
      ctx.fillText('Game Winner', canvas.width / 2 - 140, canvas.height / 2);
    } else {
      ctx.fillText('Game Over', canvas.width / 2 - 120, canvas.height / 2);
    }
  } else {
    if (isMoving) {
      if (rectangleX < circle.x) {
        rectangleX += rectangleSpeed;
      } else {
        rectangleX = canvas.width + rectangleWidth;
      }
    }

    checkCollision();

    
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();

    
    ctx.drawImage(handImage, rectangleX, rectangleY, rectangleWidth, rectangleHeight);
  }

  requestAnimationFrame(animate);
}


handImage.onload = () => {
  animate();
};
