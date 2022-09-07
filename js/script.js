let counter = 0;
let result;
let num1 = undefined;
let num2 = undefined;

let calcDisplay = document.querySelector('.display');

const controls = document.querySelectorAll('.control');
const inputSymbols = document.querySelectorAll('.digit');

function checkDisplay() {
    return calcDisplay.textContent;
};

const calcFunctions = {
    'AC': function () {
        calcDisplay.textContent = 0;
    },
    '+/-': function () {
        calcDisplay.textContent = Number(checkDisplay()) * (-1);
    },
    '%': function () {
        calcDisplay.textContent = Number(checkDisplay()) / 100;
    },
    'del': function () {
        if (checkDisplay().length > 1 && Number(checkDisplay().substring(0, checkDisplay().length - 1)) !== 0) {
            calcDisplay.textContent = checkDisplay().substring(0, checkDisplay().length - 1);
        } else calcFunctions.AC();
    },
};

controls.forEach((control) => {
    control.addEventListener('click', () => {
        let controlAction = control.textContent;
        calcFunctions[controlAction]();
    });
});

inputSymbols.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        let buttonValue = symbol.textContent;
        if (checkDisplay().includes('.') && buttonValue == '.') return;
        if (Number(checkDisplay()) === 0 && buttonValue !== '.' && !checkDisplay().includes('.')) {
            calcDisplay.textContent = buttonValue;
        } else {
            calcDisplay.textContent += buttonValue;
        } 
    });
});