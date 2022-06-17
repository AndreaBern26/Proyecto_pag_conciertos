//Display musical genre selection

let concierto_danceElectronica = '';


let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  if (array_conciertos[i].tipo_musica == "dance" || array_conciertos[i].tipo_musica == "Dance" || array_conciertos[i].tipo_musica == "electronica" || array_conciertos[i].tipo_musica == "Electronica" || array_conciertos[i].tipo_musica == "dance/electronica" || array_conciertos[i].tipo_musica == "Dance/Electronica") {
    concierto_danceElectronica += array_conciertos[i].display_concierto();
  }
}
document.querySelector('.conciertos').innerHTML = concierto_danceElectronica;
