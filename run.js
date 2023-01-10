const button = document.querySelector(".grid")
const buttonSelect = button.querySelectorAll("button")
const display = document.querySelector(".display")
const firstOperand = document.getElementById("first-operand")
const secondOperand = document.getElementById("second-operand")
const operator = document.getElementById("operator")
const number = document.getElementById("number")

const operands = {
    first: "",
    operator: "",
    second: "",
}
console.log(operands)

buttonSelect.forEach(item => item.addEventListener("click", (e) => { updateOperands(item) }))

function updateOperands(input) {
    if (!operands.operator && input.id === "number") {
        operands.first += input.textContent

        display.innerText += operands.first
    }
    else if (input.id === "operator") {

        operands.operator = input.textContent

        display.innerText += operands.operator
    }

    else if (operands.first && operands.operator) {
        operands.second += input.textContent
        display.innerText += operands.second
    }

    console.log(operands)
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