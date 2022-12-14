import {GameBoard} from "./GameBoard.js";
import {Paddle} from "./Paddle.js";
import {PaddleColor, PaddleUtils} from "./PaddleSettings.js";
import {Ball} from "./Ball.js";
import {Handler} from "./Handler.js";
import {GameLoader} from "./GameLoader.js";
import {ScoreCounter} from "./ScoreCounter.js";

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
const scoreCounter = new ScoreCounter();
let intervalStarter: number = 0;

const startButton = document.querySelector(".startButton");

if (startButton === null) {
    throw new Error("Start button is null");
}

startButton.addEventListener("click", () => {
    GameLoader.insertBall(gameBall, gameBoard);
    GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall, scoreCounter, intervalStarter);
});

window.addEventListener("keydown", event => {
    const pressedKey: string = event.key;
    const handler = new Handler();

    handler.handleUserMove(pressedKey, gameBoard, leftPlayer, rightPlayer);
});

const resetButton = document.querySelector(".resetButton");

if (resetButton === null) {
    throw new Error("Reset buttons is null");
}

resetButton.addEventListener("click", () => {
    const handler = new Handler();

    handler.resetGame();
});
