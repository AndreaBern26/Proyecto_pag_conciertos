//Display all concerts
for (var i = 0; i < conciertos.length; i++) {
  concierto += display_concierto(conciertos[i]);
}
document.querySelector('.conciertos').innerHTML = concierto;
