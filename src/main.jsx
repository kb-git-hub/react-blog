import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>} /> // this specifies that the App component will response to the route
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
)
