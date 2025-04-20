import { useState, useCallback, useEffect , useRef} from "react";

function App() {
  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  let [char, setChar] = useState(false);
  let [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, number, char, setPassword]);

  const copypasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  


  useEffect(()=> passwordGenerator(), [length, number, char,passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto top-50 shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white font-bold text-2xl m-3">
        Password Geneator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-4 bg-amber-50 m-5 rounded-md"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-amber-500 text-white px-4 py-4 rounded-md shrink-0 hover:bg-amber-600"
          onClick={copypasswordtoClipboard}
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 mt-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={40}
            value={length}
            className="cursor-pointer border-r-blue-600"
            onChange={(e) => setLength(e.target.value)}
          />
          <label> Length({length})</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberinput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput">numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="charinput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="charinput">symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
