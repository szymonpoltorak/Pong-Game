import { PaddleColor } from "./PaddleSettings.js";
import { BallColors, BallSizes } from "./BallSettings.js";
import { BoardDefaults } from "./BoardDefaults.js";
var GameBoard = /** @class */ (function () {
    function GameBoard(gameBoardId, context) {
        this.gameBoardId = gameBoardId;
        this.context = context;
        this.width = gameBoardId.width;
        this.height = gameBoardId.height;
    }
    GameBoard.prototype.drawPlayerPaddles = function (leftPlayer, rightPlayer) {
        this.context.strokeStyle = PaddleColor.BORDER_COLOR;
        this.context.fillStyle = leftPlayer.getColor();
        this.context.fillRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());
        this.context.strokeRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());
        this.context.fillStyle = rightPlayer.getColor();
        this.context.fillRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
        this.context.strokeRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
    };
    GameBoard.prototype.drawBallOnBoard = function (ball) {
        this.context.fillStyle = BallColors.BALL_COLOR;
        this.context.strokeStyle = BallColors.BORDER_COLOR;
        this.context.lineWidth = BallSizes.BORDER_LINE_WIDTH;
        this.context.beginPath();
        this.context.arc(ball.getPositionX(), ball.getPositionY(), BallSizes.RADIUS, BallSizes.START_ANGLE, BallSizes.END_ANGLE);
        this.context.stroke();
        this.context.fill();
    };
    GameBoard.prototype.clearGameBoard = function () {
        this.context.fillStyle = BoardDefaults.BACKGROUND_COLOR;
        this.context.fillRect(BoardDefaults.BOARD_X, BoardDefaults.BOARD_Y, BoardDefaults.BOARD_WIDTH, BoardDefaults.BOARD_HEIGHT);
    };
    GameBoard.prototype.getWidth = function () {
        return this.width;
    };
    GameBoard.prototype.getHeight = function () {
        return this.height;
    };
    GameBoard.prototype.getContext = function () {
        return this.context;
    };
    return GameBoard;
}());
export { GameBoard };
//# sourceMappingURL=GameBoard.js.map