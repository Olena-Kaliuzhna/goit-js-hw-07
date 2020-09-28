const categoriesEl = document.querySelector('#categories');
const itemsEl = [...categoriesEl.children];

console.log(`В списке ${itemsEl.length} категории`);

itemsEl.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`),
    console.log(`Количество: ${element.lastElementChild.children.length}`);
});
