import {Bag} from "./bag";

function formatInput(capacity: number, input: string) {
    let bagCapacity = Number(capacity);
    let bArr = input.split(' ');

    let gold = new Bag();
    let gem =  new Bag();
    let cash = new Bag();

    for (let i = 0; i < bArr.length; i+=2) {
        let nameInput = bArr[i].trim();
        let quantityInput = Number(bArr[i+1].trim());

        let sum =( num1: number, num2: number) => {
            num1 += num2;
            return num1
        }
        // if(bagCapacity < quantityInput){
        //     return  console.log(`You lost all treasure`);
        //
        // }

        if (nameInput === 'Gold'){
            if((nameInput.toLowerCase() in gold && (gold.gold.name))){
                gold.gold.totalQuantity += quantityInput;
                gold.gold.currentQuantity = +quantityInput;
            }else {
                gold.gold.name = nameInput;
                bagCapacity -= +quantityInput;

                gold.gold.currentQuantity = +quantityInput;
                gold.gold.totalQuantity = +quantityInput;
            }
        }else if(nameInput.toLowerCase().endsWith('gem')){
            if(!(nameInput.toLowerCase() in gem)){
            gem.gem.name = nameInput;
            bagCapacity -= +quantityInput;

            gem.gem.currentQuantity = +quantityInput;
            gem.gem.totalQuantity = gem.gem.currentQuantity;
            }else {
                gem.gem.totalQuantity += gem.gem.currentQuantity;
            }
        }if (nameInput.length===3 && nameInput===nameInput.toUpperCase()){
            if(!(nameInput in cash)){
            cash.cash.name = nameInput;
            bagCapacity -= +quantityInput;

            cash.cash.currentQuantity = +quantityInput;
            cash.cash.totalQuantity = cash.cash.currentQuantity
            }else {
                cash.cash.totalQuantity += quantityInput;
            }
        }
    }

    // console.log(bagCapacity)
    console.log(`${gold.gold.name} -> ${gold.gold.currentQuantity} bagCapacity -> ${bagCapacity} totalQuantity ${ gold.gold.totalQuantity} Current -> ${gold.gold.currentQuantity}`);
    console.log(`${gem.gem.name} -> ${gem.gem.currentQuantity} bagCapacity -> ${bagCapacity} totalQuantity ${ gem.gem.totalQuantity} Current -> ${gem.gem.currentQuantity}`);
    console.log(`${cash.cash.name} -> ${cash.cash.currentQuantity} bagCapacity -> ${bagCapacity} totalQuantity ${ cash.cash.totalQuantity} Current -> ${cash.cash.currentQuantity}`);
}

// formatInput(150,
//     'Gold 28 Rubygem 16 USD 9 GBP 8 Gold 5');

formatInput(24000010,
`USD 1030 Gold 300000 EmeraldGem 900000 Topazgem 290000
 CHF 280000 Gold 10000000 JPN 10000 Rubygem 10000000 KLM 3120010`);

// formatInput(90000000000,
// 'Gold 0 BitCoinGem 0 USD 0');


