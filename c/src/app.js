import React,{useEffect} from 'react'

import { BrowserRouter, Routes, Route   } from 'react-router-dom'

import Home from './Components/home'
import Menu from './Components/menu'
import Pizza from './Components/pizza'
import Cart from './Components/cart'
import { useDispatch } from 'react-redux'

import {getPizzas,getIng} from './actions/pizza'
 
const App = () => {

  const dispatch = useDispatch() 

    useEffect(()=>{
       dispatch(getPizzas())
       dispatch(getIng())
    },[])
    
  return (
        <BrowserRouter>
          <div>    
            <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/menu" exact element={<Menu/>} />
            <Route path="/pizza" exact element={<Pizza/>} />
            <Route path="/cart" exact element={<Cart/>} />
            </Routes>
          </div>
        </BrowserRouter>
  )
}

export default App

