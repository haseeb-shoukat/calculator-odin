const numbers = document.querySelectorAll(".num")
const screenBottom = document.querySelector(".screen-bottom")
const screenTop = document.querySelector(".screen-top")
const operators = document.querySelectorAll(".op")
const clear = document.querySelector(".clear")

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
    if (screenBottom.textContent.length >= 15) return;
    screenBottom.textContent += this.textContent
}

function perform(e) {
    if ((!Number. isNaN(num1)) && !(flag === 1 || flag === 2)) {
        num2 = Number(screenBottom.textContent.trim());
        let result = operate(op, num1, num2);
        result = parseFloat(result.toFixed(5));

        if (this.textContent === "=") {
            if (op === "=") return;
            screenTop.textContent = `${num1} ${op} ${num2} =`;
            num1 = NaN;
        }
        else {
            screenTop.textContent = `${result} ${this.textContent}`;
            num1 = result;
        }

        screenBottom.textContent = result;
        num2 = 0;
        op = this.textContent;
        flag = 2;
    }
    else if (this.textContent === "=") {
        return;
    }
    else 
    {
        num1 = Number(screenBottom.textContent.trim());
        op = this.textContent;
        screenTop.textContent = `${num1} ${op}`;
        flag = 1;
    }
}