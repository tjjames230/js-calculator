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
let tempOperator;
Array.from(document.querySelectorAll(".operator")).forEach((button) => {
  button.addEventListener("click", (e) => {
    preview.innerHTML = output.innerHTML;
    output.innerHTML = 0;

    return (tempOperator = e.target.innerHTML);
  });
});

equals.addEventListener("click", () => {
  if (tempOperator !== undefined) {
    let final = getEquation(output.innerHTML, preview.innerHTML, tempOperator);
    output.innerHTML = final;
    preview.innerHTML = 0;
  }
});

function getEquation(out, pre, op) {
  if (Number(out) < 0 && Number(pre) === 0) {
    return out;
  } else {
    return operators[op](Number(pre), Number(out));
  }
}

document.querySelector("#del").addEventListener("click", backspace);

function backspace() {
  if (output.innerHTML !== "0") {
    if (output.innerHTML.length > 1) {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
      output.innerHTML = "0";
    }
  }
}
