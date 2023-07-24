import React from 'react'
import Navbar from './navbar'
import Menuitem from './menuitem'
import { useSelector } from 'react-redux'

const Menu = () => {

  const res = useSelector((state)=>(state.pizza.pizzas))

  /*const middleIndex = Math.ceil(res.length / 2);

  const firstHalf = res.splice(0, middleIndex);   
  const secondHalf = res.splice(-middleIndex);*/
  
  return (
    <div>
      <Navbar />
      <br></br>
      <h1>Menu</h1>
      
        {
          res.map( (i,index) => (
            <Menuitem key={index} data1 = {i}/>
          ))
        }
        
    </div>
  )
}

export default Menu

/**





<div class="col"  >
                  <div class="row">
                    <div class="col">
                      {i}
                    </div>
                    <div class="col">
                      {i}
                    </div>
                    <div class="col">
                      {i}
                    </div>
                  </div>
                </div>
 */