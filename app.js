// import functions and grab DOM elements
import { add } from './math-utils.js';
import { sub } from './math-utils.js';
// initialize state
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    const sum = add(num1, num2);
    addAnswer.textContent = sum;
});

subButton.addEventListener('click', () => {
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;
    const sum = sub(num1, num2);
    subAnswer.textContent = sum;
})