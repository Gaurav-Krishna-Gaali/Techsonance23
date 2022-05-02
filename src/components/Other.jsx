import React from "react";
import nmdc from "../assets/imp/nmdc.png";
import deccan from "../assets/imp/deccan.png";
import gloster from "../assets/imp/gloster.png";
import uses from "../assets/imp/uses.png";

const Other = () => {
  return (
    <div className="bg-black -mt-10">
      <h2 class="text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-500 font-bold text-center text-5xl">
        Other Sponsors
      </h2>

      <div class="cards-list  flex  pt-10 pb-[150px]">
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://www.nmdc.co.in/", "_blank")}
          >
            <img src={nmdc} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>

        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() =>
              window.open("https://deccanelectrical.in/", "_blank")
            }
          >
            <img src={deccan} alt="meil" className="p-5" />
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
                "http://uceou.edu/electrical/electrical.html",
                "_blank"
              )
            }
          >
            <img src={uses} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() =>
              window.open("http://www.glostercable.com/", "_blank")
            }
          >
            <img src={gloster} alt="meil" className="p-5" />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
