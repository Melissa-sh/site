function find_edit() {
  const fam_node = document.getElementById('surname-overlay');
  fam_node.innerHTML = "Shangareeva";

  const name_node = document.getElementById('name-overlay');
  name_node.innerHTML = "Melissa";

  const middle_node = document.getElementById('middle-name');
  middle_node.innerHTML = "Azatovna";

  const gender_node = document.getElementById('gender');
  gender_node.innerHTML = "F";

  const birth_node = document.getElementById('place-birth');
  birth_node.innerHTML = "Saint Petersburg";

  const date_node = document.getElementById('year-overlay');
  date_node.innerHTML = "01.11.2006";

  const by_node = document.getElementById('kem-vidan');
  by_node.innerHTML = "Department of UFMS";

  const where_node = document.getElementById('place-vidan');
  where_node.innerHTML = "for Saint Petersburg";

  const when_node = document.getElementById('date-vidan');
  when_node.innerHTML = "03.11.2017";

  const code_node = document.getElementById('code');
  code_node.innerHTML = "948-265";
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
