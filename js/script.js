let displayValue; 

let calcDisplay = document.querySelector('.display');

let buttons = document.querySelectorAll('.digit'); // digits and ',' buttons
let controls = document.querySelectorAll('.control'); // AC, +/-, % and 'del' buttons

//** Event listeners for digits and ',' buttons. Display according value on calculator display */
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = calcDisplay.textContent;
        if (displayValue == 0 && button.textContent !== ',') calcDisplay.textContent = '';
        if (displayValue.includes(',') && button.textContent == ',') return;
        calcDisplay.textContent += button.textContent;
    });
});

//** Object with control buttons */
let controlButtons = {
    'AC': function () {
        calcDisplay.textContent = 0;
    },
    '+/-': function () {
        displayValue = calcDisplay.textContent;
        calcDisplay.textContent = Number(displayValue) * (-1);
    },
    '%': function () {
        displayValue = calcDisplay.textContent;
        calcDisplay.textContent = Number(displayValue)/100;
    },
    'del': function () {
        displayValue = calcDisplay.textContent;
        if (displayValue.length > 1) {
            calcDisplay.textContent = displayValue.substring(0, displayValue.length - 1);
        } else controlButtons.AC();
    },
}

//** Event listeners for control buttons  */
controls.forEach((control) => {
    control.addEventListener('click', () => {
        let controlAction = control.textContent;
        controlButtons[controlAction]();
        console.log(controlButtons[controlAction]);
    });
});

//** Function for basic operations */
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return 0 + (num1 + num2).toFixed(2);
        case '-':
            return 0 + (num1 - num2).toFixed(2);
        case '*':
            return 0 + (num1 * num2).toFixed(2);
        case '/':
            if (num2 === 0) {
                return 'undefined/infinity';
            } else return 0 + (num1 / num2).toFixed(2);
    }
};