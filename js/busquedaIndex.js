// Traemos las variables
let input_index = document.getElementById("search_input_index");
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

// Funcion para el formulario en dispotivos grandes

function search_product_index() {
  let campo = document.getElementById("queryBusqueda");
  let display = getComputedStyle(campo).display;
  let input;

  if (display == "none") {
    input = document.getElementById("search_input_index");
  } else {
    input = document.getElementById("search_input_index2");
  }

  search_product_index_2(input.value);
}


// Funcion para el formulario de busqueda en dispositivos chicos
function search_product_index_2(input) {
  let productoBuscado = listaProductos.filter((producto) => {
    return (
      producto.producto
        .trim()
        .toLowerCase()
        .includes(input.trim().toLowerCase()) ||
      producto.descripcion
        .trim()
        .toLowerCase()
        .includes(input.trim().toLowerCase()) ||
      producto.categoria
        .trim()
        .toLowerCase()
        .includes(input.trim().toLowerCase())
    );
  });

  localStorage.setItem("searchedProductKey", JSON.stringify(productoBuscado));
}
