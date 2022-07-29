export class ScoreCounter {
    private leftPlayerScore: number;
    private rightPlayerScore: number;

    public constructor() {
        this.leftPlayerScore = 0;
        this.rightPlayerScore = 0;
    }

    public increaseLeftPlayerScore(): void {
        this.leftPlayerScore++;
    }

    public increaseRightPlayerScore(): void {
        this.rightPlayerScore++;
    }

    public resetScores(): void {
        this.leftPlayerScore = 0;
        this.rightPlayerScore = 0;
    }

    public updateDisplayedScore(): void {
        const scoreLabel = document.querySelector(".score");

        if (scoreLabel === null){
            throw new Error("Score label is null");
        }
        scoreLabel.textContent = this.leftPlayerScore + " : " + this.rightPlayerScore;
    }
}