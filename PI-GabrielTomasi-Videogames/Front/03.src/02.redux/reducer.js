import {
  GETALLGAMES,
  GETALLGENRES,
  SET_CURRENT_PAGE,
  GET_GAME_BY_ID,
  GET_GAMES_BY_NAME,
  ORDER_GAMES,
  FILTER_BY_GEN,
  FILTER_BY_ORG,
  GETALLPLATFORMS,
  ADD_GAME
} from "./action-types";

const initialState = {
  allGames: [],
  copyAllGames: [],
  allGenres: [],
  allPlatforms: [],
  currentPage: 1,
  detail: [],
  gamesByGen: [],
  gamesDB: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLGAMES: {
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      };
    }
    case GETALLGENRES: {
      return {
        ...state,
        allGenres: action.payload,
      };
    }
    case GETALLPLATFORMS: {
      return {
        ...state,
        allPlatforms: action.payload,
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
    case GET_GAMES_BY_NAME: {
      console.log(action.payload);
      return { ...state, allGames: action.payload };
    }
    case ORDER_GAMES: {
      const copyGames = [...state.allGames];
      
      return {
        ...state,
        allGames:
          action.payload === "A"
            ? copyGames.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
            : action.payload === "D"
            ? copyGames?.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {

                  return -1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {

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
            : action.payload === "ratingD"
            ? copyGames?.sort((a, b) => {
                if (a.rating < b.rating) {
                  return -1;
                }
                if (a.rating > b.rating) {
                  return 1;
                }
                return 0;
              })
            : state.copyAllGames
      };
      
    }

    case FILTER_BY_GEN: {
      const copyGames = [...state.allGames];
      const juegosFiltrados = copyGames.filter((game) => {
        return game.genres.some(gen => gen === action.payload);
      })

      return {
        ...state,
        allGames: 
        action.payload === "All"
        ? state.copyAllGames
        :juegosFiltrados,
      };
    }
    case FILTER_BY_ORG: {
      const copyGames = [...state.allGames];
      return {
        ...state,
        allGames: 
        action.payload === "All"
        ? state.copyAllGames
        :copyGames.filter(game => typeof game.id === action.payload),
      };
    }
    case ADD_GAME :{
      return{
        ...state,
        gamesDB: action.payload
      }
    }
    
    default: {
      return { ...state };
    }
  }
};

export default reducer;
