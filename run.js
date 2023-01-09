const button = document.querySelector(".grid")
const buttonSelect = button.querySelectorAll("button")
const display = document.querySelector(".display")
const firstOperand = document.getElementById("first-operand")
const secondOperand = document.getElementById("second-operand")
const operator = document.getElementById("operator")
const number = document.getElementById("number")
// function showDisplay(e) {
//     console.log(buttonSelect)

// }

buttonSelect.forEach((press) => press.addEventListener('click', action))

function action(e) {
    const li = e.currentTarget;
    const input = li.innerText;
    console.log(li.id)
    console.log(input)

    if (Number.isInteger(+input)) {

        console.log("works")
    }

    else {
        return console.log("operator!")
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