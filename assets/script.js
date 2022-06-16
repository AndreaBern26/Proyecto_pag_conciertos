
class concierto {
  constructor(id, titulo, descr, tipo_musica, precio, fecha, lugar, horario, edad_min, plazas, img) {
    this.id = id;
    this.titulo = titulo;
    this.descr = descr;
    this.tipo_musica = tipo_musica;
    this.precio = precio;
    this.fecha = fecha;
    this.lugar = lugar;
    this.horario = horario;
    this.edad_min = edad_min;
    this.plazas = plazas;
    this.img = img;
  }


  display_concierto() {
    let conciert = '';
    conciert += '<div class="concierto" id="'+this.id+'">';
    conciert += '<div class="div-image">';
    conciert += '<a class="concierto-link" href="concierto.html?titulo='+this.titulo+'" alt="'+this.titulo+'">';
    conciert += '<img class="image" src="'+this.img+'" alt="'+this.titulo+'">';
    conciert += '</a>';
    conciert += '</div>';
    conciert += '<div class="div-titulo">';
    conciert += '<h3 class="titulo">'+ this.titulo +'</h3>';
    conciert += '</div>';
    conciert += '<div class="div-descripcion">';
    conciert += '<p class="descripcion"><strong>Descripcion:</strong> '+this.descr+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-tipo-musica">';
    conciert += '<p class="tipo-musica"><strong>Genero musical:</strong> '+this.tipo_musica+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-precio">';
    conciert += '<p class="precio"><strong>Precio:</strong> '+this.precio+'€'+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-fecha">';
    conciert += '<p class="fecha"><strong>Fecha:</strong> '+this.fecha+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-lugar">';
    conciert += '<p class="lugar"><strong>Lugar:</strong> '+this.lugar+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-horario">';
    conciert += '<p class="horario"><strong>Horario:</strong> '+this.horario+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-edad-minima">';
    conciert += '<p class="edad-minima"><strong>Edad minima:</strong> '+this.edad_min+'</p>';
    conciert += '</div>';
    conciert += '<div class="div-plazas">';
    conciert += '<p class="plazas"><strong>Plazas:</strong> '+this.plazas+'</p>';
    conciert += '</div>';
    conciert += '</div>';
    return conciert;
  }
}

function textToObject(c) {
  let array = [];
  for (var i = 0; i < c.length; i++) {
    let objecto =  new concierto (c[i].id, c[i].titulo, c[i].descr, c[i].tipo_musica, c[i].precio, c[i].fecha, c[i].lugar, c[i].horario, c[i].edad_min, c[i].plazas, c[i].img);
    array.push(objecto);
  }
  return array;
}
