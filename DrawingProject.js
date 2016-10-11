var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "black";

canvas.fillRect(0, 0, 1600, 900);

canvas.beginPath();
canvas.fillStyle = "#0C4C05";
canvas.moveTo(532,680);
canvas.lineTo(790,25);
canvas.lineTo(1054,680);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#428000";
canvas.moveTo(580,616);
canvas.lineTo(790,83);
canvas.lineTo(1000,616);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0C4C05";
canvas.moveTo(580,616);
canvas.lineTo(790,514);
canvas.lineTo(1000,616);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0C4C05";
canvas.fillRect(790,500,37,50);

canvas.beginPath();
canvas.fillStyle = "#0C4C05";
canvas.moveTo(790,500);
canvas.lineTo(790,190);
canvas.lineTo(910,510);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0C4C05";
canvas.moveTo(790,500);
canvas.lineTo(790,190);
canvas.lineTo(910,510);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(532,680);
canvas.lineTo(790,546);
canvas.lineTo(1054,680);
canvas.fill();
