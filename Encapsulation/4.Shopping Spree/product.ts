export class Product<Product>{
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
    private _productName! : string;
    private _productCost! : number;

    constructor(productName : string ,productCost : number) {
       this.productName = productName;
       this.productCost = productCost;
    }
}














// export class Product {
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         if (value === null || value === '' || value === ' ') {
//             throw new Error('Name cannot be empty.');
//         }
//         this._name = value;
//     }
//
//     get cost(): number {
//         return this._cost;
//     }
//
//     set cost(value: number) {
//         if (value < 0 ) {
//             throw new Error('Cost cannot be a negative number.');
//         };
//         this._cost = value;
//     }
//
//     private _name : string;
//     private _cost : number;
//
//     constructor(nProduct, cProduct) {
//         this.name = nProduct;
//         this.cost = cProduct;
//     }
// }
