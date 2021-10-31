export class Product<A, B>{
    get productCost() {
        return this._productCost;
    }

    set productCost(value) {
        this._productCost = value;
    }
    get productName() {
        return this._productName;
    }

    set productName(value) {
        this._productName = value;
    }
    private _productName! : A;
    private _productCost! : B;
}

