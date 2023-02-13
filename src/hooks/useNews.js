import { useState, useEffect } from 'react'
import { getNews } from '../services/News'

//* Hook que hace la peticion a la API y maneja los estados
export const useNews = () => {
  //* Estados
  const [news, setNews] = useState()

  //* Funcion que hace la peticion a la API
  const refreshNews = async () => {
    const newNews = await getNews(-1)
    setNews(newNews)
  }
  //* Ejecutamos la funcion al cargar la pagina
  useEffect(() => {
    refreshNews()
  }, [])

  return { news, refreshNews }
}
