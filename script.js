var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
//user interaction variables
 var paddleHeight = 10;
 var paddleWidth = 75;
 var paddleX = (canvas.width-paddleWidth)/2;
 var rightPressed = false;
 var leftPressed = false;

 document.addEventListener("keydown", keyDownHandler);
 document.addEventListener("keyup", keyUpHandler);
//
 function keyDownHandler(e){
  if(e.keycode == 39){
      rightPressed = true;
   }
  else if(e.keycode == 37){
    leftPressed = true;
  }
}
  function keyUpHandler(e){
  if(e.keycode == 39){
      rightPressed = false;
  }
  else if(e.keycode == 37) {
    leftPressed = false;
  }
}
//
function drawBall(){
  ctx.beginPath();
  ctx.arc(x , y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
//
function drawPaddle(){
   ctx.beginPath();
   ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
 }

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  // Drawing Code
  drawBall();
  drawPaddle();

// Comparison
  // if (y + dy < 0){
  //   dy = -dy;
  // }
  // if (y + dy > canvas.height){
  //   dy = -dy;
  // }


    if (y + dx > canvas.height-ballRadius || y + dy < ballRadius){
      dy = -dy;
    }

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius){
      dx = -dx;
    }

    if (rightPressed && paddleX < canvas.width-paddleWidth){
      paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
