const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  const { value } = event.currentTarget;
  if (value.length > 0) {
    spanEl.textContent = value;
  } else {
    spanEl.textContent = 'незнакомец';
  }
}
