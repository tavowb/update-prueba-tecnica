import { useDispatch } from 'react-redux'
import { emailAndPLogin, googlelogin } from '../actions/auth'
import { useState } from 'react'

//* Hook que maneja los estados y funciones de la pagina de login
const useLogin = () => {
  //* Estados
  const dispatch = useDispatch()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = data
  //* Funcion que maneja los cambios en los inputs
  const handleChange = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value
    })
  }

  //* Funciones que manejan las acciones de los botones de google y email
  const handleGoogleLogin = () => {
    dispatch(googlelogin())
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()

    if (email.trim() === '' || !email.trim().includes('@')) {
      return
    }

    if (password.trim().length < 6) {
      return
    }

    dispatch(emailAndPLogin(email, password))
  }

  return { handleChange, handleEmailLogin, handleGoogleLogin, email, password }
}

export default useLogin
