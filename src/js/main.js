import { GameBoard } from "./GameBoard.js";
import { Paddle } from "./Paddle.js";
var gameBoardId = document.querySelector(".gameBoard");
if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}
var context = gameBoardId.getContext("2d");
if (context === null) {
    throw new Error("Context is null");
}
var gameBoard = new GameBoard(gameBoardId, context);
var leftPlayer = new Paddle("red", 25, 100, 0, 0);
var rightPlayer = new Paddle("blue", 25, 100, gameBoard.getWidth() - 25, gameBoard.getHeight() - 100);
gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
//# sourceMappingURL=main.js.map