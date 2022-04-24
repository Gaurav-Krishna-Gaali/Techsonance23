import React from "react";
import "./Try.css";
import SBI from "../assets/imp/logo.png";

const Guests = () => {
  return (
    <div className="bg-black">
      <h2 class="text-white font-bold text-center text-5xl">
        ✨Platinum Sponsors ✨
      </h2>
      <h2 class="text-white font-bold text-center pt-5 text-xl">
        Click on the logo to go to the official site
      </h2>
      {/* <span class="text-white text-center ">
        Click on the card to go to the offical site
      </span> */}
      <div class="cards-list  flex  pt-20 pb-[150px]">
        <div className=""></div>
        <div class="card 1 ">
          <div
            class="card_image"
            onClick={() => window.open("https://meil.in/", "_blank")}
          >
            <img
              src="https://meil.in/assets/images/meil.svg"
              alt="meil"
              className="p-5"
            />
          </div>
          <div class="card_title title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 underline">meil</p> */}
          </div>
        </div>

        <div class="card 2">
          <div
            class="card_image"
            onClick={() =>
              window.open(
                "http://uceou.edu/electrical/electrical.html",
                "_blank"
              )
            }
          >
            <img src={SBI} className="p-10" alt="SBI" />
          </div>
          <div class="card_title text-xl title-white hover:text-blue-700 ">
            {/* <p className="text-xl pt-20 hover:text-blue-700 underline">SBI</p> */}
          </div>
        </div>

        {/* <div class="card 3">
        <div class="card_image">
          <img src="https://th.bing.com/th/id/R.46a71fab15fea178dc9c6f6baf69167d?rik=ulNpIqcetz3e6w&riu=http%3a%2f%2f25.media.tumblr.com%2ftumblr_m9ogt65l771r0rljlo1_1280.jpg&ehk=Xv69ZN6eRC%2bNz0WX3TDIHjSfsCY%2bHRdOBgJGZjzoHNg%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <div class="card_title">
          <p>Card Title</p>
        </div>
      </div> */}

        {/* <div class="card 4">
        <div class="card_image">
          <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
        </div>
        <div class="card_title title-black">
          <p>Card Title</p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Guests;
