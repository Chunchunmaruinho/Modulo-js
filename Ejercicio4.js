let productos = [];

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
    0 - Subir producto
    1 - Mostrar productos
    2 - Borrar producto
    3 - Salir`);
    switch (menu) {
        case "0":
            cargarProductoF();
            break;
        case "1":
            mostrarProductoF();
            break;
        case "2":
            borrarProductoF();
            break;
        case "3":
            salirF();
        default:
            mainMenu();
    }
    
    /*if (menu == '0'){
        cargarProductoF();
    }
    if (menu == '1'){
        mostrarProductoF();
    }
    if (menu == '2'){
        salirF();
    }
    */
}

function cargarProductoF() {
    let producto = {
     tituloProducto : prompt ('Ingrese el nombre del producto'),
     descripcionProducto : prompt ('Ingrese una descripcion para el producto'),
     precioProducto : prompt ('Ingrese el precio del producto'),
    };
    subirProductoF(producto)
    
}


function subirProductoF(producto, array){
    productos.push(producto);

    localStorage.setItem('products',productos);
    
    let JSONconverter =JSON.stringify(productos);
    
    localStorage.setItem('products',JSONconverter);

    console.log(productos.length);
    
    mainMenu();
}



function borrarProductoF(){
   /* console.log (Object.keys(productos));
    let borrar = prompt ( JSON.stringify(productos),`
    Ingrese cual item desea eliminar`);
    console.log(borrar);    
    let deleteItem = productos.filter(item => {return item.tituloProducto !== borrar;
});
    console.log(deleteItem);
    subirProductoF();
    mainMenu();

    console.log(productos.forEach)*/
  
    let borrar = prompt (JSON.stringify(productos),`
    Ingrese cual item desea eliminar`);
    productos = productos.splice(borrar,1)
   // for (let index=0 ; index=borrar ; index++) {
       
   
        
    console.log(productos);
    subirProductoF();
    mainMenu();
    }
//}
function mostrarProductoF() {
    alert(JSON.stringify(productos)); 

    mainMenu();

}

function salirF() {
    
}


function main() {
    if (loginWithRetry() == true) {
       mainMenu();
    }
}

//Usar filter para eliminar el item de la array