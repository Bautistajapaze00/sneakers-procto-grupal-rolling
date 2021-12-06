let grillaRemeras = document.getElementById("grillaRemeras");
let grillaPantalones = document.getElementById("grillaPantalones");
let grillaZapatillas = document.getElementById("grillaZapatillas");
let grillaAccesorios = document.getElementById("grillaAccesorios");

let productos = JSON.parse(localStorage.getItem('productos')) || [];
let productosRemeras = [];
let productosPantalones = [];
let productosZapatillas = [];
let productosAccesorios = [];

foreach(productos, function(producto){
    if(producto.tipo == "Remera"){
        productosRemeras.push(producto);
    }
    if(producto.tipo == "Pantalon"){
        productosPantalones.push(producto);
    }
    if(producto.tipo == "Zapatilla"){
        productosZapatillas.push(producto);
    }
    if(producto.tipo == "Accesorio"){
        productosAccesorios.push(producto);
    }
});

foreach(productosRemeras, function(producto){crearCard(producto, grillaRemeras);});
foreach(productosPantalones, function(producto){crearCard(producto, grillaPantalones);});
foreach(productosZapatillas, function(producto){crearCard(producto, grillaZapatillas);});
foreach(productosAccesorios, function(producto){crearCard(producto, grillaAccesorios);});

function crearCard(producto, grilla){
    grilla.innerHTML += `<div class="col-sm-12 col-md-4">
                            <div class="card">
                                <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}" />
                                <div class="card-body">
                                    <h5 class="card-title fuenteOswald fw-bold">${producto.nombre}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <p class="text-end mb-0 fw-bold fuenteOswald">$ ${producto.precio}</p>
                                </div>
                            </div>
                        </div>`;
}