
let concierto = '';

//Display all concerts
for (var i = 0; i < conciertos.length; i++) {

  concierto += '<div class="concierto" id="'+conciertos[i].id+'" onclick>';
  concierto += '<div class="div-image">';
  concierto += '<a href="evento.html" alt="'+conciertos[i].titulo+'">';
  concierto += '<img class="image" src="'+conciertos[i].img+'" alt="'+conciertos[i].titulo+'">';
  concierto += '</a>';
  concierto += '</div>';
  concierto += '<div class="div-titulo">';
  concierto += '<h3 class="titulo">'+ conciertos[i].titulo +'</h3>';
  concierto += '</div>';
  concierto += '<div class="div-descripcion">';
  concierto += '<p class="descripcion"><strong>Descripcion:</strong> '+conciertos[i].descr+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-tipo-musica">';
  concierto += '<p class="tipo-musica"><strong>Genero Musical:</strong> '+conciertos[i].tipo_musica+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-precio">';
  concierto += '<p class="precio"><strong>Precio:</strong> '+conciertos[i].precio+'€'+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-fecha">';
  concierto += '<p class="fecha"><strong>Fecha:</strong> '+conciertos[i].fecha+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-lugar">';
  concierto += '<p class="lugar"><strong>Lugar:</strong> '+conciertos[i].lugar+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-horario">';
  concierto += '<p class="horario"><strong>Horario:</strong> '+conciertos[i].horario+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-edad-minima">';
  concierto += '<p class="edad-minima"><strong>Edad mínima:</strong> '+conciertos[i].edad_min+'</p>';
  concierto += '</div>';
  concierto += '<div class="div-plazas">';
  concierto += '<p class="plazas"><strong>Plazas:</strong> '+conciertos[i].plazas+'</p>';
  concierto += '</div>';
  concierto += '</div>';

}
document.querySelector('article').innerHTML = concierto;
