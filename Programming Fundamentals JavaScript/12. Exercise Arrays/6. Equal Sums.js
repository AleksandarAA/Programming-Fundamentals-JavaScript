function equalSums(arr) {
  let foundIndex = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    //calc left sum
    for (let l = 0; l < i; l++) {
      leftSum = leftSum + arr[l];
    }
    //calc rigth sum
    for (let r = i + 1; r < arrLength; r++) {
      rightSum = rightSum + arr[r];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
