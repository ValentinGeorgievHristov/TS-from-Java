import {Product} from './product';

export class Person {

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }



    bread : object = new Product('Bread', 10);
    milk : object = new Product('Milk', 2);
    kafence : object = new Product('Kafence', 2);

    public bagOfProducts: object[] = [];

    constructor(name: string, money: number ) {
        this.name = name;
        this.money = money;
    }

    private _name! : string;
    private _money! : number;

    buyProduct(product: string){
        if(Product.name==='Bread'){
            this.bagOfProducts.push(this.bread);
        }else if(Product.name==='Milk'){
            this.bagOfProducts.push(this.milk)
        }else if(Product.name==='Kafence'){
            this.bagOfProducts.push(this.kafence)
        }
    }
}


// selectMethod(product: string){
//     if(product==='Bread'){
//         console.log(this.bread.productName)
//         console.log(this.bread.productCost)
//     }else if(product==='Milk'){
//         console.log(this.milk.productName)
//         console.log(this.milk.productCost)
//     }else if(product==='Kafence'){
//         console.log(this.kafence.productName)
//         console.log(this.kafence.productCost)
//     }
// }




// log(){
//     console.log(this.bread)
//     console.log(this.milk)
//     console.log(this.kafence)
// }

// export class Person extends Product{
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get price(): number {
//         return this._price;
//     }
//
//     set price(value: number) {
//         this._price = value;
//     }
//
//     constructor(
//      productName : string,
//      productCost : number,
//
//      private _name : string,
//      private _price : number,
//     ) {
//         super(productName , productCost );
//     }
//
//     logging(){
//         console.log(this.productName)
//         console.log(this.productCost)
//         console.log(this.name)
//         console.log(this.price)
//     }
//
// }


// export class Person {
//
//     product:Product = new Product('',0)
//
//     constructor(n, m) {
//
//         this.name = n;
//         this.money = m;
//     }
//
//     private _name: string;
//
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
//     private _money: number;
//
//     get money(): number {
//         return this._money;
//     }
//
//     set money(value: number) {
//         if (value < 0) {
//             throw new Error('Money cannot be a negative number.');
//         };
//         this._money = value;
//     }
//
//     private _bagOfProducts: [] = [];
//
//     get bagOfProducts(): [] {
//         return this._bagOfProducts;
//     }
//
//     set bagOfProducts(value: []) {
//         this._bagOfProducts = value;
//     }
//
//     addingProduct() {
//
//
//         console.log(this.product)
//       // this.bagOfProducts.push(this.product)
//     }
// }

// name, money and a bag of products
