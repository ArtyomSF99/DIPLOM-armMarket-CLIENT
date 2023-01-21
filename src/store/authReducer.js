const defaultState = {
    isAuth: false,
    globalModal: false
}

export const authReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "CHANGE_AUTH":
            return {...state, isAuth: action.payload}
        case "CHANGE_GLOBAL_MODAL":
            return {...state, globalModal: action.payload}
      default:
        return state
    }
}