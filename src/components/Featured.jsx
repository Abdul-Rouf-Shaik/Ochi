import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import React, { useRef } from "react";

function Featured() {
  const img1 = useRef();
  const img2 = useRef();
  const div1 = useRef();
  const div2 = useRef();
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (idx) => {
    cards[idx].start({ y: "0" });
    if (idx == 0) {
      gsap.to(img1.current, {
        scale: 1.2,
      });
      gsap.to(div1.current, {
        scale: 0.95,
      });
    } else {
      gsap.to(img2.current, {
        scale: 1.2,
      });
      gsap.to(div2.current, {
        scale: 0.95,
      });
    }
  };

  const handleHoverEnd = (idx) => {
    cards[idx].start({ y: "100%" });
    if (idx == 0) {
      gsap.to(img1.current, {
        scale: 1,
      });
      gsap.to(div1.current, {
        scale: 1,
      });
    } else {
      gsap.to(img2.current, {
        scale: 1,
      });
      gsap.to(div2.current, {
        scale: 1,
      });
    }
  };

  return (
    <div className="relative z-[55] px-14 w-full py-20 bg-zinc-900">
      <div className="py-14 border-b-[1px] border-zinc-700">
        <h1 className="text-[4vw]">Featured projects</h1>
      </div>
      <div className="cards w-full flex gap-10 font-founders pt-20">
        <motion.div
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleHoverEnd(0)}
          className="relative card-container w-1/2 h-[75vh]"
        >
          <h1 className="flex overflow-hidden absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-[5] text-9xl font-bold text-[#CEEB6D]">
            {"FYDE".split("").map((el, idx) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.76, 0, 0.24, 1], delay: idx * 0.05 }}
                className="text-[#CEEB6D] inline-block"
              >
                {el}
              </motion.span>
            ))}
          </h1>
          <div
            ref={div1}
            className="card w-full h-full rounded-xl overflow-hidden"
          >
            <img
              ref={img1}
              className="w-full h-full object-cover object-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHoverEnd(1)}
          className="relative card-container w-1/2 h-[75vh]"
        >
          <h1 className="flex overflow-hidden absolute top-1/2 left-right -translate-x-1/2 -translate-y-1/2 z-[5] text-9xl font-bold text-[#CEEB6D]">
            {"TRAWA".split("").map((el, idx) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.76, 0, 0.24, 1], delay: idx * 0.05 }}
                className="text-[#CEEB6D] inline-block"
              >
                {el}
              </motion.span>
            ))}
          </h1>
          <div
            ref={div2}
            className="card w-full h-full rounded-xl overflow-hidden"
          >
            <img
              ref={img2}
              className="w-full h-full object-cover object-center"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
