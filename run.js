const button = document.querySelector(".grid")
const action = document.getElementById(".action")
const buttonSelect = button.querySelectorAll("button")
const display = document.getElementById("first-operator")
const firstDisplay = document.getElementById("second-operator")
const operator = document.getElementById("operator")
const number = document.getElementById("number")
const equals = document.getElementById("equals")

const operands = {
    first: "",
    operator: "",
    second: "",
    action: "",
    test: function () {
        let a = parseInt(this.first)
        let b = parseInt(this.second)
        let o = this.operator
        operate(o, a, b)
    },
    answer: function () {
        let action = this.action
        console.log(action)
        operate(action)
    }
}
console.log(operands)

buttonSelect.forEach(item => item.addEventListener("click", (e) => { updateOperands(item) }))

function updateOperands(input) {
    if (!operands.operator && input.id === "number") {
        operands.first += input.textContent
        display.innerText += input.textContent
    }
    else if (operands.second && input.id === "operator") {
        console.log(operands)
        operands.test()
        equal()
    }
    else if (input.id === "operator") {

        operands.operator = input.textContent

        display.innerText += input.textContent
    }

    else if (operands.first && operands.operator && input.id === "number") {
        operands.second += input.textContent
        display.innerText += input.textContent
    }

    else if (input.id === "action") {
        console.log(operands)
        operands.action += input.textContent
        operands.test()
        operands.answer()

    }

}

function add(a, b) {
    operands.first = a += b //answer
};

const subtract = function (a, b) {
    operands.first = a -= b
};

const multiply = function (a, b) {
    operands.first = a *= b
};

const divide = function (a, b) {
    operands.first = a /= b

};

const equal = function () {
    operands.action = ""
    operands.second = ""
    display.innerText = operands.first
    firstDisplay.innerText = operands.first
}

function operate(operator, a, b) {
    operands.second = ""
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case "/":
            return divide(a, b)
            break;
        case '*':
            return multiply(a, b)
        case "C":
            return cancel();
        case "AC":
            return reset();
        case "=":
            return equal();
    }
}