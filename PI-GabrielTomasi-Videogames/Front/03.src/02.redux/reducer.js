import { GETALLGAMES, SET_CURRENT_PAGE, GET_GAME_BY_ID } from "./action-types";

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
    default: {
      return { ...state };
    }
  }
};

export default reducer;
