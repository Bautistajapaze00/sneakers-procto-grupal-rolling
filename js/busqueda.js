
let selected_input = document.getElementById('search_input');
let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))||[];
console.log(listaProductos);
let grilla = document.getElementById('display-produc');
let grillaSecundaria = document.getElementById('non-display-product')

function search_product(){
 

  grilla.innerHTML = ''

   let selected_product = listaProductos.filter((producto)=> {return producto.descripcion.trim().toLowerCase().includes(selected_input.value.trim().toLowerCase()) || producto.producto.trim().includes(selected_input.value.trim())});
   console.log(selected_product);
   
   
   if(selected_product.length>0){
      selected_product.forEach((producto)=>{crearCard(producto)})
      
   }

   else{
      not_defined()
   }

}


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


function not_defined(){
    grillaSecundaria.classList.remove("d-none")
    grillaSecundaria.innerHTML = `<h2> OPPS, parece que ningun producto coincide con tu busqueda</h2>

    `
    grillaSecundaria.className='fuenteOswald'
    selected_input.value='';
   
    grilla.classList.add('d-none')
}