function integerAndFloat(firstNum, secondNum, thirdNum) {
    
    let sum = firstNum + secondNum + thirdNum;
    let type = '';
    if (Number.isInteger(sum)) {
        type = "Integer"
    }else {
        type = "Float"
    }
    console.log(`${sum} - ${type}`);
}
integerAndFloat()