import { BallSizes } from "./BallSettings.js";
import { GameLoader } from "./GameLoader.js";
var Ball = /** @class */ (function () {
    function Ball(gameBoard) {
        this.directionY = 0;
        this.directionX = 0;
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
        this.ballsSpeed = 1;
    }
    Ball.prototype.checkBallsCollision = function (gameBoard, leftPlayer, rightPlayer, scoreCounter) {
        if (this.positionY <= BallSizes.RADIUS || this.positionY >= gameBoard.getHeight() - BallSizes.RADIUS) {
            this.directionY *= -1;
        }
        if (this.positionX <= 0) {
            scoreCounter.increaseRightPlayerScore();
            scoreCounter.updateDisplayedScore();
            this.resetBall(gameBoard);
            GameLoader.insertBall(this, gameBoard);
            return;
        }
        if (this.positionX >= gameBoard.getWidth()) {
            scoreCounter.increaseLeftPlayerScore();
            scoreCounter.updateDisplayedScore();
            this.resetBall(gameBoard);
            GameLoader.insertBall(this, gameBoard);
            return;
        }
        this.handleHittingLeftPlayer(leftPlayer);
        this.handleHittingRightPlayer(rightPlayer);
    };
    Ball.prototype.handleHittingLeftPlayer = function (leftPlayer) {
        var leftPlayerAreaX = leftPlayer.getPositionX() + leftPlayer.getWidth() + BallSizes.RADIUS;
        var leftPlayerAreaY = leftPlayer.getPositionY() + leftPlayer.getHeight();
        if (this.positionX <= leftPlayerAreaX && this.positionY > leftPlayer.getPositionY() && this.positionY < leftPlayerAreaY) {
            this.positionX = leftPlayer.getPositionX() + leftPlayer.getWidth() + BallSizes.RADIUS;
            this.directionX *= -1;
            this.ballsSpeed++;
        }
    };
    Ball.prototype.handleHittingRightPlayer = function (rightPlayer) {
        var rightPlayerAreaX = rightPlayer.getPositionX() - BallSizes.RADIUS;
        var rightPlayerAreaY = rightPlayer.getPositionY() + rightPlayer.getHeight();
        if (this.positionX >= rightPlayerAreaX && this.positionY > rightPlayer.getPositionY() && this.positionY < rightPlayerAreaY) {
            this.positionX = rightPlayer.getPositionX() - BallSizes.RADIUS;
            this.directionX *= -1;
            this.ballsSpeed++;
        }
    };
    Ball.prototype.resetBall = function (gameBoard) {
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
        this.ballsSpeed = 1;
    };
    Ball.prototype.moveBall = function () {
        this.positionX += (this.ballsSpeed * this.directionX);
        this.positionY += (this.ballsSpeed * this.directionY);
    };
    Ball.prototype.getPositionX = function () {
        return this.positionX;
    };
    Ball.prototype.getPositionY = function () {
        return this.positionY;
    };
    Ball.prototype.setDirectionX = function (direction) {
        this.directionX = direction;
    };
    Ball.prototype.setDirectionY = function (direction) {
        this.directionY = direction;
    };
    return Ball;
}());
export { Ball };
//# sourceMappingURL=Ball.js.map