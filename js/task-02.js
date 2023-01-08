const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIngredient = (ingredientName) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredientName;
  ingredient.classList.add("item");
  return ingredient;
};

const ingredientList = ingredients.map((ingr) => createIngredient(ingr));

const ingrEl = document.querySelector("ul#ingredients");
ingrEl.append(...ingredientList);
