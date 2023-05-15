import { useLocation } from 'react-router-dom'
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'

function App() {
const location = useLocation();

  return (
    
      <div>
      {
        location.pathname === "/" ? <div> </div> : <div> <Nav/> </div>
      }
        <Routes>
          <Route path="/"  element={<Landing/>} />
          <Route path="/movies"  element={<Detail/>} />
          <Route path="/home"  element={<Home/>} />
        </Routes>
      </div>
      
   
  )
}

export default App
