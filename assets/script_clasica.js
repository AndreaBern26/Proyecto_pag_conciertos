//Display musical genre selection

let concierto_clasica = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Clasica" || array_conciertos[i].tipo_musica == "clasica") {
    concierto_clasica += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_clasica;
