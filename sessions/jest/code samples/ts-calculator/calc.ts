export const sum = (a: number, b: number ): number => {
    return a + b;
};

export const subtract = (a: number, b: number ): number => {
    return a - b;
};

export const multiply = (a: number, b: number ): number => {
    return a*b;
};

export const divide = (a: number, b: number ): number => {
    if(b === 0){
        throw new Error('Can not divide to zero');
    }
    return a/b;
};

export const generateRandomEvenNumber = (lowerBound: number, upperBound: number ): number => {
    let randomNumber = generateRandomNumber(lowerBound, upperBound);
    if(randomNumber % 2 == 0 ){
        return randomNumber;
    }
    return (randomNumber+1) > upperBound?(randomNumber-1): (randomNumber+1);
};

export const generateRandomOddNumber = (lowerBound: number, upperBound: number ): number => {
    let randomNumber = generateRandomNumber(lowerBound, upperBound);
    if(randomNumber % 2 != 0 ){
        return randomNumber;
    }
    return (randomNumber+1) > upperBound?(randomNumber-1): (randomNumber+1);
};


export const generateRandomNumber = (lowerBound: number, upperBound: number ): number => {
    return Math.floor( Math.random() * ( 1 + upperBound - lowerBound ) ) + lowerBound;
};
