import { useReducer } from "react";

const initialState = {
  counter: 10,
};

type ActionType =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "custom";
      payload: number;
    };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "custom":
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

const RedCounter = () => {
  const [stateCounter, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>Counter: {stateCounter.counter}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className={"btn btn-outline-primary"}
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className={"btn btn-outline-primary"}
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: "custom", payload: 100 })}
        className={"btn btn-outline-danger"}
      >
        100
      </button>
    </>
  );
};

export default RedCounter;
