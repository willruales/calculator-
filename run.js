const button = document.querySelector(".grid")
const buttonSelect = button.querySelectorAll("button")
const display = document.querySelector(".display")
const firstOperand = document.getElementById("first-operator")
const secondOperand = document.getElementById("second-operand")
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
        return { a, b, o }

    },

    see: function () {
        //this.test()
        let test = this.test()
        let a = test.a;
        let b = test.b
        let o = test.o
        operate(o, a, b)
    }
}
console.log(operands)

buttonSelect.forEach(item => item.addEventListener("click", (e) => { updateOperands(item) }))

function updateOperands(input) {
    //let number = parseInt(input.innerText)
    //console.log(typeof thing)


    if (!operands.operator && input.id === "number") {
        operands.first += input.textContent
        display.innerText += input.textContent
        //firstOperand.innerText += input.textContent
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
        operands.see()
    }

}



function add(a, b) {

    operands.first = a += b //answer
    console.log("first test", operands.first)
    return firstOperand.innerText += operands.first
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
    // firstOperand.innerText += a;
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
