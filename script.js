const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.textContent;

        if (!isNaN(value)) {
            currentInput += value;
            screen.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.value = '';
        } else if (value === '=') {
            let result = calculate(previousInput, currentInput, operator);
            screen.value = result;
            currentInput = result;
        } else {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return second;
    }
}
