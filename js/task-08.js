const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const inputEl = controlsEl.querySelector('input');
const renderBtnEl = controlsEl.querySelector("[data-action ='render']");
const destroyBtnEl = controlsEl.querySelector("[data-action ='destroy']");

renderBtnEl.addEventListener('click', onCreateBoxes);
destroyBtnEl.addEventListener('click', onRemoveBoxes);

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function onCreateBoxes(amount) {
  amount = inputEl.value;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const size = 30 + i * 10;

    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = randomColor();

    fragment.appendChild(divEl);
  }

  boxesEl.appendChild(fragment);
}

function onRemoveBoxes() {
  boxesEl.innerHTML = '';
}
