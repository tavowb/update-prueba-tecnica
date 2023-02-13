import Card from '../components/Card'
import '../css/AppScreen.css'
import { useNews } from '../hooks/useNews'

const AppScreen = () => {
  const { news } = useNews()
  return (
    <div className='container  text-center mt-3'>
      <h1>Last News in Colombia</h1>
      <hr />
      {
        news &&
          <div className='row'>
            {news.map((news, index) => {
              return <Card key={index} data={news} url={index} />
            }

            )}
          </div>
      }

    </div>
  )
}

export default AppScreen
