//Display musical genre selection
/*
for (var i = 0; i < conciertos.length; i++) {

  if (array_conciertos[i].tipo_musica == "hip hop" || array_conciertos[i].tipo_musica == "Hip-hop" || array_conciertos[i].tipo_musica == "hip-hop" || array_conciertos[i].tipo_musica == "Rb" ||array_conciertos[i].tipo_musica == "r b" || array_conciertos[i].tipo_musica == "Hip-hop/rb" || array_conciertos[i].tipo_musica == "hip-hop/r b") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
*/


let concierto_hiphopRb = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "hip hop" || array_conciertos[i].tipo_musica == "Hip-hop" || array_conciertos[i].tipo_musica == "hip-hop" || array_conciertos[i].tipo_musica == "Rb" ||array_conciertos[i].tipo_musica == "r b" || array_conciertos[i].tipo_musica == "Hip-hop/rb" || array_conciertos[i].tipo_musica == "hip-hop/r b") {
    concierto_hiphopRb += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_hiphopRb;
