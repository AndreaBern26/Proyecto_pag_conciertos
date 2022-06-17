//Display musical genre selection

let concierto_metal = '';

let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Metal" || array_conciertos[i].tipo_musica == "metal" || array_conciertos[i].tipo_musica == "Hard Rock" || array_conciertos[i].tipo_musica == "hard rock" || array_conciertos[i].tipo_musica == "Metal/Hard Rock" || array_conciertos[i].tipo_musica == "metal/hard rock") {
    concierto_metal += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_metal;
