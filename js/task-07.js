const inputRangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onChangeFontSize() {
  spanEl.setAttribute('style', `font-size: ${inputRangeEl.value}px`);
}

inputRangeEl.addEventListener('input', onChangeFontSize);
