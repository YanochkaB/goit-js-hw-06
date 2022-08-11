const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach((ingredient) => {
  const itemli = document.createElement('li');
  // console.log(itemlI)
  itemli.classList.add('item');
  itemli.textContent = ingredient

  document.querySelector('ul#ingredients').appendChild(itemli);
});

