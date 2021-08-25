enum CardRank {
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
}

console.log('Card Ranks:')

for (const [key,value] of Object.entries(CardRank)){
    if(typeof key === 'string' && typeof value === "number"){
        console.log(`Ordinal value: ${value}; Name value:${key}`)
    }
}
