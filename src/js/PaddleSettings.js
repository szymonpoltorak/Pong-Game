var gameBoardId = document.querySelector(".gameBoard");
if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}
export var PaddleUtils;
(function (PaddleUtils) {
    PaddleUtils[PaddleUtils["WIDTH"] = 25] = "WIDTH";
    PaddleUtils[PaddleUtils["HEIGHT"] = 100] = "HEIGHT";
    PaddleUtils[PaddleUtils["LEFT_X"] = 0] = "LEFT_X";
    PaddleUtils[PaddleUtils["LEFT_Y"] = 0] = "LEFT_Y";
    PaddleUtils[PaddleUtils["RIGHT_X"] = gameBoardId.width - PaddleUtils.WIDTH] = "RIGHT_X";
    PaddleUtils[PaddleUtils["RIGHT_Y"] = gameBoardId.height - PaddleUtils.HEIGHT] = "RIGHT_Y";
    PaddleUtils[PaddleUtils["PADDLE_SPEED"] = 40] = "PADDLE_SPEED";
})(PaddleUtils || (PaddleUtils = {}));
export var PaddleColor;
(function (PaddleColor) {
    PaddleColor["LEFT_COLOR"] = "RED";
    PaddleColor["RIGHT_COLOR"] = "BLUE";
    PaddleColor["BORDER_COLOR"] = "BLACK";
})(PaddleColor || (PaddleColor = {}));
export var DirectionKeys;
(function (DirectionKeys) {
    DirectionKeys["LEFT_PLAYER_UP"] = "w";
    DirectionKeys["LEFT_PLAYER_DOWN"] = "s";
    DirectionKeys["RIGHT_PLAYER_UP"] = "ArrowUp";
    DirectionKeys["RIGHT_PLAYER_DOWN"] = "ArrowDown";
})(DirectionKeys || (DirectionKeys = {}));
//# sourceMappingURL=PaddleSettings.js.map