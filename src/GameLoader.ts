import {GameBoard} from "./GameBoard.js";
import {Ball} from "./Ball.js";
import {Paddle} from "./Paddle.js";

export class GameLoader {
    private constructor() {
    }

    public static loadGame(gameBoard: GameBoard, leftPlayer: Paddle, rightPlayer: Paddle, gameBall: Ball): void {
        let intervalStarter = setTimeout(() => {
            gameBoard.clearGameBoard();
            gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
            gameBall.moveBall();
            gameBoard.drawBallOnBoard(gameBall);
            gameBall.checkBallsCollision(gameBoard, leftPlayer, rightPlayer);
            GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall);
        }, 12);
    }

    public static insertBall(ball: Ball, gameBoard: GameBoard): void {
        if (Math.round(Math.random()) == 1) {
            ball.setDirectionX(1);
        } else {
            ball.setDirectionX(-1);
        }

        if (Math.round(Math.random()) == 1) {
            ball.setDirectionY(Math.random());
        } else {
            ball.setDirectionY(Math.random() * -1);
        }
        gameBoard.drawBallOnBoard(ball);
    }
}