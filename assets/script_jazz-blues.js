//Display musical genre selection

for (var i = 0; i < conciertos.length; i++) {

  if (conciertos[i].tipo_musica == "Jazz" || conciertos[i].tipo_musica == "jazz" ||conciertos[i].tipo_musica == "jazz/blues" ||conciertos[i].tipo_musica == "Jazz/Blues"||conciertos[i].tipo_musica == "blues" ||conciertos[i].tipo_musica == "Blues") {
    concierto += display_concierto(conciertos[i]);
  }
}

document.querySelector('.conciertos').innerHTML = concierto;
