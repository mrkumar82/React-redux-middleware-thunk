const initialState = {
  items: [],
  loading: false,
  error: ""
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        items: [],
        loading: true,
        error: ""
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: ""
      };
    case "FETCH_POSTS_FAIL":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload
      };
    default:
      return state;
  }
};
