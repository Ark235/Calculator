let result = undefined;
let operatorValue = undefined;
let displayValue = document.querySelector('.display');
let newInputState = 0;

const digits = document.querySelectorAll('.digit');
const controls = document.querySelectorAll('.control');
const operations = document.querySelectorAll('.operation');
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
const operationsObj = {
    '/': function () {
        result = (Number(result) / Number(displayValue.textContent)).toFixed(2);
    },
    '*': function () {
        result = (Number(result) * Number(displayValue.textContent)).toFixed(2);
    },
    '-': function () {
        result = (Number(result) - Number(displayValue.textContent)).toFixed(2);
    },
    '+': function () {
        result = (Number(result) + Number(displayValue.textContent)).toFixed(2);
    },
    '=': function (operatorValue) {
        operationsObj[operatorValue];
    }
}
function displayInput(digit) {
    if (displayValue.textContent.includes('.') && digit.textContent.includes('.')) return;
        if (displayValue.textContent === '0' && digit.textContent !== '.'
            || newInputState == 0 && digit.textContent !== '.') {
            displayValue.textContent = digit.textContent;
        } else {
            displayValue.textContent += digit.textContent;
        }
        newInputState = 1;
}
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        displayInput(digit);
    })
})
controls.forEach((control) => {
    control.addEventListener('click', () => {
        let controlAction = control.textContent;
        controlsObj[controlAction]();
    })
})
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (operation.textContent === '=' && operatorValue === undefined) return;
        if (operatorValue === '/' && displayValue.textContent === '0') {
            displayValue.textContent = 'nope :)';
            result = undefined;
            operatorValue = undefined;
            newInputState = 0;
            return 'Nope, we\'re not dividing by 0';
        }
        if (operatorValue === undefined) {
            result = Number(displayValue.textContent);
            operatorValue = operation.textContent;
        } else {
            operationsObj[operatorValue]();
            displayValue.textContent = 0 + Number(result);
            operatorValue = operation.textContent;
        }
        newInputState = 0;
    })
})
