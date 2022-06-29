function recarga_pagina() {
  
  setTimeout(function () {
    windows.location.reload();
    event.preventDefault();
  }, 5000);
   
}



function limpiar_cajas() {
  var nombre = document.querySelector("#nombre_input");
  var mail = document.querySelector("#mail_input");
  var asunto = document.querySelector("#asunto_input");
  var mensaje = document.querySelector("#mensaje_text");

  nombre.value = "";
  mail.value = "";
  asunto.value = "";
  mensaje.value = "";
}

function validacion_cajas() {
  var nombre = document.querySelector("#nombre_input");
  var mail = document.querySelector("#mail_input");
  var asunto = document.querySelector("#asunto_input");
  var mensaje = document.querySelector("#mensaje_text");

    nombre.value = nombre.value.trim();
    mail.value = mail.value.trim();
    asunto.value = asunto.value.trim();
    mensaje.value = mensaje.value.trim();
  if (
    nombre.value == "" ||
    mail.value == "" ||
    asunto.value == "" ||
    mensaje.value == ""
  ) {
    console.log("no se puede enviar caja vacia");
    nombre.focus();
    document.getElementById('label_contenido').innerHTML = 'Campos Obligatorios';
    event.preventDefault();
    return false;
  } else {
    alert("Datos Enviados");
    console.log("datos enviados"); 
    document.getElementById("label_contenido").innerHTML =
      "Datos enviados correctamente";
    limpiar_cajas();
    recarga_pagina();
    return true;
  }
}
