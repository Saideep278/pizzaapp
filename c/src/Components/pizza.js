import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getIng } from '../actions/pizza'


const Pizza = () => {
  const [ingre, setIngre] = useState([])
  const dispatch = useDispatch()
  let sum = 0;
  const calrate = () => {
    for (let i = 0; i < ingre.length; i++) {
      sum += Number(ingre[i]);
    }
    const content = document.getElementById("totalsum")
    content.innerHTML = `<h1 id="totalsum">${sum}</h1> <br></br>`
    
  }

  const res = useSelector((state) => (state.pizza.ings))


  return (
    <div>
      <Navbar />
      <br></br>
      <h1>Build Pizza</h1>
      {
        res.map((i, index) => (
          <div key={index} class="row">
            <div class="col">
              {i.name}
            </div>
            <div class="col">
              {i.price}
            </div>
            <div class="col">
              <img src={i.selectedFile} height="40" width="40" />
            </div>
            <div class="col">
              <input type="checkbox" name={i.name} value={i.price} onChange={(e) => { setIngre([...ingre, e.target.value]) }} />
            </div>
          </div>
        ))
      }
      <label>Total Price : </label>
       <h1 id="totalsum">{sum}</h1> <br></br>
      <button type='button' class="btn btn-lg" onClick={calrate} >Calculate</button>



    </div>
  )
}

export default Pizza

