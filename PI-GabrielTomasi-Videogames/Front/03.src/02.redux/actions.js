import { GETALLGAMES } from "./action-types";
import axios from "axios";

export const gamesList = () => {
  const endpoint = "http://localhost:3001/videogames/";
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
