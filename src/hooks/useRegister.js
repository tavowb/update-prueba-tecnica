import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../actions/auth'
import Swal from 'sweetalert2'

//* Hook que maneja los estados y funciones de la pagina de registro
const useRegister = () => {
  //* Estados
  const dispatch = useDispatch()

  const [data, setData] = useState({
    email: '',
    password: '',
    password2: '',
    username: ''
  })

  const { email, username, password, password2 } = data

  const validaciones = (target) => {
    if (target.name === 'email') {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

      if (!emailRegex.test(target.value)) {
        target.classList.remove('succes')
        target.classList.add('error')
      } else {
        target.classList.remove('error')
        target.classList.add('succes')
      }
    }

    if (target.name === 'username') {
      if (target.value.trim().length < 2) {
        target.classList.remove('succes')
        target.classList.add('error')
      } else {
        target.classList.remove('error')
        target.classList.add('succes')
      }
    }

    if (target.name === 'password') {
      if (target.value.trim().length < 6) {
        target.classList.remove('succes')
        target.classList.add('error')
      } else {
        target.classList.remove('error')
        target.classList.add('succes')
      }
    }

    if (target.name === 'password2') {
      if (target.value.trim() !== password.trim()) {
        target.classList.remove('succes')
        target.classList.add('error')
      } else {
        target.classList.remove('error')
        target.classList.add('succes')
      }
    }
  }

  //* Funcion que maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target

    validaciones(e.target)
    setData({
      ...data,
      [name]: value
    })
  }

  //* Funcion que maneja el boton de registro
  const handleRegister = (e) => {
    e.preventDefault()

    if (email.trim() === '' || !email.trim().includes('@')) {
      Swal.fire({
        icon: 'error',
        title: 'the email is not valid'
      })
      return
    }

    if (username.trim().length < 2) {
      Swal.fire({
        icon: 'error',
        title: 'the usename is too short'
      })
      return
    }

    if (password.trim().length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'the password is to short'
      })
      return
    } else {
      if (password.trim() !== password2.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'the passwords do not match'
        })
        return
      }
    }

    dispatch(register(email, password, username))
  }

  return { handleChange, handleRegister, email, username, password, password2 }
}

export default useRegister
