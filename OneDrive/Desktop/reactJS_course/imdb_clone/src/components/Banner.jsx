import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh]  md:h-[74vh]  bg-cover bg-center flex items-end"
      style={{ backgroundImage: "url(https://i.redd.it/j4wcg4f9ne6b1.jpg)" }}
    >
      <div className="text-xl text-center w-full bg-purple-900/40 p-2">Marvel</div>

    </div>
  );
}

export default Banner;
