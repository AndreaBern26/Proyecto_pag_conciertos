
let html = '';

let objecto_conciertos = textToObject(conciertos);
for (var i = 0; i < objecto_conciertos.length; i++) {
  html += objecto_conciertos[i].display_concierto();
}
document.querySelector('.conciertos').innerHTML = html;


document.querySelector('.buscar_texto').onclick = function findText(txt) {

}
