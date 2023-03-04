import React from "react";
import nontech from "../assets/non-tech/nontech.png";
import tech from "../assets/tech/tech.png";
import code from "../assets/tech/code.png";

const EventsSlide = () => {
  return (
    <div className=" bg-black color-white flex justify-center item-center flex-col">
      <h1 className="md:text-center  text-white text-center font-headingext-white text-4xl mr-5 mb-8 md:mb-14 flex justify-center item-center lg:text-6xl 2xl:text-7xl  font-bold ">
        Previous Events under Techsonance 2️⃣0️⃣2️⃣2️⃣
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
      <div className="">
        <h2 className="text-white text-4xl font-bold text-center mt-20">
          Hackathon 🦸💻🦸‍♀️
        </h2>
        <div className="flex justify-center item-center">
          <img
            src={code}
            alt=""
            className="lg:w-[50%] mt-10 w-[85%] justify-center item-center shadow-lg shadow-blue-700/70"
            onClick={() =>
              window.open("https://forms.gle/mY5zUS9GmsYfQDHx9", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EventsSlide;
