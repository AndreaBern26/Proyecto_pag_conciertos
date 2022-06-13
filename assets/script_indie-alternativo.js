//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "Indie" || conciertos[i].tipo_musica == "indie" || conciertos[i].tipo_musica == "Alternativo" || conciertos[i].tipo_musica == "alternativo" ||conciertos[i].tipo_musica == "Indie/Alternativo" || conciertos[i].tipo_musica == "indie/alternativo") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
