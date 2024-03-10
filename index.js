
let firstNum = '';
let operator = '';
let secondNum = '';
let result = 0;

const numbers = document.querySelectorAll('.buttons #num');

const display = document.querySelector('.display');

const operators = document.querySelectorAll('.buttons .operator');

const clear = document.querySelector('.clear');


function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide (num1, num2) {
    return (num1/num2).toFixed(3);
}

function operate (num1, num2, operator) {
    let final = 0;
    if (operator === '+'){
        final = add(num1, num2);
    } else if (operator === '-') {
        final = subtract(num1, num2);
    } else if (operator === 'x') {
        final = multiply(num1, num2);
    } else if (operator === '÷') {
        final = divide (num1, num2);
    } 

    return final;
}

function updateDisplay (symbol) {
    display.textContent = symbol;
}

numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (operator === '') {
            firstNum += event.target.textContent;
            updateDisplay(firstNum);
        } else {
            secondNum += event.target.textContent;
            updateDisplay(secondNum);
            result = operate(parseInt(firstNum), parseInt(secondNum), operator);
        }
    });
});


operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        const symbol = (event.target.textContent);
        operator = symbol;
        if (symbol === '=') {
            updateDisplay(result);
            firstNum = result;
            secondNum = "";
            operator = "";
        } 
    });
});

function clearDisplay () {
    clear.addEventListener('click', () => {
        updateDisplay(" ");
        firstNum = "";
        secondNum = "";
        operator = "";
    });
}

clearDisplay();
