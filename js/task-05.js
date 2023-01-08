const textInputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

textInputEl.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
});
