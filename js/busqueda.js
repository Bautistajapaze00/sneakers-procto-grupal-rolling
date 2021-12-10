let selected_input = document.getElementById('search_input');
let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))||[];
let grilla = document.getElementById('display-product');
let grillaSecundaria = document.getElementById('non-display-product');



// funcion para filtrar los productos del arreglo
function search_product(){
grilla.innerHTML = ''
let selected_product = listaProductos.filter((producto)=> {return producto.descripcion.trim().toLowerCase().includes(selected_input.value.trim().toLowerCase()) || producto.categoria.trim().toLowerCase().includes(selected_input.value.trim().toLowerCase())});
  
   console.log(selected_product)
   if(selected_product.length>0 && selected_input.value.trim().length>0){
      selected_product.forEach((producto)=>{crearCard(producto)})
      }

   else{
      not_defined()
   }

}

// funcion para dibujar cards de productos filtrados
function crearCard(producto){
 grillaSecundaria.classList.add("d-none")
   grilla.classList.remove("d-none")

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
</div>`
 }

// funcion para mostrar en caso de no encontrar los productos filtrados
function not_defined(){
    grillaSecundaria.classList.remove("d-none")
    grillaSecundaria.innerHTML = `<h2> OPPS, parece que ningun producto coincide con tu busqueda</h2>
    <p>¡No te rindas! Revisa tu ortografía o proba algo menos específico.</p> `
     grillaSecundaria.className='fuenteOswald mt-5'
    selected_input.value='';
    grilla.classList.add('d-none');
    productos.reverse();


    
}
