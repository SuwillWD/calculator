const display = document.querySelector(".display");
const opr = document.querySelectorAll(".operator");
const equals = document.querySelector(".equality");
const numbers = document.querySelectorAll(".number");
const allClear = document.querySelector(".function.ac");
const clear = document.querySelector(".function.c");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

let firstNumber = "";
let secondNumber = "";
let operator = null;
let resetScreen = false;

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num2 === "0") {
        return null;
      }
      return divide(num1, num2);
    case "%":
      return remainder(num1, num2);
    default:
      return "ERROR";
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", () => displayNumber(number.textContent));
});

opr.forEach((op) => {
  op.addEventListener("click", () => setOperator(op.textContent));
});

equals.addEventListener("click", evaluate);

allClear.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = null;
});

clear.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

function displayNumber(number) {
  if (display.textContent === "0" || resetScreen) {
    blackDisplay();
  }
  display.textContent += number;
}

function blackDisplay() {
  display.textContent = "";
  resetScreen = false;
}

function setOperator(op) {
  if (operator !== null) {
    evaluate(firstNumber, secondNumber, operator);
  }
  firstNumber = Number(display.textContent);
  operator = op;
  resetScreen = true;
}

function evaluate() {
  if (operator === null || resetScreen) return;
  if (operator === "/" && display.textContent === "0") {
    alert("ERROR: Division by 0");
  }
  secondNumber = Number(display.textContent);
  display.textContent = operate(firstNumber, secondNumber, operator);
  operator = null;
}
