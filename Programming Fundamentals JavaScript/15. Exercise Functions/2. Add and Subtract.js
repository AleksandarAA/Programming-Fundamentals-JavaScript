function addAndSubtract(firstNumber, secondNumber, lastNumber) {
  function add(firstNum, secondNum) {
    let sumOfTwoNumbers = firstNum + secondNum;
    return sumOfTwoNumbers;
  }

  let sum = add(firstNumber, secondNumber);

  function subtract(sumOfTwo, lastNum) {
    return sumOfTwo - lastNum;
  }

  let result = subtract(sum, lastNumber);

  console.log(result);
}
addAndSubtract(23, 6, 10);
