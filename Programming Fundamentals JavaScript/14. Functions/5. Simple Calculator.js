function simpleCalculator(numOne, numTwo, operator) {

let calculating = ''
    switch (operator){
        case "multiply":
        calculating = numOne * numTwo;
        break;
        case "divide":
        calculating = numOne / numTwo;
        break;
        case "add":
        calculating = numOne + numTwo;
        break;
        case "subtract":
        calculating = numOne - numTwo;
        break;
    }

    console.log(calculating);
}
simpleCalculator(5, 5, "multiply");
