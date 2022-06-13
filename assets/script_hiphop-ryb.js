//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "hip hop" || conciertos[i].tipo_musica == "Hip-hop" || conciertos[i].tipo_musica == "hip-hop" || conciertos[i].tipo_musica == "Rb" ||conciertos[i].tipo_musica == "r b" || conciertos[i].tipo_musica == "Hip-hop/rb" || conciertos[i].tipo_musica == "hip-hop/r b") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
