import {GameBoard} from "./GameBoard.js";
import {Paddle} from "./Paddle.js";
import {PaddleColor, PaddleUtils} from "./PaddleSettings.js";
import {Ball} from "./Ball.js";
import {Handler} from "./Handler.js";
import {GameLoader} from "./GameLoader.js";

const gameBoardId: HTMLCanvasElement | null = document.querySelector(".gameBoard");

if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}

const context: CanvasRenderingContext2D | null = gameBoardId.getContext("2d");

if (context === null) {
    throw new Error("Context is null");
}

let gameBoard = new GameBoard(gameBoardId, context);
let leftPlayer = new Paddle(PaddleColor.LEFT_COLOR, PaddleUtils.WIDTH, PaddleUtils.HEIGHT, PaddleUtils.LEFT_X, PaddleUtils.LEFT_Y);
let rightPlayer = new Paddle(PaddleColor.RIGHT_COLOR, PaddleUtils.WIDTH, PaddleUtils.HEIGHT, PaddleUtils.RIGHT_X, PaddleUtils.RIGHT_Y);
let gameBall = new Ball(gameBoard);

GameLoader.insertBall(gameBall, gameBoard);
GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall);

window.addEventListener("keydown", event => {
    const pressedKey: string = event.key;
    const handler = new Handler();

    handler.handleUserMove(pressedKey, gameBoard, leftPlayer, rightPlayer);
});