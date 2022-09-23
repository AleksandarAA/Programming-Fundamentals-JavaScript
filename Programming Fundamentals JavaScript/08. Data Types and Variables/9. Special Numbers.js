function specials(entry) {
    let myNumber = Number(entry);
    for (let index = 1; index <= myNumber; index++) {
        if (index == 5 || index == 7) {
            console.log(`${index} -> True`);
        } else if (index >= 10) { // Vsichki dvucifreni ako ima takiva (captain obvious)
            let stringified = String(index); // Obrushtame tekushtoto chislo v string
            let sumOfDigits = Number(stringified[0]) + Number(stringified[1]); // Subirame dvete cifri
            if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11) { // proverqvame dali sumata ot dvete cifri e ravna na 5 , 7 ili 11, ako e printime chisloto -> True
                console.log(`${index} -> True`);
            } else {
                console.log(`${index} -> False`); // Ako ne e ravna na 5, 7 ili 11 printime chisloto -> False
            }
        } 
        else {
            console.log(`${index} -> False`); // Za vsichki ostanali koito ne sa dvucifreni printime false-a
        }
    }
}
specials(15);