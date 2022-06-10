let pantalla = document.querySelector("#dibujo")
let pincel = pantalla.getContext("2d")

// Color y grosor
function colorGrosor() {
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 4.5
}

// Cabeza
function dibujarCabeza () {
    colorGrosor()
    pincel.beginPath()
    pincel.arc(300, 122, 28, 0, 2*3.14)
    pincel.stroke()
}

// Torso
function dibujarTorso () {
    pincel.beginPath()
    pincel.moveTo(300, 150)
    pincel.lineTo(300, 250)
    pincel.stroke()
}

// Brazo izq
function dibujarBrazoIzq() {
    pincel.beginPath()
    pincel.moveTo(300, 150)
    pincel.lineTo(270, 200)
    pincel.stroke()
}

// Brazo der
function dibujarBrazoDer() {
    pincel.beginPath()
    pincel.moveTo(300, 150)
    pincel.lineTo(330, 200)
    pincel.stroke()
}

// Pierna izq
function dibujarPiernaIzq() {
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(270, 300)
    pincel.stroke()
    
}

// Pierna der
function dibujarPiernaDer() {
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(330, 300)
    pincel.stroke()
}

// Base horca
function dibujarBase() {
    colorGrosor()
    pincel.beginPath()
    pincel.moveTo(380, 330)
    pincel.lineTo(170, 330)
    pincel.stroke()
}

// Soporte 1 horca
function dibujarSoporte1() {
    colorGrosor()
    pincel.beginPath()
    pincel.moveTo(200, 330)
    pincel.lineTo(200, 60)
    pincel.stroke()
}

// Soporte 2 horca
function dibujarSoporte2() {
    colorGrosor()
    pincel.beginPath()
    pincel.moveTo(200, 62)
    pincel.lineTo(300, 62)
    pincel.stroke()
}

// Sujetador
function dibujarSujetador() {
    colorGrosor()
    pincel.beginPath()
    pincel.moveTo(300, 60)
    pincel.lineTo(300, 96)
    pincel.stroke()    
}


const data = JSON.parse(localStorage.getItem('palabras'))
let indice = Math.floor(Math.random() * data.length)
let lineas = document.querySelector('#lineas')
let incorrectas = document.querySelector('.letras-incorrectas')
let btnNuevoJuego = document.querySelector('#btnNuevoJuego')
let btnRendir = document.querySelector('#btnRendir')
let letras = document.querySelector('.letras')
let palabra2 = []
let letrasIncorrectas = []
let contadorErrores = 0

cargarEventos()

function cargarEventos () {
    window.addEventListener('keyup', buscarLetra)
    window.addEventListener('DOMContentLoaded', cargarPalabra)
    btnNuevoJuego.addEventListener('click', () => location.reload())
    btnRendir.addEventListener('click', mensajePerdiste)
}

let palabra = data[indice].palabra
palabra = palabra.split('')
console.log(palabra)
palabra2 = palabra

function cargarPalabra () {
    palabra.forEach(elemento => {
        const div = document.createElement('div')
        div.classList.add('identificador')
        div.innerHTML = `
                <p id="${palabra.indexOf(elemento)}" class="letra-correcta invisible">${elemento}</p>
                <svg class="guion flex" xmlns="http://www.w3.org/2000/svg" version="1.1"><line x1="0"   y1="0" x2="70" y2="0" style="stroke: #0A3871;stroke-width:6" /></svg>
            `
        lineas.appendChild(div)
    })
}

function buscarLetra (e) {
    let juegoTerminado = false
    if(palabra2.length === 0 || contadorErrores === 10) {
        console.log('Juego terminado')
        juegoTerminado = true
    } else {
        console.log(palabra.includes(e.key))
        if(!palabra.includes(e.key) && !letrasIncorrectas.includes(e.key)) {
            contadorErrores++
            letrasIncorrectas.push(e.key)
            mostrarIncorrectas(letrasIncorrectas)
            errores()
        }
    }

    const letra = document.querySelectorAll('.identificador')
    letra.forEach(elemento => {
        if(e.key === elemento.children[0].textContent && !juegoTerminado){
            elemento.children[0].classList.remove('invisible')
            palabra2 = palabra2.filter(elemento => e.key !== elemento)
        } 
    })

    console.log(contadorErrores, 'contadorErrores') 
    console.log(letrasIncorrectas, 'letrasIncorrectas')
    console.log(palabra2)
}

function mostrarIncorrectas(letrasIncorrectas) {
    limpiarIncorrectas()
    letrasIncorrectas.forEach(elemento => {
        const letra = document.createElement('p')
        letra.classList.add('letra-incorrecta')
        letra.textContent = elemento
        incorrectas.appendChild(letra)
    })
}

function limpiarIncorrectas() {
    while(incorrectas.firstChild) {
        incorrectas.removeChild(incorrectas.firstChild)
    }
}

function errores() {
    switch(contadorErrores) {
        case 1: 
            console.log('error 1')
            dibujarBase()
            break;
        case 2: 
            console.log('error 2')
            dibujarSoporte1()
            break;
        case 3: 
            console.log('error 3')
            dibujarSoporte2()
            break;
        case 4: 
            console.log('error 4')
            dibujarSujetador()
            break;
        case 5: 
            console.log('error 5')
            dibujarCabeza()
            break;
        case 6: 
            console.log('error 6')
            dibujarTorso()
            break;
        case 7: 
            console.log('error 7')
            dibujarBrazoIzq()
            break;
        case 8: 
            console.log('error 8')
            dibujarBrazoDer()
            break;
        case 9: 
            console.log('error 9')
            dibujarPiernaIzq()
            break;
        case 10: 
            console.log('error 10')
            dibujarPiernaDer()
            mensajePerdiste()
            break;
        default:
            e.preventDefault()
            break;
    }
}

function mensajePerdiste() {
    contadorErrores = 10
    dibujarBase()
    dibujarSoporte1()
    dibujarSoporte2()
    dibujarSujetador()
    dibujarCabeza()
    dibujarTorso()
    dibujarBrazoIzq()
    dibujarBrazoDer()
    dibujarPiernaIzq()
    dibujarPiernaDer()
    let mensaje = document.createElement('p')
    mensaje.classList.add('mensaje-perdiste')
    mensaje.textContent = '¡Perdiste, inténtalo nuevamente!'
    letras.insertBefore(mensaje, lineas)
    btnRendir.style.pointerEvents = "none"
    const letra = document.querySelectorAll('.identificador')
    letra.forEach(elemento => elemento.children[0].classList.remove('invisible'))
}









