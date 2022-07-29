import { GameBoard } from "./GameBoard.js";
import { Paddle } from "./Paddle.js";
import { PaddleColor, PaddleUtils } from "./PaddleSettings.js";
import { Ball } from "./Ball.js";
import { Handler } from "./Handler.js";
import { GameLoader } from "./GameLoader.js";
import { ScoreCounter } from "./ScoreCounter.js";
var gameBoardId = document.querySelector(".gameBoard");
if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}
var context = gameBoardId.getContext("2d");
if (context === null) {
    throw new Error("Context is null");
}
var gameBoard = new GameBoard(gameBoardId, context);
var leftPlayer = new Paddle(PaddleColor.LEFT_COLOR, PaddleUtils.WIDTH, PaddleUtils.HEIGHT, PaddleUtils.LEFT_X, PaddleUtils.LEFT_Y);
var rightPlayer = new Paddle(PaddleColor.RIGHT_COLOR, PaddleUtils.WIDTH, PaddleUtils.HEIGHT, PaddleUtils.RIGHT_X, PaddleUtils.RIGHT_Y);
var gameBall = new Ball(gameBoard);
var scoreCounter = new ScoreCounter();
var intervalStarter = 0;
var startButton = document.querySelector(".startButton");
if (startButton === null) {
    throw new Error("Start button is null");
}
startButton.addEventListener("click", function () {
    GameLoader.insertBall(gameBall, gameBoard);
    GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall, scoreCounter, intervalStarter);
});
window.addEventListener("keydown", function (event) {
    var pressedKey = event.key;
    var handler = new Handler();
    handler.handleUserMove(pressedKey, gameBoard, leftPlayer, rightPlayer);
});
var resetButton = document.querySelector(".resetButton");
if (resetButton === null) {
    throw new Error("Reset buttons is null");
}
resetButton.addEventListener("click", function () {
    var handler = new Handler();
    handler.resetGame();
});
//# sourceMappingURL=main.js.map