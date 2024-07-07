function RNG(min:number, max:number) {
    const rng = Math.random();
    return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len:number, min:number, max:number) {
    if(len > max - min) {
        throw new Error(`cannot find ${len} numbers between ${min} and ${max}`);
    }
    const res: number[] = [];
    while (res.length < len) {
        const rn = RNG(min, max);
        if(res.includes(rn)) {
            continue;
        }
        res.push(rn);
    }
    return res
}

const ruote = [
    'Bari',
    'Cagliari',
    'Firenze',
    'Genova',
    'Milano',
    'Napoli',
    'Palermo',
    'Roma', 
    'Torino', 
    'Venezia', 
    'Nazionale'
];

const estrazioni: { [ruota: string]: number[] } = {} // chiave: stringa, valore: numeri in array

for(let ruota of ruote) {
    const estrazione = RNGSequence(5, 1, 100);
    estrazioni[ruota] = estrazione;
}

console.log(JSON.stringify(estrazioni, null, 2));

// CODING CHALLANGE

// function RNGDec(min:number, max:number, precision:number) {
//     if(precision < 0) {
//         throw new Error(`Error: precision must be a positive number`);
//     } else if(!Number.isInteger(precision)) {
//         throw new Error(`Error: precision must be an integer number`);
//     }
//     const multFactor = Math.pow(10, precision);
//     return RNG(min * multFactor, max * multFactor) /multFactor;
// }

// console.log(RNGDec(5, 10, 2.1));

