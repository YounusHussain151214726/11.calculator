const display = document.getElementById("display");
const equal = document.getElementById("equal");
const reset = document.getElementById("clear-btn");
const result = document.getElementById("equal");

//opetations
const add = document.getElementById("add");
const subtract = document.getElementById("subt");
const multiply = document.getElementById("mult");
const divide = document.getElementById("div");
let decimal = document.getElementById("decimal");
let points;

//buttons
const bt = document.querySelectorAll("button");

//deafault input value

//second value
let firstValue = 0;
let secValue = 0;
let secValueAwait = false;
//getValues

function getNumbers(number) {
  if (secValueAwait) {
    secValue = display.textContent = Number(number);
    console.log("as", secValue);

    secValueAwait = false;
  } else {
    const calculatorDisplay = display.textContent;
    display.textContent =
      calculatorDisplay === "0" ? number : calculatorDisplay + number;
  }

  console.log(secValueAwait);
}

function operatorValue(operator) {
  const cur = Number(display.textContent);
  if (!firstValue) {
    firstValue = cur;
  }
  secValueAwait = true;
  
  result.addEventListener("click", () => {
    if (operator === "+") {
      display.textContent = firstValue + secValue;
    }

    if (operator === "-") {
      display.textContent = firstValue - secValue;
    }

    if (operator === "/") {
      display.textContent = firstValue / secValue;
    }

    if (operator === "*") {
      display.textContent = firstValue * secValue;
    }
  });
}

decimal.addEventListener("click", () => {
  if (secValueAwait) return;
  if (!display.textContent.includes(".")) {
    display.textContent = `${display.textContent}.`;
  }
});

//results

function getValues() {
  bt.forEach((res) => {
    if (res.classList.length === 0) {
      res.addEventListener("click", () => {
        getNumbers(res.value);
      });
    }
    if (res.classList.contains("clear")) {
      res.addEventListener("click", () => {
        display.textContent = "0";
        firstValue = "";
        secValueAwait = false;
      });
    }
    if (res.classList.contains("operator")) {
      res.addEventListener("click", () => {
        operatorValue(res.value);
      });
    }
  });
}

getValues();
