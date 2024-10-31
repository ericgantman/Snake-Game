# Snake Game

This is a simple implementation of the classic Snake Game using HTML, CSS, and JavaScript.

## How to Play

- Use the arrow keys to control the direction of the snake.
- Eat the food to grow the snake and increase your score.
- Avoid running into the walls or the snake's own body.

## Project Structure

- `snake.html`: The HTML file that sets up the game canvas and includes the game script.
- `snake.js`: The JavaScript file that contains the game logic.
- `styles.css`: The CSS file that styles the game elements.
- `README.md`: This file, providing an overview of the project.

## Game Logic

- The game loop is controlled by the `gameLoop` function in [`snake.js`](snake.js#L105).
- The snake's movement is updated in the `update` function in [`snake.js`](snake.js#L34).
- The direction of the snake is changed by the `changeDirection` function in [`snake.js`](snake.js#L86).
- The game is drawn on the canvas by the `draw` function in [`snake.js`](snake.js#L17).

## How to Run

1. Open `snake.html` in a web browser.
2. Start playing the game by using the arrow keys.