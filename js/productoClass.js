export class Producto {
  constructor(
    campoCodigo,
    campoProducto,
    campoDescripcion,
    campoCantidad,
    campoURL,
    campoPrecio
  ) {
    this.codigo = campoCodigo;
    this.producto = campoProducto;
    this.descripcion = campoDescripcion;
    this.cantidad = campoCantidad;
    this.url = campoURL;
    this.precio = campoPrecio;
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
}
