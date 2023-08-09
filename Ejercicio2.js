
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


const cartelLogin = {
  user1: 'admin',
  password1: '1234'
};


function login(){
  const user = prompt('INGRESAR USUARIO');
  const password = prompt('INGRESAR CONTRASE;A');
  if (user == cartelLogin.user1 && password == cartelLogin.password1) {
    console.log("Ingresando");
    subirProductos(crearProducto('hola','chau',111,'img'),productos);
    return true
    
  }  else {
    console.log("Denegado");
    return false;
  }

}
login()
