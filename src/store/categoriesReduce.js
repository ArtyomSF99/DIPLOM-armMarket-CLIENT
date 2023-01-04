const defaultState = {
    categories: [],
    categoriesInfo: [],
}


export const categoriesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "SAVE_CATEGORIES":
            return {...state, categories: action.payload}
        case "SAVE_NEW_CATEGORY":
            return {...state, categories: [...state.categories, action.payload]}
        case "SAVE_CATEGORIES_INFO":
            return {...state, categoriesInfo: action.payload}
      default:
        return state
    }
}

