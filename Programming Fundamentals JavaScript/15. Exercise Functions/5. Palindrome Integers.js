function palindromeIntegers(numberArray) {
  let numberArrayLength = numberArray.length;
  for (let index = 0; index < numberArrayLength; index++) {
    let numberAsString = numberArray[index].toString();
    let reversedString = "";

    for (let j = numberAsString - 1; j >= 0; j--) {
      reversedString += numberAsString[j];
    }

    if (numberAsString === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
