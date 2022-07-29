var GameLoader = /** @class */ (function () {
    function GameLoader() {
    }
    GameLoader.loadGame = function (gameBoard, leftPlayer, rightPlayer, gameBall) {
        var intervalStarter = setTimeout(function () {
            gameBoard.clearGameBoard();
            gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
            gameBall.moveBall();
            gameBoard.drawBallOnBoard(gameBall);
            gameBall.checkBallsCollision(gameBoard, leftPlayer, rightPlayer);
            GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall);
        }, 12);
    };
    GameLoader.insertBall = function (ball, gameBoard) {
        if (Math.round(Math.random()) == 1) {
            ball.setDirectionX(1);
        }
        else {
            ball.setDirectionX(-1);
        }
        if (Math.round(Math.random()) == 1) {
            ball.setDirectionY(Math.random());
        }
        else {
            ball.setDirectionY(Math.random() * -1);
        }
        gameBoard.drawBallOnBoard(ball);
    };
    return GameLoader;
}());
export { GameLoader };
//# sourceMappingURL=GameLoader.js.map