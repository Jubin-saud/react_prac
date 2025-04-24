import { useState } from "react";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-300 items-center justify-center p-5 m-5 rounded-lg">
        <h1>TODO using Redux-Toolkit</h1>
        <Addtodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
