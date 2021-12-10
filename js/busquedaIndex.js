let input_index= document.getElementById('search_input_index');

let listaProductos = JSON.parse(localStorage.getItem('listaProductosKey'))||[];
function search_product_index(){
   
    let productoBuscado = listaProductos.filter((producto)=> {return producto.descripcion.trim().toLowerCase().includes(input_index.value.trim().toLowerCase()) || producto.categoria.trim().toLowerCase().includes(input_index.value.trim().toLowerCase())}); 
    console.log(productoBuscado)
   localStorage.setItem('searchedProductKey',JSON.stringify(productoBuscado));
    
}        