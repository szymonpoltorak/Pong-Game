import {GameBoard} from "./GameBoard.js";
import {DirectionKeys, PaddleUtils} from "./PaddleSettings.js";
import {Paddle} from "./Paddle.js";
import {Ball} from "./Ball.js";

export class Handler {
    public constructor() {
    }

    public handleUserMove(pressedKey: string, gameBoard: GameBoard, leftPlayer: Paddle, rightPlayer: Paddle, gameBall: Ball) {
        if (pressedKey == DirectionKeys.LEFT_PLAYER_UP) {
            this.checkUpperKey(leftPlayer);
        }
        else if (pressedKey == DirectionKeys.LEFT_PLAYER_DOWN){
            this.checkDownKey(gameBoard, leftPlayer);
        }
        else if (pressedKey == DirectionKeys.RIGHT_PLAYER_UP) {
            this.checkUpperKey(rightPlayer);
        }
        else if (pressedKey == DirectionKeys.RIGHT_PLAYER_DOWN){
            this.checkDownKey(gameBoard, rightPlayer);
        }
    }

    private checkUpperKey(player: Paddle) {
        if (player.getPositionY() > 0) {
            player.setPositionY(-PaddleUtils.PADDLE_SPEED);
        }
    }

    private checkDownKey(gameBoard: GameBoard, player: Paddle) {
        if (player.getPositionY() < gameBoard.getHeight() - player.getHeight()) {
            player.setPositionY(PaddleUtils.PADDLE_SPEED);
        }
    }
}
