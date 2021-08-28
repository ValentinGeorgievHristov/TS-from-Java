import {Suits, Ranks} from "./card.card";

export class Card {

    constructor(public suits: Suits,public rank: Ranks) {
    }

    getPower(){
        return this.suits + this.rank;
    }



}
