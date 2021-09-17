import {Treasure} from "./treasure";

export class Bag extends Treasure{
    constructor() {
        super();
    }

    gold = new Treasure();
    cash = new Treasure();
    gem = new Treasure();

    // sumTotalQuantity=( num: number) => {
    //     this.totalQuantity += num;
    // }



}
