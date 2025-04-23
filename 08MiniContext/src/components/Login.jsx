import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); //got access from UserContext to setUser function
  // const {user, setUser} = useContext(UserContext)  //got access from UserContext to setUser function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUser({ username, password }); //setting username and password in the user
      setUsername("");
      setPassword("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 gap-5 p-5 m-3 width-1/2">
      <h2 className="text-bold text-2xl">Login</h2>
      <input
        type="text"
        className="border-2 border-black rounded-md p-2 bg-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {"   "}
      <input
        type="text"
        className="border-2 border-black rounded-md p-2 bg-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="outline-none bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-2xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
