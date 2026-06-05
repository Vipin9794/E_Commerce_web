import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
         <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
        

     
    </>
  )
}

export default App
