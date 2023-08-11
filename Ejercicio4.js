const cartelLogin = {
    user1: 'admin',
    password1: '1234'
  };
function login(){  
    const user = prompt('INGRESAR USUARIO');
    const password = prompt('INGRESAR CONTRASE;A');
           if (user == cartelLogin.user1 && password == cartelLogin.password1) {
            console.log("Ingresando");
            return true;
            }   else {
                console.log("Denegado");
                return false;
                }
    }


main();


function loginWithRetry(){
    for (let i = 0; i<3; i++) {
        if (login() == true) {
            return true;
        }   
            
    }
}

function mainMenu() {
    let menu = prompt(`
    0 - Cargar producto
    1 - Mostrar productos
    2 - Salir`);
    /*
    switch (menu) {
        case "0":
            cargarProductoF();
            break;
        case "1":
            mostrarProductoF();
            break;
        case "2":
            salirF();
            break;
    }
    */
    if (menu == '0'){
        cargarProductoF();
    }
    if (menu == '1'){
        mostrarProductoF();
    }
    if (menu == '2'){
        salirF();
    }
    
}

function cargarProductoF() {
    return {
     tituloProducto : prompt ('Ingrese el nombre del producto'),
     descripcionProducto : prompt ('Ingrese una descripcion para el producto'),
     precioProducto : prompt ('Ingrese el precio del producto'),
    }
}

function mostrarProductoF() {

}

function salirF() {

}


function main() {
    if (loginWithRetry() == true) {
       mainMenu();
    }
}

// let productos = [];
 

// productos.push(cargarProductoF());

// localStorage.setItem('products',productos);

// const JSONconverter =JSON.stringify(productos);

// localStorage.setItem('products',JSONconverter);

// ME FALTA ARREGLAR EL ORDEN DE LO COMENTADO Y  AGREGAR 
//CONTENIDO A LA FUNCTION mostrarProductoF y salirF.


