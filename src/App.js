import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { LoginScreen, WeatherScreen } from './screens'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path='/'>
          <div>Home</div>
        </Route>
        <Route exact path='/login'>
          <LoginScreen />
        </Route>
        <Route exact path='/dashboard'>
          <WeatherScreen />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
