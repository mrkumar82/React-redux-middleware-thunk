import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducer/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postsReducer } from "./reducer/postReducer";

const rootReducer = combineReducers({
  counterReducer,
  postsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
