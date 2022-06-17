//Display musical genre selection

let concierto_indieAlternativo = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "Indie" || array_conciertos[i].tipo_musica == "indie" || array_conciertos[i].tipo_musica == "Alternativo" || array_conciertos[i].tipo_musica == "alternativo" ||array_conciertos[i].tipo_musica == "Indie/Alternativo" || array_conciertos[i].tipo_musica == "indie/alternativo") {
    concierto_indieAlternativo += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_indieAlternativo;
