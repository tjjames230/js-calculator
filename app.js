let preview = document.querySelector("#preview");
let output = document.querySelector("#output");
const equals = document.querySelector("#equals");

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
  preview.innerHTML = 0;
  output.innerHTML = 0;
}

// Update output to equal string of numbers entered
Array.from(document.querySelectorAll(".number")).forEach((button) =>
  button.addEventListener("click", (e) => {
    if (output.innerHTML == 0) {
      output.innerHTML = e.target.innerHTML;
    } else {
      output.innerHTML += e.target.innerHTML;
    }
  })
);

// Update preview to equal output and reset output after selecting an operator
Array.from(document.querySelectorAll(".operator")).forEach((button) => {
  button.addEventListener("click", () => {
    preview.innerHTML = output.innerHTML;
    output.innerHTML = 0;
  });
});

equals.addEventListener("click", () => {});
