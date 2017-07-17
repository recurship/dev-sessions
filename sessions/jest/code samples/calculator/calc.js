function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a,b) {
    if(b === 0){
        throw new Error('Can not divide to zero');
    }
    return a/b;
}

function generateRandomEvenNumber(lowerBound, upperBound){
    let randomNumber = generateRandomNumber(lowerBound, upperBound);
    if(randomNumber % 2 == 0 ){
        return randomNumber;
    }
    return (randomNumber+1) > upperBound?(randomNumber-1): (randomNumber+1);
}

function generateRandomOddNumber(lowerBound, upperBound){
    let randomNumber = generateRandomNumber(lowerBound, upperBound);
    if(randomNumber % 2 != 0 ){
        return randomNumber;
    }
    return (randomNumber+1) > upperBound?(randomNumber-1): (randomNumber+1);
}

function generateRandomNumber(lowerBound, upperBound){
    return Math.floor( Math.random() * ( 1 + upperBound - lowerBound ) ) + lowerBound;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    generateRandomNumber,
    generateRandomEvenNumber,
    generateRandomOddNumber
};