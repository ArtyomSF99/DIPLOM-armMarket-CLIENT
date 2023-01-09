const defaultState = {
    produects: []
}

export const productsReducer = (state = defaultState, action) =>{
    switch (action.type){
      case "SAVE_PRODUCTS":
        return {...state, products: action.payload}
      default:
        return state
    }
  }