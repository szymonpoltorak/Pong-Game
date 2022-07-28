import {GameBoard} from "./GameBoard.js";
import {Paddle} from "./Paddle.js";

const gameBoardId : HTMLCanvasElement | null = document.querySelector(".gameBoard");

if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}

const context : CanvasRenderingContext2D | null = gameBoardId.getContext("2d");

if (context === null) {
    throw new Error("Context is null");
}

let gameBoard = new GameBoard(gameBoardId, context);
let leftPlayer = new Paddle("red", 25, 100, 0, 0);
let rightPlayer = new Paddle("blue", 25, 100, gameBoard.getWidth() - 25, gameBoard.getHeight() - 100);

gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
