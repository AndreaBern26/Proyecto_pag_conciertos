//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "dance" || conciertos[i].tipo_musica == "Dance" || conciertos[i].tipo_musica == "electronica" || conciertos[i].tipo_musica == "Electronica" || conciertos[i].tipo_musica == "dance/electronica" || conciertos[i].tipo_musica == "Dance/Electronica") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
