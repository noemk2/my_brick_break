import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//new instance
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
//game.start();
//call method inherance by class paddle
//paddle.draw(ctx);

//new variable
let lastTime = 0;

//new function gameloop (engine)
function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
