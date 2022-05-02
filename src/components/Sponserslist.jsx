import React from "react";
import "./Try.css";
import ntpc from "../assets/imp/ntpc.png";

const Sponserslist = () => {
  return (
    <div className="bg-black -mt-10">
      <h2 class="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600 font-bold text-center text-5xl">
        Gold Sponsors
      </h2>

      <div class="cards-list  flex  pt-10 pb-[150px]">
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://www.ntpc.co.in/", "_blank")}
          >
            <img src={ntpc} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponserslist;
