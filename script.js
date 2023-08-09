const display = document.querySelector(".display");
const opr = document.querySelectorAll(".operator");
const equals = document.querySelector(".equality");
const numbers = document.querySelectorAll(".number");
const allClear = document.querySelector(".function.ac");
const clear = document.querySelector(".function.c");
const decimal = document.querySelector(".function.dot");

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
let shownResult = false;

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

clear.addEventListener("click", (event) => {
  display.textContent = display.textContent.slice(0, -1);
});

decimal.addEventListener("click", addDecimal);

function displayNumber(number) {
  if (display.textContent === "0" || resetScreen || shownResult) {
    blankDisplay();
  }
  display.textContent += number;
}

function blankDisplay() {
  display.textContent = "";
  resetScreen = false;
  shownResult = false;
}

function setOperator(op) {
  if (operator !== null) {
    evaluate(firstNumber, secondNumber, operator);
  }
  firstNumber = Number(display.textContent);
  operator = op;
  if (operator == "x") operator = "*";
  if (operator == "÷") operator = "/";
  resetScreen = true;
}

function evaluate() {
  if (operator === null || resetScreen) return;
  if (operator === "/" && display.textContent === "0") {
    alert("ERROR: Division by 0");
  }
  secondNumber = Number(display.textContent);
  display.textContent =
    Math.round(operate(firstNumber, secondNumber, operator) * 100) / 100;
  operator = null;
  shownResult = true;
}

function addDecimal() {
  if (resetScreen) blankDisplay();
  if (display.textContent === "") {
    display.textContent = "0";
  }
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}
