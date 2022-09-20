function printAndSum(startNumber, endNumber) {
    
    let sum = 0
    let output = ''

    for(let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++){
        sum += currentNumber;
        output += `${currentNumber} `
    }
console.log(output);
console.log(`Sum: ${sum}`);
}
printAndSum(5,10)