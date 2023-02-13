import { firebase, googleAuthProvider } from '../firebase/firebase'
import { types } from '../types/types'
import Swal from 'sweetalert2'

// * Inicio de sesion con Google
export const googlelogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.displayName, user.email))
      })
  }
}

//* * Inicio de sesion con email y password
export const emailAndPLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.displayName, user.email))
      })
      .catch((e) => {
        // console.log(e)
        if (e.code === 'auth/user-not-found') {
          Swal.fire({
            icon: 'error',
            title: 'the email is not found'
          })
        }

        if (e.code === 'auth/wrong-password') {
          Swal.fire({
            icon: 'error',
            title: 'the password is wrong'
          })
        }
      })
  }
}

//*  Registro de usuario
export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username })

        dispatch(login(user.displayName, user.email))
      })
      .catch((e) => {
        // console.log(e)
        if (e.code === 'auth/email-already-in-use') {
          Swal.fire({
            icon: 'error',
            title: 'the email is already in use'
          })
        }
        if (e.code === 'auth/user-not-found') {
          Swal.fire({
            icon: 'error',
            title: 'the user not found'
          })
        }
        if (e.code === 'auth/invalid-email') {
          console.log('invalid-email')
        }
        if (e.code === 'auth/invalid-password') {
          console.log('invalid-password')
        }

        if (e.code === 'auth/weak-password') {
          console.log('weak-password')
        }
      })
  }
}

//*  Accion de login
export const login = (id, username, email) => {
  return {
    type: types.login,
    payload: {
      id,
      username,
      email
    }
  }
}

//*  Accion de logout
export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()

    dispatch({
      type: types.logout
    })
  }
}
