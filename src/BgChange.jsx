import React, { useState } from "react";

const BgChange = ({ bg, b, t, tt }) => {
  let [mode, setmode] = useState(false);

  const change = () => {
    setmode(mode ? false : true);
    console.log(mode);
    if (!mode) {
      document.getElementById("main").style.backgroundColor = bg;
      document.getElementById("text").style.color = tt;
    } else {
      document.getElementById("main").style.backgroundColor = b;
      document.getElementById("text").style.color = t;
    }
  };

  return (
    <div>
      <div className="w-1/4 h-screen m-auto p-10">
        <div
          id="main"
          className="border-2 bg-red-600 border-red-600 text-center rounded-lg p-1"
        >
          <h1 className="text-white" id="text">
            Hello
          </h1>
          <div className="my-3 w-full flex justify-around">
            <button
              onClick={() => change()}
              className="text-white bg-red-800 rounded-lg px-6 py-2"
            >
              Dark
            </button>
            {/* <button className="text-white bg-red-800 rounded-lg px-6 py-2">Light</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgChange;
