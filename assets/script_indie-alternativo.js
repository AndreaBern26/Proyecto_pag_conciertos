//Display musical genre selection

let concierto = '';

for (var i = 0; i < conciertos.length; i++) {
  if (conciertos[i].tipo_musica == "Indie" || conciertos[i].tipo_musica == "indie" || conciertos[i].tipo_musica == "Alternativo" || conciertos[i].tipo_musica == "alternativo" ||conciertos[i].tipo_musica == "Indie/Alternativo" || conciertos[i].tipo_musica == "indie/alternativo") {

    concierto += '<div class="concierto">';
    concierto += '<div class="div-image">';
    concierto += '<a href="../evento.html">';
    concierto += '<img class="image" src="'+conciertos[i].img+'" alt="'+conciertos[i].titulo+'">';
    concierto += '</a>';
    concierto += '</div>';
    concierto += '<div class="div-titulo">';
    concierto += '<h3 class="titulo">'+ conciertos[i].titulo +'</h3>';
    concierto += '</div>';
    concierto += '<div class="div-descripcion">';
    concierto += '<p class="descripcion"><strong>descripcion:</strong> '+conciertos[i].descr+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-tipo-musica">';
    concierto += '<p class="tipo-musica"><strong>genero musical:</strong> '+conciertos[i].tipo_musica+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-precio">';
    concierto += '<p class="precio"><strong>precio:</strong> '+conciertos[i].precio+'€'+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-fecha">';
    concierto += '<p class="fecha"><strong>fecha:</strong> '+conciertos[i].fecha+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-lugar">';
    concierto += '<p class="lugar"><strong>lugar:</strong> '+conciertos[i].lugar+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-horario">';
    concierto += '<p class="horario"><strong>horario:</strong> '+conciertos[i].horario+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-edad-minima">';
    concierto += '<p class="edad-minima"><strong>edad_min:</strong> '+conciertos[i].edad_min+'</p>';
    concierto += '</div>';
    concierto += '<div class="div-plazas">';
    concierto += '<p class="plazas"><strong>plazas:</strong> '+conciertos[i].plazas+'</p>';
    concierto += '</div>';
    concierto += '</div>';
  }
}

document.querySelector('article').innerHTML = concierto;
