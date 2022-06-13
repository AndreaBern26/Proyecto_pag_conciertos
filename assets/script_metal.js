//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "Metal" || conciertos[i].tipo_musica == "metal" || conciertos[i].tipo_musica == "Hard Rock" || conciertos[i].tipo_musica == "hard rock" || conciertos[i].tipo_musica == "Metal/Hard Rock" || conciertos[i].tipo_musica == "metal/hard rock") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
