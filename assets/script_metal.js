//Display musical genre selection

let concierto_metal = '';

let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Metal" || array_conciertos[i].tipo_musica == "metal" || array_conciertos[i].tipo_musica == "Hard Rock" || array_conciertos[i].tipo_musica == "hard rock" || array_conciertos[i].tipo_musica == "Metal/Hard Rock" || array_conciertos[i].tipo_musica == "metal/hard rock") {
    concierto_metal += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_metal;











/*
for (var i = 0; i < conciertos.length; i++) {
  textToObject();
  if (c.tipo_musica == "Metal" || c.tipo_musica == "metal" || c.tipo_musica == "Hard Rock" || c.tipo_musica == "hard rock" || c.tipo_musica == "Metal/Hard Rock" || c.tipo_musica == "metal/hard rock") {
    concierto_metal += c.display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_metal;
*/
