import Climate from '../components/Climate'

const Wheather = () => {
  return (
    <div className=' mt-3'>
      <div className='container text-center'>
        <h1>Real time weather</h1>
        <hr />
      </div>
      <div className='container text-center d-flex justify-content-center'>
        <Climate />
      </div>
    </div>

  )
}

export default Wheather
