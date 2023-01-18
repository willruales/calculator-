const button = document.querySelector(".grid")
const action = document.getElementById("action")
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
        equal()
    },
    answer: function () {
        let action = this.action
        if (action === "=") {
            this.test()
        }
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
        display.innerText += input.textContent
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
        operands.action += input.textContent
        operands.answer()

    }

}

function add(a, b) {
    operands.first = a += b
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

const reset = function () {
    Object.assign(operands, { first: "", second: "", operator: "", action: "" })
    display.innerText = "";
    firstDisplay.innerText = "";
}

const cancel = function () {
    console.log("C WORKS")
}

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
        case '-':
            return subtract(a, b);
        case "/":
            return divide(a, b)
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