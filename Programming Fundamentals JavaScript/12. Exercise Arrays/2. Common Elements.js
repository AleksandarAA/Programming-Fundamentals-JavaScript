function commonElements(firstArray, secondArray) {

    //for(let firstArrIndex = 0; firstArrIndex < firstArray.length; firstArrIndex++){
    //    for(let secondArrIndex = 0; secondArrIndex < secondArray.length; secondArrIndex++){
    //        if (firstArray[firstArrIndex] === secondArray[secondArrIndex]) {
    //            console.log(firstArray[firstArrIndex]);
    //        }
    //    }
    //}

    for (const element of firstArray){
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }

}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
