import {GameBoard} from "./GameBoard.js";

export class Ball {
    private positionX: number;
    private positionY: number;
    private directionX: number;
    private directionY: number;

    public constructor(gameBoard: GameBoard) {
        this.directionY = 0;
        this.directionX = 0;
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
    }

    public changeBallsDirection(directionX: number, directionY: number): void {
        this.directionX = directionX;
        this.directionY = directionY;
    }

    public checkBallsCollision(): void {

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
}