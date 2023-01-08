function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector("button.change-color");
const colorNameEl = document.querySelector("span.color");
const bodyEl = document.querySelector("body");

btnEl.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  colorNameEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
});
