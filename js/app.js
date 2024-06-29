let opciones = document.querySelectorAll('div.opcion');
const modal = document.querySelector(".modal");
const modal_resultado = document.querySelector(".modal__resultado");
const modal_imagen = document.querySelector(".modal__imagen");
const modal_texto = document.querySelector(".modal__texto");
const cerrar = document.querySelector(".boton");
opciones.forEach((opcion, id) => {
    opcion.addEventListener('click', () => {
        const opcionComputadora = Math.floor(Math.random() * 3);
        console.log("Opcion computador:", opcionComputadora);
        console.log("Escogiste opcion: ", id);
        let eleccionJugador = "";
        let eleccionBot = "";
        switch (id) {
            case 0:
                eleccionJugador = "piedra";
                break;
            case 1:
                eleccionJugador = "papel";
                break;
            case 2:
                eleccionJugador = "tijera"
                break;
            default:
                eleccionJugador = "elpepe";
                break;
        }
        switch (opcionComputadora) {
            case 0:
                eleccionBot = "piedra";
                break;
            case 1:
                eleccionBot = "papel";
                break;
            case 2:
                eleccionBot = "tijera"
                break;
            default:
                eleccionBot = "elpepe";
                break;
        }
        if (id === opcionComputadora) {
            console.log("Empate");
            modal_resultado.innerHTML = "Vaya, parece que tú y la computadora han quedado en empate.";
            modal_imagen.src = "img/bot.svg";
            modal_texto.innerHTML = `Elegiste ${eleccionJugador}, y parece que la computadora te imitó. Por eso, este juego termina en empate. ¡Inténtalo de nuevo!`;
        } else if ((id - opcionComputadora) == 1 || (id - opcionComputadora) == -2) {
            modal_imagen.src = "img/winner.svg";
            modal_resultado.innerHTML = "¡Felicidades! Has ganado, la computadora ha sido derrotada.";
            modal_texto.innerHTML = `Elegiste ${eleccionJugador} y la computadora escogió ${eleccionBot}. ¡Y asi dicen que la IA remplazara al humano!`
        } else {
            modal_imagen.src = "img/lose.svg";
            modal_resultado.innerHTML = "¡Perdiste! La computadora triunfo esta vez.";
            modal_texto.innerHTML = `Elegiste ${eleccionJugador} y la computadora escogió ${eleccionBot}. ¡No esperes más, vuelve a intentarlo antes de que la IA domine al mundo!`
        }
        modal_imagen.onload = () => {
            if (modal.classList.contains("modal--close")) {
                modal.classList.remove("modal--display");
                setTimeout(() => {
                    modal.classList.remove("modal--close");
                }, 10);
            } else {
                modal.classList.add("modal--close");
            }
        };
    });
});
cerrar.addEventListener("click", () => {
    modal.classList.add("modal--close");
});
modal.addEventListener('transitionend', () => {
    if (modal.classList.contains('modal--close')) {
        modal.classList.add('modal--display');
    }
});