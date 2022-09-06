let displayValue; 

let calcDisplay = document.querySelector('.display');

let buttons = document.querySelectorAll('.digit'); // digits and ',' buttons

//** Add event listeners for digits and ',' buttons. Display according value on calculator display */
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = calcDisplay.textContent;
        if (displayValue == 0 && button.textContent !== ',') calcDisplay.textContent = '';
        if (displayValue.includes(',') && button.textContent == ',') return;
        calcDisplay.textContent += button.textContent;
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