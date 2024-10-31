const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = 500;
canvas.height = 500;

const scale = 20;
let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = {
  x: Math.floor((Math.random() * canvas.width) / scale) * scale,
  y: Math.floor((Math.random() * canvas.height) / scale) * scale,
};

let gameOver = false;
let score = 0; // Add score variable
let speed = 200; // Initial speed in milliseconds

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw border
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, scale, scale);

  ctx.fillStyle = "green";
  snake.forEach((segment) => ctx.fillRect(segment.x, segment.y, scale, scale));
}

function update() {
  const head = {
    x: snake[0].x + direction.x * scale,
    y: snake[0].y + direction.y * scale,
  };

  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor((Math.random() * canvas.width) / scale) * scale,
      y: Math.floor((Math.random() * canvas.height) / scale) * scale,
    };
    score++; // Increment score
    document.getElementById("score").innerHTML = "Score: " + score;

    // Increase speed as score increases
    speed = Math.max(50, speed - 5); // Decrease interval, minimum 50ms
  } else {
    snake.pop();
  }

  snake.unshift(head);

  // Check for collision with the border
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height
  ) {
    gameOver = true;
  }

  // Check for collision with itself
  if (
    snake
      .slice(1)
      .some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver = true;
  }

  if (gameOver) {
    alert("Game Over!");
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
    gameOver = false;
    score = 0; // Reset score
    speed = 200; // Reset speed
    document.getElementById("score").innerHTML = "Score: " + score;
  }
}

function changeDirection(event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
}

document.addEventListener("keydown", changeDirection);

function gameLoop() {
  if (!gameOver) {
    update();
    draw();
    setTimeout(gameLoop, speed);
  }
}

gameLoop();
