var GameLoader = /** @class */ (function () {
    function GameLoader() {
    }
    GameLoader.loadGame = function (gameBoard, leftPlayer, rightPlayer, gameBall, scoreCounter, intervalStarter) {
        intervalStarter = setTimeout(function () {
            gameBoard.clearGameBoard();
            gameBoard.drawPlayerPaddles(leftPlayer, rightPlayer);
            gameBall.moveBall();
            gameBoard.drawBallOnBoard(gameBall);
            gameBall.checkBallsCollision(gameBoard, leftPlayer, rightPlayer, scoreCounter);
            GameLoader.loadGame(gameBoard, leftPlayer, rightPlayer, gameBall, scoreCounter, intervalStarter);
        }, 10);
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