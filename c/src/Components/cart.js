import React, { useEffect } from 'react'
import Navbar from './navbar'


const Cart = () => {
    const res = localStorage.getItem('cart')
    let arr = []
    let sum = 0
    if (res != null){
        arr = res.split(",")
        arr.map((i)=>(
          sum+= Number(i)
      ))
    }
    
    
    
    console.log(sum);
    
  return (
    <div>
        <Navbar/>
        <br></br>cart total {sum}</div>
  )
}

export default Cart