/*
const zero = Number(document.querySelector("#zero").innerHTML);
*/

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
