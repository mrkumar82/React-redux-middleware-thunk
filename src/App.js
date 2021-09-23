import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action/action";
import Posts from "./component/Posts/Posts";

export default function App() {
  const counts = useSelector((state) => state);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(1));
  };
  const decrementHandler = () => {
    dispatch(decrement(1));
  };
  return (
    <div className="App">
      <h1>Counter {counts.counterReducer}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>

      <Posts />
    </div>
  );
}
