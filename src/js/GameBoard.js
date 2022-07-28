var GameBoard = /** @class */ (function () {
    function GameBoard(gameBoardId, context) {
        this.gameBoardId = gameBoardId;
        this.context = context;
        this.width = gameBoardId.width;
        this.height = gameBoardId.height;
    }
    GameBoard.prototype.clearGameBoard = function () {
    };
    GameBoard.prototype.drawPlayerPaddles = function (leftPlayer, rightPlayer) {
        this.context.strokeStyle = "black";
        this.context.fillStyle = leftPlayer.getColor();
        this.context.fillRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());
        this.context.strokeRect(leftPlayer.getPositionX(), leftPlayer.getPositionY(), leftPlayer.getWidth(), leftPlayer.getHeight());
        this.context.fillStyle = rightPlayer.getColor();
        this.context.fillRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
        this.context.strokeRect(rightPlayer.getPositionX(), rightPlayer.getPositionY(), rightPlayer.getWidth(), rightPlayer.getHeight());
    };
    GameBoard.prototype.getWidth = function () {
        return this.width;
    };
    GameBoard.prototype.getHeight = function () {
        return this.height;
    };
    return GameBoard;
}());
export { GameBoard };
//# sourceMappingURL=GameBoard.js.map