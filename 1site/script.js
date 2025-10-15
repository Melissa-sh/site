function find_edit() {
  document.getElementById('surname-overlay').innerHTML = 'Shangareeva';
  document.getElementById('name-overlay').innerHTML = 'Melissa';
  document.getElementById('middle-name').innerHTML = 'Azatovna';
  document.getElementById('gender').innerHTML = 'F';
  document.getElementById('place-birth').innerHTML = 'Saint Petersburg';
  document.getElementById('year-overlay').innerHTML = '01.11.2006';
  document.getElementById('kem-vidan').innerHTML = 'Department of UFMS';
  document.getElementById('place-vidan').innerHTML = 'for Saint Petersburg';
  document.getElementById('date-vidan').innerHTML = '03.11.2017';
  document.getElementById('code').innerHTML = '948-265';
}

document.getElementById('for_click').addEventListener('click', find_edit);
