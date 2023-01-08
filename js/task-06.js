const inputEl = document.querySelector("#validation-input");
const lengthOfEl = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === lengthOfEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
