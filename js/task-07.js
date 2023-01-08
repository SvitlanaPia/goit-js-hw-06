const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

inputEl.addEventListener("input", () => {
  const rangevalue = inputEl.value;
  textEl.style.fontSize = rangevalue + "px";
});
