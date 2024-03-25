import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className="z-[55] relative w-full bg-[#CDEA68] rounded-2xl font-nueue">
      <h1 className="text-[7.6vh] leading-none py-20 px-14 pb-15 text-zinc-900">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full mt-20 flex border-t-[1px] border-t-[#a1b562] py-10 px-14 pb-15">
        <div className="text-zinc-900 w-1/2 flex flex-col gap-5 items-start">
          <h1 className="text-zinc-900 text-[7.6vh]">Our approach:</h1>
          <button className="px-8 py-4 flex justify-between items-center gap-8 rounded-full bg-zinc-900 text-white">
            READ MORE
            <div  className="rounded-[50%] h-[8px] w-[8px] bg-zinc-200"></div>
          </button>
        </div>
        <div className="w-1/2 rounded-xl overflow-hidden">
          <img
            className="w-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
