document.onkeydown = teclado;

//ENLACES CON EL HTML

const pantallaGeneral = document.getElementById('pantalla-general');
const pantallaOperacion = document.getElementById('pantalla-operacion');
const pantallaResultado = document.getElementById('pantalla-resultado');
const botones = document.getElementById('botones');
const boton9 = document.getElementById('b9');
const boton8 = document.getElementById('b8');
const boton7 = document.getElementById('b7');
const boton6 = document.getElementById('b6');
const boton5 = document.getElementById('b5');
const boton4 = document.getElementById('b4');
const boton3 = document.getElementById('b3');
const boton2 = document.getElementById('b2')
const boton1 = document.getElementById('b1');
const boton0 = document.getElementById('b0');
const botonSumar = document.getElementById('b-sumar');
const botonRestar = document.getElementById('b-restar');
const botonMultiplicar = document.getElementById('b-multiplicar');
const botonDividir = document.getElementById('b-dividir');
const botonIgual = document.getElementById('b-resultado');
const botonBorrarTotal = document.getElementById('borrar-total');
const botonBorrarParcial = document.getElementById('borrar-parcial');
const botonPunto = document.getElementById('punto');
const botonRaiz = document.getElementById("raiz-cuadrada");
const botonPorcentaje = document.getElementById("porcentaje");

//DECLARANDO ESTADO DESHABILITADO DE LA CALCULADORA AL INICIO.
boton9.disabled = true;
boton8.disabled = true;
boton7.disabled = true;
boton6.disabled = true;
boton5.disabled = true;
boton4.disabled = true;
boton3.disabled = true;
boton2.disabled = true;
boton1.disabled = true;
boton0.disabled = true;
botonBorrarParcial.disabled = true;
botonSumar.disabled = true;
botonRestar.disabled = true;
botonMultiplicar.disabled = true;
botonDividir.disabled = true;
botonIgual.disabled = true;
botonPunto.disabled = true;
botonRaiz.disabled = true;
botonPorcentaje.disabled = true;
botonBorrarTotal.disabled = false;

//VARIABLES GLOBALES DE UTILIDAD DURANTE EL DESARROLLO
let variablePantalla= "";
let visible= "";
let resultado = 0;
let BorrarVariablePantalla = "";
let BorrarVisible = "";
let repeticionDecimal = 1;
let operadorVisible;
let evento;
let tecla;

function teclado (teclaPulsada) { 
    evento = teclaPulsada || window.event;
    k=evento.keyCode;

    if (k==103 || k==55){imprimirNumero(7);} 
    if (k==104 || k==56){imprimirNumero(8);} 
    if (k==105 || k==57){{imprimirNumero(9);}}
    if (k==100 || k==52 ){imprimirNumero(4);} 
    if (k==101 || k==53){imprimirNumero(5);} 
    if (k==102 || k==54){imprimirNumero(6);;} 
    if (k==97 || k==49){imprimirNumero(1);} 
    if (k==98 || k==50){imprimirNumero(2);} 
    if (k==99 || k==51){imprimirNumero(3);} 
    if (k==96 || k==48){imprimirNumero(0);} 
    if (k==110 || k==190){imprimirPunto();} 
    if (k==13){imprimirResultado()}
    if (k==107){imprimirOperacion(1)}
    if (k==109){imprimirOperacion(2)}
    if (k==106){imprimirOperacion(3)}
    if (k==111){imprimirOperacion(4)}
    if (k==8){borrarDigito()}
    if (k==46){borrarPantalla()}
    if (k==35){calcularPorcentaje()}  
    if (k==34){calcularRaiz()}
}

//ASIGNACION DE EVENTOS A ALGUNOS BOTONES
botonBorrarTotal.addEventListener('click', borrarPantalla);
botonBorrarParcial.addEventListener('click', borrarDigito);
botonIgual.addEventListener('click', imprimirResultado);
botonPunto.addEventListener('click', imprimirPunto);
botonRaiz.addEventListener('click', calcularRaiz);
botonPorcentaje.addEventListener('click', calcularPorcentaje);


//DECLARACION DE FUNCIONES PARA CADA BOTON

