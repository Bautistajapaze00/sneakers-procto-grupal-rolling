export function campoRequerido(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarNumeros(input) {
  // crear una expresion regular
  let patron = /^[0-9]+$/;
  // probar el funcionamiento del patron o expresion regular
  if (patron.test(input.value)) {
    // cumple la expresion la regular
    input.className = "form-control is-valid";
    return true;
  } else {
    // si no cumple la expresion regular
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarNumeroDecimal(input) {
  // crear una expresion regular
  let patron = /^[+]?((\d+(\.\d*)?)|(\.\d+))$/;
  // probar el funcionamiento del patron o expresion regular
  if (patron.test(input.value)) {
    // cumple la expresion la regular
    input.className = "form-control is-valid";
    return true;
  } else {
    // si no cumple la expresion regular
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarURL(input) {
  // crear la expresion regular
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarGeneral(
  campoProducto,
  campoDescripcion,
  campoCantidad,
  campoURL,
  campoPrecio,
  campoCat
) {
  // volver a validar todos los campos

  let alerta = document.querySelector("#msjAlerta");
  if (
    campoRequerido(campoProducto) &
    campoRequerido(campoDescripcion) &
    campoRequerido(campoCat) &
    validarNumeros(campoCantidad) &
    validarNumeroDecimal(campoPrecio) &
    validarURL(campoURL)
  ) {
    alerta.className = "alert alert-danger my-5 d-none";

    return true;
  } else {
    alerta.className = "alert alert-danger my-5";
    return false;
  }
}
