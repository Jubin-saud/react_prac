import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white shadow-lime-200 gap-3.5 px-3 py-2 rounded-3xl">
            <button
              className="outline-none bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("lime")}
            >
              lime
            </button>

            <button
              className="outline-none bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("red")}
            >
              red
            </button>

            <button
              className="outline-none bg-black hover:bg-black-600 text-white font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("black")}
            >
              black
            </button>

            <button
              className="outline-none bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("blue")}
            >
              blue
            </button>

            <button
              className="outline-none bg-emerald-400 hover:bg-emerald-600 text-black font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("#059669")}
            >
              emerald
            </button>

            <button
              className="outline-none bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("yellow")}
            >
              yellow
            </button>

            <button
              className="outline-none bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("orange")}
            >
              orange
            </button>

            <button
              className="outline-black bg-white hover:bg-white text-black font-bold py-2 px-4 rounded-full shadow-2xl"
              onClick={() => setBgColor("white")}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
