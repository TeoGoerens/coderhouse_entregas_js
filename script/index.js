/* -------------------- Definicion de variables globales --------------------*/
let cantidadDeRondas = Number(
  prompt("Ingrese la cantidad de rondas que desea jugar")
);
let totalGananciaApuestas = 0;
let totalAciertosApuestas = 0;
let totalDesaciertosApuestas = 0;
const PAGORULETA = 35;

/* -------------------- Definicion de funcion para establecer la cantidad de rondas a jugar --------------------*/
function definirRondas() {
  if (cantidadDeRondas < 0 || isNaN(cantidadDeRondas)) {
    alert(`Por favor ingrese una cantidad de rondas valida`);
  } else if (cantidadDeRondas == 0) {
    alert(`Excelente decision. La ludopatia es una enfemerdad`);
  } else {
    alert(`Se jugaran ${cantidadDeRondas} rondas`);
  }
}

/* -------------------- Definicion de funcion para obtencion del numero de ruleta electronica --------------------*/
function numeroAleatorioRuleta() {
  return Math.floor(Math.random() * 37);
}

/* -------------------- Definicion de funcion para validar la informacion ingresada por el usuario en cada ronda --------------------*/
function validarInformacionUsuario(ronda) {
  let numeroApuesta = 0;
  let montoApuesta = 0;
  let validacionUsuario = "N";
  while (validacionUsuario != "Y") {
    numeroApuesta = Number(
      prompt("Ingrese el numero por el que desea apostar")
    );
    while (
      isNaN(numeroApuesta) ||
      !Number.isInteger(numeroApuesta) ||
      numeroApuesta < 0 ||
      numeroApuesta > 36
    ) {
      alert(`Ingrese un numero valido entre 0 y 36`);
      numeroApuesta = Number(
        prompt("Ingrese el numero por el que desea apostar")
      );
    }
    montoApuesta = Number(prompt("Ingrese el monto que desea apostar"));
    while (isNaN(montoApuesta) || montoApuesta < 0) {
      alert(`Ingrese un monto valido para realizar la apuesta`);
      montoApuesta = Number(prompt("Ingrese el monto que desea apostar"));
    }
    validacionUsuario = prompt(
      `Esta es la ronda ${ronda}. Usted ha apostado $${montoApuesta} por el numero ${numeroApuesta}. ¿Es correcto? Y/N`
    );
  }
  alert(
    `Esta es la ronda ${ronda} y usted apostara $${montoApuesta} por el numero ${numeroApuesta}`
  );
  return [montoApuesta, numeroApuesta];
}
/* -------------------- Definicion de funcion para cotejar el numero obtenido en la ruleta con la apuesta realizada por el usuario --------------------*/
function evaluarApuesta(ronda, numeroApuesta, montoApuesta) {
  let numeroRuleta = numeroAleatorioRuleta();
  let gananaciaRonda = 0;
  if (numeroRuleta == numeroApuesta) {
    totalAciertosApuestas += 1;
    gananaciaRonda = PAGORULETA * montoApuesta;
    totalGananciaApuestas += gananaciaRonda;
    alert(
      `El numero arrojado por la ruleta electronica en la ronda ${ronda} es ${numeroRuleta}. Usted ha ganado $${gananaciaRonda} esta ronda y acumula ${totalGananciaApuestas} gracias a ${totalAciertosApuestas} aciertos`
    );
  } else {
    totalDesaciertosApuestas += 1;
    alert(
      `El numero arrojado por la ruleta electronica en la ronda ${ronda} es ${numeroRuleta}. Usted no ha ganado y acumula ${totalDesaciertosApuestas} desaciertos`
    );
  }
}

/* -------------------- Definicion de funcion para apostar --------------------*/
function apostarRuleta(cantidadDeRondas) {
  let ronda = 1;
  while (ronda <= cantidadDeRondas) {
    let resultadosValidacion = validarInformacionUsuario(ronda);
    let numeroApuesta = resultadosValidacion[0];
    let montoApuesta = resultadosValidacion[1];
    evaluarApuesta(ronda, numeroApuesta, montoApuesta);
    ronda++;
  }
}

/* -------------------- Definicion de funcion para desplegar resultados de la apuesta --------------------*/
function resultadoFinal(
  totalDesaciertosApuestas,
  totalAciertosApuestas,
  totalGananciaApuestas
) {
  alert(
    `El resultado final de su participacion arrojo una cantidad de ${totalDesaciertosApuestas} desaciertos y ${totalAciertosApuestas} aciertos, generando ganancias por un total de $${totalGananciaApuestas}. Muchas gracias por jugar con nosotros`
  );
}

/* -------------------- Llamado de funciones para generar aplicacion --------------------*/
definirRondas();
apostarRuleta(cantidadDeRondas);
if (cantidadDeRondas > 0) {
  resultadoFinal(
    totalDesaciertosApuestas,
    totalAciertosApuestas,
    totalGananciaApuestas
  );
}
