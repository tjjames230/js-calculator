const zero = Number(document.querySelector("#zero").innerHTML);
const one = Number(document.querySelector("#one").innerHTML);
const two = Number(document.querySelector("#two").innerHTML);
const three = Number(document.querySelector("#three").innerHTML);
const four = Number(document.querySelector("#four").innerHTML);
const five = Number(document.querySelector("#five").innerHTML);
const six = Number(document.querySelector("#six").innerHTML);
const seven = Number(document.querySelector("#seven").innerHTML);
const eight = Number(document.querySelector("#eight").innerHTML);
const nine = Number(document.querySelector("#nine").innerHTML);

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const operators = {
  "+": function (a, b) {
    return a + b;
  },
  "-": function (a, b) {
    return a - b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  },
};

document.querySelector("#clear").addEventListener("click", clear);

function clear() {
  document.querySelector("#preview").innerHTML = 0;
  document.querySelector("#output").innerHTML = 0;
}
