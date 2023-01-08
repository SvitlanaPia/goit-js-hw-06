function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const divBoxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let result = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    result.push(newDiv);
    size += 10;
  }
  divBoxesEl.prepend(...result);
}

const onCreateButtonClick = (event) => {
  let blockAmount = inputEl.value;
  if (blockAmount > 0) {
    createBoxes(blockAmount);
  }
};

const onDestroyButtonClick = (event) => {
  divBoxesEl.innerHTML = "";
  inputEl.value = 0;
};

createBtnEl.addEventListener("click", onCreateButtonClick);
destroyBtnEl.addEventListener("click", onDestroyButtonClick);
