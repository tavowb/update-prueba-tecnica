import React, { useEffect, useState, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { login } from '../actions/auth'
import AppRouter from './AppRouter'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Loading from '../components/Loading'

const LoginScreen = lazy(() => import('../pages/LoginScreen'))
const RegisterScreen = lazy(() => import('../pages/RegisterScreen'))

// * This is the main router of the application
const AuthRouter = () => {
  const dispatch = useDispatch()
  const [log, setLog] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // login
        dispatch(login(user.displayName, user.email))
        setLog(true)
      } else {
        setLog(false)
      }
    })

    return () => {}
  }, [dispatch])

  return (

    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRouter log={log}>
                <LoginScreen />
              </PublicRouter>
          }
          />

          <Route
            path='/register'
            element={
              <PublicRouter log={log}>
                <RegisterScreen />
              </PublicRouter>
          }
          />

          <Route
            path='*'
            element={
              <PrivateRouter log={log}>
                <AppRouter />
              </PrivateRouter>
          }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AuthRouter
