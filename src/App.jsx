import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ViewCart from './Components/Cart/ViewCart'
import Home from './Components/Home/Home'
import { useState } from 'react'
import Missing from './Components/Missing/Missing'

function App() {
  
const [cart,setCart] = useState([])

  return (
    <>
   <BrowserRouter basename='/E_Com-App-practice'>
      <Header cart={cart} />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<ViewCart cart={cart} setCart={setCart}/>} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
