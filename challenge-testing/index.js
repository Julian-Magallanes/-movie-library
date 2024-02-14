class CarritoCompra {

constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    for(let producto of this.productos) {
      total += producto.precio;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    if(porcentaje < 0 || porcentaje > 100) {
        return "El descuento debe ser entre 0 y 100%";
    }
     //* 30
    //* totalConDescuento = total * (porcentaje / 100)
    else if (porcentaje === 0) {
        return total;
    }
    else if (porcentaje === 100) {
        return 0;
    }
    else {
    const totalConDescuento = total * (porcentaje / 100);
    return totalConDescuento;
    }
  }
}


module.exports = CarritoCompra;