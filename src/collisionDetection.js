export function detectCollision(ball, gameObject) {
  //check collision with paddle
  let bottonOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let righttSideOfObject = gameObject.position.x + gameObject.width;
  let bottonOfObject = gameObject.position.y + gameObject.height;

  if (
    bottonOfBall >= topOfObject &&
    topOfBall <= bottonOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= righttSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
