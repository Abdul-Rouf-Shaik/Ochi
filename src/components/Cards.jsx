import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen px-14 pt-10 flex items-center gap-5 text-founders">
      <div className="card-container w-1/2 h-[50%]">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#004D43]">
            <img className="w-32 " src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute top-[83%] left-10 rounded-[50px] px-4 py-1 border-[2px] font-semibold border-[#73A658] text-[1.1vw] text-[#73A658]">&copy; 2019-2022</button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50%] flex gap-5">
        <div className="relative card w-1/2 h-full rounded-xl bg-[#212121]">
        <img className="w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className="absolute top-[83%] left-5 rounded-[50px] px-4 py-1 border-[2px] font-semibold border-zinc-200 text-[1.1vw] text-zinc-200">RATING5.0 ON CLUTCH</button>
        </div>
        <div className="relative card w-1/2 h-full rounded-xl bg-[#212121]">
        <img className="w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="absolute top-[83%] left-5 rounded-[50px] px-4 py-1 border-[2px] font-semibold border-zinc-200 text-[1.1vw] text-zinc-200">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
