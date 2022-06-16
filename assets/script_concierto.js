

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let titulo = urlParams.get('titulo');



let selection;
let array_concierto = textToObject(conciertos);


function isType(group) {
  return group.titulo === titulo;
}

selection = array_concierto[array_concierto.findIndex(isType)];

document.querySelector('.concierto-selection').innerHTML = selection.display_concierto();
