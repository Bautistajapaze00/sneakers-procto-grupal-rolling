export class Producto {
  constructor(
    campoProducto,
    campoDescripcion,
    campoCantidad,
    campoURL,
    campoPrecio,
    campoCat
  ) {
    this.codigo = 1;
    this.producto = campoProducto;
    this.descripcion = campoDescripcion;
    this.cantidad = campoCantidad;
    this.url = campoURL;
    this.precio = campoPrecio;
    this.categoria = campoCat;
  }

  get mostrarCodigo() {
    return this.codigo;
  }
  get mostrarProducto() {
    return this.producto;
  }
  get mostrarDescripcion() {
    return this.descripcion;
  }
  get mostrarCantidad() {
    return this.cantidad;
  }
  get mostrarURL() {
    return this.url;
  }
  get mostrarPrecio() {
    return this.precio;
  }
  get mostrarCategoria() {
    return this.categoria;
  }

  set modificarCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
  set modificarProducto(nuevoProducto) {
    this.producto = nuevoProducto;
  }
  set modificarDescripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }
  set modificarCantidad(nuevaCantidad) {
    this.cantidad = nuevaCantidad;
  }
  set modificarURL(nuevaURL) {
    this.url = nuevaURL;
  }
  set modificarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }
  set modificarCategoria(nuevaCategoria) {
    this.categoria = nuevaCategoria;
  }

  numeroAleatorio(){
    return Math.floor(Math.random() * (99999 - 10000)) + 10000;
  }
}
