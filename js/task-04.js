const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const currentValue = document.querySelector("#value");

let counterValue = 0;

const decrementFunc = (event) => {
  counterValue -= 1;
  currentValue.innerHTML = counterValue;
};

const incrementFunc = (event) => {
  counterValue += 1;
  currentValue.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", decrementFunc);
incrementBtn.addEventListener("click", incrementFunc);
