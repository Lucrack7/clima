let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

let api_key = '99f85fc98245633e6df9f79466e7f59b'

let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})


function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}



function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const icono = data.weather[0].icon
    const temperatura = data.main.temp
    const temMax = data.main.temp_max
    const temMin = data.main.temp_min
    const humedad = data.main.humidity
    const description = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`


    const tempInfo = document.createElement('p')
    tempInfo.textContent = `Temperatura: ${Math.floor(temperatura-difKelvin)}°C`

    const maxima = document.createElement('p')
    maxima.textContent = `Maxima: ${Math.floor(temMax-difKelvin)}°C`

    const minima = document.createElement('p')
    minima.textContent = `Minima: ${Math.floor(temMin-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `Descripcion metereologica: ${description}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(tempInfo)
    divDatosClima.appendChild(maxima)
    divDatosClima.appendChild(minima)
    divDatosClima.appendChild(humedadInfo)    
    divDatosClima.appendChild(descriptionInfo)


}

