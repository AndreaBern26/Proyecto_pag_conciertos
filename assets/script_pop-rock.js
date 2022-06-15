//Display musical genre selection
/*
for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "Pop" || conciertos[i].tipo_musica == "pop" || conciertos[i].tipo_musica == "Rock" || conciertos[i].tipo_musica == "rock" || conciertos[i].tipo_musica == "Pop/Rock" || conciertos[i].tipo_musica == "Pop/rock" || conciertos[i].tipo_musica == "pop/rock") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
*/

let concierto_popRock = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Pop" || array_conciertos[i].tipo_musica == "pop" || array_conciertos[i].tipo_musica == "Pop/Rock" || array_conciertos[i].tipo_musica == "pop/rock" || array_conciertos[i].tipo_musica == "Rock" || array_conciertos[i].tipo_musica == "rock") {
    concierto_popRock += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_popRock;
