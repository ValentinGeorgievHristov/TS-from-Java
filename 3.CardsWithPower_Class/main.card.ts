import {Card} from "./class.card";
import {getCardName, getCardSuit, Ranks, Suits} from "./card.card";

let suit = Suits.SPADES
let rank = Ranks.ACE

const card = new Card(suit,rank);




console.log(`Card name: ${getCardSuit(suit)} of ${getCardName(rank)}; Card power: ${card.getPower()}`)
