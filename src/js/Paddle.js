var Paddle = /** @class */ (function () {
    function Paddle(color, width, height, positionX, positionY) {
        this.height = height;
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
    }
    Paddle.prototype.getHeight = function () {
        return this.height;
    };
    Paddle.prototype.getColor = function () {
        return this.color;
    };
    Paddle.prototype.getWidth = function () {
        return this.width;
    };
    Paddle.prototype.getPositionX = function () {
        return this.positionX;
    };
    Paddle.prototype.getPositionY = function () {
        return this.positionY;
    };
    Paddle.prototype.setPositionY = function (changePositionValue) {
        this.positionY += changePositionValue;
    };
    return Paddle;
}());
export { Paddle };
//# sourceMappingURL=Paddle.js.map