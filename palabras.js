// Agregar palabras desde el input hacia la lista
let palabra = ''
let palabrasAgregadas = []
let lista = document.querySelector('.lista')
 
function agregarPalabra() {
    limpiarHtml()
    palabra = document.querySelector('#input').value
    if (palabra === '') return
    palabra = cleanStrings(palabra)
    const objetoPalabra = {
        palabra,
        id: Date.now()
    }
    palabrasAgregadas.push(objetoPalabra)
    palabrasAgregadas.forEach(elemento => {
        let palabraAgregada = document.createElement('li')
        let eliminar = document.createElement('button')
        palabraAgregada.innerHTML = elemento.palabra
        eliminar.innerHTML = '&#10006;'
        palabraAgregada.classList.add('palabra')
        eliminar.classList.add('palabra')
        eliminar.classList.add('resetear')
        eliminar.classList.add('btnCerrar')
        eliminar.onclick = () => {
            eliminarPalabra(elemento.id)
            limpiarHtml()
            // lista.appendChild(palabraAgregada)
        }
        palabraAgregada.appendChild(eliminar)
        lista.appendChild(palabraAgregada)
    })
}

document.querySelector('#guardar-palabra').onclick = agregarPalabra

// Eliminar palabra al momento de clickear X
function eliminarPalabra(id) {
    palabrasAgregadas = palabrasAgregadas.filter(palabra => palabra.id !== id)
    console.log(palabrasAgregadas)
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