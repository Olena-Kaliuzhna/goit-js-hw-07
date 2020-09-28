const decrementBtnEl = document.querySelector("[data-action ='decrement']");
const incrementBtnEl = document.querySelector("[data-action ='increment']");
const valueEl = document.querySelector('#value');

// let counterValue = Number(valueEl.textContent);
let counterValue = 0;

decrementBtnEl.addEventListener('click', onDecrementClick);
incrementBtnEl.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
