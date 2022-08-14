const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((ingr) => {
  const itemli = document.createElement("li");

  itemli.textContent = ingr;
  itemli.classList.add("item");
  // console.log(itemli)
  return itemli;
});

allIngredients.append(...elements);
