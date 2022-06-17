
/*
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let titulo = urlParams.get('titulo');
*/

let image_selection = "https://www.aragonmusical.com/wp-content/uploads/2021/01/violadores-del-verso.jpg";


let selection;
let array_concierto = textToObject(conciertos);


function isType(group) {
  return group.img === image_selection;
}

selection = array_concierto[array_concierto.findIndex(isType)];
console.log(selection);
console.log(image_selection);

document.querySelector('.concierto-selection').innerHTML = selection.display_concierto();
