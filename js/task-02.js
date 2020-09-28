const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const categoriesEl = document.querySelector('#ingredients');

const listEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

categoriesEl.append(...listEl);
console.log(categoriesEl);
