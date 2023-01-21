const defaultState = {
    globalModal: false,
    serverResponse: ""
}

export const appReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "CHANGE_GLOBAL_MODAL":
            return {...state, globalModal: action.payload}
        case "SET_SERVER_RESPONSE":
            return {...state, serverResponse: action.payload}
      default:
        return state
    }
}