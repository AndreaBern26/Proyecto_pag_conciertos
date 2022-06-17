//Display musical genre selection

let concierto_popRock = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Pop" || array_conciertos[i].tipo_musica == "pop" || array_conciertos[i].tipo_musica == "Pop/Rock" || array_conciertos[i].tipo_musica == "pop/rock" || array_conciertos[i].tipo_musica == "Rock" || array_conciertos[i].tipo_musica == "rock") {
    concierto_popRock += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_popRock;
