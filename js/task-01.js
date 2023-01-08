const listEl = document.querySelector("#categories");
console.log(`Number of categories: ${listEl.children.length}`);

const itemEl = document.querySelectorAll(".item");

for (const item of itemEl) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
