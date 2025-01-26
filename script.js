
// AC functionality

let ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  document.getElementById("display").innerText = "0";
  document.getElementById("result").innerText = "";
});

// Delete functionality
let del = document.getElementById("delete");
del.addEventListener("click", () => {
  let display = document.getElementById("display").innerText;
  if (display.length == 1) {
    document.getElementById("display").innerText = "0";
  } else {
    document.getElementById("display").innerText = display.slice(
      0,
      display.length - 1
    );
  }
});

//calculate functionality

let numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let display = document.getElementById("display").innerText;
    if (display == "0") {
      document.getElementById("display").innerText = number.innerText;
    } else {
      document.getElementById("display").innerText += number.innerText;
    }
  });
});

// operation functionality
let operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    let display = document.getElementById("display").innerText;
    let result = document.getElementById("result").innerText;
    if (result) {
      document.getElementById("display").innerText = result;
      document.getElementById("result").innerText = "";
    }
    if (
      display[display.length - 1] == "+" ||
      display[display.length - 1] == "-" ||
      display[display.length - 1] == "*" ||
      display[display.length - 1] == "/" ||
      display[display.length - 1] == "%"
    ) {
      document.getElementById("display").innerText =
        display.slice(0, display.length - 1) + operation.innerText;
    } else {
      document.getElementById("display").innerText += operation.innerText;
    }
  });
});

// equal functionality
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  let display = document.getElementById("display").innerText;
  let result = document.getElementById("result").innerText;
  let lastChar = display[display.length - 1];

  if (
    lastChar == "+" ||
    lastChar == "-" ||
    lastChar == "*" ||
    lastChar == "/" ||
    lastChar == "%"
  ) {
    document.getElementById("display").innerText = display.slice(
      0,
      display.length - 1
    );
  }
  document.getElementById("result").innerText = eval(display);
});
