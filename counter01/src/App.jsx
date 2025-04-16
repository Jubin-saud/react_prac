import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(1);

  // let counter = 1;

  const addValue = () => {
    if (counter >= 20) {
      console.log("upper limit 20 reached");
      return;
    }
    counter = counter + 1;
    console.log(counter);
    setCount(counter);
  };
  const subValue = () => {
    if (counter <= 0) {
      console.log("lower limit 0 reached");

      return;
    }
    counter = counter - 1;
    console.log(counter);
    setCount(counter);
  };

  return (
    <>
      <h1>Jubin</h1>
      <h1>COUNTER: {counter}</h1>

      <button onClick={addValue} style={{ padding: "10px" }}>
        Add value
      </button>
      <br />
      <button onClick={subValue} style={{ padding: "10px", margin: "10px" }}>
        Sub value
      </button>
    </>
  );
}

export default App;
