import React from "react";
import { calcLength, motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.0001" className="bg-[#004D43] rounded-tl-2xl rounded-tr-2xl w-full py-28 font-founders">
      <div className="border-y border-zinc-500 w-full flex overflow-hidden whitespace-nowrap pb-10">
        <h1 className="text-[27vw] font-semi-bold leading-[16.5vw] mr-24 inline-block anime">
          WE ARE OCHI
        </h1>
        <h1 className="text-[27vw] font-semi-bold leading-[16.5vw] mr-24 inline-block anime">
          WE ARE OCHI
        </h1>
        <h1 className="text-[27vw] font-semi-bold leading-[16.5vw] mr-24 inline-block anime">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