function imprimirNumero(numero){
   
    botonBorrarParcial.disabled = false;

    if(variablePantalla === "0" && numero != "0"){
        pantallaOperacion.innerHTML = "";
        variablePantalla = "";
        visible = "";
        
    }
    let crearNumero = document.createElement('number')
    let espacioCreado = pantallaOperacion.appendChild(crearNumero)
    espacioCreado.innerHTML = numero;
    variablePantalla = variablePantalla + numero;
    visible = visible + numero;
}

function imprimirOperacion(operacion){
    botonBorrarParcial.disabled = false;
    switch (operacion) {
        case 1:
            operadorVisible = "+";
            operadorOculto = "+"; 
           break;

        case 2:
            operadorVisible = "-";
            operadorOculto = "-"; 
          break;

        case 3:
            operadorVisible = "x";
            operadorOculto = "*"; 
          break;

          case 4:
            operadorVisible = "÷";
            operadorOculto = "/"; 
          break;
      }

    let crearOperador = document.createElement('str');
    let espacioCreado = pantallaOperacion.appendChild(crearOperador);
    espacioCreado.innerHTML = operadorVisible;
    variablePantalla = variablePantalla + operadorOculto;
    visible = visible + operadorVisible;
    repeticionDecimal = 1;
}

function calcularRaiz(){
    botonBorrarParcial.disabled = false;
    if(variablePantalla == 0){
        pantallaOperacion.innerHTML = "";
        variablePantalla = "";
        visible = "";
    }
    let crearRaiz = document.createElement('str');
    let espacioCreado = pantallaOperacion.appendChild(crearRaiz);
    espacioCreado.innerHTML = "√";
    variablePantalla = Math.sqrt(variablePantalla);
    visible = visible + "√";
    repeticionDecimal = 1;

}

function calcularPorcentaje(){
    botonBorrarParcial.disabled = false;
    let crearPorcentaje = document.createElement('str');
    let espacioCreado = pantallaOperacion.appendChild(crearPorcentaje);
    espacioCreado.innerHTML = "%";
    variablePantalla = variablePantalla + "/100";
    visible = visible + "%";
    repeticionDecimal = 1;


}

function imprimirPunto(){
    botonBorrarParcial.disabled = false;
    if (repeticionDecimal == 1 ){
        let crearPunto = document.createElement('str');
        let espacioCreado = pantallaOperacion.appendChild(crearPunto);
        espacioCreado.innerHTML = ".";
        variablePantalla = variablePantalla + ".";
        visible = visible + ".";
        repeticionDecimal++;
    }
}

function borrarDigito(){
    BorrarVariablePantalla = variablePantalla.slice(0, variablePantalla.length - 1);
    variablePantalla = BorrarVariablePantalla;
    BorrarVisible = visible.slice(0, visible.length - 1);
    visible = BorrarVisible;
    pantallaOperacion.innerHTML = visible;
    repeticionDecimal = 2;
    if(variablePantalla == "" || variablePantalla == 0){
        pantallaOperacion.innerHTML = 0;
    }
}

function borrarPantalla(){
    boton9.disabled = false;
    boton8.disabled = false;
    boton7.disabled = false;
    boton6.disabled = false;
    boton5.disabled = false;
    boton4.disabled = false;
    boton3.disabled = false;
    boton2.disabled = false;
    boton1.disabled = false;
    boton0.disabled = false;
    botonBorrarParcial.disabled = false;
    botonSumar.disabled = false;
    botonRestar.disabled = false;
    botonMultiplicar.disabled = false;
    botonDividir.disabled = false;
    botonIgual.disabled = false;
    botonPunto.disabled = false;
    botonRaiz.disabled = false;
    botonPorcentaje.disabled = false;
    botonBorrarTotal.disabled = false;

    pantallaOperacion.innerHTML = "0";
    pantallaResultado.innerHTML = "";
    variablePantalla = "0";
    visible = "0";
    resultado = "0";
    repeticionDecimal = 1;
}

function imprimirResultado(){
    botonBorrarParcial.disabled = true;
    let resultadoSinFiltrar = eval(variablePantalla);
    if(Number.isInteger(resultadoSinFiltrar)){
        resultado = resultadoSinFiltrar;
    }else{
        resultado = resultadoSinFiltrar.toFixed(2);}
    variablePantalla = resultado;
    pantallaResultado.innerHTML = resultado;
    repeticionDecimal = 1;
}