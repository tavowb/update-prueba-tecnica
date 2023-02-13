import { Link } from 'react-router-dom'
import useRegister from '../hooks/useRegister'
import '../css/inputs.css'

const RegisterScreen = () => {
  const { handleChange, handleRegister, email, username, password, password2 } =
    useRegister()

  return (
    <div className='container mt-5 col-6 aling-items-center'>
      <h1>Register Page</h1>
      <hr />

      <div className='row container'>
        <form onSubmit={handleRegister} className='col s12'>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail'>Email</label>
              <input
                onChange={handleChange}
                value={email}
                name='email'
                type='email'
                className='form-control input-control'
                id='exampleInputEmail'
                aria-describedby='emailHelp'
                placeholder='example@email.com'
              />
            </div>
            <div className='form-group '>
              <label htmlFor='exampleInputUsername'>Username</label>
              <input
                onChange={handleChange}
                value={username}
                name='username'
                type='text'
                className='form-control input-control'
                id='exampleInputUsername'
                aria-describedby='userNameHelp'
                placeholder='Enter your username'
              />
            </div>
            <div className='form-group col-6  '>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                onChange={handleChange}
                value={password}
                name='password'
                type='password'
                className='form-control input-control'
                id='exampleInputPassword1'
                placeholder='********'
              />
            </div>

            <div className='form-group col-6  '>
              <label htmlFor='exampleInputPassword2'>Confirm Password</label>
              <input
                onChange={handleChange}
                value={password2}
                name='password2'
                type='password'
                className='form-control input-control'
                id='exampleInputPassword2'
                placeholder='********'
              />
            </div>
          </div>
          <button className='btn btn-primary' type='submit' name='action'>
            Register
          </button>
          <hr />
          <br />
          <Link to='/Login'> Login in to account </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
