
let html = '';
/*
for (let i = 0; i < conciertos.length; i++) {
  let c = new concierto (conciertos[i].id, conciertos[i].titulo, conciertos[i].descr, conciertos[i].tipo_musica, conciertos[i].precio, conciertos[i].fecha, conciertos[i].lugar, conciertos[i].horario, conciertos[i].edad_min, conciertos[i].plazas, conciertos[i].img);
  html += c.display_concierto();

}
document.querySelector('.conciertos').innerHTML = html;*/
let objecto_conciertos = textToObject(conciertos);
for (var i = 0; i < objecto_conciertos.length; i++) {
  html += objecto_conciertos[i].display_concierto();
}
document.querySelector('.conciertos').innerHTML = html;





/*


object.onclick = function selection() {
  let sel = '';
}




//Display all concerts
for (var i = 0; i < conciertos.length; i++) {
  concierto += display_concierto(conciertos[i]);
}
document.querySelector('.conciertos').innerHTML = concierto;
*/
