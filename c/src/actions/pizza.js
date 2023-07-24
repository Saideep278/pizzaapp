import * as api from '../api/pizza.js';


export const getPizzas = () => async (dispatch) => {
    try {
        
        const jsonresponse= await api.fetchPosts()
        const data = jsonresponse.data
        
        dispatch({ type: "FETCH_ALL", payload:  {"data":data}  });// for using payload.data
    
    } catch (error) {
      console.log(error);
    }
  };

  export const getIng = () => async (dispatch) => {
    try {
        
        const jsonresponse= await api.fetchIng()
        const data = jsonresponse.data
        
        dispatch({ type: "FETCH_ING", payload:  {"data":data}  });// for using payload.data
    
    } catch (error) {
      console.log(error);
    }
  };