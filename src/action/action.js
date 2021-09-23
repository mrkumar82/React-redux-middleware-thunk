import axios from "axios";

export const increment = (count) => {
  return {
    type: "INCREMENT",
    payload: count
  };
};

export const decrement = (count) => {
  return {
    type: "DECREMENT",
    payload: count
  };
};

export const addPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_POSTS" });
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: "FETCH_POSTS_SUCCESS",
        payload: resp.data
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "FETCH_POSTS_FAIL",
        payload: err.message
      });
    }
  };
};
