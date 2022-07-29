import {Paddle} from "./Paddle.js";
import {PaddleColor} from "./PaddleSettings.js";
import {Ball} from "./Ball.js";
import {BallColors, BallSizes} from "./BallSettings.js";
import {BoardDefaults} from "./BoardDefaults.js";

export interface PongBoard {
    clearGameBoard(): void;

    drawPlayerPaddles(leftPlayer: Paddle, rightPlayer: Paddle): void;
}

export class GameBoard implements PongBoard {
    private readonly gameBoardId: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
    private readonly width: number;
    private readonly height: number;

    public constructor(gameBoardId: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.gameBoardId = gameBoardId;
        this.context = context;
        this.width = gameBoardId.width;
        this.height = gameBoardId.height;
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

    public drawBallOnBoard(ball: Ball): void {
        this.context.fillStyle = BallColors.BALL_COLOR;
        this.context.strokeStyle = BallColors.BORDER_COLOR;
        this.context.lineWidth = BallSizes.BORDER_LINE_WIDTH;

        this.context.beginPath();
        this.context.arc(ball.getPositionX(), ball.getPositionY(), BallSizes.RADIUS, BallSizes.START_ANGLE, BallSizes.END_ANGLE);
        this.context.stroke();
        this.context.fill();
    }

    public clearGameBoard(): void {
        this.context.fillStyle = BoardDefaults.BACKGROUND_COLOR;
        this.context.fillRect(BoardDefaults.BOARD_X, BoardDefaults.BOARD_Y, BoardDefaults.BOARD_WIDTH, BoardDefaults.BOARD_HEIGHT);
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }
}