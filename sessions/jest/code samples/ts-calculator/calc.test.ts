/**
 * Created by abdulmoiz on 7/3/2017.
 */
import * as calc from './calc';

describe('calculator methods', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calc.sum(1, 2)).toBe(3);
    });

    test('subtract 1 - 2 to equal -1', () => {
        expect(calc.subtract(1, 2)).toBe(-1);
    });


    test('multiply 7 * 7 to equal 49', () => {
        expect(calc.multiply(7, 7)).toBe(49);
    });

    test('multiply 49 / 7 to equal 7', () => {
        expect(calc.divide(49, 7)).toBe(7);
    });

    test('generate a random number with in 1-5', () => {
        let randomNumber = calc.generateRandomNumber(1, 5);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(5);
    });

    test('it should throw exception on dividing by zero', () => {
        expect(calc.divide.bind(null, 45, 0)).toThrow();
    });

    test('generate a random even number with in 1-100', () => {
        let randomNumber = calc.generateRandomEvenNumber(1, 100);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(100);
        expect(randomNumber).toBeAnEvenNumber();
    });

    test('generate a random odd number with in 1-100', () => {
        let randomNumber = calc.generateRandomOddNumber(1, 100);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(100);
        expect(randomNumber).toBeAnOddNumber();
    });

});


//For all expect matchers which JEST provides
// https://facebook.github.io/jest/docs/expect.html#expectextendmatchers
expect.extend({
    toBeAnEvenNumber(received) {
        const pass = (received % 2 == 0);
        if (pass) {
            return {
                message: () => (
                    `expected ${received} an even number`
                ),
                pass: true,
            };
        } else {
            return {
                message: () => (`expected ${received} an even number`),
                pass: false,
            };
        }
    },
    toBeAnOddNumber(received) {
        const pass = (received % 2 != 0);
        if (pass) {
            return {
                message: () => (
                    `expected ${received} an odd number`
                ),
                pass: true,
            };
        } else {
            return {
                message: () => (`expected ${received} an odd number`),
                pass: false,
            };
        }
    }
});







