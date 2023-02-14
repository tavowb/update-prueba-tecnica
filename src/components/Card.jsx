import { Link } from 'react-router-dom'
import '../css/card.css'
import { useDate } from '../hooks/useDate'
const Card = ({ data, url }) => {
  const { horas } = useDate(url, data)
  return (
    <div
      className='container mb-3 col-12 col-md-3'
    >
      {data &&
        <div
          className='card' style={{
            witdh: 300,
            height: 500
          }}
        >
          {horas &&
            <div className='card-header text-start text-primary text-bold'>
              Hace: {horas} horas
            </div>}
          <img
            loading='lazy' src={data.urlToImage} alt={data.content} className='card-img rounded-0' style={{
              witdh: 300,
              height: 200
            }}
          />

          <div className='card-body'>
            <h6 className='card-title'>{data.title}</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Link className='btn btn-success' to={`/news/${url}`}>
                  Ver más
                </Link>
              </li>
            </ul>
          </div>
        </div>}

    </div>
  )
}

export default Card
