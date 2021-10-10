export class Figure {

    private _length: number

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        if (value <= 0) {
            throw new Error('Length cannot be zero or negative. ');
        }
        this._length = value;
    }

    // constructor() {
    //     this.length = this.length
    //         this.width = this.width,
    //         this.height = this.height
    // }


    // constructor(private makeService: MakeService) {
    //     // Initialization inside the constructor
    //     this.makes = [];
    // }

    private _width: number

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value <= 0) {
            throw new Error('Width cannot be zero or negative. ');
        }
        this._width = value;
    }

    private _height: number

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        if (value <= 0) {
            throw new Error('Height cannot be zero or negative. ');
        }
        this._height = value;
    }

    surfaceArea = () => {
        let result = (this.width * this.length * 2 + this.width * this.height * 2 +
            this.length * this.height * 2).toFixed(2);
        return `Surface Area - ${result}`;
    }

    lateralSurfaceArea = () => {
        let result = (this.width * this.height * 2 + this.length * this.height * 2).toFixed(2);
        return `Lateral Surface Area - ${result}`;
    }

    volume = () => {
        let result = (this.width * this.length * this.height).toFixed(2);
        return `Volume - ${result}`;
    }
}
