function guardar_en_localStorage(nombre, edad, dia_de_la_semana) {
  const datos = {
    nombre_usuario: nombre || "",
    edad_usuario: edad || "",
    dia: dia_de_la_semana || ""
  };
  localStorage.setItem('datos_usuario', JSON.stringify(datos));
  mostrarMensaje();
}

function obtener_de_localStorage() {
  const datos_guardados = localStorage.getItem('datos_usuario');
  if(datos_guardados) {
    return JSON.parse(datos_guardados);
  }
  else {
    return null;
  }
}

function mostrarMensaje() {
  const datos = obtener_de_localStorage();
  const mensaje = document.getElementById('mensaje');

  if (datos) {
    mensaje.textContent = `Hola ${datos.nombre_usuario}, tienes ${datos.edad_usuario} años y tu día favorito es: ${datos.dia}.`;
  } else {
    mensaje.textContent = "";
  }
}
window.onload = mostrarMensaje;
