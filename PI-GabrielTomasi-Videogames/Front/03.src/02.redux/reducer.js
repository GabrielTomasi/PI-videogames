import {
  GETALLGAMES,
  GETALLGENRES,
  SET_CURRENT_PAGE,
  GET_GAME_BY_ID,
  GET_GAMES_BY_NAME,
  ORDER_GAMES,
  FILTER_BY_GEN,
} from "./action-types";

const initialState = {
  allGames: [],
  allGenres: [],
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
    case GETALLGENRES:{
      return{
        ...state,
        allGenres: action.payload
      }
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
    case GET_GAMES_BY_NAME: {
      console.log(action.payload);
      return { ...state, allGames: action.payload };
    }
    case ORDER_GAMES: {
      const copyGames = [...state.allGames];

      console.log(copyGames[0]);
      return {
        ...state,
        allGames:
          action.payload === "A"
            ? copyGames.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  console.log(a.name.toLowerCase() > b.name.toLowerCase());
                  return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  console.log(a.name.toLowerCase() < b.name.toLowerCase());
                  return 1;
                }
                return 0;
              })
            : action.payload === "D"
            ? copyGames?.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  console.log(a.name.toLowerCase() > b.name.toLowerCase());
                  return -1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  console.log(a.name.toLowerCase() < b.name.toLowerCase());
                  return 1;
                }
                return 0;
              })
            : action.payload === "ratingA"
            ? copyGames?.sort((a, b) => {
                if (a.rating > b.rating) {
                  return -1;
                }
                if (a.rating < b.rating) {
                  return 1;
                }
                return 0;
              })
            : action.payload === "ratingD" &&
              copyGames?.sort((a, b) => {
                if (a.rating < b.rating) {
                  return -1;
                }
                if (a.rating > b.rating) {
                  return 1;
                }
                return 0;
              }),
      };
    }

    case FILTER_BY_GEN: {
      return {
        ...state,
        allGames:
          action.payload === "All"
            ? state.allGames
            : state.allGames.filter((game) => {
                game.genres.some(genre => genre.name === action.payload)
              }),
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
