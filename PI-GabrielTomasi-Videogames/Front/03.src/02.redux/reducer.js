import { GETALLGAMES, SET_CURRENT_PAGE } from "./action-types";

const initialState = {
allGames: [],
favGames:[],
currentPage: 1
}

const reducer = (state = initialState, action)=>{
switch (action.type){
case GETALLGAMES:{
    return{
        ...state,
        allGames: action.payload
    }
}
case SET_CURRENT_PAGE:{
    return{
        ...state,
        currentPage: action.payload
    }
}

    default:{
        return {...state}
    }
}
}

export default reducer;