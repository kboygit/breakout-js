var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// First rectangle with red color drawing on the canvas
ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
// Second arc/circle with a green color drawing on the canvas
ctx.beginPath();
ctx.arc(260, 160, 30, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
// Third rectangle with blue color drawing on the canvas
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgba(0,0,255,0.5)';
ctx.stroke();
ctx.closePath();
