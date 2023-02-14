import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

// * Lazy loading
const AppScreen = lazy(() => import('../pages/AppScreen'))
const NewScreen = lazy(() => import('../pages/NewScreen'))
const Wheather = lazy(() => import('../pages/Wheather'))

// * This is the private router of the application
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route end path='/app' element={<AppScreen />} />
          <Route end path='/wheater' element={<Wheather />} />
          <Route end path='/news/:id' element={<NewScreen />} />
          <Route path='*' element={<Navigate to='/app' />} />
        </Routes>
      </Suspense>
    </>

  )
}

export default AppRouter
