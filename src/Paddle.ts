export interface Player {
    changePosition(positionX: number, positionY: number): void;
}

export class Paddle implements Player {
    private readonly color: string;
    private readonly width: number;
    private readonly height: number;
    private positionX: number;
    private positionY: number;

    public constructor(color: string, width: number, height: number, positionX: number, positionY: number) {
        this.height = height;
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
    }

    public changePosition(positionX: number, positionY: number): void {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    public getHeight(): number {
        return this.height;
    }

    public getColor(): string {
        return this.color;
    }

    public getWidth(): number {
        return this.width;
    }

    public getPositionX(): number {
        return this.positionX;
    }

    public getPositionY(): number {
        return this.positionY;
    }
}