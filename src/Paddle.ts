export class Paddle {
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

    public setPositionY(changePositionValue: number): void {
        this.positionY += changePositionValue;
    }
}