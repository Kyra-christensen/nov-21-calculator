// IMPORT MODULES under test here:
import { add, sub, multi, divi } from '../math-utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('add() should take in 1 and 1 and return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('sub() should take in 2 and 1 and return 1', (expect) => {
    const expected = 1;
    const actual = sub(2, 1);
    expect.equal(actual, expected);
});

test('multi() should take in 2 and 2 and return 4', (expect) => {
    const expected = 4;
    const actual = multi(2, 2);
    expect.equal(actual, expected);
});

test('divi() should take in 10 and 5 and return 2', (expect) => {
    const expected = 2;
    const actual = divi(10, 5);
    expect.equal(actual, expected);
});