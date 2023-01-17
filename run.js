const button = document.querySelector(".grid")
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
    test: function () {
        let a = parseInt(this.first)
        let b = parseInt(this.second)
        let o = this.operator
        console.log("see() works")
        //return { a, b, o }
        operate(o, a, b)
    },
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
        firstDisplay.innerText += operands.first
    }
    else if (input.id === "operator") {

        operands.operator = input.textContent

        display.innerText += input.textContent
    }

    else if (operands.first && operands.operator && input.id === "number") {
        operands.second += input.textContent
        display.innerText += input.textContent
    }
    else if (input.id === "equals") {
        console.log(operands)
        operands.test()
    }

}

function add(a, b) {

    operands.first = a += b //answer
    console.log("first test", operands.first)
    // firstDisplay.innerText += operands.first
    //return firstDisplay.innerText += operands.first
};

const subtract = function (a, b) {
    operands.first = a -= b
    return console.log("second test", operands.first)
};


const multiply = function (a, b) {
    return a *= b
};

const divide = function (a, b) {
    return a, b

};

function operate(operator, a, b) {
    operands.second = ""
    // firstDisplay.innerText += a;
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
    }
}