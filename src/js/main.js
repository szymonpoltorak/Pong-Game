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
GameLoader.insertBall(gameBall, gameBoard);
GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall, scoreCounter);
window.addEventListener("keydown", function (event) {
    var pressedKey = event.key;
    var handler = new Handler();
    handler.handleUserMove(pressedKey, gameBoard, leftPlayer, rightPlayer);
});
//# sourceMappingURL=main.js.map