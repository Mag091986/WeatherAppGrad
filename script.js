let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '1c0c83e98acd05f911107f94ee43423a'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divdatosClima = document.getElementById('datosClima')
    divdatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `The temperature is: ${Math.floor(temperatura-difKelvin)}°C`
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `The temperature is: ${Math.floor(temperatura-difKelvin)}°C`
    
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Weather Description is:  ${descripcion}`

    divdatosClima.appendChild(ciudadTitulo)
    divdatosClima.appendChild(temperaturaInfo)
    divdatosClima.appendChild(descripcionInfo)

}
