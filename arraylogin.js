let productos = [];

function crearProducto(titulo,descripcion,precio,imagen){
 return { titulo,
  descripcion,
  precio,
  imagen}
};


function subirProductos(producto,array) {
    array.push(productos);
    return array;
}


  let aaa = {
    nombre: 'AAA',
    admin:false
  };

  function login(usuario){
    if(usuario.admin){
       subirProductos(crearProducto('hola','chau',111,'img'),productos);
    } else{
      return 'chau';
    }
  }

  login(aaa)