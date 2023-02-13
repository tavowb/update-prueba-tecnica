import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getNews } from '../services/News'

//* Hook que hace la peticion a la API y maneja los estados
export const useNewsDetails = () => {
  //* Estados
  const { id } = useParams()
  const navigate = useNavigate()
  const [news, setNews] = useState()
  const [finaldate, setFinaldate] = useState()

  //* Funcion que hace la peticion a la API
  const refreshNews = async () => {
    const newNews = await getNews([parseInt(id)])
    setNews(newNews)
    const fecha = Date.parse(newNews.publishedAt)
    const timeStamp = fecha
    const dateFormat = new Date(timeStamp)
    const newdate = dateFormat.getDate() +
    '/' + (dateFormat.getMonth() + 1) +
    '/' + dateFormat.getFullYear() +
    ' ' + dateFormat.getHours() +
    ':' + dateFormat.getMinutes() +
    ':' + dateFormat.getSeconds()
    setFinaldate(newdate)
  }

  //* Ejecutamos la funcion al cargar la pagina
  useEffect(() => {
    refreshNews()
  }, [])

  //* Funcion que maneja el boton de atras
  const handleBack = () => {
    navigate(-1)
  }

  return { news, refreshNews, handleBack, finaldate }
}
