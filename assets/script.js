
let conciertos_json = JSON.parse(conciertos); //convierte cadenas JSON en objetos JavaScript
let lista = "";

for (let i = 0; i < conciertos_json.length;i++){
    lista += "<p>" + "Título: " + conciertos_json[i].titulo + ". Descripción: " + conciertos_json[i].descr + ". Tipo de música: "
        + conciertos_json[i].tipo_musica + ". Precio: " + conciertos_json[i].precio + "Fecha: " + conciertos_json[i].fecha 
        + ". Lugar: " + conciertos_json[i].lugar + ". Horario: " + conciertos_json[i].horario + ". Edad mínima: " + conciertos_json[i].edad_min + "Plazas: " + 
          conciertos_json[i].plazas + "<p>";
}

document.getElementsByClassName('conciertos')[0].innerHTML = lista;

/*
function concierto_to_html(titulo, descr, tipo_musica, precio, fecha, lugar, horario, edad_min, plazas, img) {
  concierto = '<div class="concierto">';
  concierto += '<span>titulo: '+titulo+'</span>';
  concierto += '<span>descr: '+descr+'</span>';
  concierto += '<span>tipo_musica: '+tipo_musica+'</span>';
  concierto += '<span>precio: '+precio+'</span>';
  concierto += '<span>fecha: '+fecha+'</span>';
  concierto += '<span>lugar: '+lugar+'</span>';
  concierto += '<span>horario: '+horario+'</span>';
  concierto += '<span>edad_min: '+edad_min+'</span>';
  concierto += '<span>plazas: '+plazas+'</span>';
  concierto += '<span>img: '+img+'</span>';
  concierto += '</div>';
  return concierto;
}
for (i= 0; i < conciertos.length; i++) {
  titulo = conciertos[i].titulo;
  descr = conciertos[i].descr;
  tipo_musica = conciertos[i].tipo_musica;
  precio = conciertos[i].precio;
  fecha = conciertos[i].fecha;
  lugar = conciertos[i].lugar;
  horario = conciertos[i].horario;
  edad_min = conciertos[i].edad_min;
  plazas = conciertos[i].plazas;
  img = conciertos[i].img;
  concierto_html = concierto_to_html(titulo, descr, tipo_musica, precio, fecha, lugar, horario, edad_min, plazas, img);

}



let conc = document.getElementById('concierto');
conc.innerHTML = concierto_to_html();
*/





/*function buildTable(data) {
  let table = document.getElementById('tb-concierto');
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                <td>`+$(data[i].titulo)+`</td>
                  <td>`+$(data[i].descr)+`</td>
                </tr>`;
    table.innerHTML += row;

  }
}

  buildTable(conciertos); */
