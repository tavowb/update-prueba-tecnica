import { useClime } from '../hooks/useClime'
import Select from 'react-select'

const Climate = () => {
  const { clime, handleChange, city, country, refreshClime, options, OptionsCitys, temp, tempmax, tempmin } = useClime()
  const handleClick = (e) => {
    e.preventDefault()
    refreshClime(city, country)
  }

  return (

    <section>
      {clime &&
        <div
          className='card text-white p-5' style={{
            backgroundColor: '#546784'
          }}
        >
          <h1>Clima en tiempo real</h1>
          <hr />

          <div className='container'>
            <div className='row'>
              <h1>Temperatura en </h1>
            </div>
            <div className='row'>
              <h2>{clime.name}</h2>
            </div>
            <div className='row'>
              <h2> {temp.toFixed(0)}C°</h2>
            </div>

            <img className='img' src={`https://openweathermap.org/img/wn/${clime.weather[0].icon}.png`} alt='Estado actual ' />

            <div className='row'>
              <h5>{clime.weather[0].description} </h5>
            </div>
            <div className='row'>
              <div className='col'>
                <h6>Max: {tempmax.toFixed(0)}C°</h6>
              </div>
              <div className='col'>
                <h6>Min: {tempmin.toFixed(0)}C°</h6>
              </div>
            </div>
          </div>

          <div className='container'>
            <form onSubmit={handleClick} className='row p-3 text-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    País
                  </div>
                  <div className='col'>
                    Ciudad
                  </div>
                </div>
                <div className='row pb-4'>
                  <div className='col'>
                    <Select
                      defaultValue={options}
                      options={options}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col'>
                    <Select
                      defaultValue={OptionsCitys[3]}
                      options={OptionsCitys}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                  <button
                    className='btn w-75 btn-success text-center'
                    type='submit'
                    name='action'
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>}

    </section>
  )
}

export default Climate
