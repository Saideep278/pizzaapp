import React from 'react'
import Navbar from './navbar'

import img1 from '../images/img1.jpeg'

const home = () => {
  return (
    <div>
      <Navbar />
      <div class="container">

        <div class="row">
          <div class="col">
            <p>
              fvfiurbrjef cfhbrahef fb rhbf nrbfhirea ferbfjh afarvfhr fvbvbraf v hvjvaebr evb frehj fvhk jkrebv rhfvhr bvhj vhferfbjvr evrbehjv  hbrh r vrbfhrje  vrfe  rever s
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src={img1} height={100} width={500} ></img>
          </div>
          <div class="col">
            fvfiurbrjef cfhbrahef fb rhbf nrbfhirea ferbfjh afarvfhr fvbvbraf v hvjvaebr evb frehj fvhk jkrebv rhfvhr bvhj vhferfbjvr evrbehjv  hbrh r vrbfhrje  vrfe  rever s
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src={img1} height={100} width={500} ></img>
          </div>
          <div class="col">
            fvfiurbrjef cfhbrahef fb rhbf nrbfhirea ferbfjh afarvfhr fvbvbraf v hvjvaebr evb frehj fvhk jkrebv rhfvhr bvhj vhferfbjvr evrbehjv  hbrh r vrbfhrje  vrfe  rever s

          </div>
        </div>

      </div>
    </div>
  )
}

export default home