const numbers = document.querySelectorAll(".num")
const screenBottom = document.querySelector(".screen-bottom")
const screenTop = document.querySelector(".screen-top")
const operators = document.querySelectorAll(".op")

let num1 = NaN;
let num2 = 0;
let op;
let flag = 0;

numbers.forEach(number => {
    number.addEventListener("click", populate)
});

operators.forEach(operator => {
    operator.addEventListener("click", perform)}    
);


function add(n1, n2) {
    return (n1 + n2)
};

function subtract(n1, n2) {
    return (n1 - n2)
};

function multiply(n1, n2) {
    return (n1 * n2)
};

function divide(n1, n2) {
    return (n1 / n2)
};

function operate(op, n1, n2) {
    switch (op) {
        case "+": 
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "×":
            return multiply(n1, n2);
        case "÷":
            return divide(n1, n2)
    }
}

function populate(e){
    if (screenBottom.textContent.trim() === "0") screenBottom.textContent = "";
    if (flag === 1 || flag === 2) {
        screenBottom.textContent = "";
        flag = 0;
    };
    screenBottom.textContent += this.textContent
}

function perform(e) {
    if ((!Number. isNaN(num1)) && !(flag === 1 || flag === 2)) {
        num2 = Number(screenBottom.textContent.trim());
        const result = operate(op, num1, num2);

        if (this.textContent === "=") {
            screenTop.textContent = `${num1} ${op} ${num2} =`;
        }
        else {
            screenTop.textContent = `${result} ${this.textContent}`;
        }

        screenBottom.textContent = result;
        num1 = result;
        num2 = 0;
        op = this.textContent;
        flag = 2;
    }
    else {
        num1 = Number(screenBottom.textContent.trim());
        op = this.textContent;
        screenTop.textContent = `${num1} ${op}`;
        flag = 1;
    }
}