const buttons = document.querySelectorAll(".row button");
const display = document.querySelector(".display");
const opr = document.querySelectorAll(".row .operator");
const equals = document.querySelector(".row .operator equality");

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
  return a * b;
}

function remainder(a, b) {
  return a % b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

function seprateExp(string) {}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    let exp = display.textContent;
  });
});
