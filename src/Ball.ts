import {GameBoard} from "./GameBoard.js";

export class Ball {
    private positionX: number;
    private positionY: number;
    private directionX: number;
    private directionY: number;
    private readonly ballsSpeed: number;

    public constructor(gameBoard: GameBoard) {
        this.directionY = 0;
        this.directionX = 0;
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
        this.ballsSpeed = 1;
    }

    public changeBallsDirection(directionX: number, directionY: number): void {
        this.directionX = directionX;
        this.directionY = directionY;
    }

    public checkBallsCollision(): void {

    }

    public moveBall(): void {
        this.positionX += (this.ballsSpeed * this.directionX);
        this.positionY += (this.ballsSpeed * this.directionY);
    }

    public changeActualBallPosition(positionX: number, positionY: number): void {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    public getPositionX(): number {
        return this.positionX;
    }

    public getPositionY(): number {
        return this.positionY;
    }

    public getDirectionX(): number {
        return this.directionX;
    }

    public getDirectionY(): number {
        return this.directionY;
    }

    public setDirectionX(direction: number): void {
        this.directionX = direction;
    }

    public setDirectionY(direction: number): void {
        this.directionY = direction;
    }
}