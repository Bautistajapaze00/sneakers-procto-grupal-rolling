let grillaRemeras = document.getElementById("grillaRemeras");
let grillaPantalones = document.getElementById("grillaPantalones");
let grillaZapatillas = document.getElementById("grillaZapatillas");
let grillaAccesorios = document.getElementById("grillaAccesorios");
let grillaUltimos = document.getElementById("grillaUltimos");

let productos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let productosRemeras = [];
let productosPantalones = [];
let productosZapatillas = [];
let productosAccesorios = [];
let i = 0;

productos.forEach(function (producto) {
  if (producto.categoria == "Remeras") {
    productosRemeras.push(producto);
  }
  if (producto.categoria == "Pantalones") {
    productosPantalones.push(producto);
  }
  if (producto.categoria == "Zapatillas") {
    productosZapatillas.push(producto);
  }
  if (producto.categoria == "Accesorios") {
    productosAccesorios.push(producto);
  }
});

//invertir lista productos para mostrar ultimos ingresos
productos.reverse();
for(let i=0;i<4;i++){
    if(productos[i] == undefined) break;
    crearCardUltimos(productos[i], grillaUltimos);
}

productosRemeras.forEach(function (producto) {
  crearCard(producto, grillaRemeras);
});
productosPantalones.forEach(function (producto) {
  crearCard(producto, grillaPantalones);
});
productosZapatillas.forEach(function (producto) {
  crearCard(producto, grillaZapatillas);
});
productosAccesorios.forEach(function (producto) {
  crearCard(producto, grillaAccesorios);
});

//crear card de ultimos ingresos

function crearCard(producto, grilla) {
  grilla.innerHTML += `<div class="col-sm-12 col-md-4 my-2">
                            <div class="card">
                                <div class="div-imgCardIndex">
                                    <img src="${producto.url}" class="card-img-top imgCardIndex" alt="${producto.producto}" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fuenteOswald fw-bold">${producto.producto}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <p class="text-end mb-0 fw-bold fuenteOswald">$ ${producto.precio}</p>
                                </div>
                            </div>
                        </div>`;
}

function crearCardUltimos(producto, grilla) {
  grilla.innerHTML += `<div class="card my-2">
                        <div class="row" id="grillaUltimos">
                            <div class="col-4">
                                <img
                                src="${producto.url}"
                                class="card-img-top imgCardsLaterales"
                                alt="${producto.producto}"
                                />
                            </div>
                            <div class="col-8 px-0">
                                <div class="card-body px-0">
                                    <h5 class="card-title fuenteOswald fw-bold">${producto.producto}</h5>
                                    <p class="card-text fuenteOswald">$ ${producto.precio}</p>
                                </div>
                            </div> 
                        </div>
                    </div>`;
}
