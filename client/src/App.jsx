import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
