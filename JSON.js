let productos = [];

function crearProducto(titulo,descripcion,precio){
 return { titulo : titulo,
  descripcion : descripcion,
  precio : precio,
}
};


productos.push(
    crearProducto('auto','asda',1000),
    crearProducto('moto','adfv',200),

);


localStorage.setItem('products',productos);

const JSONconverter =JSON.stringify(productos);

localStorage.setItem('productos',JSONconverter);
