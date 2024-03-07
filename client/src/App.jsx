import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import About from './components/About'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
