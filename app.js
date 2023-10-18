let preview = document.querySelector("#preview");
let output = document.querySelector("#output");

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

Array.from(document.querySelectorAll(".number")).forEach((button) =>
  button.addEventListener("click", (e) => {
    if (output.innerHTML == 0) {
      output.innerHTML = e.target.innerHTML;
    } else {
      output.innerHTML += e.target.innerHTML;
    }
  })
);

Array.from(document.querySelectorAll(".operator")).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
