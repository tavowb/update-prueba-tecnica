import { useNewsDetails } from '../hooks/useNewsDetails'
import '../css/bs.css'

const CharacterScreen = () => {
  const { news, handleBack, finaldate } = useNewsDetails()
  return (
    <div className='container'>
      {news && <h1 className='text-center mt-3'> {news.title} </h1>}

      <hr />
      {news &&
        <div className='bs'>
          <div className='m-3 col-12 col-md-10'>
            <img
              className='img-fluid w-100 h-100' src={news.urlToImage} alt='Imagen de la noticia'

            />
          </div>
          <div className='m-3 col-12 col-md-10'>
            <h2>{news.description} </h2>
            <p> {news.content} </p>
            <p>Author:  <a href={news.url}> {news.source.name}</a> <small>fecha de publicación: {finaldate} </small> </p>
            <button onClick={handleBack} className='btn btn-outline-warning mb-5'>
              {' '}
              Regresar
            </button>
          </div>
        </div>}

    </div>
  )
}

export default CharacterScreen
