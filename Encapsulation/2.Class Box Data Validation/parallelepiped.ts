export class Parallelepiped {
    constructor(_length: number, _width: number, _height: number) {
        this._length = _length;
        this._width = _width;
        this._height = _height;
    }

    private _length: number;

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        if (this._length <= 0) {
            throw new Error('The length is invalid');
        }
        this._length = value;
    }

    private _width: number;

    get width(): number {
        return this._width;
    }

    // set width(value: number) {
    //         this._width = value;
    // }

    private _height: number;

    get height(): number {
        return this._height;
    }

    // set height(value: number) {
    //     this._height = value;
    // }

    surfaceArea() {
        if(this.validate(this._length, this._width, this._height)){
           return this.validate(this._length, this._width, this._height)
        }

        let result = (this.length * this._height * 2) + (this._width * this._height * 2) + (this._width * this._length * 2)
        return result;
    }

    lateralSurfaceArea() {
        if(this.validate(this._length, this._width, this._height)){
            return this.validate(this._length, this._width, this._height)
        }

        let result = (this.length * this._height * 2) + (this._width * this._height * 2)
        return result;
    }

    volume() {
        if(this.validate(this._length, this._width, this._height)){
            return this.validate(this._length, this._width, this._height)
        }

        let result = this._length * this._height * this._width;
        return result;
    }

    validate(length: number, width: number, height: number) {
        if (length <= 0) {
            return 'Length cannot be zero or negative.'
        } else if (width <= 0) {
            return 'Width cannot be zero or negative.'
        } else if (height <= 0) {
            return 'Height cannot be zero or negative.'
        }

    }
}
