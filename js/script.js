let displayValue;

let calcDisplay = document.querySelector('.display');

let buttons = document.querySelectorAll('.digit');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = calcDisplay.textContent;
        if (displayValue == 0) {
            calcDisplay.textContent = '';
        }
        calcDisplay.textContent += button.textContent;
    });
});

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'undefined/infinity';
            } else return num1 / num2;
    }
};