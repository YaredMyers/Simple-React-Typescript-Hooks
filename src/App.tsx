import Counter from "./components/Counter";
import User from "./components/User";
import TimerPadre from "./components/TimerPadre";
import RedCounter from "./components/RedCounter";
import Form from "./components/Form";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <h2>useReducer</h2>
      <hr />
      <RedCounter />
      <h2>customHooks</h2>
      <hr />
      <Form />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
