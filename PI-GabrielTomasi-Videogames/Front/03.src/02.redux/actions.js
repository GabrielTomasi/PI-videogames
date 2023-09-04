import { GETALLGAMES, SET_CURRENT_PAGE, GET_GAME_BY_ID } from "./action-types";
import axios from "axios";
const endpoint = "http://localhost:3001/videogames/";

export const gamesList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      if (!response.data) throw Error("No se hizo la peticion");
      console.log(response.data);
      const result = response.data;
      return dispatch({
        type: GETALLGAMES,
        payload: result,
      });
    } catch (error) {
        console.log(error.message);
    }
  };
};

export const setcurrentPage = (numPage)=>{
  return (dispatch)=>{

    return dispatch ({type:SET_CURRENT_PAGE, payload: numPage})
  }
}

export const detailPage = (id)=>{
 return async (dispatch)=>{
  try {
    const response = axios.get(`${endpoint}/:${id}`)
    if (!response.data) throw Error("No se hizo la peticion");
    return dispatch({
      type: GETALLGAMES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
 }
}