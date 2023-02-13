import { useState, useEffect } from 'react'
import { getClime } from '../services/Clime'

// TODO: Optimizar el codigo y el rendimiento de la aplicacion

//* Hook que hace la peticion a la API y maneja los estados
export const useClime = () => {
  //* Estados
  const options = [
    { name: 'co', value: 'CO', label: 'Colombia' }
  ]
  const OptionsCitys = [
    { name: 'city', value: 'Bogotá', label: 'Bogotá' },
    { name: 'city', value: 'Medellín', label: 'Medellín' },
    { name: 'city', value: 'Cartagena', label: 'Cartagena' },
    { name: 'city', value: 'Cali', label: 'Cali' },
    { name: 'city', value: 'Santa Marta', label: 'Santa Marta' },
    { name: 'city', value: 'Barranquilla', label: 'Barranquilla' },
    { name: 'city', value: 'Villavicencio', label: 'Villavicencio' },
    { name: 'city', value: 'San Gil', label: 'San Gil' },
    { name: 'city', value: 'Bucaramanga', label: 'Bucaramanga' }
  ]

  const [clime, setClime] = useState()
  const [data, setData] = useState({
    city: 'Santiago de Cali',
    country: 'co'
  })
  const kelvin = 273.15
  const [temps, setTemps] = useState({
    temp: 0,
    tempmin: 0,
    tempmax: 0
  })
  const { city, country } = data
  const { temp, tempmin, tempmax } = temps

  //* Funcion que maneja los cambios en los inputs
  const handleChange = (e) => {
    if (e.name === 'country') setData({ ...data, country: e.value })
    else if (e.name === 'city') setData({ ...data, city: e.value })
  }

  //* Funcion que hace la peticion a la API
  const refreshClime = async () => {
    const newClime = await getClime(city, country)
    setClime(newClime)
    //* Pasamos los datos de la API a los estados y cambiamos la escala de kelvin a celsius
    if (newClime) {
      setTemps({
        temp: newClime.main.temp - kelvin,
        tempmin: newClime.main.temp_min - kelvin,
        tempmax: newClime.main.temp_max - kelvin
      })
    }
  }
  //* Ejecutamos la funcion al cargar la pagina
  useEffect(() => {
    refreshClime()
  }, [])

  return { clime, refreshClime, handleChange, city, country, options, OptionsCitys, temp, tempmin, tempmax }
}
