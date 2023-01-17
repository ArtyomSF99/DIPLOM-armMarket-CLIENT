const defaultState = {
    user: {}
}

export const userReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "SAVE_USER":
            return {...state, user: action.payload}
        case "DELETE_USER":
            return {...state, user:action.payload}
      default:
        return state
    }
  }