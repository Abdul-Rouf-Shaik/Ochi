import React, { useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useState(() => {
    window.addEventListener("mousemove", (dets) => {
      let mouseX = dets.clientX;
      let mouseY = dets.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-[100vh]  bg-[#E9E9E9]">
      <div  className=' relative h-[100%] w-[100%] bg-cover bg-top bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex justify-center items-center h-[27vh] w-[27vh] bg-zinc-100 rounded-full">
            <div className="relative h-10 w-full flex justify-center items-center z-20">
                PLAY
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="flex  -z-10 items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[16vh] w-[16vh] font-semibold bg-zinc-900 rounded-full"
            >
              <div className="absolute top-[50%] left-0 -translate-y-[50%] w-[2.5vh] h-[2.5vh] rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-[27vh] w-[27vh] bg-zinc-100 rounded-full">
            <div className="relative h-10 w-full flex justify-center items-center z-20">
                PLAY
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="flex  -z-10 items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[16vh] w-[16vh] font-semibold bg-zinc-900 rounded-full"
            >
              <div className="absolute top-[50%] left-0 -translate-y-[50%] w-[2.5vh] h-[2.5vh] rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
