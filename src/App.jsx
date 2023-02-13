import { Provider } from 'react-redux'
import AuthRouter from './routes/AuthRouter'
import { store } from './store/store'

//* This is the main component of the application
function App () {
  return (
    <Provider store={store}>
      <AuthRouter />
    </Provider>

  )
}

export default App
