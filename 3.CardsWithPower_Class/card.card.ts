export enum Suits {
    CLUBS = 0,
    DIAMONDS = 13,
    HEARTS = 26,
    SPADES = 39,
}

 export enum Ranks {
    ACE = 14,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13,

}

export function getCardName(m: Ranks) {
    return Ranks[m];
}

export function getCardSuit(m: Suits) {
    return Suits[m];
}

// let card: string = 'TWO';
// let cardPower: number =0
// let suit: string = 'CLUBS';
// let suitPower: number=0;
//
// let powerSum = (a: number, b:number) => a + b;
//
//
//
// for (const [key, value] of Object.entries(Ranks)) {
//     if (typeof key === 'string' && typeof value === 'number' && key === rank) {
//         cardPower = value;
//     }
// }
//
// for (const [key, value] of Object.entries(Suit)) {
//     if (typeof key === "string" && typeof value === "number"&& key === suit) {
//         suitPower = value
//     }
// }
//
// console.log(`Card name: ${card} of ${suit}; Card power: ${powerSum(cardPower, suitPower)}`)
