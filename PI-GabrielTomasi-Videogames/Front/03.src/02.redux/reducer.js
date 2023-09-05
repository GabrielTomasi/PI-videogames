import { GETALLGAMES, SET_CURRENT_PAGE, GET_GAME_BY_ID, GET_GAMES_BY_NAME } from "./action-types";

const initialState = {
  allGames: [],
  favGames: [],
  currentPage: 1,
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLGAMES: {
      return {
        ...state,
        allGames: action.payload,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case GET_GAME_BY_ID: {
      return { ...state, detail: action.payload };
    }
    case GET_GAMES_BY_NAME:{
      console.log(action.payload);
      return {...state, allGames: action.payload}  
    }

    default: {
      return { ...state};
    }
  }
    
};

export default reducer;
