var ScoreCounter = /** @class */ (function () {
    function ScoreCounter() {
        this.leftPlayerScore = 0;
        this.rightPlayerScore = 0;
    }
    ScoreCounter.prototype.increaseLeftPlayerScore = function () {
        this.leftPlayerScore++;
    };
    ScoreCounter.prototype.increaseRightPlayerScore = function () {
        this.rightPlayerScore++;
    };
    ScoreCounter.prototype.resetScores = function () {
        this.leftPlayerScore = 0;
        this.rightPlayerScore = 0;
    };
    ScoreCounter.prototype.updateDisplayedScore = function () {
        var scoreLabel = document.querySelector(".score");
        if (scoreLabel === null) {
            throw new Error("Score label is null");
        }
        scoreLabel.textContent = this.leftPlayerScore + " : " + this.rightPlayerScore;
    };
    return ScoreCounter;
}());
export { ScoreCounter };
//# sourceMappingURL=ScoreCounter.js.map