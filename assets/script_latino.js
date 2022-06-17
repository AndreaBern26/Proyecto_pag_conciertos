//Display musical genre selection

let concierto_latino = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Latino" || array_conciertos[i].tipo_musica == "latino") {
    concierto_latino += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_latino;
