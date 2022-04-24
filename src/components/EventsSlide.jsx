import React from "react";
import Marquee from "react-fast-marquee";
import art from "../assets/non-tech/art.png";
import capture from "../assets/non-tech/capture.png";
import chessy from "../assets/non-tech/chessy.png";
import meme from "../assets/non-tech/meme.png";
import org from "../assets/non-tech/org.png";
// import org from "../assets/non-tech/org.png";
import nontech from "../assets/non-tech/nontech.png";
import tech from "../assets/tech/tech.png";

const EventsSlide = () => {
  return (
    <div className=" bg-black color-white">
      <h1 className="md:text-center  text-white text-center font-headingext-white text-4xl mr-5 mb-8 md:mb-14 flex justify-center item-center lg:text-6xl 2xl:text-7xl  font-bold ">
        Events under Techsonance 2️⃣0️⃣2️⃣2️⃣
      </h1>

      <div
        className="lg:flex items-center p-10 md:justify-center  md:items-center text-center justify-center md:flex-column lg:p-10 md:block md:p-2"
        onClick={() => window.open("events", "_blank")}
      >
        <img
          src={tech}
          alt=""
          className="md:w-[50%] shadow-lg shadow-white/70 "
        />
        <img
          src={nontech}
          alt=""
          className="md:w-[50%] shadow-lg shadow-white/70   "
        />
      </div>
    </div>
  );
};

export default EventsSlide;
