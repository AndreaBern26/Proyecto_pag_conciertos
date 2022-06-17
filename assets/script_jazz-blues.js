//Display musical genre selection

let concierto_jazzBlues = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Jazz" || array_conciertos[i].tipo_musica == "jazz" ||array_conciertos[i].tipo_musica == "jazz/blues" ||array_conciertos[i].tipo_musica == "Jazz/Blues"||array_conciertos[i].tipo_musica == "blues" ||array_conciertos[i].tipo_musica == "Blues") {
    concierto_jazzBlues += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_jazzBlues;
