const defaultState = {
    categories: [],
    attributes: [],
}


export const categoriesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "SAVE_CATEGORIES":
            return {...state, categories: action.payload}
        case "SAVE_NEW_CATEGORY":
            return {...state, categories: [...state.categories, action.payload]}
        case "SAVE_ATTRIBUTES":
            return {...state, attributes: action.payload}
        case "SAVE_NEW_ATTRIBUTE":
            return {...state, attributes: [...state.categories, action.payload]}
      default:
        return state
    }
}

