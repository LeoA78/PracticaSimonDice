
/* 
                Idea de funcionamiento detallada.

* El Documento HTML contiene 5 botones, 4 de colores y 1 para iniciar el juego.
* Cada boton de color es representado con un numero de 1 a 4 incluidos.                

- Iniciar con Click en boton Start!
- Se genera un numero al azar de 1 a 4
- Se almacena en una matriz
- Se lee la matriz encendiendo el boton correspondiente al numero que se generó al azar
- Queda a la espera de que el usuario clickee algun boton
- Usuario hace clic en el boton que le parezca correcto
- Se almacena el numero del boton en otra matriz
- Se compara con la matriz principal generada por el programa
- Se corrobora si acertó



Esta es la idea del programa, se aceptan otras ideas para su funcionamiento.

*/








// Accedemos a los Botones

var btnInicio = document.getElementById('btn-inicio');
var btnAzul = document.getElementById('btn-azul');
var btnRojo = document.getElementById('btn-rojo');
var btnAmarillo = document.getElementById('btn-amarillo');
var btnVerde = document.getElementById('btn-verde');

//...........

//Los datos de la matriz no deberian estar cargados, son sólo para probar la funcion de pintar botones.
var matriz = [1, 2, 4, 3, 2, 1, 1, 2, 3, 2]; //Matriz donde almacenamos las jugadas al azar
var index = 0;

//Funcion para elegir numero al azar
function azar() {
    var num = Math.floor((Math.random() * 4) + 1);
    return num;
}


function jugar() {

    mostrarArray();

    /* Funciones siguientes */

}



function mostrarArray(m) { //Esta funcion hay que mejorarla, todavia no funciona al 100%
    let i = 0;
    let enJuego = true;
    setInterval(function () {
        console.log('estoy dentro del intervalo');
        if (enJuego) {
            console.log('I vale :' + i)
            switch (matriz[i]) {
                case 1:

                    btnAzul.classList.toggle('azulOscuro');
                    break;

                case 2:
                    btnVerde.classList.toggle('verdeOscuro');
                    break;

                case 3:
                    btnRojo.classList.toggle('rojoOscuro');
                    break;

                case 4:
                    btnAmarillo.classList.toggle('amarilloOscuro');
                    break;

            }

            if (matriz[i] == matriz.length - 1) {
                enJuego = false;
            }
            console.log('Llegué al I')
            i++;
        } else {
            clearInterval;
        }

    }, 1000);

}

btnInicio.addEventListener('click', function () { //Evento click para el boton de inicio.

    jugar();

});







