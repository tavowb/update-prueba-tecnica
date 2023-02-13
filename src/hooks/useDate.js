import { useEffect, useState } from 'react'

//* Hook que calcula la diferencia de horas y minutos entre la fecha actual y la fecha de publicacion de la noticia
export const useDate = (i, data) => {
  //* Estados
  const [horas, setHoras] = useState()
  const [minutos, setMinutos] = useState()
  const getHM = async () => {
    const newNews = data.publishedAt
    const d = new Date()
    const fecha = Date.parse(newNews)
    const datenow = d.getTime()
    const ca = datenow - fecha
    const newHoras = Math.round(ca / (1000 * 60 * 60))
    const newMinutos = Math.round(ca / (1000 * 60))
    setHoras(newHoras)
    setMinutos(newMinutos)
  }
  //* Ejecutamos la funcion al cargar la pagina
  useEffect(() => {
    getHM(i, data)
  }, [])

  return { horas, minutos }
}
