// import functions and grab DOM elements

import { add } from './math-utils.js';
import { sub } from './math-utils.js';
import { multi } from './math-utils.js';
import { divi } from './math-utils.js';

// initialize state

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

const multiNumber1 = document.getElementById('multi-number-1');
const multiNumber2 = document.getElementById('multi-number-2');
const multiButton = document.getElementById('multi-button');
const multiAnswer = document.getElementById('multi-answer');

const diviNumber1 = document.getElementById('divi-number-1');
const diviNumber2 = document.getElementById('divi-number-2');
const diviButton = document.getElementById('divi-button');
const diviAnswer = document.getElementById('divi-answer');

let addButtonClick = 1;
let subButtonClick = 1;
let multiButtonClick = 1;
let diviButtonClick = 1;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    const sum = add(num1, num2);
    addAnswer.textContent = sum;
    console.log('You clicked the addition button', + addButtonClick, 'time(s)'); 
    addButtonClick++;
});

subButton.addEventListener('click', () => {
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;
    const sum = sub(num1, num2);
    subAnswer.textContent = sum;
    console.log('You clicked the subtraction button', + subButtonClick, 'time(s)'); 
    subButtonClick++;
});

multiButton.addEventListener('click', () => {
    const num1 = +multiNumber1.value;
    const num2 = +multiNumber2.value;
    const sum = multi(num1, num2);
    multiAnswer.textContent = sum;
    console.log('You clicked the multiplication button', + multiButtonClick, 'time(s)'); 
    multiButtonClick++;
});

diviButton.addEventListener('click', () => {
    const num1 = +diviNumber1.value;
    const num2 = +diviNumber2.value;
    const sum = divi(num1, num2);
    diviAnswer.textContent = sum;
    console.log('You clicked the division button', + diviButtonClick, 'time(s)'); 
    diviButtonClick++;
});