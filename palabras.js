// Agregar palabras desde el input hacia la lista
let palabra = ''
let palabrasAgregadas = []
let lista = document.querySelector('.lista')
let contenedorPalabras = document.querySelector('#listado-palabras')
let guardarPalabraBtn = document.querySelector('#guardar-palabra')
let formulario = document.querySelector('#formulario')

// Cargar eventos
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Guardar Palabra"
    guardarPalabraBtn.addEventListener('click', agregarPalabra)

    // Cuando se elimina una palabra del listado
    contenedorPalabras.addEventListener('click', eliminarPalabra)

    window.addEventListener('DOMContentLoaded', consultarData)
}

// Añadir palabras al arreglo
function agregarPalabra() {
    let valorInput = cleanStrings(document.querySelector('#input').value)
    if (valorInput === '' || valorInput.length > 10 ) {
        let alerta = document.createElement('p')
        alerta.textContent = 'Debes al menos ingresar una palabra y con un máximo de 10 letras'
        alerta.classList.add('alerta')
        guardarPalabraBtn.style.pointerEvents = "none"
        guardarPalabraBtn.style.cursor = "default"
        formulario.insertBefore(alerta, document.querySelector('#input') )
        setTimeout ( () => {
            alerta.remove()
            guardarPalabraBtn.style.pointerEvents = "auto"
            guardarPalabraBtn.style.cursor = "pointer"
        }, 3000)
        return
    }
    crearInfoPalabra(valorInput)
    palabrasHTML()
}

// Información de la palabra
function crearInfoPalabra (palabra) {
    const objetoPalabra = {
        palabra,
        id: Date.now()
    }
    palabrasAgregadas = [...palabrasAgregadas, objetoPalabra]
    console.log(objetoPalabra.palabra)
}

// Imprimir palabras en el listado 
function palabrasHTML() {
    limpiarHtml()
    palabrasAgregadas.forEach(elemento => {
        const listado = document.createElement('li')
        listado.classList.add('palabra', 'resetear')
        listado.innerHTML = `
            <span>${elemento.palabra}</span>
            <button class="btnCerrar" data-id = "${elemento.id}">&#10006;</button>
        `
        lista.appendChild(listado)
    })

    localStorage.setItem('palabras', JSON.stringify(palabrasAgregadas))
}

// Eliminar palabra al momento de clickear X
function eliminarPalabra(e) {
    if(e.target.classList.contains('btnCerrar')) {
        const palabraId = Number(e.target.getAttribute('data-id'))

        palabrasAgregadas = palabrasAgregadas.filter(elemento => elemento.id !== palabraId)
        palabrasHTML()
    }
}

// Al momento de agregar palabras al listado
function limpiarHtml() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
}

// Al input cuando le llegue una palabra en mayúsculas y/o con tilde va ingresar al listado en minúsculas y sin tilde
function cleanStrings (str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
}

//! ---------------------------------------------------------------------------------------------//

//Local Storage
function consultarData() {
    const data = JSON.parse(localStorage.getItem('palabras'))
    palabrasAgregadas = [...data]
    palabrasHTML()
}