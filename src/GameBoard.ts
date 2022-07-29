import {Paddle} from "./Paddle.js";
import {PaddleColor} from "./PaddleSettings.js";

export interface PongBoard {
    clearGameBoard(): void;

    drawPlayerPaddles(leftPlayer: Paddle, rightPlayer: Paddle): void;
}

export class GameBoard implements PongBoard {
    private gameBoardId: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private readonly width: number;
    private readonly height: number;

    public constructor(gameBoardId: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.gameBoardId = gameBoardId;
        this.context = context;
        this.width = gameBoardId.width;
        this.height = gameBoardId.height;
    }

    public clearGameBoard(): void {

    }

    public drawPlayerPaddles(leftPlayer: Paddle, rightPlayer: Paddle): void {
        this.context.strokeStyle = PaddleColor.BORDER_COLOR;

        this.context.fillStyle = leftPlayer.getColor();
        this.context.fillRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());
        this.context.strokeRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());

        this.context.fillStyle = rightPlayer.getColor();
        this.context.fillRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
        this.context.strokeRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.height;
    }
}