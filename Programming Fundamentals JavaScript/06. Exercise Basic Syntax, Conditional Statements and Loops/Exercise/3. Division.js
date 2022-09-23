function division(num) {

    let outputNumber = 0

    if (num % 10 === 0) {
        outputNumber = 10
    }else if (num % 7 === 0) {
        outputNumber = 7
    }else if (num % 6 === 0) {
        outputNumber = 6
    }else if (num % 3 === 0) {
        outputNumber = 3
    }else if (num % 2 === 0) {
        outputNumber = 2
    }else {
        console.log('Not divisible');
    }
    console.log(`The number is divisible by ${outputNumber}`);
}
division(1643)