import {
  GETALLGAMES,
  GETALLGENRES,
  GETALLPLATFORMS,
  SET_CURRENT_PAGE,
  GET_GAME_BY_ID,
  GET_GAMES_BY_NAME,
  ORDER_GAMES,
  FILTER_BY_GEN,
  FILTER_BY_ORG,
  ADD_GAME,
} from "./action-types";
import axios from "axios";
const endpoint = "http://localhost:3001/videogames";

export const gamesList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      if (!response.data) throw Error("No se hizo la peticion");

      const result = response.data;
      return dispatch({
        type: GETALLGAMES,
        payload: result,
      });
    } catch (error) {
     windows.alert(error.message);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/genres`);
      if (!response) throw Error("No se trajeron los generos");
      const result = response.data.map((genre) => {
        return { id: genre.id, name: genre.name };
      });

      return dispatch({
        type: GETALLGENRES,
        payload: result,
      });
    } catch (error) {
      windows.alert(error.message)
    }
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/platforms`);
      if (!response) Window.alert("No se trajeron las plataformas");
      console.log(response);
      const result = response.data.map((plat) => {
        return { id: plat.id, name: plat.name };
      });

      return dispatch({
        type: GETALLPLATFORMS,
        payload: result,
      });
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const addNewGame = (game) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, game);
      console.log(response);
      if (!response) throw Error("no se hizo el post");
      return dispatch({
        type: ADD_GAME,
        payload: response.data,
      });
    } catch (error) {
      window.alert(error.message)
    }
  };
};
export const setcurrentPage = (numPage) => {
  return (dispatch) => {
    return dispatch({ type: SET_CURRENT_PAGE, payload: numPage });
  };
};

export const detailPage = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/${id}`);

      if (!response.data) throw Error("No se hizo la peticion");
      return dispatch({
        type: GET_GAME_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}/?name=${name}`);
      return dispatch({
        type: GET_GAMES_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      windows.alert(error.message);
    }
  };
};

export const orderGames = (order) => {
  return {
    type: ORDER_GAMES,
    payload: order,
  };
};

export const filterGames = (genre) => {
  return {
    type: FILTER_BY_GEN,
    payload: genre,
  };
};

export const filterGamesOrg = (typeOfId) => {
  return {
    type: FILTER_BY_ORG,
    payload: typeOfId,
  };
};
