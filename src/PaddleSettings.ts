const gameBoardId: HTMLCanvasElement | null = document.querySelector(".gameBoard");

if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}

export enum PaddleUtils {
    WIDTH = 25,
    HEIGHT = 100,
    LEFT_X = 0,
    LEFT_Y = 0,
    RIGHT_X = gameBoardId.width - WIDTH,
    RIGHT_Y = gameBoardId.height - HEIGHT,
    PADDLE_SPEED = 40
}

export enum PaddleColor {
    LEFT_COLOR = "RED",
    RIGHT_COLOR = "BLUE",
    BORDER_COLOR = "BLACK",
}

export enum DirectionKeys{
    LEFT_PLAYER_UP = "w",
    LEFT_PLAYER_DOWN = "s",
    RIGHT_PLAYER_UP = "ArrowUp",
    RIGHT_PLAYER_DOWN= "ArrowDown"
}

