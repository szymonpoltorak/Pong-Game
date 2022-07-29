const gameBoardId: HTMLCanvasElement | null = document.querySelector(".gameBoard");

if (gameBoardId === null) {
    throw new Error("Game Board Id is null");
}

export enum Sizes {
    WIDTH = 25,
    HEIGHT = 100,
    LEFT_X = 0,
    LEFT_Y = 0,
    RIGHT_X = gameBoardId.width - WIDTH,
    RIGHT_Y = gameBoardId.height - HEIGHT,
}

export enum PaddleColor {
    LEFT_COLOR = "RED",
    RIGHT_COLOR = "BLUE",
    BORDER_COLOR = "black",
}

