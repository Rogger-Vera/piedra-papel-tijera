let puntosUsuario = 0;
let puntosPc = 0;
let puntosLimite = 0
let puntosUsuarioSpan = document.querySelector("#puntos-usuario")
let puntosPcSpan = document.querySelector("#puntos-pc")
let resultadoDiv = document.querySelector(".resultado p")
let piedraDiv = document.querySelector("#piedra")
let papelDiv = document.querySelector("#papel")
let tijeraDiv = document.querySelector("#tijera")
let marcador = document.querySelector(".marcador")
let puntos3btn = document.querySelector("#puntos5")
let puntos5btn = document.querySelector("#puntos10")
let puntos10btn = document.querySelector("#puntos15")
let puntosLimiteH4 = document.querySelector("#puntos")
let modalInicio = document.querySelector(".modal")
let reiniciarBtn = document.querySelector("#reiniciar")
let modalReiniciar = document.querySelector(".modalReiniciar")
let modalContenidoReiniciar = document.querySelector(".modalContenidoReiniciar")
let resultadoPartida = document.querySelector(".resultadoPartida")



function reiniciar() {

    reiniciarBtn.addEventListener("click", () => {
        modalReiniciar.classList.remove("modalReiniciar--show")
        modalInicio.classList.remove("modal--show")
        resultadoDiv.innerHTML = "A jugar !!"
        
    })

    
    puntosUsuario = 0
    puntosPc = 0
    puntosUsuarioSpan.innerHTML = puntosUsuario
    puntosPcSpan.innerHTML = puntosPc

}

function validacionPartida(puntosUsuario, puntosPc) {

    puntosLimite = parseInt(puntosLimiteH4.textContent);

    if (puntosUsuario == puntosLimite) {
        modalReiniciar.classList.add("modalReiniciar--show")
        modalContenidoReiniciar.classList.remove("perdedor")
        resultadoPartida.textContent = "Felicitaciones !! Sos el GANADOR"

        reiniciar()
    }
    if (puntosPc == puntosLimite) {
        modalReiniciar.classList.add("modalReiniciar--show")
        modalContenidoReiniciar.classList.add("perdedor")
        resultadoPartida.textContent = "Suerte para la proxima T-T"

        reiniciar()
    }

}

function eleccionPc() {
    let opciones = ["Piedra", "Papel", "Tijera"]
    let randomIndice = Math.floor(Math.random() * 3)
    let eleccionPc = opciones[randomIndice]
    return eleccionPc
}

function usuarioGana(jugadaPc, jugadaUsuario) {
    puntosUsuario++
    puntosUsuarioSpan.innerHTML = puntosUsuario
    resultadoDiv.innerHTML = "Elegiste: " + jugadaUsuario + "<br>PC eligio: " + jugadaPc + "<br><br> Ganaste !"
    marcador.classList.add("verde")
    let usuarioH4 = document.querySelector(".usuario>h4")
    usuarioH4.style.color = "rgb(4, 250, 127)"
    puntosUsuarioSpan.style.color = "rgb(4, 250, 127)"
    setTimeout(function () {
        marcador.classList.remove("verde")
        usuarioH4.style.color = "#fff"
        puntosUsuarioSpan.style.color = "#fff"
    }, 2000)
    validacionPartida(puntosUsuario, puntosPc)
    
}

function usuarioPierde(jugadaPc, jugadaUsuario) {
    puntosPc++
    puntosPcSpan.innerHTML = puntosPc
    resultadoDiv.innerHTML =  "Elegiste: " + jugadaUsuario + "<br>PC eligio: " + jugadaPc + "<br><br> Perdiste !"
    marcador.classList.add("rojo")
    let pcH4 = document.querySelector(".pc>h4")
    pcH4.style.color = "rgb(218, 64, 8)"
    puntosPcSpan.style.color = "rgb(218, 64, 8)"
    setTimeout(function () {
        marcador.classList.remove("rojo")
        pcH4.style.color = "#fff"
        puntosPcSpan.style.color = "#fff"
    }, 2000)
    validacionPartida(puntosUsuario, puntosPc)
    
}

function empate(jugadaPc) {
    resultadoDiv.innerHTML = "Ambos eligieron " + jugadaPc + "<br><br>Empate !"
    marcador.classList.add("gris")
    setTimeout(function () {
        marcador.classList.remove("gris")
    }, 2000)

}


function game(opcion) {
    let jugadaPc = eleccionPc()
    let jugadaUsuario = opcion

    if (jugadaPc === jugadaUsuario) {
        empate(jugadaPc)

    } else if (jugadaPc == "Piedra" && jugadaUsuario == "Tijera") {
        usuarioPierde(jugadaPc, jugadaUsuario)

    } else if (jugadaPc == "Papel" && jugadaUsuario == "Piedra") {
        usuarioPierde(jugadaPc, jugadaUsuario)

    } else if (jugadaPc == "Tijera" && jugadaUsuario == "Papel") {
        usuarioPierde(jugadaPc, jugadaUsuario)

    } else {
        usuarioGana(jugadaPc, jugadaUsuario)

    }
}

function main() {
    piedraDiv.addEventListener("click", () => game("Piedra"))
    papelDiv.addEventListener("click", () => game("Papel"))
    tijeraDiv.addEventListener("click", () => game("Tijera"))

}


function inicio() {

    puntos3btn.addEventListener("click", (e) => {
        e.preventDefault()
        puntosLimiteH4.textContent = 3;
        modalInicio.classList.add("modal--show")
        
    })
    puntos5btn.addEventListener("click", (e) => {
        e.preventDefault()
        puntosLimiteH4.textContent = 5;
        modalInicio.classList.add("modal--show")
        
    })
    puntos10btn.addEventListener("click", (e) => {
        e.preventDefault()
        puntosLimiteH4.textContent = 10;
        modalInicio.classList.add("modal--show")
        
    })

    main()

}


inicio()
















