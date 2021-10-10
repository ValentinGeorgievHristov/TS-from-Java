export class Figure{
    get length(): number {
        return this._length;
    }

    set length(value: number) {
        if(this.length <= 0){
            console.log('Length can`t be smaller or equal to 0')
        }
        this._length = value;
    }



    constructor( private _length:number) {

    }
}
