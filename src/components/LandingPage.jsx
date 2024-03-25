import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 font-founders">
      <div className="textstructure px-14 py-40">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, idx) => {
          return (
            <div className="masker">
              <h1 className="text-[8.5vw] font-bold leading-[6.5vw]">
                {idx === 1 && (
                  <motion.div initial={{width:0}} animate={{width: "8.5vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1, delay: 0.5 }} className="w-[8.5vw] h-[5.3vw] rounded-lg mr-2 inline-block bg-red-500 overflow-hidden">
                    <img
                      className="h-full w-full"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    />
                  </motion.div>
                )}
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 -mt-[1vw] font-nueue flex justify-between items-center px-14">
        {
          ["For public and private companies", " From the first pitch to IPO"].map((item, idx) => {
            return <p className="mt-4 text-md text-zinc-200 font-light">{item}</p>
          })
        }
        <div className="flex items-center gap-2">
          <button className="px-4 py-[0.3vw] border-[2px] font-light text-sm border-zinc-700 rounded-full mt-4">START THE PROJECT</button>
          <span className="rounded-full border-[1px] mt-4 border-zinc-700 rotate-45 p-2 flex items-center justify-center"><FaArrowUpLong /></span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
