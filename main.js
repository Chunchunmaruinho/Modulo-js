function crearProducto(name,price,sale,description) {
  const finalPrice = price-(price / 100) *10
  const cuotaPrice = price/12
  
  return `
  
  Producto:${1}
  Titutlo: ${name}
  Precio: $${price}
  Descuento: %${sale}
  Precio final con descuento $${finalPrice}
  Hasta 12 cuotas sin descuento: $${cuotaPrice}cuota por mes
  ${description}`
}
crearProducto('Gems',100,10,'Este es el producto 1');

crearProducto('Gold',5,10,'Este es el producto 2');

crearProducto('Elixir',20,10,'Este es el producto 3');