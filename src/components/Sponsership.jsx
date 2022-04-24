import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/sponsers/mineral.png";
import img2 from "../assets/sponsers/indian oil.png";
import img3 from "../assets/sponsers/meil.png";
import img4 from "../assets/sponsers/nexgile.png";
import img5 from "../assets/sponsers/ntpc.png";
import img6 from "../assets/sponsers/railway.png";
import img7 from "../assets/sponsers/sealwell.png";
import img8 from "../assets/sponsers/singneri.png";
import img9 from "../assets/sponsers/solar.png";
import img10 from "../assets/sponsers/sp.png";
import img11 from "../assets/sponsers/spearon.jpeg";
import img12 from "../assets/sponsers/transco.png";
import img13 from "../assets/sponsers/transcon.png";
import img14 from "../assets/sponsers/tsgenco.png";
import img15 from "../assets/sponsers/tsnpdcl.png";
import prev from "../assets/prev.png";
const sponsership = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center ml-6 mr-6">
        <img src={prev} alt="Prev_sponsors" className=" m-8 " />
      </div>
      <div className="">
        <Marquee speed={120}>
          <div className="mr-30px ml-30px">
            <img src={img1} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img2} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img3} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img4} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img5} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img6} className="w-[80%]" alt="" />
          </div>
          <div className="mr-30px ml-30px">
            <img src={img7} className="w-[80%]" alt="" />
          </div>
        </Marquee>
      </div>
      <Marquee speed={120} className="mt-10 pb-5 " direction="right">
        <div className="mr-30px ml-30px">
          <img src={img8} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img9} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img10} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img11} className="w-[80%] " alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img12} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img13} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img14} className="w-[80%]" alt="" />
        </div>
        <div className="mr-30px ml-30px">
          <img src={img15} className="w-[80%]" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default sponsership;
