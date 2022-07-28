export interface Player {
    changePosition(positionX : number, positionY : number) : void;
    getHeight() : number;
    getWidth() : number;
    getColor() : string;
    getPositionX() : number;
    getPositionY() : number;
}

export class Paddle implements Player{
    private readonly color : string;
    private readonly width : number;
    private readonly height : number;
    private positionX : number;
    private positionY : number;

    public constructor(color, width, height, positionX, positionY) {
        this.height = height;
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    public changePosition(positionX: number, positionY: number): void {
        this.positionX = positionX;
        this.positionY = positionY;
    }

    public getHeight(){
        return this.height;
    }

    public getColor(){
        return this.color;
    }

    public getWidth(){
        return this.width;
    }

    public getPositionX(){
        return this.positionX;
    }

    public getPositionY(){
        return this.positionY;
    }
}