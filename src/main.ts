import {GameBoard} from "./GameBoard.js";
import {Paddle} from "./Paddle.js";
import {PaddleColor, Sizes} from "./PaddleSettings.js";
import {Ball} from "./Ball.js";

const gameBoardId: HTMLCanvasElement | null = document.querySelector(".gameBoard");

if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}

const context: CanvasRenderingContext2D | null = gameBoardId.getContext("2d");

if (context === null) {
    throw new Error("Context is null");
}

let gameBoard = new GameBoard(gameBoardId, context);
let leftPlayer = new Paddle(PaddleColor.LEFT_COLOR, Sizes.WIDTH, Sizes.HEIGHT, Sizes.LEFT_X, Sizes.LEFT_Y);
let rightPlayer = new Paddle(PaddleColor.RIGHT_COLOR, Sizes.WIDTH, Sizes.HEIGHT, Sizes.RIGHT_X, Sizes.RIGHT_Y);
let gameBall = new Ball(gameBoard);

gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
gameBoard.drawBallOnBoard(gameBall);
