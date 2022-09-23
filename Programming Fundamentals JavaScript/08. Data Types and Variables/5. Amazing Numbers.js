function amazingNumbers(number) {
    let textNumber = number.toString();
    let sum = 0;
    let isAmazing = false

    for (let i = 0; i < textNumber.length; i++) {
        let currentNumber = Number(textNumber[i]);
        sum += currentNumber;
    }
    
    let sumText = sum.toString();
    for (let i = 0; i < sumText.length; i++) {
            let currentDigit = sumText[i];
            if (currentDigit == '9') {
                isAmazing = true;
                break;
            }
    }
    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}
amazingNumbers(1233)