
let concierto = '';

function display_concierto(concierto) {
  let conciert = '';

  conciert += '<div class="concierto" id="'+concierto.id+'">';
  conciert += '<div class="div-image">';
  conciert += '<a href="evento.html" alt="'+concierto.titulo+'">';
  conciert += '<img class="image" src="'+concierto.img+'" alt="'+concierto.titulo+'">';
  conciert += '</a>';
  conciert += '</div>';
  conciert += '<div class="div-titulo">';
  conciert += '<h3 class="titulo">'+ concierto.titulo +'</h3>';
  conciert += '</div>';
  conciert += '<div class="div-descripcion">';
  conciert += '<p class="descripcion"><strong>Descripcion:</strong> '+concierto.descr+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-tipo-musica">';
  conciert += '<p class="tipo-musica"><strong>Genero musical:</strong> '+concierto.tipo_musica+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-precio">';
  conciert += '<p class="precio"><strong>Precio:</strong> '+concierto.precio+'€'+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-fecha">';
  conciert += '<p class="fecha"><strong>Fecha:</strong> '+concierto.fecha+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-lugar">';
  conciert += '<p class="lugar"><strong>Lugar:</strong> '+concierto.lugar+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-horario">';
  conciert += '<p class="horario"><strong>Horario:</strong> '+concierto.horario+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-edad-minima">';
  conciert += '<p class="edad-minima"><strong>Edad minima:</strong> '+concierto.edad_min+'</p>';
  conciert += '</div>';
  conciert += '<div class="div-plazas">';
  conciert += '<p class="plazas"><strong>Plazas:</strong> '+concierto.plazas+'</p>';
  conciert += '</div>';
  conciert += '</div>';
  return conciert;
}
