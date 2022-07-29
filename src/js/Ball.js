var Ball = /** @class */ (function () {
    function Ball(gameBoard) {
        this.directionY = 0;
        this.directionX = 0;
        this.positionX = gameBoard.getWidth() / 2;
        this.positionY = gameBoard.getHeight() / 2;
    }
    Ball.prototype.changeBallsDirection = function (directionX, directionY) {
        this.directionX = directionX;
        this.directionY = directionY;
    };
    Ball.prototype.checkBallsCollision = function () {
    };
    Ball.prototype.changeActualBallPosition = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    };
    Ball.prototype.getPositionX = function () {
        return this.positionX;
    };
    Ball.prototype.getPositionY = function () {
        return this.positionY;
    };
    Ball.prototype.getDirectionX = function () {
        return this.directionX;
    };
    Ball.prototype.getDirectionY = function () {
        return this.directionY;
    };
    return Ball;
}());
export { Ball };
//# sourceMappingURL=Ball.js.map