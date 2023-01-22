const defaultState = {
    user: {},
    my_chats: []
}

export const userReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "SAVE_USER":
            return {...state, user: action.payload}
        case "DELETE_USER":
            return {...state, user:action.payload}
        case "SAVE_MY_CHATS":
            return {...state, my_chats: action.payload}
      default:
        return state
    }
  }