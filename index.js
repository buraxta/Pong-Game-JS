const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    createBall();
    nextTick();
};
function nextTick(){
    intervalID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function drawPaddles(){
    ctx.strokeStyle = paddleBorder;

    ctx.fillStyle = paddle1Color;
    ctx.fillRect = (paddle1.x, paddle1.y, paddle1.height, paddle1.width);
    ctx.strokeRect = (paddle1.x, paddle1.y, paddle1.height, paddle1.width);
    
    ctx.fillStyle = paddle2Color;
    ctx.fillRect = (paddle2.x, paddle2.y, paddle2.height, paddle2.width);
    ctx.strokeRect = (paddle2.x, paddle2.y, paddle2.height, paddle2.width);

};