import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home></Home> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
