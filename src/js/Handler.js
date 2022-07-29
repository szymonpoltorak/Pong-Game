import { DirectionKeys, PaddleUtils } from "./PaddleSettings.js";
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.handleUserMove = function (pressedKey, gameBoard, leftPlayer, rightPlayer) {
        if (pressedKey == DirectionKeys.LEFT_PLAYER_UP) {
            this.checkUpperKey(leftPlayer);
        }
        else if (pressedKey == DirectionKeys.LEFT_PLAYER_DOWN) {
            this.checkDownKey(gameBoard, leftPlayer);
        }
        else if (pressedKey == DirectionKeys.RIGHT_PLAYER_UP) {
            this.checkUpperKey(rightPlayer);
        }
        else if (pressedKey == DirectionKeys.RIGHT_PLAYER_DOWN) {
            this.checkDownKey(gameBoard, rightPlayer);
        }
    };
    Handler.prototype.checkUpperKey = function (player) {
        if (player.getPositionY() > 0) {
            player.setPositionY(-PaddleUtils.PADDLE_SPEED);
        }
    };
    Handler.prototype.checkDownKey = function (gameBoard, player) {
        if (player.getPositionY() < gameBoard.getHeight() - player.getHeight()) {
            player.setPositionY(PaddleUtils.PADDLE_SPEED);
        }
    };
    return Handler;
}());
export { Handler };
//# sourceMappingURL=Handler.js.map