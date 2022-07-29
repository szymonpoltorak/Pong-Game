var gameBoardId = document.querySelector(".gameBoard");
if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}
export var Sizes;
(function (Sizes) {
    Sizes[Sizes["WIDTH"] = 25] = "WIDTH";
    Sizes[Sizes["HEIGHT"] = 100] = "HEIGHT";
    Sizes[Sizes["LEFT_X"] = 0] = "LEFT_X";
    Sizes[Sizes["LEFT_Y"] = 0] = "LEFT_Y";
    Sizes[Sizes["RIGHT_X"] = gameBoardId.width - Sizes.WIDTH] = "RIGHT_X";
    Sizes[Sizes["RIGHT_Y"] = gameBoardId.height - Sizes.HEIGHT] = "RIGHT_Y";
})(Sizes || (Sizes = {}));
export var PaddleColor;
(function (PaddleColor) {
    PaddleColor["LEFT_COLOR"] = "RED";
    PaddleColor["RIGHT_COLOR"] = "BLUE";
    PaddleColor["BORDER_COLOR"] = "BLACK";
})(PaddleColor || (PaddleColor = {}));
//# sourceMappingURL=PaddleSettings.js.map