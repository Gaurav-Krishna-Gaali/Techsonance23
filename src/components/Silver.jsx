import React from "react";
import toshiba from "../assets/imp/toshiba.png";
import genco from "../assets/sponsers/tsgenco.png";
import transco from "../assets/sponsers/transco.png";
import powergrid from "../assets/imp/powergrid.png";
import ibi from "../assets/imp/ibi.png";
import Other from "./Other";

const Silver = () => {
  return (
    <div className="bg-black -mt-10">
      <h2 class="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 font-bold text-center text-5xl">
        Silver Sponsors
      </h2>

      <div class="cards-list  flex  pt-10 pb-[150px]">
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://www.ntpc.co.in/", "_blank")}
          >
            <img src={toshiba} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() =>
              window.open(
                "https://www.tsgenco.co.in/home.do;jsessionid=538B1EB0834F139F4815A89C13260C55",
                "_blank"
              )
            }
          >
            <img src={genco} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://tstransco.in/", "_blank")}
          >
            <img src={transco} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://www.powergrid.in/", "_blank")}
          >
            <img src={powergrid} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://www.ibigroup.com/", "_blank")}
          >
            <img src={ibi} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
      </div>
      <Other />
    </div>
  );
};

export default Silver;
