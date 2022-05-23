let pantalla1 = document.querySelector("#dibujo")
let pincel = pantalla1.getContext("2d")

// Cabeza
pincel.strokeStyle = "#0A3871"
pincel.lineWidth = 4.5
pincel.beginPath()
pincel.arc(300, 122, 28, 0, 2*3.14)
pincel.stroke()

// Torso
pincel.beginPath()
pincel.moveTo(300, 150)
pincel.lineTo(300, 250)
pincel.stroke()

// Brazo izq
pincel.beginPath()
pincel.moveTo(300, 150)
pincel.lineTo(270, 200)
pincel.stroke()

// Brazo der
pincel.beginPath()
pincel.moveTo(300, 150)
pincel.lineTo(330, 200)
pincel.stroke()

// Pierna izq
pincel.beginPath()
pincel.moveTo(300, 250)
pincel.lineTo(270, 300)
pincel.stroke()


// Pierna der
pincel.beginPath()
pincel.moveTo(300, 250)
pincel.lineTo(330, 300)
pincel.stroke()

// Base horca
pincel.beginPath()
pincel.moveTo(380, 330)
pincel.lineTo(170, 330)
pincel.stroke()

// Soporte 1 horca
pincel.beginPath()
pincel.moveTo(200, 330)
pincel.lineTo(200, 60)
pincel.stroke()

// Soporte 2 horca
pincel.beginPath()
pincel.moveTo(200, 62)
pincel.lineTo(300, 62)
pincel.stroke()

// Sujetador
pincel.beginPath()
pincel.moveTo(300, 60)
pincel.lineTo(300, 96)
pincel.stroke()
