import { GETALLGAMES } from "./action-types";

const initialState = {
allGames: [],
favGames:[]
}

const reducer = (state = initialState, action)=>{
switch (action.type){
case GETALLGAMES:{
    return{
        ...state,
        allGames: action.payload
    }
}
    default:{
        return {...state}
    }
}
}

export default reducer;