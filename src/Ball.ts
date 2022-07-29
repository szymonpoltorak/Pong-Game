import {GameBoard} from "./GameBoard.js";
import {BallSizes} from "./BallSettings.js";
import {Paddle} from "./Paddle.js";

export class Ball {
    private positionX: number;
    private positionY: number;
    private directionX: number;
    private directionY: number;
    private ballsSpeed: number;

    public constructor(gameBoard: GameBoard) {
        this.directionY = 0;
        this.directionX = 0;
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
        this.ballsSpeed = 1;
    }

    public checkBallsCollision(gameBoard: GameBoard, leftPlayer: Paddle, rightPlayer: Paddle): void {
        if (this.positionY <= BallSizes.RADIUS || this.positionY >= gameBoard.getHeight() - BallSizes.RADIUS){
            this.directionY *= -1;
        }
        this.handleHittingLeftPlayer(leftPlayer);
        this.handleHittingRightPlayer(rightPlayer);
    }

    private handleHittingLeftPlayer(leftPlayer: Paddle): void {
        const leftPlayerAreaX: number = leftPlayer.getPositionX() + leftPlayer.getWidth() + BallSizes.RADIUS;
        const leftPlayerAreaY: number = leftPlayer.getPositionY() + leftPlayer.getHeight();

        if (this.positionX <= leftPlayerAreaX && this.positionY > leftPlayer.getPositionY() && this.positionY < leftPlayerAreaY){
            this.positionX = leftPlayer.getPositionX() + leftPlayer.getWidth() + BallSizes.RADIUS;
            this.directionX *= -1;
            this.ballsSpeed++;
        }
    }

    private handleHittingRightPlayer(rightPlayer: Paddle): void {
        const rightPlayerAreaX: number = rightPlayer.getPositionX() - BallSizes.RADIUS;
        const rightPlayerAreaY: number = rightPlayer.getPositionY() + rightPlayer.getHeight();

        if (this.positionX >= rightPlayerAreaX && this.positionY > rightPlayer.getPositionY() && this.positionY < rightPlayerAreaY){
            this.positionX = rightPlayer.getPositionX() - BallSizes.RADIUS;
            this.directionX *= -1;
            this.ballsSpeed++;
        }
    }

    public moveBall(): void {
        this.positionX += (this.ballsSpeed * this.directionX);
        this.positionY += (this.ballsSpeed * this.directionY);
    }

    public getPositionX(): number {
        return this.positionX;
    }

    public getPositionY(): number {
        return this.positionY;
    }

    public setDirectionX(direction: number): void {
        this.directionX = direction;
    }

    public setDirectionY(direction: number): void {
        this.directionY = direction;
    }
}