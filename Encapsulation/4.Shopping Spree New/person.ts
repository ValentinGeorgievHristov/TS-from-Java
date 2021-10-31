import {Product} from './product';

export class Person {



    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
    }

    bagOfProducts : string[] = [];

    product = new Product()

    private _name!: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _money!: number;

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }

    buyProduct(product: string, price: number) {

        this.product.productName = product;
        this.product.productCost = price;
        this.money = this.money - price;
        this.bagOfProducts.push(product);
        console.log(this.product.productName);
        console.log(this.product.productCost);
        console.log(this.name);
        console.log(this.money);
        console.log(`the bag -> ${this.bagOfProducts}`);

    }
}







