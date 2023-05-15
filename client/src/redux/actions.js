import axios from "axios";
import { GET_DETAIL } from "./action-type";

const getDetailMovie = ({ payload }) => {
  return async function (dispatch) {
    try {
      let movies = await axios.get(`http://localhost:3001/movies`);
      let data = movies.data;
      return dispatch({
        type: GET_DETAIL,
        payload: payload,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export default getDetailMovie;
