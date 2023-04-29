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
// FUN_EVENTS
import snap from "../assets/fun/snap.jpg";
import memes from "../assets/fun/meme.jpg";
import paint from "../assets/fun/paint.jpg";
import reel from "../assets/fun/reel.jpg";

const Events = () => (
  <div className="bg-black p-5 pb-20 flex justify-center items-center flex-col">
    <h1 className="text-center font-bold text-4xl text-white p-10">
      TECHSONANCE 2023 EXCLUSIVE EVENTS🏫🎓
      <h2 className="text-white text-2xl">
        Click on the event posters to register.
      </h2>
    </h1>{" "}
    <h2 className="text-center font-bold text-4xl text-white  mt-10 m-10">
      WORKSHOP🤖🔧
    </h2>
    <img
      src={capture}
      alt=""
      className="shadow-cyan-500/80 shadow-lg border-2 h border-white  flex justify-center items-center lg:w-[60%]"
      onClick={() =>
        window.open(" https://forms.gle/zyVgn6wXjyihwWG78", "_blank")
      }
    />
    <h2 className="text-center font-bold text-4xl text-white mt-10 -m-10">
      TECHNICAL EVENTS🧑‍💻👩‍💻
    </h2>
    <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2  flex flex-col  justify-center items-center grid-rows-4 grid-flow-col gap-8">
      <img
        src={code}
        alt=" "
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/b5PkKZ5gXj7A6m2A7", "_blank")
        }
      />
      <img
        src={biz}
        alt=" "
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/dx1mp6k65xFKFCEF9", "_blank")
        }
      />
      <img
        src={brainpop}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/DPowp2rPBQZQuMzx8", "_blank")
        }
      />

      <img
        src={identikit}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/XBqmbLL9kzCNcLi77", "_blank")
        }
      />
      <img
        src={invent}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() => {
          window.open("https://forms.gle/hF1hUmJpP1n19NU29", "__blank");
        }}
      />
      <img
        src={pano}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open(
            "https://forms.gle/YWPADBrRu4CdsqQ4A            ",
            "_blank"
          )
        }
      />
      <img
        src={paper}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/V8jiuNY8iTNFHXb16", "_blank")
        }
      />
    </div>
    <h2 className="text-center font-bold text-4xl text-white mt-10 m-10">
      NON-TECHNICAL EVENTS 📸🎨✨
    </h2>
    <div className="lg:w-[50%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2 flex flex-col  justify-center items-center grid-rows-2 grid-flow-col gap-8">
      <div className="">
        <img
          src={art}
          alt=" "
          className="shadow-cyan-500/80 shadow-lg border-2 border-white  "
          onClick={() =>
            window.open("https://forms.gle/KoXitmM1QqxHsvn98", "_blank")
          }
        />
        <img
          src={meme}
          alt=""
          className="shadow-cyan-500/80 shadow-lg border-2 border-white "
          onClick={() =>
            window.open("https://forms.gle/1jc3BNEzmZKqEqaL7", "_blank")
          }
        />
        <img src="" alt="" />
      </div>
    </div>
    <h2 className="text-center font-bold text-4xl text-white mt-10 m-10 ">
      Fun Events 🎨🎞️🎲
    </h2>
    <div className="lg:w-[80%] md:flex-col mt-10 p-10  lg:grid md:gap-col-2 flex flex-col  justify-center items-center grid-rows-2 grid-flow-col gap-8">
      <img
        src={snap}
        alt=" "
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/KoXitmM1QqxHsvn98", "_blank")
        }
      />
      <img
        src={paint}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
      />
      <img
        src={reel}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
        onClick={() =>
          window.open("https://forms.gle/1jc3BNEzmZKqEqaL7", "_blank")
        }
      />
      <img
        src={memes}
        alt=""
        className="shadow-cyan-500/80 shadow-lg border-2 border-white "
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

export default Events;
