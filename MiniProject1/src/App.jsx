import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './Components/loginPage'
import ResponsiveAppBar from './Components/LandingPage'
import GrowingZones from './Components/Zone'


function App() {
  

  return (
    <>
      <Routes>
        <Route path = "/" element = {<ResponsiveAppBar />} />
        <Route path= '/login' element = {<SignIn/>} />
        <Route path = '/zones' element = {<GrowingZones/>} />
      </Routes>
    </>
  )
}

export default App;
