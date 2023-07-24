
export default (state = { pizzas: [] , ings:[]  }, action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return { ...state, pizzas: action.payload.data };
        case "FETCH_ING":
          return { ...state, ings: action.payload.data };
      default:
        return state;
    }
  };
  