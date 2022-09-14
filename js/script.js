let result = undefined;
let operatorValue = undefined;
let displayValue = document.querySelector('.display');
let newInputState = 0;

function add(num1, num2) {
    return Number(Number(num1) + Number(num2));
}

function subtract(num1, num2) {
    return Number(num1 - num2);
}

function multiply(num1, num2) {
    return Number(num1 * num2);
}

function divide(num1, num2) {
    return Number(num1 / num2);
}

function operate(num1, num2, operator) {
    return Number(operator(num1, num2));
}

const digits = document.querySelectorAll('.digit');

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (displayValue.textContent.includes('.') && digit.textContent.includes('.')) return;
        if (displayValue.textContent === '0' && digit.textContent !== '.'
            || newInputState == 0 && digit.textContent !== '.') {
            displayValue.textContent = digit.textContent;
        } else {
            displayValue.textContent += digit.textContent;
        }
        newInputState = 1;
    })
})

const controlsObj = {
    'AC': function () {
        result = undefined;
        operatorValue = undefined;
        newInputState = 0;
        displayValue.textContent = 0;
    },
    '+/-': function () {
        displayValue.textContent = Number(displayValue.textContent) * (-1);
    },
    '%': function () {
        displayValue.textContent = Number(displayValue.textContent) / 100;
    },
    'del': function () {
        if (displayValue.textContent.length > 1) {
            displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1);
        } else {
            displayValue.textContent = 0;
            result = undefined;
            operatorValue = undefined;
        }
    },
}

const controls = document.querySelectorAll('.control');

controls.forEach((control) => {
    control.addEventListener('click', () => {
        let controlAction = control.textContent;
        controlsObj[controlAction]();
    })
})

operationsObj = {
    '/': function () {
        result = operate(result, displayValue.textContent, divide);
    },
    '*': function () {
        result = operate(result, displayValue.textContent, multiply);
    },
    '-': function () {
        result = operate(result, displayValue.textContent, subtract);
    },
    '+': function () {
        result = operate(result, displayValue.textContent, add);
    },
    '=': function (operatorValue) {
        operationsObj[operatorValue];
    }
}

const operations = document.querySelectorAll('.operation');

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (operatorValue === undefined) {
            result = Number(displayValue.textContent);
            operatorValue = operation.textContent;
        } else {
            operationsObj[operatorValue]();
            displayValue.textContent = result;
            operatorValue = undefined;
        }
        newInputState = 0;
    })
})