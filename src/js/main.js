import { GameBoard } from "./GameBoard.js";
import { Paddle } from "./Paddle.js";
import { PaddleColor, Sizes } from "./PaddleSettings.js";
var gameBoardId = document.querySelector(".gameBoard");
if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}
var context = gameBoardId.getContext("2d");
if (context === null) {
    throw new Error("Context is null");
}
var gameBoard = new GameBoard(gameBoardId, context);
var leftPlayer = new Paddle(PaddleColor.LEFT_COLOR, Sizes.WIDTH, Sizes.HEIGHT, Sizes.LEFT_X, Sizes.LEFT_Y);
var rightPlayer = new Paddle(PaddleColor.RIGHT_COLOR, Sizes.WIDTH, Sizes.HEIGHT, Sizes.RIGHT_X, Sizes.RIGHT_Y);
gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
//# sourceMappingURL=main.js.map