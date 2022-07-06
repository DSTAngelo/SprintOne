const formulario = document.getElementById("formcontato__form");
const entradas = document.querySelectorAll("#formcontato__form input");
const textEntradas = document.querySelectorAll("#formcontato__form textarea");


const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
  mensaje: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
};

const validarCampos = {
  nombre_input: false,
  mail_input: false,
  asunto_input: false,
  mensaje_text: false,
};


const validacion = (e) => {
  switch (e.target.name) {
    case "nombre":
      validacionCajas(expresiones.nombre, e.target, "nombre_input", "* Letras y espacios, no ingrese simbolos");
      break;
    case "email":
      validacionCajas(expresiones.correo, e.target, "mail_input", "* ingrese un correo valido");
      break;
    case "asunto":
      validacionCajas(expresiones.asunto, e.target, "asunto_input", "* Letras y espacios, no ingrese simbolos");
      break;
    case "mensaje":
      ValidarCajaTexto(expresiones.mensaje, e.target, "mensaje_text", "Mensaje a enviar Letras y espacios, no ingrese simbolos");
      break;
  }
};


const validacionCajas = (expresiones, entrada, campo, mensaje) => { 
  if (expresiones.test(entrada.value)) {
        document.getElementById(`${campo}`).classList.remove("input-incorrecto");
        document.getElementById(`${campo}`).classList.add("input-correcto");
        document.getElementById(`${campo}`).style.borderColor = "green";
        document.getElementById("label_contenido").innerHTML = "";
    validarCampos[campo] = true;
    console.log(validarCampos[campo] + " " + campo);
      } else {
        document.getElementById(`${campo}`).classList.add("input-incorrecto");
        document.getElementById(`${campo}`).style.borderColor = "red";
        document.getElementById('label_contenido').innerHTML = mensaje;
        validarCampos[campo] = false;
        console.log(validarCampos[campo] + " " + campo);
      }
}

const ValidarCajaTexto = (expresiones, entrada, campo, mensaje) => { 
  if (expresiones.test(entrada.value)) {
    document.getElementById(`${campo}`).classList.remove("input-incorrecto");
    document.getElementById(`${campo}`).classList.add("input-correcto");
    document.getElementById(`${campo}`).style.borderColor = "green";
    document.getElementById("label_contenido").innerHTML = "";
    validarCampos[campo] = true;
    console.log(validarCampos[campo] + " " + campo);
  } else {
    document.getElementById(`${campo}`).classList.add("input-incorrecto");
    document.getElementById(`${campo}`).style.borderColor = "red";
    document.getElementById("label_contenido").innerHTML = mensaje;
    validarCampos[campo] = false;
    console.log(validarCampos[campo] + " " + campo);
  }
};

entradas.forEach((input) => { 
  input.addEventListener("keyup", validacion); 
  input.addEventListener("blur", validacion);
});

textEntradas.forEach((textarea) => {
  textarea.addEventListener("keyup", validacion);
  textarea.addEventListener("blur", validacion);
});


formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const btnEnviar = document.querySelector("#enviar");
  if (validarCampos.nombre_input && validarCampos.mail_input && validarCampos.asunto_input && validarCampos.mensaje_text) {
    console.log(validarCampos);
    console.log("Formulario Enviado");
    // btnEnviar.disabled = true;
    formulario.reset();
    
    document.getElementById("label_contenido").innerHTML = "Datos enviados correctamente";
    document.getElementById("label_contenido").style.color = "#40e42a";
    document.getElementById("label_contenido").style.fontSize = "18px";
    
    setTimeout(function () {
      window.location.reload();
    }, 3000);
    
  } else  {
    console.log(validarCampos);
    console.log("Formulario NO ENVIADO");
    document.getElementById("label_contenido").innerHTML = "formulario No Enviado";
    document.getElementById("label_contenido").style.color = "#e40c0c";
    document.getElementById("label_contenido").style.fontSize = "18px";
  }
});
















