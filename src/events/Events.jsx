import React from "react";
// TECH
import biz from "../assets/tech/biztech.png";
import brainpop from "../assets/tech/brainpop.png";
import circuitrix from "../assets/tech/circuitrix.png";
import identikit from "../assets/tech/identikit.png";
import invent from "../assets/tech/inventex.png";
import pano from "../assets/tech/panopoly.png";
import paper from "../assets/tech/paper.png";
// NON_TECH
import art from "../assets/non-tech/art.png";
import capture from "../assets/non-tech/capture.png";
import chessy from "../assets/non-tech/chessy.png";
import meme from "../assets/non-tech/meme.png";
import org from "../assets/non-tech/org.png";

const Events = () => {
  return (
    <div className="bg-black p-5  flex justify-center items-center flex-col">
      <h1 className="text-center font-bold text-4xl text-white p-10">
        TECHSONANCE 2022 EXCLUSIVE EVENTS🏫🎓
        <h2 className="text-white text-2xl">
          Click on the event posters to register.
        </h2>
      </h1>
      <img
        src={capture}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white border-2 border-white flex justify-center items-center lg:w-[60%]"
      />
      <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2 flex flex-col  justify-center items-center grid-rows-2 grid-flow-col gap-8">
        <img
          src={art}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={console.log("HI prends")}
        />
        <img
          src={chessy}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={meme}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={org}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
      </div>
      <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2 flex flex-col  justify-center items-center grid-rows-3 grid-flow-col gap-8">
        <img
          src={biz}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={brainpop}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={circuitrix}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={identikit}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={invent}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
        <img
          src={pano}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
      </div>

      <img
        src={paper}
        alt=""
        className=" h-1/2 shadow-cyan-500/80 shadow-lg border-2 border-white mb-[100px]  w-1/3"
        onClick={() => window.open("https://www.google.com/", "_blank")}
      />
    </div>
  );
};

export default Events;
