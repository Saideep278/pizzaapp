import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Menuitem = (props) => {
    const menuitem = props.data1


    const dispatch = useDispatch()
    var lcart = []
    

    const addtocart = ()=>{  
        if (localStorage.getItem('cart') === null){
            localStorage.setItem('cart',[])
        }
        else{
             lcart = localStorage.getItem('cart')
        }      
        lcart = [lcart,menuitem.price]
        localStorage.setItem('cart',lcart)
    }

    return (
        <div>
            <div class="row p-2 "  >
                <div class="col">
                    <div class="row border ">
                        <div class="col-sm">
                            <h4>  {menuitem.name}  </h4> <br></br>
                            <h2>{menuitem.price}</h2>
                        </div>
                        <div class="col-sm">
                            <p>{menuitem.description}</p>
                            <p>{menuitem.ingredients}</p>
                            <p>{menuitem.toppings}</p>
                        </div>
                        <div class="col-sm">
                            <img src={menuitem.selectedFile} height="80" width="80" /><br></br> <br></br>
                            <button type='button' class="btn-success" onClick={addtocart} >Add to Cart</button>
         
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Menuitem