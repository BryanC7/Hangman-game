let pantalla1 = document.querySelector("#dibujo")
let pincel = pantalla1.getContext("2d")

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

const data = JSON.parse(localStorage.getItem('palabras'))
let indice = Math.floor(Math.random() * data.length)
window.addEventListener('keyup', buscarLetra)

let palabra = data[indice].palabra
palabra = palabra.split('')
console.log(palabra)

function buscarLetra (e) {
    console.log(e.key)
}
