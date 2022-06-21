function add(n1, n2) {
    return (n1 + n2)
}

function subtract(n1, n2) {
    return (n1 - n2)
}

function multiply(n1, n2) {
    return (n1 * n2)
}

function add(n1, n2) {
    return (n1 / n2)
}

operate (op, n1, n2) {
    switch (op) {
        case "+": 
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2)
    }
}