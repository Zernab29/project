import React from 'react'
import{Routes, Route, BrowserRouter} from 'react-router-dom'
import{ Home, Signin, Signup, Profile} from './pages'
import {Navbar, Wrapper} from './components'

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/profile' element={<Profile/>} />
   </Routes>
  
  </BrowserRouter>
  )
}

export default App
