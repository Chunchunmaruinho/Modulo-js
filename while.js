let intentos = 0;
let numeroUsuario = Number(prompt('Que numero tiras?'));
const numeroSecreto = 7;

do {
  if (numeroUsuario === numeroSecreto) {
    console.log(`Epa!, le pegaste pa`);
  } else {
    numeroUsuario = Number(prompt('Ingresá otro numero'));
    intentos ++;
    if (numeroUsuario === numeroSecreto) {
        console.log('ya ta bien');
    }
    if (intentos == 2) {
        alert("muchos intentos ya fue");
        break;
    }
  }
} while (numeroUsuario !== numeroSecreto);