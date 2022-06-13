//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "Pop" || conciertos[i].tipo_musica == "pop" || conciertos[i].tipo_musica == "Rock" || conciertos[i].tipo_musica == "rock" || conciertos[i].tipo_musica == "Pop/Rock" || conciertos[i].tipo_musica == "Pop/rock" || conciertos[i].tipo_musica == "pop/rock") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
