enum CardSuits{
    CLUBS,
    DIAMONDS,
    HEARTS,
    SPADES,
}

console.log('Card Suits:')

for (const [key,value] of Object.entries(CardSuits)){
    if(typeof key === 'string' && typeof value === "number"){
    console.log(`Ordinal value: ${value}; Name value:${key}`)
    }
}

