const button = document.querySelector(".grid")
const buttonSelect = button.querySelectorAll("button")
const display = document.querySelector(".display")
const firstOperand = document.getElementById("first-operand")
const secondOperand = document.getElementById("second-operand")
const operator = document.getElementById("operator")
const number = document.getElementById("number")

const operands = {
    first: 0,
    second: 0,
}
console.log(operands)

buttonSelect.forEach(item => item.addEventListener("click", (e) => { updateOperands(item) }))

function updateOperands(input) {
    if (input.id === "number") {
        console.log("work")
        operands.first = input.textContent
        console.log(operands)
        display.innerText += operands.first
    }
}



const add = function (a, b) {
    return a + b
};

const subtract = function (a, b) {
    return a - b
};


const multiply = function (a, b) {
    return a * b
};

const divide = function (a, b) {
    return a, b

};

function operate(operator, lastInput, currentInput) {
    switch (operator) {
        case '+':
            return add(lastInput, currentInput);
            break;
        case '-':
            return subtract(lastInput, currentInput);
            break;
        case "/":
            return divide(lastInput, currentInput)
            break;
        case '*':
            return multiply(lastInput, currentInput)
        case "C":
            return cancel();
        case "AC":
            return reset();
    }


}