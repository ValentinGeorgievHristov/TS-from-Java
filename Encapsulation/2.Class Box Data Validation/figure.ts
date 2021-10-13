export class Figure {

    // private _length: number

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        if (value <= 0) {
            throw new Error('Length cannot be zero or negative. ');
        }
        this._length = value;
    }

    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }

    private _length:number
    private _width: number
    private _height: number

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value <= 0) {
            throw new Error('Width cannot be zero or negative. ');
        }
        this._width = value;
    }

    // private _height: number

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        if (value <= 0) {
            throw new Error('Height cannot be zero or negative. ');
        }
        this._height = value;
    }

    surfaceArea = ():number => {
        let result = (this.width * this.length * 2 + this.width * this.height * 2 +
            this.length * this.height * 2);
        return result;
    }

    lateralSurfaceArea = ():number => {
        let result = (this.width * this.height * 2 + this.length * this.height * 2);
        return result;
    }

    volume = ():number => {
        let result = (this.width * this.length * this.height);
        return result;
    }
}
