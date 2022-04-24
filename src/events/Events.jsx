import React from "react";
// TECH
import biz from "../assets/tech/biztech.png";
import brainpop from "../assets/tech/brainpop.png";
import circuitrix from "../assets/tech/circuitrix.png";
import identikit from "../assets/tech/identikit.png";
import invent from "../assets/tech/inventex.png";
import pano from "../assets/tech/panopoly.png";
import paper from "../assets/tech/paper.png";
import code from "../assets/tech/code.png";
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
      <h2 className="text-center font-bold text-4xl text-white mt-10 m-10">
        NON-TECHNICAL EVENTS 📸🎨✨
      </h2>

      <img
        src={capture}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white  flex justify-center items-center lg:w-[60%]"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSegYtWOtLfySlX8v3B6Dq2_w5Q4maLgJDhZpwGUlSkEGzbhxQ/viewform?usp=sf_link",
            "_blank"
          )
        }
      />
      <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2 flex flex-col  justify-center items-center grid-rows-2 grid-flow-col gap-8">
        <img
          src={art}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSe-AFmBAhLPTbRx6cJyY-27RIUBARGCJZ7xwi9rSX2DoSE_ig/viewform?usp=sf_link",
              "_blank"
            )
          }
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
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeqD44cnK1Eyu3W8mx6afMygqdgKraORqvixs-DW-D9_zoQ2w/viewform?usp=sf_link",
              "_blank"
            )
          }
        />
        <img
          src={org}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        />
      </div>
      <h2 className="text-center font-bold text-4xl text-white mt-10 -m-10">
        TECHNICAL EVENTS🧑‍💻👩‍💻
      </h2>
      <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2  flex flex-col  justify-center items-center grid-rows-4 grid-flow-col gap-8">
        <img
          src={code}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSf0rd6qe59IZmtVtJeYdUhmNZFskR-ahkvz31aEW63U5kgprg/viewform",
              "_blank"
            )
          }
        />
        <img
          src={biz}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open("https://forms.gle/kWLVNx8iXZjVHkgE7", "_blank")
          }
        />
        <img
          src={brainpop}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScMsh9e6mAtx5Ubi7duf9IeN0HWawd3D7x24W70dQ-NoCkQLA/viewform?usp=pp_url",
              "_blank"
            )
          }
        />
        <img
          src={circuitrix}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open("https://forms.gle/sDCxwemoBtmXETME9", "_blank")
          }
        />
        <img
          src={identikit}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfnXMRlq02a0UaXGFLxWXpyyG-VI5AgSnCWDpMfzlQQeq0eyQ/viewform?usp=sf_link",
              "_blank"
            )
          }
        />
        <img
          src={invent}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSd5ixEdd44bRCOrRHMcUHR_2K1Ia7ri9w6Ju4inRu9PmEkdvw/viewform?usp=sf_link",
              "__blank"
            );
          }}
        />
        <img
          src={pano}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open("https://forms.gle/rCTF2JzxtzZ5S6VR6", "_blank")
          }
        />
        <img
          src={paper}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open("https://forms.gle/DBF1ZGHu6BMADYGt8", "_blank")
          }
        />
      </div>

      {/* <img
        src={paper}
        alt=""
        className="  shadow-cyan-500/80 shadow-lg border-2 border-white mb-[100px] lg:w-2/5 "
        onClick={() =>
          window.open("https://forms.gle/DBF1ZGHu6BMADYGt8", "_blank")
        }
      /> */}
    </div>
  );
};

export default Events;
