function checkX() {
  const aInput = document.getElementById('a');
  const out    = document.getElementById('x_out');


  const a = parseFloat((aInput.value || '').replace(',', '.'));

  if (isNaN(a)) {
    out.value = 'X = ошибка ввода A';
    return;
    }

  let x;
  if (a < 62) {
    x = a * a + 4 + 5;
  } else {
    x = 1 / (a * a) + 4 * a + 5;
  }


  out.value = 'X = ' + (Math.round(x * 1000) / 1000);
}

function openBing() {
  window.open('https://www.bing.com/search', '_blank');
}
