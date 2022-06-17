//Display all concerts

let html = '';

let array_conciertos = textToObject(conciertos);
for (var i = 0; i < array_conciertos.length; i++) {
  html += array_conciertos[i].display_concierto();
}
document.querySelector('.conciertos').innerHTML = html;
